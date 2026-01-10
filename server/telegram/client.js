import { TELEGRAM_BOT_TOKEN, TELEGRAM_CHANNEL_ID, TELEGRAM_DISCUSSION_GROUP_ID } from '../config/env.js';

if (!TELEGRAM_BOT_TOKEN) {
  throw new Error('TELEGRAM_BOT_TOKEN not found in .env');
}

if (!TELEGRAM_CHANNEL_ID) {
  throw new Error('TELEGRAM_CHANNEL_ID not found in .env');
}

const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

/**
 * Отправить сообщение в Telegram канал
 */
export async function sendMessage(text, options = {}) {
  const {
    parse_mode = 'HTML', // Используем HTML вместо MarkdownV2 - проще экранировать
    disable_web_page_preview = false,
    disable_notification = false
  } = options;

  try {
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHANNEL_ID,
        text,
        parse_mode,
        disable_web_page_preview,
        disable_notification,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Telegram API error: ${data.description || response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
}

/**
 * Проверить, существует ли сообщение в группе обсуждений
 * Пробуем отправить тестовый комментарий с reply для проверки
 */
async function checkMessageExists(chatId, messageId) {
  try {
    // Пробуем отправить тестовое сообщение с reply для проверки существования
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: 'test',
        reply_to_message_id: messageId
      }),
    });

    const data = await response.json();
    // Если получили ошибку "message to be replied not found", значит сообщение не существует
    if (!data.ok && data.description?.includes('message to be replied not found')) {
      return false;
    }
    // Если получили другую ошибку или успех, значит сообщение существует
    // Удаляем тестовое сообщение если оно было отправлено
    if (data.ok && data.result?.message_id) {
      try {
        await fetch(`${TELEGRAM_API_URL}/deleteMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId,
            message_id: data.result.message_id
          }),
        });
      } catch (e) {
        // Игнорируем ошибку удаления
      }
    }
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Отправить комментарий в группу обсуждений канала
 */
export async function sendComment(text, replyToMessageId, options = {}) {
  if (!TELEGRAM_DISCUSSION_GROUP_ID) {
    throw new Error('TELEGRAM_DISCUSSION_GROUP_ID not found in .env');
  }

  const {
    parse_mode = 'HTML',
    disable_web_page_preview = false,
    disable_notification = false
  } = options;

  try {
    const body = {
      chat_id: TELEGRAM_DISCUSSION_GROUP_ID,
      text,
      parse_mode,
      disable_web_page_preview,
      disable_notification,
    };
    
    // Добавляем reply_to_message_id только если он указан и сообщение существует
    if (replyToMessageId) {
      // Проверяем существование сообщения перед отправкой комментария
      const messageExists = await checkMessageExists(TELEGRAM_DISCUSSION_GROUP_ID, replyToMessageId);
      if (messageExists) {
        body.reply_to_message_id = replyToMessageId;
        console.log(`Using reply_to_message_id: ${replyToMessageId}`);
      } else {
        console.warn(`Message ${replyToMessageId} not found in discussion group, sending without reply`);
      }
    }

    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Telegram API error: ${data.description || response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('Error sending comment to Telegram:', error);
    throw error;
  }
}

/**
 * Получить последний offset для getUpdates
 */
async function getLastUpdateOffset() {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/getUpdates?limit=1`);
    const data = await response.json();
    
    if (data.ok && data.result && data.result.length > 0) {
      return data.result[0].update_id;
    }
    return 0;
  } catch (error) {
    console.warn('Error getting last update offset:', error);
    return 0;
  }
}

/**
 * Ожидать update с пересланным сообщением из канала в группу обсуждений
 * Использует polling getUpdates для получения нового сообщения
 */
