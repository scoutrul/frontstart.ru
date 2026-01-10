# Telegram Bot - Автопостинг статей

## Структура

```
telegram/
├── client.js          # API клиент Telegram Bot
├── formatArticle.js   # Форматирование статей для Telegram
├── posting.js         # Логика постинга (основной файл)
├── postingLog.js      # Журнал постинга
├── scheduler.js       # Циклическое расписание постов
├── schedule.js        # Cron-расписание
└── cli.js             # CLI интерфейс
```

## Основные функции

### `posting.js`
- `postRandomTopic()` - Публикация случайной статьи
- `postTopicById(id)` - Публикация конкретной статьи по ID
- `postDailySchedule()` - Публикация 4 постов по расписанию (1 гуманитарный + 3 технических)

### `scheduler.js`
- `planDailyPosts(state, topicsByMeta)` - Планирование постов на день
- `previewNextPosts(state, topicsByMeta, days)` - Предпросмотр расписания на N дней
- `formatPreview(preview)` - Форматирование превью для вывода

### `client.js`
- `sendMessage(text)` - Отправка сообщения в канал
- `sendComment(text, replyToMessageId)` - Отправка комментария в группу обсуждений
- `getDiscussionMessageId()` - Получение ID сообщения в группе обсуждений

### `formatArticle.js`
- `formatArticleForTelegram(topic)` - Форматирование основного поста
- `formatExampleForComment(example)` - Форматирование примера для комментария

## Логика работы

1. **Основной пост** - публикуется в канал без примеров
2. **Примеры** - все примеры идут в комментарии к посту
3. **Поиск message_id** - бот использует polling для получения ID сообщения в группе обсуждений

## Требования

Для работы комментариев бот должен:
1. Быть добавлен в группу обсуждений
2. Иметь права администратора
3. Privacy Mode выключен (`/setprivacy` через @BotFather → Disable)

## Система расписания

### Концепция

Система использует **детерминированный циклический алгоритм**:

- **4 поста в день**: 1 гуманитарный + 3 технических
- **Гуманитарные разделы** (2 шт): `computer-science`, `hiring` — чередуются по очереди
- **Технические разделы** (9 шт): `optimization`, `security`, `frameworks`, `architecture`, `typescript`, `javascript`, `markup`, `tools`, `network`
- **Скользящее окно**: каждый день технические разделы сдвигаются на 1 позицию
- **Эффект**: каждый технический раздел появляется 3 дня подряд, затем уходит

### Пример цикла

```
День 1: computer-science | optimization, security, frameworks
День 2: hiring           | security, frameworks, architecture
День 3: computer-science | frameworks, architecture, typescript
День 4: hiring           | architecture, typescript, javascript
...
День 9: computer-science | network, optimization, security
День 10: hiring          | optimization, security, frameworks  ← цикл замкнулся
```

### Состояние

Хранится в `server/posted-topics.json`:

```json
{
  "cycleDay": 0,                    // День технического цикла (0-8)
  "humanitarianIndex": 0,           // Индекс гуманитарного раздела (0-1)
  "metaCategoryPointers": {         // Позиция внутри каждого мета-раздела
    "computer-science": 5,
    "hiring": 3,
    "optimization": 2,
    ...
  }
}
```

## Использование

### CLI команды

```bash
# Постить случайную статью (старый метод)
npm run post:random

# Постить конкретную статью по ID
npm run post:topic architecture-component-kiss-dry

# Постить 4 статьи по расписанию (рекомендуется)
npm run post:schedule

# Предпросмотр расписания на 7 дней
npm run post:preview

# Предпросмотр расписания на N дней
npm run post:preview 14
```

### API эндпоинты

- `POST /api/telegram/trigger` - Публикация случайной статьи
- `POST /api/telegram/post-topic` - Публикация конкретной статьи
- `GET /api/telegram/logs` - Получение журнала постинга

Все эндпоинты требуют заголовок: `x-telegram-secret: <TELEGRAM_SECRET>`

## Плавающее расписание (Floating Schedule)

Система автоматически отправляет **4 поста в день** в случайное время внутри 4 временных окон:

- **Окно 1 (Утро)**: 01:00-05:00 UTC (04:00-08:00 МСК)
- **Окно 2 (День)**: 07:00-11:00 UTC (10:00-14:00 МСК)
- **Окно 3 (Вечер)**: 13:00-17:00 UTC (16:00-20:00 МСК)
- **Окно 4 (Ночь)**: 19:00-23:00 UTC (22:00-02:00 МСК)

### Как работает

1. При запуске сервера для каждого окна генерируется случайное время
2. Cron отправляет по одному посту в каждом окне
3. Посты идут строго по циклу (1 гуманитарный → 3 технических)
4. Время обновляется при перезапуске сервера

### Включение

Раскомментировать в `server/index.js`:
```javascript
setupTelegramCron(); // ← Убрать комментарий
```

### Ручное тестирование

```bash
# Отправить один пост (имитация cron)
npm run post:single

# Отправить все 4 поста сразу
npm run post:schedule
```
