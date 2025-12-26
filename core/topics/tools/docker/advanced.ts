import { Topic } from '../../../types';

export const DOCKER_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'docker-advanced',
    title: 'Продвинутый Docker',
    description: 'Оптимизация образов: уменьшение размера через alpine образы, .dockerignore для исключения файлов. Docker Swarm для оркестрации контейнеров на нескольких хостах. Kubernetes основы: pods, services, deployments. CI/CD интеграция: автоматическая сборка и деплой образов через GitHub Actions, GitLab CI.',
    difficulty: 'advanced',
    tags: ['docker', 'containers', 'devops', 'kubernetes', 'optimization', 'cicd', 'tools', 'productivity'],
    keyPoints: [
      '.dockerignore исключает файлы из контекста сборки.',
      'Alpine образы значительно меньше стандартных.',
      'Docker Swarm оркестрирует контейнеры на кластере.',
      'Kubernetes управляет контейнерами через pods и services.',
      'CI/CD автоматизирует сборку и деплой Docker образов.'
    ],
    examples: [
      {
        title: 'Оптимизация образа',
        code: `# .dockerignore
node_modules
.git
.env
*.log

# Dockerfile с оптимизацией
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]`
      },
      {
        title: 'Docker Swarm',
        code: `docker swarm init                    # Инициализировать swarm
docker service create --replicas 3 my-app  # Создать сервис
docker service ls                          # Список сервисов
docker service scale my-app=5              # Масштабировать`
      },
      {
        title: 'Kubernetes deployment',
        code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app:latest
        ports:
        - containerPort: 3000`
      }
    ],
    relatedTopics: ['docker-intermediate']
  }
];

