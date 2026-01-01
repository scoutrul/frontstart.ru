import { Topic } from '../../../types';

export const TERMINAL_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'terminal-development',
    title: 'Терминал в разработке',
    difficulty: 'intermediate',
    description: 'В реальной разработке терминал используется как точка запуска инструментов и сервисов. Через него работают сборщики, dev-серверы, линтеры и тесты.',
    keyPoints: [
      'Что это: использование терминала как точки запуска инструментов и сервисов',
      'Запуск dev-серверов и сборки проектов',
      'Работа с npm / yarn / pnpm',
      'npx: запуск пакетов без глобальной установки (например, npx eslint)',
      'Запуск утилит и CLI-инструментов',
      'Логи и ошибки прямо в терминале',
      'Большинство инструментов фронтенда — это CLI-программы, и терминал становится их универсальным интерфейсом'
    ],
    additionalDescription: 'Большинство инструментов фронтенда — это CLI-программы, и терминал становится их универсальным интерфейсом.',
    tags: ['tools', 'terminal', 'npm', 'build', 'workflow', 'productivity'],
    relatedTopics: ['package-managers', 'testing-basics'],
    examples: [
      {
        title: 'Типичные команды фронтендера',
        code: `npm run build   // сборка проекта
npm test        // запуск тестов
npx eslint .    // запуск линтера через npx (без установки)
// npx загружает и запускает пакет временно, не устанавливая его глобально`
      }
    ]
  },
  {
    id: 'terminal-environments',
    title: 'Окружения и оболочки',
    difficulty: 'intermediate',
    description: 'Поведение терминала зависит от операционной системы и используемой оболочки. Понимание различий помогает избегать проблем при работе в разных средах.',
    keyPoints: [
      'Что это: различия в поведении терминала в зависимости от ОС и оболочки',
      'Shell: Bash, Zsh, PowerShell',
      'ОС: Windows, macOS, Linux',
      'Unix-подход: macOS и Linux используют похожие команды',
      'PATH и доступность команд',
      'Фронтендеру не нужно глубоко изучать shell, но важно понимать, почему одна и та же команда может вести себя по-разному'
    ],
    additionalDescription: 'Фронтендеру не нужно глубоко изучать shell, но важно понимать, почему одна и та же команда может вести себя по-разному.',
    tags: ['tools', 'terminal', 'environment', 'shell', 'bash', 'powershell'],
    relatedTopics: ['terminal-development'],
    examples: [
      {
        title: 'Проверка окружения',
        code: `node -v     // версия Node.js
npm -v      // версия npm
echo $PATH  // пути поиска команд (Unix)
echo %PATH% // пути поиска команд (Windows)`
      }
    ]
  }
];
