import { Topic } from '../../../types';

export const DOCKER_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'docker-intermediate',
    title: 'Docker средний уровень',
    description: 'Docker Compose управляет многоконтейнерными приложениями через docker-compose.yml. Volumes для персистентного хранения данных. Networks для связи между контейнерами. Многоэтапная сборка (multi-stage) уменьшает размер финального образа, используя промежуточные образы для сборки.',
    difficulty: 'intermediate',
    tags: ['docker', 'containers', 'devops', 'compose', 'volumes', 'networks', 'tools', 'productivity'],
    keyPoints: [
      'docker-compose.yml описывает многоконтейнерное приложение.',
      'Volumes сохраняют данные между перезапусками контейнеров.',
      'Networks позволяют контейнерам общаться друг с другом.',
      'Multi-stage build уменьшает размер финального образа.',
      'docker-compose up запускает все сервисы из compose файла.'
    ],
    examples: [
      {
        title: 'docker-compose.yml',
        code: `version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: password
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:`
      },
      {
        title: 'Multi-stage build',
        code: `# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["node", "dist/index.js"]`
      },
      {
        title: 'Volumes и Networks',
        code: `docker volume create my-volume    # Создать volume
docker volume ls                  # Список volumes
docker network create my-network  # Создать network
docker run --network my-network my-app`
      }
    ],
    relatedTopics: ['docker-basics', 'docker-advanced']
  }
];

