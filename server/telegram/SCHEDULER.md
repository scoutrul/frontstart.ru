# Система циклического расписания постов

## Быстрый старт

```bash
# Предпросмотр расписания на неделю
npm run post:preview

# Предпросмотр на 14 дней
npm run post:preview 14

# Отправить 4 поста по расписанию
npm run post:schedule
```

## Логика работы

### Ежедневное расписание

Каждый день публикуется **4 поста**:

1. **1 гуманитарный пост** — чередуются разделы:
   - `computer-science` (информатика)
   - `hiring` (найм в IT)

2. **3 технических поста** — скользящее окно по 9 разделам:
   - `optimization`
   - `security`
   - `frameworks`
   - `architecture`
   - `typescript`
   - `javascript`
   - `markup`
   - `tools`
   - `network`

### Принцип скользящего окна

Каждый день берутся **3 последовательных** технических раздела, затем окно сдвигается на 1:

```
День 1: [optimization, security, frameworks]
День 2:              [security, frameworks, architecture]
День 3:                        [frameworks, architecture, typescript]
День 4:                                   [architecture, typescript, javascript]
...
День 9:                                                     [network, optimization, security]
День 10: [optimization, security, frameworks]  ← цикл замкнулся
```

**Эффект**: каждый технический раздел появляется **3 дня подряд**, создавая ощущение погружения в тему.

### Последовательность внутри разделов

Внутри каждого мета-раздела темы идут **строго по порядку**:

- Первый пост из раздела → тема #0
- Второй пост из раздела → тема #1
- И так далее

При достижении конца раздела указатель **сбрасывается в начало** (цикличность).

## Состояние системы

Хранится в `server/posted-topics.json`:

```json
{
  "cycleDay": 0,                    // Текущий день технического цикла (0-8)
  "humanitarianIndex": 0,           // Текущий гуманитарный раздел (0=CS, 1=hiring)
  "metaCategoryPointers": {         // Позиция внутри каждого раздела
    "computer-science": 5,          // Следующая тема — 6-я по счёту
    "hiring": 3,
    "optimization": 2,
    "security": 10,
    // ... остальные
  },
  "lastPostDate": "2026-01-10",
  "posted": ["topic-id-1", ...]     // История опубликованных тем
}
```

## Конфигурация

Настройки в `server/config/posting.js`:

```javascript
export const POSTING_CONFIG = {
  humanitarian: ['computer-science', 'hiring'],
  technical: ['optimization', 'security', ...],
  postsPerDay: {
    humanitarian: 1,
    technical: 3
  },
  resetOnEnd: true,              // Сбрасывать указатель в начало
  delayBetweenPosts: 2000,       // Задержка между постами (мс)
  defaultPreviewDays: 7          // Дней для превью по умолчанию
};
```

## Детерминированность

Система **полностью детерминирована**:

- ✅ Нет рандома
- ✅ При одинаковом состоянии → одинаковый результат
- ✅ Предсказуемая последовательность
- ✅ Масштабируемость (легко добавить новый раздел)

## Масштабирование

### Добавить новый технический раздел

1. Открыть `server/telegram/scheduler.js`
2. Добавить ID в массив `TECHNICAL`
3. Готово! Логика адаптируется автоматически

### Добавить новый гуманитарный раздел

1. Открыть `server/telegram/scheduler.js`
2. Добавить ID в массив `HUMANITARIAN`
3. Система начнёт чередовать все разделы по кругу

### Изменить количество постов

Отредактировать `server/config/posting.js`:

```javascript
postsPerDay: {
  humanitarian: 2,  // Теперь 2 гуманитарных
  technical: 4      // И 4 технических
}
```

Логика в `scheduler.js` останется той же, но нужно будет адаптировать `planDailyPosts()`.

## Тестирование

Запустить тестовый скрипт:

```bash
npx tsx telegram/test-cycle.js
```

Проверяет:
- ✅ Цикл 0-8 повторяется корректно
- ✅ Гуманитарные разделы чередуются
- ✅ Каждый технический раздел появляется 3 дня подряд
- ✅ Замыкание цикла на 9-й день

## API

### `planDailyPosts(state, topicsByMeta, resetOnEnd)`

Планирует посты на один день.

**Вход:**
- `state` — текущее состояние системы
- `topicsByMeta` — темы, сгруппированные по мета-разделам
- `resetOnEnd` — сбрасывать ли указатель при достижении конца

**Выход:**
```javascript
{
  posts: [
    {
      topic: { id, title, ... },
      metaCategoryId: 'computer-science',
      position: 5,
      type: 'humanitarian'
    },
    // ... ещё 3 поста
  ],
  newState: { ... }  // Обновлённое состояние
}
```

### `previewNextPosts(state, topicsByMeta, days, resetOnEnd)`

Предпросмотр расписания на N дней вперёд.

**Вход:**
- `state` — текущее состояние
- `topicsByMeta` — темы по мета-разделам
- `days` — количество дней для превью
- `resetOnEnd` — сбрасывать ли указатель

**Выход:**
```javascript
[
  {
    day: 1,
    date: '2026-01-10',
    cycleDay: 0,
    humanitarianIndex: 0,
    posts: [...]
  },
  // ... остальные дни
]
```

## Интеграция с cron

Для автоматической публикации по расписанию:

```javascript
// server/telegram/schedule.js
import cron from 'node-cron';
import { postDailySchedule } from './posting.js';

export function setupTelegramCron() {
  // Каждый день в 09:00 МСК
  cron.schedule('0 6 * * *', async () => {
    console.log('Running scheduled posting...');
    await postDailySchedule();
  });
}
```

## Логирование

Все запуски логируются в `server/posting-log.json`:

```json
{
  "timestamp": "2026-01-10T12:00:00Z",
  "type": "scheduled",
  "status": "success",
  "cycleDay": 3,
  "humanitarianIndex": 1,
  "posts": [
    {
      "topicId": "hiring-reality-statistics",
      "metaCategoryId": "hiring",
      "position": 1,
      "type": "humanitarian",
      "status": "success",
      "messageId": 123
    },
    // ... остальные посты
  ]
}
```

## Troubleshooting

### Посты не в том порядке

Проверить `posted-topics.json` — возможно, состояние сбилось. Можно сбросить вручную:

```json
{
  "cycleDay": 0,
  "humanitarianIndex": 0,
  "metaCategoryPointers": {}
}
```

### Раздел закончился

Если `resetOnEnd: true` (по умолчанию), указатель автоматически сбросится в 0.

### Хочу начать с определённого дня цикла

Отредактировать `posted-topics.json`:

```json
{
  "cycleDay": 5,  // Начать с 6-го дня цикла
  ...
}
```
