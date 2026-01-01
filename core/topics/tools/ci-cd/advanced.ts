import { Topic } from '../../../types';

export const CI_CD_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'cicd-advanced',
    title: 'CI/CD: эксперты',
    description: 'Продвинутый уровень CI/CD охватывает сложные пайплайны, мульти-среды, безопасность SSH и масштабирование приложений.',
    difficulty: 'advanced',
    tags: ['ci-cd', 'cicd', 'vps', 'ssh', 'docker', 'kubernetes', 'automation', 'monitoring', 'advanced', 'deployment'],
    keyPoints: [
      'Многоступенчатые пайплайны с проверкой качества, тестами и деплоем',
      'Интеграция с Docker и Kubernetes для масштабирования',
      'Безопасность SSH: ключи, ограничения доступа и audit logging',
      'Автоматизация rollback и отката версий при ошибках',
      'Мониторинг и метрики производительности CI/CD'
    ],
    additionalDescription: 'На этом уровне CI/CD превращается в стратегический инструмент. Можно одновременно управлять несколькими средами, проверять производительность приложений и обеспечивать безопасность деплоя.',
    funFact: 'Некоторые CI/CD системы могут запускать деплой на тысячи серверов одновременно, синхронизируя их состояние и проверяя ошибки в реальном времени.',
    examples: [
      {
        title: 'Многоступенчатый пайплайн с rollback',
        code: `jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - run: npm ci
      - run: npm run build
      - run: |
          if [ $? -eq 0 ]; then
            ssh user@prod "cd /var/www/project && git pull && npm run build"
          else
            echo "Build failed, rollback triggered"`
      },
      {
        title: 'Kubernetes деплой с CI/CD',
        code: `// Использование GitHub Actions для автоматического деплоя контейнеров
// kubectl apply -f k8s/deployment.yaml`
      }
    ],
    relatedTopics: ['cicd-intermediate', 'vps-advanced', 'docker-advanced']
  }
];





