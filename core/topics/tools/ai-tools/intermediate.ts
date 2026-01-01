import { Topic } from '../../../types';

export const AI_TOOLS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'ai-tools-intermediate',
    title: 'ИИ-инструменты: продвинутые',
    description: 'Средний уровень использования ИИ включает работу с локальными и облачными моделями, настройку подсказок и интеграцию в рабочий процесс.',
    difficulty: 'intermediate',
    tags: ['ai', 'tools', 'cursor', 'cloud', 'lm-studio', 'copilot', 'local-models', 'prompts', 'code-generation', 'intermediate'],
    keyPoints: [
      'Использование облачных моделей с API (Anthropic Cloud Code, OpenAI)',
      'Локальные модели через LM Studio или Ollama для приватных проектов',
      'Cursor как редактор с интегрированными ИИ-функциями для фронтенда',
      'Copilot и IntelliJ встроенные помощники с юридически защищённой обработкой данных',
      'Настройка prompt-ов для получения нужного результата и генерации кода'
    ],
    additionalDescription: 'Работа с локальными моделями требует ресурсов компьютера и ограничения по объёму модели. Облачные решения позволяют использовать современные модели без нагрузки на локальную машину, но нужно учитывать безопасность данных.',
    funFact: 'Некоторые компании запрещают использовать облачные модели для корпоративного кода из-за риска утечки данных, даже если модель официально защищена.',
    examples: [
      {
        title: 'Использование Cloud Code',
        code: `// Пример: Anthropic Cloud Code в VS Code
// await generateCode("React компонент кнопки с иконкой")`
      },
      {
        title: 'LM Studio локальная модель',
        code: `// Использование LM Studio для генерации функции без отправки данных в облако
const result = localModel.generate("Функция фильтрации массива")`
      },
      {
        title: 'Cursor подсказки',
        code: `// Встроенные команды Cursor
// Ctrl-K для вызова AI-подсказки
// Ctrl-E для генерации кода по выделенному фрагменту`
      }
    ],
    relatedTopics: ['ai-tools-basics', 'ai-tools-advanced', 'testing-intermediate']
  }
];

