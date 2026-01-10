import { getAllTopics, getTopicById } from '../services/topics.js';
import { loadState, saveState } from '../services/telegram/state.js';
import { formatArticleForTelegram, formatExampleForComment } from './formatArticle.js';
import { sendMessage, sendComment, getDiscussionMessageId } from './client.js';
import { addLogEntry } from './postingLog.js';
import { FRONTEND_BASE_URL } from '../config/env.js';

/**
 * Выбрать случайную неопубликованную тему
 */
function getRandomUnpostedTopic(allTopics, postedIds) {
  const unpostedTopics = allTopics.filter(topic => !postedIds.includes(topic.id));
  
  if (unpostedTopics.length === 0) {
    return null;
  }
  
  const randomIndex = Math.floor(Math.random() * unpostedTopics.length);
  return unpostedTopics[randomIndex];
}

/**
 * Отправить случайную статью в Telegram канал
 */
export async function postRandomTopic() {
  try {
    console.log('Starting MVP posting: selecting random topic...');
    
    // Загружаем все темы и состояние
    const allTopics = getAllTopics();
    const state = await loadState();
    
    // Если все темы опубликованы, сбрасываем
    if (state.posted.length >= allTopics.length) {
      console.log('All topics have been posted. Resetting to start.');
      state.posted = [];
      await saveState(state);
    }
    
    // Выбираем случайную неопубликованную тему
    const topic = getRandomUnpostedTopic(allTopics, state.posted);
    
    if (!topic) {
      const error = 'No unposted topics available';
      console.log(error);
      await addLogEntry({
        topicId: null,
        status: 'error',
        error
      });
      return {
        success: false,
        error,
        posted: []
      };
    }
    
    console.log(`Posting topic: ${topic.id} - ${topic.title}`);
    
    // Форматируем статью
    const formatted = formatArticleForTelegram(topic, FRONTEND_BASE_URL);
    
    // Отправляем основной пост
    const telegramResponse = await sendMessage(formatted.text);
    const messageId = telegramResponse?.result?.message_id || null;
    const messageDate = telegramResponse?.result?.date || Math.floor(Date.now() / 1000);
    
    // Если есть примеры, отправляем их ВСЕ в комментарии
    if (formatted.examples && formatted.examples.length > 0) {
      console.log(`Sending ${formatted.examples.length} examples as comments...`);
      
      // Получаем message_id в группе обсуждений
      const discussionMessageId = await getDiscussionMessageId(messageId, formatted.text, messageDate);
      
      if (!discussionMessageId) {
        console.warn('Could not get discussion message ID, skipping comments');
      } else {
        // Отправляем все примеры как комментарии
        for (let i = 0; i < formatted.examples.length; i++) {
          try {
            const example = formatted.examples[i];
            const exampleText = formatExampleForComment(example, FRONTEND_BASE_URL);
            await sendComment(exampleText, discussionMessageId);
            console.log(`✓ Sent example ${i + 1}/${formatted.examples.length}`);
            // Задержка между комментариями
            await new Promise(resolve => setTimeout(resolve, 1000));
          } catch (error) {
            console.error(`Error sending example ${i + 1}:`, error);
          }
        }
      }
    }
    
    // Сохраняем в состояние
    state.posted.push(topic.id);
    state.lastPostDate = new Date().toISOString().split('T')[0];
    await saveState(state);
    
    // Записываем в журнал
    await addLogEntry({
      topicId: topic.id,
      status: 'success',
      messageId
    });
    
    console.log(`Successfully posted: ${topic.id} (messageId: ${messageId})`);
    
    return {
      success: true,
      posted: [topic.id],
      messageId,
      topic: {
        id: topic.id,
        title: topic.title
      }
    };
  } catch (error) {
    console.error('Error in postRandomTopic:', error);
    
    // Записываем ошибку в журнал
    const topicId = error.topicId || null;
    await addLogEntry({
      topicId,
      status: 'error',
      error: error.message || String(error)
    });
    
    return {
      success: false,
      error: error.message || String(error),
      posted: []
    };
  }
}

/**
 * Отправить конкретную статью по ID в Telegram канал
 */
export async function postTopicById(topicId) {
  try {
    console.log(`Posting specific topic: ${topicId}`);
    
    const topic = getTopicById(topicId);
    
    if (!topic) {
      const error = `Topic "${topicId}" not found`;
      await addLogEntry({
        topicId: null,
        status: 'error',
        error
      });
      return {
        success: false,
        error,
        posted: []
      };
    }
    
    console.log(`Posting topic: ${topic.id} - ${topic.title}`);
    
    // Форматируем статью
    const formatted = formatArticleForTelegram(topic, FRONTEND_BASE_URL);
    
    // Отправляем основной пост
    const telegramResponse = await sendMessage(formatted.text);
    const messageId = telegramResponse?.result?.message_id || null;
    const messageDate = telegramResponse?.result?.date || Math.floor(Date.now() / 1000);
    
    // Если есть примеры, отправляем их ВСЕ в комментарии
    if (formatted.examples && formatted.examples.length > 0) {
      console.log(`Sending ${formatted.examples.length} examples as comments...`);
      
      // Получаем message_id в группе обсуждений
      const discussionMessageId = await getDiscussionMessageId(messageId, formatted.text, messageDate);
      
      if (!discussionMessageId) {
        console.warn('Could not get discussion message ID, skipping comments');
      } else {
        // Отправляем все примеры как комментарии
        for (let i = 0; i < formatted.examples.length; i++) {
          try {
            const example = formatted.examples[i];
            const exampleText = formatExampleForComment(example, FRONTEND_BASE_URL);
            await sendComment(exampleText, discussionMessageId);
            console.log(`✓ Sent example ${i + 1}/${formatted.examples.length}`);
            // Задержка между комментариями
            await new Promise(resolve => setTimeout(resolve, 1000));
          } catch (error) {
            console.error(`Error sending example ${i + 1}:`, error);
          }
        }
      }
    }
    
    // Сохраняем в состояние
    const state = await loadState();
    if (!state.posted.includes(topic.id)) {
      state.posted.push(topic.id);
      state.lastPostDate = new Date().toISOString().split('T')[0];
      await saveState(state);
    }
    
    // Записываем в журнал
    await addLogEntry({
      topicId: topic.id,
      status: 'success',
      messageId
    });
    
    console.log(`Successfully posted: ${topic.id} (messageId: ${messageId})`);
    
    return {
      success: true,
      posted: [topic.id],
      messageId,
      topic: {
        id: topic.id,
        title: topic.title
      }
    };
  } catch (error) {
    console.error('Error in postTopicById:', error);
    
    // Записываем ошибку в журнал
    await addLogEntry({
      topicId: topicId || null,
      status: 'error',
      error: error.message || String(error)
    });
    
    return {
      success: false,
      error: error.message || String(error),
      posted: []
    };
  }
}
