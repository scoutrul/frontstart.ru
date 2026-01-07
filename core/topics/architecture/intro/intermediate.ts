import { Topic } from '../../../types';

export const ARCHITECTURE_INTRO_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'architecture-intro-history-mvc-spa',
    title: 'История MVC → SPA',
    difficulty: 'intermediate',
    description: 'MVC (Model-View-Controller) появился в 1970-х для десктопных приложений и стал стандартом для веб-разработки в 2000-х. Сервер рендерил HTML (View), обрабатывал запросы (Controller), работал с данными (Model). С появлением AJAX и JavaScript-фреймворков архитектура сместилась на клиент: теперь View и Controller на фронтенде, а сервер предоставляет только API (Model).\n\nПереход от MVC к SPA изменил роль фронтендера: из "верстальщика" он стал "инженером интерфейсов", который проектирует состояние приложения, управляет данными и обеспечивает производительность. Понимание эволюции помогает выбирать правильные паттерны для современных проектов.',
    keyPoints: [
      'MVC (Model-View-Controller): классическая архитектура, разделяет данные (Model), представление (View) и логику (Controller).',
      'Серверный MVC: сервер рендерит HTML, обрабатывает запросы, работает с БД. Фронтенд — только HTML/CSS/JS.',
      'Клиентский MVC: View и Controller на фронтенде, сервер предоставляет API. Фреймворки (React, Vue) реализуют этот подход.',
      'Эволюция: от серверного рендеринга (2000-е) к клиентскому (2010-е) благодаря AJAX и JavaScript-фреймворкам.',
      'Паттерн BFF (Backend for Frontend): промежуточный слой между фронтендом и микросервисами, адаптирует API под нужды клиента.',
      'Выбор фреймворка: зависит от задач — React для гибкости, Vue для простоты, Angular для enterprise-решений.',
      'Современный подход: гибридный — SSR для первой загрузки, CSR для интерактивности (Next.js, Nuxt.js).'
    ],
    tags: ['architecture', 'mvc', 'spa', 'history', 'patterns', 'intermediate'],
    examples: [
      {
        title: 'Серверный MVC: классический подход',
        code: `// Серверный MVC (Ruby on Rails, Django, Laravel)

// Controller (на сервере)
class UsersController {
  def index
    @users = User.all  // Model: данные из БД
    render 'users/index'  // View: рендерит HTML
  end
end

// View (HTML шаблон на сервере)
// users/index.html.erb
<% @users.each do |user| %>
  <div><%= user.name %></div>
<% end %>

// Результат: сервер возвращает готовый HTML
// GET /users → <html>...готовый HTML...</html>`
      },
      {
        title: 'Клиентский MVC: SPA подход',
        code: `// Клиентский MVC (React, Vue, Angular)

// Model: данные из API
const users = await fetch('/api/users').then(r => r.json());

// View: компонент React
function UsersList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    // Controller: логика загрузки данных
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  
  // View: рендеринг интерфейса
  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

// Результат: сервер возвращает JSON, фронтенд рендерит`
      },
      {
        title: 'BFF (Backend for Frontend): адаптация API',
        code: `// Проблема: много микросервисов, фронтенд получает сложные данные

// Без BFF: фронтенд делает много запросов
const user = await fetch('/api/users/1');
const orders = await fetch('/api/orders?userId=1');
const reviews = await fetch('/api/reviews?userId=1');
// 3 запроса, сложная логика на фронтенде

// С BFF: один запрос, BFF агрегирует данные
const profile = await fetch('/bff/profile/1');
// BFF внутри делает запросы к микросервисам и объединяет

// BFF (Backend for Frontend)
app.get('/bff/profile/:id', async (req, res) => {
  const [user, orders, reviews] = await Promise.all([
    userService.get(req.params.id),
    orderService.getByUser(req.params.id),
    reviewService.getByUser(req.params.id)
  ]);
  
  // Адаптируем данные под нужды фронтенда
  res.json({
    user,
    orders: orders.map(o => ({ id: o.id, total: o.total })),
    reviews: reviews.slice(0, 5) // Только последние 5
  });
});`
      }
    ],
    relatedTopics: ['architecture-intro-spa-vs-mpa', 'architecture-bff-backend-basics'],
    funFact: ['Концепцию BFF (Backend for Frontend) придумали в SoundCloud в 2015 году, когда у них было 5 разных клиентов (веб, iOS, Android и т.д.) и один бэкенд, который всех обслуживал плохо. BFF решил проблему, создав отдельный слой для каждого клиента.', 'Первая версия Angular.js была создана инженером Google Мишко Хевери всего за 2 недели как side-проект. Позже она стала основой для Angular 2+, который используется в enterprise-проектах по всему миру.']
  },
  {
    id: 'architecture-intro-framework-choice',
    title: 'Выбор фреймворка',
    difficulty: 'intermediate',
    description: 'Выбор фреймворка зависит от задач проекта, размера команды и требований. React — гибкий и популярный, с огромной экосистемой. Vue — простой в изучении, с отличной документацией. Angular — полнофункциональный, для больших enterprise-проектов. Svelte — компилируется в ванильный JS, минимальный bundle. Каждый фреймворк решает разные задачи и имеет свою философию.\n\nКритерии выбора: сложность проекта (простой сайт vs сложное приложение), опыт команды (новички vs эксперты), требования к производительности (размер bundle, скорость рендеринга), экосистема (библиотеки, инструменты, сообщество). Не существует "лучшего" фреймворка — есть подходящий для конкретной задачи.',
    keyPoints: [
      'React: компонентный подход, виртуальный DOM, огромная экосистема, гибкость в выборе инструментов.',
      'Vue: простота изучения, отличная документация, реактивность из коробки, хорошая производительность.',
      'Angular: полнофункциональный фреймворк, TypeScript из коробки, dependency injection, для enterprise.',
      'Svelte: компилируется в ванильный JS, минимальный bundle, нет runtime, отличная производительность.',
      'Критерии выбора: сложность проекта, опыт команды, требования к производительности, экосистема.',
      'React подходит для: гибких проектов, больших команд, когда нужен выбор инструментов.',
      'Vue подходит для: быстрого старта, небольших команд, проектов средней сложности.',
      'Angular подходит для: enterprise-проектов, больших команд, когда нужна структура из коробки.',
      'Svelte подходит для: проектов с требованиями к размеру bundle, когда важна производительность.'
    ],
    tags: ['architecture', 'frameworks', 'react', 'vue', 'angular', 'svelte', 'intermediate', 'choice'],
    examples: [
      {
        title: 'React: компонентный подход',
        code: `// React: декларативный, компонентный подход

function UserCard({ user }) {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

// Переиспользование компонентов
function UserList({ users }) {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

// Преимущества: гибкость, огромная экосистема, виртуальный DOM`
      },
      {
        title: 'Vue: простота и реактивность',
        code: `// Vue: простота синтаксиса, реактивность из коробки

<template>
  <div class="user-card">
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<script>
export default {
  props: ['user']
}
</script>

// Преимущества: простота изучения, отличная документация,
// реактивность без дополнительных библиотек`
      },
      {
        title: 'Angular: полнофункциональный фреймворк',
        code: `// Angular: TypeScript, dependency injection, модули

@Component({
  selector: 'app-user-card',
  template: \`
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
    </div>
  \`
})
export class UserCardComponent {
  @Input() user: User;
}

// Преимущества: структура из коробки, TypeScript,
// dependency injection, для enterprise-проектов`
      },
      {
        title: 'Сравнение: размер bundle',
        code: `// Размер bundle (примерно, gzipped):

// React + ReactDOM: ~45 KB
import React from 'react';
import ReactDOM from 'react-dom';

// Vue: ~35 KB
import { createApp } from 'vue';

// Angular: ~150 KB (но включает много из коробки)
import { Component } from '@angular/core';

// Svelte: ~0 KB runtime (компилируется в ванильный JS)
// Но нужен компилятор во время разработки

// Выбор зависит от требований к размеру bundle`
      }
    ],
    relatedTopics: ['architecture-intro-history-mvc-spa', 'architecture-component-architecture-basics'],
    funFact: 'Vue.js создал один человек — Эван Ю, когда работал в Google над Angular.js и решил, что может сделать фреймворк проще. Он взял лучшее из Angular (директивы, шаблоны) и React (компонентный подход) и создал фреймворк, который стал одним из самых популярных в мире.',
    isFrontendEssential: true
  }
];
