import { githubWebhookHandler } from './handler.js';

/**
 * Регистрация роутов webhook
 */
export async function registerWebhookRoutes(fastify) {
  // GitHub webhook для автоматической сборки
  fastify.post('/api/webhook/github', githubWebhookHandler);
}
