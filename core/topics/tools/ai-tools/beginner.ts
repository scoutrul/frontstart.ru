import { Topic } from '../../../types';

export const AI_TOOLS_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'ai-tools-basics',
    title: 'Основы AI инструментов',
    description: 'AI инструменты для разработки: ChatGPT для вопросов и объяснений кода, GitHub Copilot для автодополнения. Базовое использование AI: формулировка задач для AI, получение примеров кода. GitHub Copilot: автодополнение кода на основе контекста, принятие/отклонение предложений.',
    difficulty: 'beginner',
    tags: ['ai', 'chatgpt', 'copilot', 'prompts', 'basics', 'tools', 'productivity'],
    keyPoints: [
      'ChatGPT помогает с объяснениями кода и решением проблем.',
      'GitHub Copilot предлагает автодополнение на основе контекста.',
      'Промпты должны быть конкретными и понятными.',
      'Tab принимает предложения Copilot.',
      'Esc отклоняет предложения.'
    ],
    examples: [
      {
        title: 'Использование ChatGPT',
        code: `# Задать вопросы:
"Объясни как работает этот код: [код]"
"Найди ошибку в этом коде: [код]"
"Как оптимизировать эту функцию?"
"Предложи лучшие практики для React"`

      },
      {
        title: 'GitHub Copilot',
        code: `# Начать писать код
# Copilot предложит продолжение
# Пример:

function calculateTotal(items) {
  // Copilot предложит:
  return items.reduce((sum, item) => sum + item.price, 0);
}`
      },
      {
        title: 'Формулировка промптов',
        code: `# Плохо:
"Сделай функцию"

# Хорошо:
"Создай функцию на JavaScript, которая принимает массив чисел и возвращает сумму всех элементов. Используй reduce метод."`
      }
    ],
    relatedTopics: ['ai-tools-intermediate']
  }
];

