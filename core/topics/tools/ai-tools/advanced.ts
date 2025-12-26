import { Topic } from '../../../types';

export const AI_TOOLS_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'ai-tools-advanced',
    title: 'Продвинутые AI инструменты',
    description: 'Fine-tuning моделей: обучение моделей на собственных данных, создание специализированных моделей. AI в CI/CD: автоматическое ревью кода, автотесты через AI, автоматическое исправление багов. Локальные модели: Ollama для запуска моделей локально, LM Studio для экспериментов, преимущества приватности и контроля данных.',
    difficulty: 'advanced',
    tags: ['ai', 'fine-tuning', 'cicd', 'local-models', 'ollama', 'tools', 'productivity'],
    keyPoints: [
      'Fine-tuning адаптирует модели под специфичные задачи.',
      'AI в CI/CD автоматизирует ревью и тестирование.',
      'Локальные модели работают офлайн и защищают данные.',
      'Ollama упрощает запуск локальных моделей.',
      'Кастомные модели могут быть специализированы под проект.'
    ],
    examples: [
      {
        title: 'Fine-tuning модели',
        code: `# Подготовка данных:
# Формат: JSONL
{"prompt": "Вопрос", "completion": "Ответ"}
{"prompt": "...", "completion": "..."}

# Обучение:
openai api fine_tunes.create \\
  -t training_data.jsonl \\
  -m gpt-3.5-turbo

# Использование:
# Модель адаптирована под ваш стиль кода`
      },
      {
        title: 'AI в CI/CD',
        code: `# GitHub Actions пример:
- name: AI Code Review
  uses: github-actions/ai-review
  with:
    model: 'gpt-4'
    checks: ['bugs', 'security', 'performance']

# Автоматические тесты:
- name: Generate Tests
  run: |
    ai-generate-tests --coverage 80%`
      },
      {
        title: 'Локальные модели (Ollama)',
        code: `# Установка:
curl -fsSL https://ollama.ai/install.sh | sh

# Запуск модели:
ollama run codellama

# Использование в коде:
# API endpoint: http://localhost:11434
# Полная приватность данных
# Работает офлайн`
      }
    ],
    relatedTopics: ['ai-tools-intermediate']
  }
];

