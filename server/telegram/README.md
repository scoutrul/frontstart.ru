# Telegram Bot - Автопостинг статей

## Структура

```
telegram/
├── client.js          # API клиент Telegram Bot
├── formatArticle.js   # Форматирование статей для Telegram
├── posting.js         # Логика постинга (основной файл)
├── postingLog.js      # Журнал постинга
└── schedule.js        # Cron-расписание
```

## Основные функции

### `posting.js`
- `postRandomTopic()` - Публикация случайной статьи
- `postTopicById(id)` - Публикация конкретной статьи по ID

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

## Использование

### CLI команды

```bash
# Постить случайную статью
npm run post:random

# Постить конкретную статью по ID
npm run post:topic architecture-component-kiss-dry
```

### API эндпоинты

- `POST /api/telegram/trigger` - Публикация случайной статьи
- `POST /api/telegram/post-topic` - Публикация конкретной статьи
- `GET /api/telegram/logs` - Получение журнала постинга

Все эндпоинты требуют заголовок: `x-telegram-secret: <TELEGRAM_SECRET>`

## Cron-расписание

По умолчанию:
- 09:00 МСК (06:00 UTC)
- 18:00 МСК (15:00 UTC)

Настройка через `.env`:
```
TELEGRAM_CRON_1=0 6 * * *
TELEGRAM_CRON_2=0 15 * * *
```

Включение в `server/index.js`:
```javascript
setupTelegramCron(); // Раскомментировать
```
