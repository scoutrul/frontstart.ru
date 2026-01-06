import { Topic } from '../../../types';

export const DATA_LAYER_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-data-layer-api-client',
    title: 'Единый API-клиент',
    difficulty: 'intermediate',
    description: 'Единый API-клиент — централизованная настройка всех HTTP-запросов. Вместо того чтобы настраивать fetch/axios в каждом компоненте, создаётся один клиент с общими настройками: base URL, заголовки, interceptors, обработка ошибок. Это упрощает поддержку и обеспечивает консистентность.\n\nНастройки: base URL для всех запросов, автоматическое добавление токенов через interceptors, обработка ошибок (401 → редирект на логин, 500 → показ ошибки), таймауты, retry логика. Middle-разработчик должен уметь создавать и настраивать единый API-клиент.',
    keyPoints: [
      'Единый API-клиент: централизованная настройка всех HTTP-запросов.',
      'Настройки: base URL, заголовки по умолчанию, interceptors, обработка ошибок.',
      'Interceptors: автоматическое добавление токенов, логирование, обработка ошибок.',
      'Преимущества: консистентность, простота поддержки, переиспользование логики.',
      'Реализация: создание клиента (axios.create или обёртка над fetch), настройка interceptors.',
      'Типизация: TypeScript типы для запросов и ответов, автодополнение.'
    ],
    tags: ['architecture', 'api', 'client', 'axios', 'intermediate'],
    examples: [
      {
        title: 'Создание API-клиента',
        code: `import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor: добавление токена
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// Response interceptor: обработка ошибок
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Редирект на логин
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;`
      },
      {
        title: 'Использование клиента',
        code: `import apiClient from './apiClient';

// Все запросы используют общие настройки
const users = await apiClient.get('/users');
const user = await apiClient.post('/users', { name: 'Иван' });

// Токен добавляется автоматически
// Ошибки обрабатываются автоматически`
      }
    ],
    relatedTopics: ['architecture-data-layer-basics', 'architecture-data-layer-facade'],
    funFact: 'Паттерн единого API-клиента стал стандартом в фронтенд-разработке благодаря axios и его interceptors. До этого каждый разработчик настраивал запросы по-своему, что приводило к несогласованности. Единый клиент решает эту проблему.'
  },
  {
    id: 'architecture-data-layer-typing',
    title: 'Типизация API',
    difficulty: 'intermediate',
    description: 'Типизация API — использование TypeScript для типизации запросов и ответов. Это обеспечивает автодополнение, проверку типов на этапе компиляции, рефакторинг без ошибок. Типы генерируются из OpenAPI/Swagger схем или пишутся вручную.\n\nПодходы: ручная типизация (для небольших API), генерация из схем (для больших API), использование библиотек (tRPC, GraphQL Code Generator). Middle-разработчик должен уметь типизировать API и использовать автодополнение для повышения продуктивности.',
    keyPoints: [
      'Типизация API: TypeScript типы для запросов и ответов.',
      'Преимущества: автодополнение, проверка типов, рефакторинг без ошибок.',
      'Подходы: ручная типизация, генерация из OpenAPI/Swagger, библиотеки (tRPC).',
      'Типы запросов: параметры URL, body, query параметры.',
      'Типы ответов: успешный ответ, ошибки, разные статусы.',
      'Генерация: openapi-generator, swagger-codegen для автоматической генерации типов.'
    ],
    tags: ['architecture', 'api', 'typescript', 'typing', 'intermediate'],
    examples: [
      {
        title: 'Ручная типизация',
        code: `// Типы для API
interface User {
  id: string;
  name: string;
  email: string;
}

interface CreateUserRequest {
  name: string;
  email: string;
}

// Типизированные функции
async function getUsers(): Promise<User[]> {
  const response = await apiClient.get<User[]>('/users');
  return response.data;
}

async function createUser(data: CreateUserRequest): Promise<User> {
  const response = await apiClient.post<User>('/users', data);
  return response.data;
}

// Автодополнение и проверка типов`
      },
      {
        title: 'Генерация типов из OpenAPI',
        code: `// openapi.yaml
paths:
  /users:
    get:
      responses:
        '200':
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'

// Генерация типов
// npx openapi-generator-cli generate -i openapi.yaml -g typescript-axios

// Использование сгенерированных типов
import { UsersApi, User } from './generated';

const api = new UsersApi();
const users: User[] = await api.getUsers();`
      }
    ],
    relatedTopics: ['architecture-data-layer-api-client'],
    funFact: 'Типизация API стала стандартом с ростом популярности TypeScript. Многие компании генерируют типы из OpenAPI схем, что обеспечивает синхронизацию между фронтендом и бэкендом. Это уменьшает количество ошибок и ускоряет разработку.'
  }
];
