/**
 * Скрипт для автоматической сборки проекта
 * Запускается через GitHub webhook или вручную: pnpm run deploy
 */

import { exec } from 'child_process';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const execAsync = promisify(exec);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

async function deploy() {
  try {
    console.log('🚀 Starting deployment...');
    console.log(`📁 Project root: ${PROJECT_ROOT}`);
    
    // Переходим в директорию проекта
    process.chdir(PROJECT_ROOT);
    
    // 1. Pull изменений из GitHub
    console.log('\n📥 Pulling latest changes...');
    try {
      const { stdout: pullOutput } = await execAsync('git pull origin main');
      console.log(pullOutput);
    } catch (error) {
      // Если ветка не main, пробуем master
      try {
        const { stdout: pullOutput } = await execAsync('git pull origin master');
        console.log(pullOutput);
      } catch (masterError) {
        throw new Error(`Git pull failed: ${error.message}`);
      }
    }
    
    // 2. Устанавливаем зависимости фронтенда
    console.log('\n📦 Installing frontend dependencies...');
    const { stdout: installOutput } = await execAsync('pnpm install');
    console.log(installOutput);
    
    // 3. Устанавливаем зависимости бекенда
    console.log('\n📦 Installing backend dependencies...');
    const SERVER_DIR = join(PROJECT_ROOT, 'server');
    process.chdir(SERVER_DIR);
    const { stdout: serverInstallOutput } = await execAsync('pnpm install');
    console.log(serverInstallOutput);
    process.chdir(PROJECT_ROOT);
    
    // 4. Собираем фронтенд
    console.log('\n🔨 Building frontend...');
    const { stdout: buildOutput } = await execAsync('pnpm run build');
    console.log(buildOutput);
    
    // 5. Перезапускаем бекенд через PM2
    console.log('\n🔄 Restarting backend server...');
    try {
      const { stdout: pm2Output } = await execAsync('pm2 restart frontstart-server');
      console.log(pm2Output);
    } catch (error) {
      console.warn('⚠️  PM2 restart failed (server might not be running):', error.message);
      // Пробуем запустить, если не запущен
      try {
        const { stdout: pm2StartOutput } = await execAsync('pm2 start ecosystem.config.cjs', { cwd: SERVER_DIR });
        console.log(pm2StartOutput);
      } catch (startError) {
        console.warn('⚠️  PM2 start also failed:', startError.message);
      }
    }
    
    console.log('\n✅ Deployment completed successfully!');
    console.log(`📦 Frontend build: ${join(PROJECT_ROOT, 'dist')}`);
    console.log(`🔧 Backend: ${SERVER_DIR}`);
    
  } catch (error) {
    console.error('\n❌ Deployment failed:', error.message);
    if (error.stdout) console.error('STDOUT:', error.stdout);
    if (error.stderr) console.error('STDERR:', error.stderr);
    process.exit(1);
  }
}

deploy();
