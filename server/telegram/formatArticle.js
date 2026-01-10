import { findTopicMetaCategory, findTopicCategories } from '../services/topics.js';

/**
 * Экранирование HTML для Telegram
 * Нужно экранировать только: <, >, &, "
 */
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Обрезать код, если он слишком длинный
 */
function truncateCode(code, maxLength = 1500) {
  if (!code || code.length <= maxLength) return code;
  return code.substring(0, maxLength) + '\n\n... (код обрезан, полная версия на сайте)';
}

/**
 * Форматировать сложность
 */
function formatDifficulty(difficulty) {
  const levels = {
    beginner: '⭐junior⭐',
    intermediate: '⭐⭐middle⭐⭐',
    advanced: '⭐⭐⭐senior⭐⭐⭐'
  };
  const level = levels[difficulty] || difficulty;
  return `Обязательно знать для: ${level}`;
}

/**
 * Получить хештег сложности
 */
function getDifficultyHashtag(difficulty) {
  const hashtags = {
    beginner: 'junior',
    intermediate: 'middle',
    advanced: 'senior'
  };
  return hashtags[difficulty] || difficulty;
}

/**
 * Форматировать пример для комментария
 */
export function formatExampleForComment(example, frontendBaseUrl) {
  const parts = [];
  parts.push(`<b>${escapeHtml(example.title)}</b>`);
  parts.push(`<pre><code>${escapeHtml(example.code)}</code></pre>`);
  return parts.join('\n');
}

/**
 * Форматировать статью для Telegram
 * ВСЕ примеры всегда идут в комментарии (упрощённая логика)
 * Возвращает объект: { text, examples }
 */
export function formatArticleForTelegram(topic, frontendBaseUrl) {
  const metaCategoryId = findTopicMetaCategory(topic.id);
  const articleUrl = `${frontendBaseUrl}/${metaCategoryId}/${topic.id}`;
  
  const parts = [];
  
  // Заголовок
  parts.push(`<b>${escapeHtml(topic.title)}</b>`);
  parts.push(`\n${formatDifficulty(topic.difficulty)}`);
  parts.push('');
  
  // Описание
  if (topic.description) {
    parts.push(escapeHtml(topic.description));
    parts.push('');
  }
  
  // FunFact перед KeyPoints (если это первый факт)
  if (topic.funFact) {
    const funFacts = Array.isArray(topic.funFact) ? topic.funFact : [topic.funFact];
    if (funFacts.length > 0) {
      parts.push(`💡 <b>Интересный факт:</b>`);
      parts.push(escapeHtml(funFacts[0]));
      parts.push('');
    }
  }
  
  // KeyPoints
  if (topic.keyPoints && topic.keyPoints.length > 0) {
    parts.push('<b>Ключевые моменты:</b>');
    topic.keyPoints.forEach((point, index) => {
      parts.push(`${index + 1}. ${escapeHtml(point)}`);
    });
    parts.push('');
  }
  
  // FunFact после KeyPoints (если есть второй факт)
  if (topic.funFact && Array.isArray(topic.funFact) && topic.funFact.length > 1) {
    parts.push(`💡 <b>Еще один факт:</b>`);
    parts.push(escapeHtml(topic.funFact[1]));
    parts.push('');
  }
  
  // AdditionalDescription
  if (topic.additionalDescription) {
    parts.push(escapeHtml(topic.additionalDescription));
    parts.push('');
  }
  
  // Если есть примеры, добавляем пометку
  if (topic.examples && topic.examples.length > 0) {
    parts.push('<b>Примеры:</b>');
    const moreExamplesText = escapeHtml('смотрите в комментариях ниже ⬇️');
    parts.push(`<i>${moreExamplesText}</i>`);
    parts.push('');
  }
  
  // Теги
  parts.push(`\n#${escapeHtml(getDifficultyHashtag(topic.difficulty))}`);
  
  // Добавляем теги метараздела и подраздела
  const categories = findTopicCategories(topic.id);
  if (categories) {
    parts.push(`#${escapeHtml(categories.metaCategoryId.replace(/-/g, '_'))}`);
    parts.push(`#${escapeHtml(categories.categoryId.replace(/-/g, '_'))}`);
  }
  
  if (topic.tags && topic.tags.length > 0) {
    const tagsStr = topic.tags.map(tag => {
      const tagName = tag.replace(/\s+/g, '_').replace(/-/g, '_');
      return `#${escapeHtml(tagName)}`;
    }).join(' ');
    parts.push(tagsStr);
    parts.push('');
  }
  
  // Ссылка на сайт
  const linkText = escapeHtml('Читать полную версию на сайте');
  parts.push(`📖 <a href="${articleUrl}">${linkText}</a>`);
  
  return {
    text: parts.join('\n'),
    examples: topic.examples || []
  };
}
