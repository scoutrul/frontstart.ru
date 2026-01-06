import { Topic } from '../../../types';

export const SCALING_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'architecture-scaling-basics',
    title: 'Работа в команде',
    difficulty: 'beginner',
    description: 'Работа в команде требует следования правилам: код-стайл, структура проекта, процессы (code review, git flow). Junior должен понимать: как работать с Git, как делать code review, как следовать стандартам команды. Это основа продуктивной работы в команде.',
    keyPoints: [
      'Следование правилам: код-стайл, структура, процессы команды.',
      'Git: базовые команды, ветвление, merge, конфликты.',
      'Code review: проверка кода коллег, получение feedback.',
      'Коммуникация: обсуждение решений, задавание вопросов.'
    ],
    tags: ['architecture', 'scaling', 'team', 'basics'],
    examples: [
      {
        title: 'Git workflow',
        code: `// Создание ветки
git checkout -b feature/new-feature

// Коммит изменений
git add .
git commit -m "Add new feature"

// Push и создание PR
git push origin feature/new-feature`
      }
    ],
    relatedTopics: ['architecture-scaling-modular'],
    funFact: 'Git был создан Линусом Торвальдсом в 2005 году для разработки Linux. Он стал стандартом для контроля версий и используется в миллионах проектов. Git изменил способ работы команд над кодом.'
  }
];
