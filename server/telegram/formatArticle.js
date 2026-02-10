import { findTopicMetaCategory, findTopicCategories, getTopicPath } from '../services/topics.js';

const TELEGRAM_MAX_LENGTH = 4096;

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
 * Форматировать пример для комментария (или для вставки в тело поста)
 */
export function formatExampleForComment(example, frontendBaseUrl) {
  const parts = [];
  parts.push(`<b>${escapeHtml(example.title)}</b>`);
  const code = truncateCode(example.code);
  parts.push(`<pre><code>${escapeHtml(code)}</code></pre>`);
  return parts.join('\n');
}

/**
 * Форматировать статью для Telegram
 * Возвращает: { text, examples } — text может содержать один встроенный пример, examples — массив для комментариев
 */
export function formatArticleForTelegram(topic, frontendBaseUrl) {
  const metaCategoryId = findTopicMetaCategory(topic.id);
  const articleUrl = `${frontendBaseUrl}/${metaCategoryId}/${topic.id}`;
  const topicPath = getTopicPath(topic.id);

  const parts = [];

  // Заголовок с полным путём
  parts.push(`<b>${escapeHtml(topicPath || topic.title)}</b>`);
  parts.push(`\n${formatDifficulty(topic.difficulty)}`);
  parts.push('');

  // Описание — без цитаты
  if (topic.description) {
    parts.push(escapeHtml(topic.description));
    parts.push('');
  }

  // Первый интересный факт — цитатой
  if (topic.funFact) {
    const funFacts = Array.isArray(topic.funFact) ? topic.funFact : [topic.funFact];
    if (funFacts.length > 0) {
      parts.push('💡 <b>Интересный факт:</b>');
      parts.push(`<blockquote>${escapeHtml(funFacts[0])}</blockquote>`);
      parts.push('');
    }
  }

  // Ключевые моменты — нумерованный список в blockquote; expandable только если 7+
  if (topic.keyPoints && topic.keyPoints.length > 0) {
    parts.push('<b>Ключевые моменты:</b>');
    const listLines = topic.keyPoints
      .map((point, index) => `${index + 1}. ${escapeHtml(point)}`)
      .join('\n\n');
    const expandable = topic.keyPoints.length > 7 ? ' expandable' : '';
    parts.push(`<blockquote${expandable}>${listLines}</blockquote>`);
    parts.push('');
  }

  // Второй факт — под спойлер
  if (topic.funFact && Array.isArray(topic.funFact) && topic.funFact.length > 1) {
    parts.push('💡 <b>Еще один факт:</b>');
    parts.push(`<tg-spoiler>${escapeHtml(topic.funFact[1])}</tg-spoiler>`);
    parts.push('');
  }

  // AdditionalDescription — без цитаты
  if (topic.additionalDescription) {
    parts.push(escapeHtml(topic.additionalDescription));
    parts.push('');
  }

  // Примеры: один в тело при наличии лимита, остальные — в examples для комментариев
  const allExamples = topic.examples || [];
  let examplesForComments = [...allExamples];

  if (allExamples.length > 0) {
    parts.push('<b>Примеры:</b>');
    const oneExampleText = formatExampleForComment(allExamples[0], frontendBaseUrl);
    const baseText = parts.join('\n');
    const withOneExample = baseText + '\n\n' + oneExampleText;
    if (withOneExample.length <= TELEGRAM_MAX_LENGTH) {
      parts.push(oneExampleText);
      examplesForComments = allExamples.slice(1);
    } else {
      const moreExamplesText = escapeHtml('смотрите в комментариях ниже ⬇️');
      parts.push(`<i>${moreExamplesText}</i>`);
    }
    parts.push('');
  }

  // Теги
  parts.push(`\n#${escapeHtml(getDifficultyHashtag(topic.difficulty))}`);
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
  parts.push(`📖 <a href="${articleUrl}">${escapeHtml('Читать полную версию на сайте')}</a>`);

  return {
    text: parts.join('\n'),
    examples: examplesForComments
  };
}
