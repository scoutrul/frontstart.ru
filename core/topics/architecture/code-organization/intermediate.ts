import { Topic } from '../../../types';

export const CODE_ORGANIZATION_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-code-organization-feature',
    title: 'Feature-Sliced Design',
    difficulty: 'intermediate',
    description: 'Feature-Sliced Design (FSD) — методология организации кода по фичам и слоям. Код группируется по бизнес-логике (фичам), а не по типам файлов. Слои: app (инициализация), pages (страницы), widgets (сложные компоненты), features (фичи), entities (сущности), shared (общее).\n\nFSD решает проблему масштабирования: файлы одной фичи находятся рядом, легко найти и изменить. Это упрощает работу в больших командах, где разные разработчики работают над разными фичами. Middle-разработчик должен понимать принципы FSD и применять их в проектах среднего размера.',
    keyPoints: [
      'Feature-Sliced Design: организация по фичам и слоям, а не по типам файлов.',
      'Слои: app (инициализация), pages (страницы), widgets (сложные компоненты), features (фичи), entities (сущности), shared (общее).',
      'Принцип зависимостей: слои могут зависеть только от слоёв ниже (app → pages → widgets → features → entities → shared).',
      'Преимущества: масштабируемость, изоляция фич, легко работать в команде.',
      'Применение: проекты среднего и большого размера, команды от 3+ разработчиков.',
      'Структура: src/app/, src/pages/, src/widgets/, src/features/, src/entities/, src/shared/.'
    ],
    tags: ['architecture', 'structure', 'fsd', 'feature-sliced', 'intermediate'],
    examples: [
      {
        title: 'Структура FSD',
        code: `src/
  app/
    providers.tsx
    router.tsx
  pages/
    home/
      index.tsx
    profile/
      index.tsx
  widgets/
    header/
      ui/
        Header.tsx
      index.ts
    sidebar/
      ui/
        Sidebar.tsx
      index.ts
  features/
    auth/
      ui/
        LoginForm.tsx
      model/
        useAuth.ts
      index.ts
    user-profile/
      ui/
        UserCard.tsx
      model/
        useUserProfile.ts
      index.ts
  entities/
    user/
      ui/
        UserAvatar.tsx
      model/
        types.ts
      index.ts
  shared/
    ui/
      Button.tsx
      Input.tsx
    lib/
      api/
        client.ts
    utils/
      formatDate.ts`
      }
    ],
    relatedTopics: ['architecture-code-organization-basics', 'architecture-code-organization-advanced'],
    funFact: 'Feature-Sliced Design был создан в 2021 году для решения проблем масштабирования фронтенд-проектов. Он стал популярным в русскоязычном сообществе и используется в крупных проектах. FSD вдохновлён Clean Architecture и Domain-Driven Design, адаптированными для фронтенда.',
    isFrontendEssential: true
  },
  {
    id: 'architecture-code-organization-domains',
    title: 'Группировка по доменам',
    difficulty: 'intermediate',
    description: 'Группировка по доменам — организация кода по бизнес-доменам (user, order, product). Вся логика домена (компоненты, API, состояние) находится в одной папке. Это упрощает понимание и изменение кода, так как всё, что относится к домену, находится в одном месте.\n\nПодход похож на FSD, но фокус на доменах, а не на фичах. Домены — это сущности бизнес-логики (пользователь, заказ, товар), фичи — это действия пользователя (авторизация, создание заказа). Middle-разработчик должен понимать разницу и выбирать подходящий подход.',
    keyPoints: [
      'Группировка по доменам: организация по бизнес-доменам (user, order, product).',
      'Структура домена: компоненты, API, состояние, типы — всё в одной папке.',
      'Преимущества: всё, что относится к домену, в одном месте, легко понять и изменить.',
      'Применение: проекты с чётко определёнными доменами, команды работают по доменам.',
      'Разница с FSD: домены — сущности, FSD — фичи (действия пользователя).',
      'Структура: src/domains/user/, src/domains/order/, src/domains/product/.'
    ],
    tags: ['architecture', 'structure', 'domains', 'ddd', 'intermediate'],
    examples: [
      {
        title: 'Структура по доменам',
        code: `src/
  domains/
    user/
      components/
        UserCard.tsx
        UserList.tsx
      api/
        userApi.ts
      store/
        userSlice.ts
      types/
        user.ts
      index.ts
    order/
      components/
        OrderCard.tsx
        OrderList.tsx
      api/
        orderApi.ts
      store/
        orderSlice.ts
      types/
        order.ts
      index.ts
  shared/
    components/
      Button.tsx
    utils/
      formatDate.ts`
      }
    ],
    relatedTopics: ['architecture-code-organization-feature'],
    funFact: 'Группировка по доменам пришла из Domain-Driven Design (DDD), методологии, созданной Эриком Эвансом в 2003 году. DDD изначально была для бэкенда, но принципы отлично применимы и к фронтенду. Многие крупные компании используют доменную организацию для фронтенд-проектов.',
    isFrontendEssential: true
  }
];
