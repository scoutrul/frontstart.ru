// Тестирование цикла расписания
import { previewNextPosts } from './scheduler.js';
import { loadState } from '../services/telegram/state.js';
import { getTopicsByMetaCategory } from '../services/topics.js';

async function testCycle() {
  console.log('=== Тест цикла расписания ===\n');
  
  const state = await loadState();
  const topicsByMeta = getTopicsByMetaCategory();
  
  // Проверяем 18 дней (2 полных цикла)
  const preview = previewNextPosts(state, topicsByMeta, 18, true);
  
  // Анализируем паттерны
  const cycleDays = preview.map(d => d.cycleDay);
  const humanitarianIndices = preview.map(d => d.humanitarianIndex);
  
  console.log('Дни технического цикла (должны идти 0-8 и повторяться):');
  console.log(cycleDays.join(', '));
  console.log();
  
  console.log('Индексы гуманитарных разделов (должны чередоваться 0,1,0,1...):');
  console.log(humanitarianIndices.join(', '));
  console.log();
  
  // Проверяем технические разделы
  console.log('Технические разделы по дням:');
  preview.forEach((day, idx) => {
    const techPosts = day.posts.filter(p => p.type === 'technical');
    const metaIds = techPosts.map(p => p.metaCategoryId);
    console.log(`День ${idx + 1}: ${metaIds.join(', ')}`);
  });
  console.log();
  
  // Проверяем, что каждый технический раздел появляется 3 дня подряд
  console.log('Проверка: каждый технический раздел должен появляться 3 дня подряд');
  let errors = 0;
  
  const allTechnical = [
    'optimization', 'security', 'frameworks', 'architecture',
    'typescript', 'javascript', 'markup', 'tools', 'network'
  ];
  
  allTechnical.forEach(metaId => {
    const appearances = [];
    preview.forEach((day, idx) => {
      const hasMeta = day.posts.some(p => p.metaCategoryId === metaId);
      if (hasMeta) {
        appearances.push(idx + 1);
      }
    });
    
    // Проверяем, что появления идут группами по 3
    let consecutive = 1;
    let maxConsecutive = 1;
    
    for (let i = 1; i < appearances.length; i++) {
      if (appearances[i] === appearances[i-1] + 1) {
        consecutive++;
        maxConsecutive = Math.max(maxConsecutive, consecutive);
      } else {
        consecutive = 1;
      }
    }
    
    if (maxConsecutive === 3) {
      console.log(`✓ ${metaId}: появляется 3 дня подряд`);
    } else {
      console.log(`✗ ${metaId}: максимум ${maxConsecutive} дней подряд (ожидалось 3)`);
      errors++;
    }
  });
  
  console.log();
  
  // Проверяем гуманитарные разделы
  console.log('Проверка: гуманитарные разделы должны чередоваться');
  let prevHumanitarian = null;
  let humanitarianErrors = 0;
  
  preview.forEach((day, idx) => {
    const humanitarianPost = day.posts.find(p => p.type === 'humanitarian');
    if (humanitarianPost) {
      if (prevHumanitarian && humanitarianPost.metaCategoryId === prevHumanitarian) {
        console.log(`✗ День ${idx + 1}: повтор ${humanitarianPost.metaCategoryId}`);
        humanitarianErrors++;
      }
      prevHumanitarian = humanitarianPost.metaCategoryId;
    }
  });
  
  if (humanitarianErrors === 0) {
    console.log('✓ Гуманитарные разделы чередуются корректно');
  }
  
  console.log();
  
  // Итоги
  if (errors === 0 && humanitarianErrors === 0) {
    console.log('✓✓✓ Все тесты пройдены! Цикл работает корректно.');
  } else {
    console.log(`✗✗✗ Обнаружено ошибок: ${errors + humanitarianErrors}`);
  }
}

testCycle().catch(console.error);
