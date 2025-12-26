import { Topic } from '../../../types';

export const DOCKER_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'docker-basics',
    title: 'Основы Docker',
    description: 'Docker — платформа для контейнеризации приложений. docker run запускает контейнер из образа, docker build создаёт образ из Dockerfile. Dockerfile: FROM для базового образа, RUN для выполнения команд, COPY для копирования файлов. Образы (images) — шаблоны для контейнеров, контейнеры (containers) — запущенные экземпляры образов.',
    difficulty: 'beginner',
    tags: ['docker', 'containers', 'devops', 'basics', 'tools', 'productivity'],
    keyPoints: [
      'docker run запускает контейнер из образа.',
      'docker build создаёт образ из Dockerfile.',
      'FROM задаёт базовый образ в Dockerfile.',
      'RUN выполняет команды при сборке образа.',
      'COPY копирует файлы из хоста в образ.'
    ],
    examples: [
      {
        title: 'Базовый Dockerfile',
        code: `FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]`
      },
      {
        title: 'Работа с образами и контейнерами',
        code: `docker build -t my-app .        # Собрать образ
docker images                    # Список образов
docker run -p 3000:3000 my-app   # Запустить контейнер
docker ps                        # Список запущенных контейнеров
docker stop <container-id>       # Остановить контейнер`
      }
    ],
    relatedTopics: ['docker-intermediate']
  }
];

