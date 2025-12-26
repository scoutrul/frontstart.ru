import { Topic } from '../../../types';

export const NPM_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'npm-intermediate',
    title: 'npm средний уровень',
    description: 'Версионирование пакетов: символы ^ и ~ для диапазонов версий, семантическое версионирование (semver). Глобальные vs локальные пакеты: когда использовать каждый вариант. npm audit для проверки уязвимостей, npm outdated для проверки устаревших пакетов. Управление зависимостями: обновление, удаление пакетов.',
    difficulty: 'intermediate',
    tags: ['npm', 'package-manager', 'node', 'versioning', 'dependencies', 'tools', 'productivity'],
    keyPoints: [
      '^4.18.0 позволяет обновления до 5.0.0 (минорные и патч версии).',
      '~4.18.0 позволяет только патч обновления (4.18.x).',
      'npm audit проверяет уязвимости в зависимостях.',
      'npm outdated показывает устаревшие пакеты.',
      'npm update обновляет пакеты в пределах диапазона версий.'
    ],
    examples: [
      {
        title: 'Версионирование',
        code: `"express": "^4.18.0"    # Обновления до 5.0.0 (минорные и патчи)
"express": "~4.18.0"    # Только патчи (4.18.x)
"express": "4.18.0"     # Точная версия
"express": "*"          # Любая версия (не рекомендуется)`
      },
      {
        title: 'Проверка уязвимостей',
        code: `npm audit                # Проверить уязвимости
npm audit fix             # Автоматически исправить уязвимости
npm outdated              # Показать устаревшие пакеты`
      },
      {
        title: 'Управление зависимостями',
        code: `npm update express        # Обновить пакет в пределах диапазона
npm uninstall express    # Удалить пакет
npm list                 # Показать установленные пакеты
npm list --depth=0       # Только верхний уровень`
      }
    ],
    relatedTopics: ['npm-basics', 'npm-advanced']
  }
];

