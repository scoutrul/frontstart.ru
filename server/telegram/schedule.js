import cron from 'node-cron'
import { postSingleScheduledTopic } from './posting.js'
import { TELEGRAM_BOT_TOKEN } from '../config/env.js'

/**
 * Конфигурация временных окон для постинга (в часах UTC)
 * 4 поста в день с плавающим временем в каждом окне
 * 
 * Окна настроены так, чтобы посты распределялись равномерно в течение суток
 * с учётом московского времени (UTC+3):
 * 
 * Окно 1: 01:00-05:00 UTC (04:00-08:00 МСК) - утренний пост
 * Окно 2: 07:00-11:00 UTC (10:00-14:00 МСК) - дневной пост
 * Окно 3: 13:00-17:00 UTC (16:00-20:00 МСК) - вечерний пост
 * Окно 4: 19:00-23:00 UTC (22:00-02:00 МСК) - ночной пост
 */
const POSTING_WINDOWS = [
  { start: 1, end: 5, name: 'Утро' },    // 04:00-08:00 МСК
  { start: 7, end: 11, name: 'День' },   // 10:00-14:00 МСК
  { start: 13, end: 17, name: 'Вечер' }, // 16:00-20:00 МСК
  { start: 19, end: 23, name: 'Ночь' }   // 22:00-02:00 МСК
];

/**
 * Получить случайное время в окне
 */
function getRandomTimeInWindow(window) {
  const hourRange = window.end - window.start;
  const randomHour = window.start + Math.floor(Math.random() * hourRange);
  const randomMinute = Math.floor(Math.random() * 60);
  
  return { hour: randomHour, minute: randomMinute };
}

/**
 * Запланировать пост в окне
 */
function schedulePostInWindow(windowIndex, window) {
  const { hour, minute } = getRandomTimeInWindow(window);
  const cronExpression = `${minute} ${hour} * * *`;
  
  const moscowHour = (hour + 3) % 24;
  console.log(`📅 Scheduling post ${windowIndex + 1}/4 (${window.name})`);
  console.log(`   Time: ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')} UTC (${String(moscowHour).padStart(2, '0')}:${String(minute).padStart(2, '0')} МСК)`);
  console.log(`   Cron: ${cronExpression}`);
  
  cron.schedule(cronExpression, async () => {
    console.log(`\n🚀 Cron job ${windowIndex + 1}/4 (${window.name}) triggered`);
    console.log(`   Time: ${new Date().toISOString()}`);
    
    try {
      const result = await postSingleScheduledTopic();
      
      if (result.success) {
        console.log(`✅ Post ${windowIndex + 1}/4 successful:`, {
          topicId: result.topic?.id,
          title: result.topic?.title,
          metaCategory: result.topic?.metaCategoryId,
          messageId: result.messageId,
          postsTodayCount: result.postsTodayCount
        });
      } else {
        console.log(`⚠️ Post ${windowIndex + 1}/4 failed:`, result.error);
      }
    } catch (error) {
      console.error(`❌ Cron job ${windowIndex + 1}/4 error:`, error.message);
    }
  }, {
    scheduled: true,
    timezone: "UTC"
  });
}

/**
 * Инициализация плавающего расписания для автопостинга в Telegram
 * 
 * Система отправляет 4 поста в день в случайное время внутри 4 временных окон.
 * Время генерируется случайно при запуске сервера и остаётся фиксированным
 * до следующего перезапуска.
 * 
 * Это создаёт эффект "естественности" - посты не выходят в одно и то же время,
 * но при этом сохраняется предсказуемая структура (4 поста в день).
 */
export function setupTelegramCron() {
  if (!TELEGRAM_BOT_TOKEN) {
    console.warn('⚠️ TELEGRAM_BOT_TOKEN not found - cron jobs disabled')
    return
  }

  console.log('\n🔧 Setting up floating schedule for Telegram posting...');
  console.log('📊 Configuration: 4 posts per day in random time windows\n');
  
  POSTING_WINDOWS.forEach((window, index) => {
    schedulePostInWindow(index, window);
  });
  
  console.log('\n✅ Floating schedule initialized successfully!');
  console.log('💡 Posts will be sent at the scheduled times above');
  console.log('🔄 Times will regenerate on next server restart\n');
}

