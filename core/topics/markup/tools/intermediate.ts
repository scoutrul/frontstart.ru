import { Topic } from '../../../types';

export const TOOLS_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'tools-devtools-advanced',
    title: 'DevTools: продвинуто',
    difficulty: 'intermediate',
    description: 'Продвинутые возможности DevTools: режим адаптивности, инструменты для отладки Flexbox и Grid, анализ Computed Styles, поиск проблем со специфичностью. Эти инструменты ускоряют разработку и отладку.',
    keyPoints: [
      'Responsive Mode: эмуляция разных устройств, тестирование адаптивности, изменение размеров viewport.',
      'Flex overlay: визуализация Flexbox контейнеров, главная и поперечная оси, выравнивание.',
      'Grid overlay: визуализация Grid сетки, линии, области, размещение элементов.',
      'Computed Styles: итоговые значения стилей, поиск источника стилей, отладка специфичности.',
      'Поиск проблем: анализ конфликтов стилей, понимание каскада, оптимизация селекторов.'
    ],
    tags: ['tools', 'devtools', 'flexbox', 'grid', 'intermediate'],
    examples: [
      {
        title: 'Grid overlay',
        code: `/* В DevTools Elements:
   - Выбрать grid контейнер
   - Включить Grid overlay
   - Видеть линии сетки, области */
`
      }
    ],
    relatedTopics: ['tools-devtools-elements', 'tools-audit'],
    funFact: 'Grid overlay в DevTools показывает линии сетки и области, что очень помогает при отладке сложных Grid макетов. Flex overlay визуализирует главную и поперечную оси Flexbox контейнеров. Эти инструменты были добавлены в Chrome DevTools относительно недавно и значительно упростили отладку layout.'
  },
  {
    id: 'tools-audit',
    title: 'DevTools: аудит',
    difficulty: 'advanced',
    description: 'Lighthouse и Performance панель для аудита производительности, доступности, SEO. Анализ кадров, долгих задач, перерисовок. Интеграция линтеров и прекоммит-хуков в workflow.',
    keyPoints: [
      'Lighthouse: аудит производительности, доступности, SEO, лучших практик, рекомендации по улучшению.',
      'Performance: анализ кадров, долгих задач, перерисовок, bottleneck в рендеринге.',
      'Линтеры: stylelint для CSS, ESLint для JavaScript, автоматическая проверка кода.',
      'Прекомит-хуки: автоматическая проверка перед коммитом, предотвращение проблем.'
    ],
    tags: ['tools', 'devtools', 'lighthouse', 'performance', 'advanced'],
    examples: [
      {
        title: 'Lighthouse аудит',
        code: `/* F12 → Lighthouse
   - Performance
   - Accessibility
   - Best Practices
   - SEO
   
   Получаешь отчёт с рекомендациями */
`
      }
    ],
    relatedTopics: ['tools-devtools-advanced'],
    funFact: 'Lighthouse был создан Google для автоматического аудита веб-страниц. Он использует реальные метрики производительности и проверяет доступность, SEO и лучшие практики. Интересно, что Lighthouse работает не только в DevTools, но и как отдельный инструмент командной строки, что позволяет интегрировать его в CI/CD.'
  }
];
