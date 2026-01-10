import { postRandomTopic, postTopicById } from '../../telegram/posting.js';
import { getLastLogs } from '../../telegram/postingLog.js';

/**
 * Обработчик для ручного запуска постинга случайной статьи
 */
export async function triggerPostingHandler(request, reply) {
  try {
    const result = await postRandomTopic();
    
    if (!result.success) {
      reply.code(500).send(result);
      return;
    }
    
    return result;
  } catch (error) {
    request.log.error(error);
    reply.code(500).send({ 
      error: 'Telegram posting failed', 
      message: error.message 
    });
  }
}

/**
 * Обработчик для получения последних записей журнала
 */
export async function getLogsHandler(request, reply) {
  try {
    const limit = parseInt(request.query?.limit) || 10;
    const logs = await getLastLogs(limit);
    return { logs, count: logs.length };
  } catch (error) {
    request.log.error(error);
    reply.code(500).send({ 
      error: 'Failed to get logs', 
      message: error.message 
    });
  }
}

/**
 * Обработчик для постинга конкретной статьи по ID
 */
export async function postTopicHandler(request, reply) {
  try {
    const topicId = request.body?.topicId;
    if (!topicId) {
      return reply.code(400).send({ error: 'topicId is required' });
    }
    
    const result = await postTopicById(topicId);
    
    if (!result.success) {
      reply.code(500).send(result);
      return;
    }
    
    return result;
  } catch (error) {
    request.log.error(error);
    reply.code(500).send({ 
      error: 'Telegram posting failed', 
      message: error.message 
    });
  }
}