async function waitForDiscussionUpdate(channelMessageId, timeoutMs = 30000) {
  const startTime = Date.now();
  let offset = await getLastUpdateOffset() + 1; // Начинаем со следующего update
  
  console.log(`Polling for discussion group update (starting from offset ${offset})...`);
  
  while (Date.now() - startTime < timeoutMs) {
    try {
      const response = await fetch(`${TELEGRAM_API_URL}/getUpdates?offset=${offset}&timeout=5`);
      const data = await response.json();
      
      if (data.ok && data.result && data.result.length > 0) {
        for (const update of data.result) {
          // Обновляем offset для следующего запроса
          offset = update.update_id + 1;
          
          // Ищем сообщение в группе обсуждений, пересланное из канала
          if (update.message && update.message.chat) {
            const chatId = update.message.chat.id.toString();
            const groupId = TELEGRAM_DISCUSSION_GROUP_ID.toString();
            
            if (chatId === groupId) {
              // Проверяем, что это пересланное сообщение из канала
              const forwardFromChatId = update.message.forward_from_chat?.id?.toString();
              const forwardFromMessageId = update.message.forward_from_message_id;
              const channelId = TELEGRAM_CHANNEL_ID.toString().replace('@', '');
              
              console.log(`Found message in group: ${update.message.message_id}, forward_from: ${forwardFromChatId}, forward_message_id: ${forwardFromMessageId}, date: ${update.message.date}, text: ${update.message.text?.substring(0, 50)}...`);
              
              // Если это автоматически пересланное сообщение из нашего канала
              if (forwardFromMessageId === channelMessageId || 
                  (forwardFromChatId && forwardFromChatId.includes(channelId))) {
                console.log(`✓ Found discussion message: ${update.message.message_id} (channel: ${channelMessageId})`);
                return update.message.message_id;
              }
              
              // Если это просто новое сообщение в группе (без forward), но появилось сразу после публикации
              // Это может быть автоматически созданное сообщение
              const messageAge = Math.floor(Date.now() / 1000) - update.message.date;
              if (messageAge < 10) {
                console.log(`✓ Using recent message in group: ${update.message.message_id} (channel: ${channelMessageId})`);
                return update.message.message_id;
              }
            }
          }
        }
      }
      
      // Небольшая задержка перед следующим запросом
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.warn('Error polling for updates:', error);
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  console.warn(`Timeout waiting for discussion group update (${timeoutMs}ms)`);
  return null;
}

/**
 * Получить message_id сообщения в группе обсуждений по message_id из канала
 * 
 * ВАЖНО: Для работы этой функции бот должен:
 * 1. Быть добавлен в группу обсуждений
 * 2. Иметь права администратора с "Read messages"
 * 3. Иметь выключенный Privacy Mode (команда /setprivacy через @BotFather → Disable)
 */
export async function getDiscussionMessageId(channelMessageId, channelMessageText, channelMessageDate) {
  if (!TELEGRAM_DISCUSSION_GROUP_ID) {
    console.warn('TELEGRAM_DISCUSSION_GROUP_ID not set');
    return null;
  }
  
  // Проверяем, что бот может получить информацию о группе
  try {
    const chatResponse = await fetch(`${TELEGRAM_API_URL}/getChat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_DISCUSSION_GROUP_ID
      }),
    });
    
    const chatData = await chatResponse.json();
    if (!chatData.ok) {
      console.error(`Cannot access discussion group: ${chatData.description}`);
      return null;
    }
    
    console.log(`Discussion group accessible: ${chatData.result.title || chatData.result.id}`);
    
    // Проверяем, что бот является участником группы
    const botResponse = await fetch(`${TELEGRAM_API_URL}/getChatMember`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_DISCUSSION_GROUP_ID,
        user_id: (await fetch(`${TELEGRAM_API_URL}/getMe`).then(r => r.json())).result.id
      }),
    });
    
    const botData = await botResponse.json();
    if (botData.ok) {
      console.log(`Bot status in group: ${botData.result.status}`);
      if (botData.result.status === 'left' || botData.result.status === 'kicked') {
        console.error('Bot is not a member of the discussion group!');
        return null;
      }
    }
  } catch (error) {
    console.error('Error checking discussion group:', error);
    return null;
  }
  
  // Для правильно настроенных каналов с discussion group message_id совпадает
  // Ждём 3 секунды, чтобы Telegram создал сообщение в группе
  console.log('Waiting 3s for Telegram to create message in discussion group...');
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  // Проверяем, что сообщение с тем же ID существует в группе
  console.log(`Checking if message ${channelMessageId} exists in discussion group...`);
  const messageExists = await checkMessageExists(TELEGRAM_DISCUSSION_GROUP_ID, channelMessageId);
  if (messageExists) {
    console.log(`✓ Message ${channelMessageId} exists in discussion group`);
    return channelMessageId;
  }
  
  // Если не получилось с тем же ID, пробуем polling (требует прав админа)
  console.log('Attempting to get discussion message via polling...');
  const discussionMessageId = await waitForDiscussionUpdate(channelMessageId, 15000);
  
  if (discussionMessageId) {
    return discussionMessageId;
  }
  
  console.error(`✗ Message ${channelMessageId} not found in discussion group`);
  console.warn('⚠️  Make sure bot has admin rights in discussion group');
  return null;
}

/**
 * Проверить, что бот работает
 */
export async function testBot() {
  try {
    const response = await fetch(`${TELEGRAM_API_URL}/getMe`);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(`Telegram API error: ${data.description || response.statusText}`);
    }
    
    return data;
  } catch (error) {
    console.error('Error testing Telegram bot:', error);
    throw error;
  }
}
