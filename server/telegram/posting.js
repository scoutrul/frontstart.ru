import { getAllTopics, getTopicById, getTopicsByMetaCategory } from '../services/topics.js';
import { loadState, saveState } from '../services/telegram/state.js';
import { formatArticleForTelegram, formatExampleForComment } from './formatArticle.js';
import { sendMessage, sendComment, getDiscussionMessageId } from './client.js';
import { addLogEntry } from './postingLog.js';
import { FRONTEND_BASE_URL } from '../config/env.js';
import { planDailyPosts } from './scheduler.js';
import { POSTING_CONFIG } from '../config/posting.js';

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

/**
 * Отправить посты по расписанию (4 поста в день)
 * 1 гуманитарный + 3 технических по циклу
 */
export async function postDailySchedule() {
  try {
    console.log('Starting scheduled posting...');
    
    // Загружаем состояние и темы
    const state = await loadState();
    const topicsByMeta = getTopicsByMetaCategory();
    
    // Планируем посты на сегодня
    const { posts, newState } = planDailyPosts(
      state,
      topicsByMeta,
      POSTING_CONFIG.resetOnEnd
    );
    
    if (posts.length === 0) {
      const error = 'No posts planned for today';
      console.log(error);
      await addLogEntry({
        topicId: null,
        status: 'error',
        error,
        type: 'scheduled'
      });
      return {
        success: false,
        error,
        posted: []
      };
    }
    
    console.log(`Planned ${posts.length} posts for today`);
    
    // Отправляем посты последовательно
    const results = [];
    const postedTopics = [];
    
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const topic = post.topic;
      
      console.log(`\nPosting ${i + 1}/${posts.length}: ${topic.id} (${post.metaCategoryId})`);
      
      try {
        // Форматируем статью
        const formatted = formatArticleForTelegram(topic, FRONTEND_BASE_URL);
        
        // Отправляем основной пост
        const telegramResponse = await sendMessage(formatted.text);
        const messageId = telegramResponse?.result?.message_id || null;
        const messageDate = telegramResponse?.result?.date || Math.floor(Date.now() / 1000);
        
        // Если есть примеры, отправляем их в комментарии
        if (formatted.examples && formatted.examples.length > 0) {
          console.log(`Sending ${formatted.examples.length} examples as comments...`);
          
          const discussionMessageId = await getDiscussionMessageId(messageId, formatted.text, messageDate);
          
          if (discussionMessageId) {
            for (let j = 0; j < formatted.examples.length; j++) {
              try {
                const example = formatted.examples[j];
                const exampleText = formatExampleForComment(example, FRONTEND_BASE_URL);
                await sendComment(exampleText, discussionMessageId);
                console.log(`✓ Sent example ${j + 1}/${formatted.examples.length}`);
                await new Promise(resolve => setTimeout(resolve, 1000));
              } catch (error) {
                console.error(`Error sending example ${j + 1}:`, error);
              }
            }
          }
        }
        
        // Записываем успех
        results.push({
          topicId: topic.id,
          metaCategoryId: post.metaCategoryId,
          position: post.position,
          type: post.type,
          status: 'success',
          messageId
        });
        
        postedTopics.push(topic.id);
        
        console.log(`✓ Posted: ${topic.id} (messageId: ${messageId})`);
        
        // Задержка между постами
        if (i < posts.length - 1) {
          await new Promise(resolve => setTimeout(resolve, POSTING_CONFIG.delayBetweenPosts));
        }
      } catch (error) {
        console.error(`Error posting ${topic.id}:`, error);
        results.push({
          topicId: topic.id,
          metaCategoryId: post.metaCategoryId,
          position: post.position,
          type: post.type,
          status: 'error',
          error: error.message || String(error)
        });
      }
    }
    
    // Обновляем состояние
    newState.lastPostDate = new Date().toISOString().split('T')[0];
    
    // Добавляем опубликованные темы в историю
    postedTopics.forEach(topicId => {
      if (!newState.posted.includes(topicId)) {
        newState.posted.push(topicId);
      }
    });
    
    await saveState(newState);
    
    // Записываем в журнал
    await addLogEntry({
      topicId: null,
      status: 'success',
      type: 'scheduled',
      cycleDay: state.cycleDay,
      humanitarianIndex: state.humanitarianIndex,
      posts: results
    });
    
    console.log(`\n✓ Successfully posted ${postedTopics.length} topics`);
    
    return {
      success: true,
      posted: postedTopics,
      results,
      cycleDay: state.cycleDay,
      newCycleDay: newState.cycleDay
    };
  } catch (error) {
    console.error('Error in postDailySchedule:', error);
    
    await addLogEntry({
      topicId: null,
      status: 'error',
      type: 'scheduled',
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
 * Отправить один пост по расписанию (для плавающего расписания)
 * Используется cron-ом для отправки 4 постов в день в разное время
 */
export async function postSingleScheduledTopic() {
  try {
    console.log('Starting single scheduled post...');
    
    // Загружаем состояние
    const state = await loadState();
    const topicsByMeta = getTopicsByMetaCategory();
    const today = new Date().toISOString().split('T')[0];
    
    // Проверяем, новый ли день
    if (state.lastPostDate !== today) {
      console.log('New day detected, resetting daily counters');
      state.postsTodayCount = 0;
      state.dailyPostIndex = 0;
      state.lastPostDate = today;
    }
    
    // Проверяем лимит постов за день
    if (state.postsTodayCount >= 4) {
      const message = 'Daily limit of 4 posts reached';
      console.log(message);
      return {
        success: false,
        error: message,
        posted: []
      };
    }
    
    // Планируем 4 поста на день (но отправим только один)
    const { posts, newState } = planDailyPosts(
      state,
      topicsByMeta,
      POSTING_CONFIG.resetOnEnd
    );
    
    if (posts.length === 0) {
      const error = 'No posts available';
      console.log(error);
      await addLogEntry({
        topicId: null,
        status: 'error',
        error,
        type: 'scheduled-single'
      });
      return {
        success: false,
        error,
        posted: []
      };
    }
    
    // Берём пост по индексу (0-3)
    const postIndex = state.dailyPostIndex;
    if (postIndex >= posts.length) {
      const error = `Post index ${postIndex} out of range`;
      console.log(error);
      return {
        success: false,
        error,
        posted: []
      };
    }
    
    const post = posts[postIndex];
    const topic = post.topic;
    
    // Проверяем, не был ли уже запощен этот топик
    if (state.posted.includes(topic.id)) {
      const message = `Topic ${topic.id} was already posted, skipping`;
      console.log(message);
      
      // Увеличиваем счётчики и сохраняем состояние
      state.postsTodayCount = (state.postsTodayCount || 0) + 1;
      state.dailyPostIndex = (state.dailyPostIndex || 0) + 1;
      
      if (state.dailyPostIndex >= 4) {
        state.cycleDay = newState.cycleDay;
        state.humanitarianIndex = newState.humanitarianIndex;
        state.metaCategoryPointers = newState.metaCategoryPointers;
        state.dailyPostIndex = 0;
      }
      
      state.lastPostDate = today;
      await saveState(state);
      
      await addLogEntry({
        topicId: topic.id,
        status: 'skipped',
        type: 'scheduled-single',
        error: message,
        postIndex,
        postsTodayCount: state.postsTodayCount
      });
      
      return {
        success: false,
        error: message,
        posted: []
      };
    }
    
    console.log(`Posting ${postIndex + 1}/4 for today: ${topic.id} (${post.metaCategoryId})`);
    
    try {
      // Форматируем статью
      const formatted = formatArticleForTelegram(topic, FRONTEND_BASE_URL);
      
      // Отправляем основной пост
      const telegramResponse = await sendMessage(formatted.text);
      const messageId = telegramResponse?.result?.message_id || null;
      const messageDate = telegramResponse?.result?.date || Math.floor(Date.now() / 1000);
      
      // Если есть примеры, отправляем их в комментарии
      if (formatted.examples && formatted.examples.length > 0) {
        console.log(`Sending ${formatted.examples.length} examples as comments...`);
        
        const discussionMessageId = await getDiscussionMessageId(messageId, formatted.text, messageDate);
        
        if (discussionMessageId) {
          for (let j = 0; j < formatted.examples.length; j++) {
            try {
              const example = formatted.examples[j];
              const exampleText = formatExampleForComment(example, FRONTEND_BASE_URL);
              await sendComment(exampleText, discussionMessageId);
              console.log(`✓ Sent example ${j + 1}/${formatted.examples.length}`);
              await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (error) {
              console.error(`Error sending example ${j + 1}:`, error);
            }
          }
        }
      }
      
      // Обновляем состояние
      // Увеличиваем счётчик постов за день
      state.postsTodayCount = (state.postsTodayCount || 0) + 1;
      state.dailyPostIndex = (state.dailyPostIndex || 0) + 1;
      
      // Если это был последний пост за день, обновляем состояние цикла
      if (state.dailyPostIndex >= 4) {
        // Применяем изменения из newState (cycleDay, humanitarianIndex, metaCategoryPointers)
        state.cycleDay = newState.cycleDay;
        state.humanitarianIndex = newState.humanitarianIndex;
        state.metaCategoryPointers = newState.metaCategoryPointers;
        
        // Сбрасываем дневной индекс для следующего дня
        state.dailyPostIndex = 0;
      }
      
      state.lastPostDate = today;
      
      // Добавляем в историю опубликованных
      if (!state.posted.includes(topic.id)) {
        state.posted.push(topic.id);
      }
      
      await saveState(state);
      
      // Записываем в журнал
      await addLogEntry({
        topicId: topic.id,
        status: 'success',
        type: 'scheduled-single',
        messageId,
        cycleDay: state.cycleDay,
        humanitarianIndex: state.humanitarianIndex,
        postIndex: postIndex,
        postsTodayCount: state.postsTodayCount,
        posts: [{
          topicId: topic.id,
          metaCategoryId: post.metaCategoryId,
          position: post.position,
          type: post.type,
          status: 'success',
          messageId
        }]
      });
      
      console.log(`✓ Posted ${state.postsTodayCount}/4 for today: ${topic.id} (messageId: ${messageId})`);
      
      return {
        success: true,
        posted: [topic.id],
        messageId,
        postIndex,
        postsTodayCount: state.postsTodayCount,
        topic: {
          id: topic.id,
          title: topic.title,
          metaCategoryId: post.metaCategoryId
        }
      };
    } catch (error) {
      console.error(`Error posting ${topic.id}:`, error);
      
      await addLogEntry({
        topicId: topic.id,
        status: 'error',
        type: 'scheduled-single',
        error: error.message || String(error),
        postIndex,
        postsTodayCount: state.postsTodayCount
      });
      
      throw error;
    }
  } catch (error) {
    console.error('Error in postSingleScheduledTopic:', error);
    
    await addLogEntry({
      topicId: null,
      status: 'error',
      type: 'scheduled-single',
      error: error.message || String(error)
    });
    
    return {
      success: false,
      error: error.message || String(error),
      posted: []
    };
  }
}
