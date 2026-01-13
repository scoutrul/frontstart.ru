import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '../../../');
const DEPLOY_SCRIPT = join(PROJECT_ROOT, 'scripts', 'deploy.js');

/**
 * Обработчик GitHub webhook для автоматической сборки
 */
export async function githubWebhookHandler(request, reply) {
  try {
    const event = request.headers['x-github-event'];
    const payload = request.body;

    // Обрабатываем только push события
    if (event !== 'push') {
      return { 
        success: true, 
        message: 'Event ignored', 
        event 
      };
    }

    // Проверяем ветку (main или master)
    const ref = payload.ref;
    const isMainBranch = ref === 'refs/heads/main' || ref === 'refs/heads/master';
    
    if (!isMainBranch) {
      return { 
        success: true, 
        message: 'Branch ignored', 
        branch: ref 
      };
    }

    // Запускаем деплой в фоне (не блокируем ответ)
    const commitId = payload.head_commit?.id?.substring(0, 7) || 'unknown';
    const commitMessage = payload.head_commit?.message || 'no message';
    
    console.log(`🚀 Starting deployment for commit ${commitId}: ${commitMessage}`);
    
    // Запускаем скрипт деплоя асинхронно
    console.log(`📝 Executing deploy script: ${DEPLOY_SCRIPT}`);
    exec(`tsx ${DEPLOY_SCRIPT}`, { 
      cwd: PROJECT_ROOT,
      maxBuffer: 10 * 1024 * 1024 // 10MB
    }, (error, stdout, stderr) => {
      if (error) {
        console.error('❌ Deployment failed:', error.message);
        if (stderr) {
          console.error('STDERR:', stderr);
        }
        if (error.stdout) {
          console.error('STDOUT:', error.stdout);
        }
        return;
      }
      console.log('✅ Deployment completed successfully');
      if (stdout) {
        // Выводим stdout построчно для лучшей читаемости
        const lines = stdout.split('\n').filter(line => line.trim());
        lines.forEach(line => console.log(`   ${line}`));
      }
      if (stderr) {
        console.warn('⚠️  Deployment warnings:', stderr);
      }
    });

    return { 
      success: true, 
      message: 'Deployment started',
      commit: commitId,
      branch: ref.replace('refs/heads/', '')
    };
  } catch (error) {
    request.log.error(error);
    reply.code(500).send({ 
      error: 'Webhook processing failed', 
      message: error.message 
    });
  }
}
