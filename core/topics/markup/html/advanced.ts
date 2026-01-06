import { Topic } from '../../../types';

export const HTML_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'html-deep-accessibility',
    title: 'Глубокая доступность',
    difficulty: 'advanced',
    description: 'HTML — основа доступности (a11y). Правильная семантика и корректное использование ARIA критичны для assistive technologies. Важно понимать принцип "No ARIA is better than Bad ARIA" и использовать нативный HTML везде, где возможно. Глубокое понимание доступности требует знания WCAG принципов и тестирования с реальными пользователями.',
    keyPoints: [
      'HTML как основа a11y: семантическая разметка — фундамент доступности, ARIA — дополнение, не замена.',
      'Семантика и assistive technologies: скринридеры, клавиатурная навигация, переключатели — все полагаются на правильную разметку.',
      'Правило "No ARIA is better than Bad ARIA": неправильный ARIA хуже отсутствия, нативный HTML всегда предпочтительнее.',
      'Злоупотребление ARIA: добавление role на семантические теги, дублирование нативной семантики, неправильные атрибуты.',
      'Контекст использования: понимание, как assistive technologies интерпретируют разметку в разных контекстах.',
      'Тестирование: автоматические инструменты недостаточны, нужно тестирование с реальными пользователями и скринридерами.'
    ],
    tags: ['html', 'accessibility', 'a11y', 'aria', 'semantics', 'advanced', 'wcag'],
    examples: [
      {
        title: 'HTML как основа доступности',
        code: `<!-- ПРАВИЛЬНО: нативный HTML -->
<nav>
  <ul>
    <li><a href="/">Главная</a></li>
    <li><a href="/about">О нас</a></li>
  </ul>
</nav>

/* <nav> уже имеет role="navigation",
   скринридеры понимают структуру */


<!-- ПЛОХО: избыточный ARIA -->
<nav role="navigation">
  <ul role="list">
    <li role="listitem">
      <a role="link" href="/">Главная</a>
    </li>
  </ul>
</nav>

/* Все role избыточны,
   нативный HTML уже имеет семантику */


<!-- ПЛОХО: неправильный ARIA -->
<div role="button" onclick="click()">
  Кнопка
</div>

/* Лучше использовать <button>,
   но если нужен div, добавь:
   - tabindex="0" для клавиатуры
   - обработку Enter/Space
   - aria-label если нужно */`
      },
      {
        title: 'Правило "No ARIA is better than Bad ARIA"',
        code: `<!-- ПЛОХО: неправильный ARIA -->
<div 
  role="button" 
  aria-label="Кнопка"
  onclick="handleClick()"
>
  Нажми меня
</div>

/* Проблемы:
   - Нет tabindex (недоступна с клавиатуры)
   - Нет обработки Enter/Space
   - Лучше использовать <button> */


<!-- ПРАВИЛЬНО: нативный HTML -->
<button onclick="handleClick()">
  Нажми меня
</button>

/* Нативный button:
   - Доступен с клавиатуры
   - Правильная семантика
   - Работает везде */


<!-- ЕСЛИ НУЖЕН КАСТОМНЫЙ ЭЛЕМЕНТ -->
<div
  role="button"
  tabindex="0"
  aria-label="Открыть меню"
  onclick="openMenu()"
  onkeydown="if(event.key==='Enter'||event.key===' ') openMenu()"
>
  Меню
</div>

/* Полная реализация:
   - role="button"
   - tabindex="0"
   - Обработка клавиатуры
   - aria-label для описания */`
      },
      {
        title: 'Злоупотребление ARIA',
        code: `<!-- ПЛОХО: role на семантическом теге -->
<nav role="navigation">
  <a href="/">Главная</a>
</nav>

/* <nav> уже имеет role="navigation",
   дополнительный role избыточен */


<!-- ПЛОХО: дублирование семантики -->
<button role="button" aria-label="Кнопка">Клик</button>

/* role="button" избыточен,
   aria-label дублирует видимый текст */


<!-- ПЛОХО: неправильные атрибуты -->
<div role="checkbox" aria-checked="true" onclick="toggle()">
  Чекбокс
</div>

/* Лучше использовать <input type="checkbox">,
   но если нужен div, добавь:
   - tabindex="0"
   - Обработку клавиатуры
   - Правильное управление aria-checked */


<!-- ПРАВИЛЬНО: минимальный ARIA -->
<button aria-label="Закрыть">
  <span aria-hidden="true">×</span>
</button>

/* aria-label только когда нужно,
   aria-hidden для декоративных элементов */`
      },
      {
        title: 'Контекст и assistive technologies',
        code: `<!-- Семантика работает в контексте -->
<main>
  <article>
    <header>
      <h1>Заголовок</h1>
    </header>
    <p>Контент</p>
  </article>
</main>

/* Скринридер понимает:
   - main: основной контент
   - article: независимая статья
   - header: заголовок статьи
   - h1: главный заголовок */


<!-- Динамический контент требует ARIA -->
<div 
  role="alert" 
  aria-live="polite"
  id="notification"
>
  Сообщение появится здесь
</div>

<script>
  function showNotification(text) {
    const el = document.getElementById('notification');
    el.textContent = text;
    // Скринридер прочитает изменение
  }
</script>

/* aria-live="polite" сообщает скринридеру
   о динамических изменениях */`
      }
    ],
    relatedTopics: ['html-architecture', 'html-aria-intro'],
    funFact: 'Правило "No ARIA is better than Bad ARIA" появилось из-за реальных случаев, когда плохая ARIA ломала опыт для пользователей скринридеров. Скринридер объявляет <button> как "кнопка", а <div role="button"> — как "кнопка, группа", что может сбивать с толку.'
  },
  {
    id: 'html-architecture',
    title: 'HTML архитектура',
    difficulty: 'advanced',
    description: 'HTML служит контрактом между дизайнером, UX-специалистом и фронтенд-разработчиком. Подходы к вёрстке в рамках дизайн-системы требуют системного мышления: переиспользуемые компоненты, согласованные паттерны, масштабируемая структура. HTML архитектура влияет на поддерживаемость, производительность и доступность.',
    keyPoints: [
      'HTML как контракт: структура определяет, как дизайн превращается в код, как UX реализуется технически.',
      'Дизайн-системы: согласованные паттерны разметки, переиспользуемые компоненты, единые соглашения.',
      'Компонентное мышление: HTML структура компонентов должна быть предсказуемой и переиспользуемой.',
      'Масштабируемость: структура должна работать на маленьких и больших проектах, быть расширяемой.',
      'Поддерживаемость: понятная структура, соглашения по именованию, документация паттернов.',
      'Производительность: минимальная разметка, правильная семантика, оптимизация для рендеринга.'
    ],
    tags: ['html', 'architecture', 'design-systems', 'components', 'advanced', 'engineering'],
    examples: [
      {
        title: 'HTML как контракт',
        code: `<!-- ДИЗАЙНЕР даёт макет -->
/* Макет показывает:
   - Структуру компонентов
   - Иерархию контента
   - Состояния элементов */


<!-- UX-СПЕЦИАЛИСТ определяет поведение -->
/* UX определяет:
   - Интерактивность
   - Состояния (hover, active, disabled)
   - Обратную связь */


<!-- ФРОНТЕНДЕР реализует в HTML -->
<button class="primary-button" disabled>
  <span class="button-text">Отправить</span>
  <span class="button-loader" aria-hidden="true"></span>
</button>

/* HTML структура:
   - Семантически верно (<button>)
   - Поддерживает состояния (disabled)
   - Готова для стилизации
   - Доступна */`
      },
      {
        title: 'Компонентная структура в дизайн-системе',
        code: `<!-- КОМПОНЕНТ: Кнопка -->
<button class="btn btn--primary" type="button">
  <span class="btn__text">Текст</span>
</button>

/* Структура:
   - Блок: btn
   - Модификатор: btn--primary
   - Элемент: btn__text
   - Согласованное именование (БЭМ) */


<!-- КОМПОНЕНТ: Карточка -->
<article class="card">
  <header class="card__header">
    <h3 class="card__title">Заголовок</h3>
  </header>
  <div class="card__body">
    <p class="card__text">Контент</p>
  </div>
  <footer class="card__footer">
    <button class="btn btn--secondary">Действие</button>
  </footer>
</article>

/* Структура:
   - Семантически верно (<article>)
   - Компонентная структура
   - Переиспользуемые классы
   - Вложенные компоненты */`
      },
      {
        title: 'Масштабируемая структура',
        code: `<!-- МАЛЕНЬКИЙ ПРОЕКТ: простая структура -->
<main>
  <article>
    <h1>Заголовок</h1>
    <p>Контент</p>
  </article>
</main>

/* Простота важнее системы */


<!-- БОЛЬШОЙ ПРОЕКТ: системная структура -->
<main class="page">
  <article class="article">
    <header class="article__header">
      <h1 class="article__title">Заголовок</h1>
      <div class="article__meta">
        <time class="article__date">Дата</time>
        <span class="article__author">Автор</span>
      </div>
    </header>
    
    <div class="article__content">
      <section class="article__section">
        <h2 class="article__section-title">Раздел</h2>
        <p class="article__text">Текст</p>
      </section>
    </div>
    
    <footer class="article__footer">
      <nav class="article__tags">
        <a href="#" class="tag">Тег</a>
      </nav>
    </footer>
  </article>
</main>

/* Системная структура:
   - Согласованное именование
   - Переиспользуемые паттерны
   - Масштабируемая иерархия */`
      },
      {
        title: 'Оптимизация для рендеринга',
        code: `<!-- ПРАВИЛЬНО: минимальная разметка -->
<nav>
  <a href="/">Главная</a>
  <a href="/about">О нас</a>
</nav>

/* Минимум элементов,
   быстрый парсинг */


<!-- ПЛОХО: избыточная вложенность -->
<nav>
  <div>
    <ul>
      <li>
        <div>
          <a href="/">Главная</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

/* Избыточные обёртки,
   замедляют парсинг */


<!-- ПРАВИЛЬНО: семантика помогает браузеру -->
<main>
  <article>
    <h1>Заголовок</h1>
    <p>Контент</p>
  </article>
</main>

/* Семантика помогает браузеру
   оптимизировать рендеринг */`
      }
    ],
    relatedTopics: ['html-deep-accessibility']
  }
];
