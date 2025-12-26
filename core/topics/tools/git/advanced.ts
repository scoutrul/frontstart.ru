import { Topic } from '../../../types';

export const GIT_ADVANCED_TOPICS: Topic[] = [
{
    id: 'git-cherry-pick',
    title: 'Git: Cherry-pick',
    difficulty: 'advanced',
    description: 'git cherry-pick применяет изменения из указанного коммита в текущую ветку. Полезно для выборочного переноса коммитов между ветками. Создает новый коммит с теми же изменениями, но другим хешем. Может вызвать конфликты, которые нужно разрешить. Можно cherry-pick несколько коммитов за раз.',
    keyPoints: [
      'cherry-pick применяет изменения из коммита в текущую ветку.',
      'Создает новый коммит с теми же изменениями, но другим хешем.',
      'Полезно для выборочного переноса коммитов между ветками.',
      'Может вызвать конфликты, которые нужно разрешить.',
      'Можно cherry-pick диапазон коммитов.'
    ],
    tags: ['git', 'version-control', 'cherry-pick', 'advanced', 'tools', 'productivity'],
    examples: [
      {
        title: "Базовый cherry-pick",
        code: `# Применить коммит в текущую ветку
git cherry-pick abc123

# После применения создастся новый коммит
# с теми же изменениями, но другим хешем`
      },
      {
        title: "Cherry-pick диапазона",
        code: `# Применить несколько коммитов
git cherry-pick abc123 def456

# Применить диапазон (не включая начальный)
git cherry-pick abc123..def456

# Применить диапазон (включая начальный)
git cherry-pick abc123^..def456`
      },
      {
        title: "Cherry-pick с конфликтами",
        code: `# Если есть конфликты
git cherry-pick abc123
# CONFLICT (content): Merge conflict in file.js

# Разрешить конфликты
# Затем:
git add file.js
git cherry-pick --continue

# Или отменить
git cherry-pick --abort`
      },
      {
        title: "Cherry-pick без коммита",
        code: `# Применить изменения, но не коммитить
git cherry-pick -n abc123
# или
git cherry-pick --no-commit abc123

# Изменения в staging area
# Можно отредактировать перед коммитом`
      },
      {
        title: "Использование в workflow",
        code: `# Перенести hotfix из main в старую версию
git checkout v1.0
git cherry-pick hotfix-commit

# Перенести несколько коммитов из feature в main
git checkout main
git cherry-pick feature-commit1 feature-commit2`
      }
    ],
    relatedTopics: ['git-rebase', 'git-reflog'],
  },
{
    id: 'git-reflog',
    title: 'Git: Reflog',
    difficulty: 'advanced',
    description: 'reflog хранит историю всех перемещений HEAD и ссылок. Позволяет восстановить "потерянные" коммиты после reset, rebase, удаления веток. reflog локальный, не синхронизируется с удаленным репозиторием. Записи хранятся ограниченное время (по умолчанию 90 дней). Полезен для восстановления после ошибок.',
    keyPoints: [
      'reflog хранит историю всех перемещений HEAD.',
      'Позволяет восстановить "потерянные" коммиты.',
      'Локальный, не синхронизируется с удаленным репозиторием.',
      'Записи хранятся ограниченное время (90 дней по умолчанию).',
      'Полезен для восстановления после reset, rebase, удаления веток.'
    ],
    tags: ['git', 'version-control', 'reflog', 'recovery', 'advanced', 'tools', 'productivity'],
    examples: [
      {
        title: "Просмотр reflog",
        code: `# Показать все записи reflog
git reflog

# Показать последние 10 записей
git reflog -10

# Reflog для конкретной ветки
git reflog show branch-name

# Reflog для всех веток
git reflog show --all`
      },
      {
        title: "Восстановление после reset",
        code: `# Случайно сделали reset --hard
git reset --hard HEAD~3

# Найти потерянный коммит
git reflog
# abc123 HEAD@{0}: reset: moving to HEAD~3
# def456 HEAD@{1}: commit: важные изменения

# Восстановить
git reset --hard def456
# или
git reset --hard HEAD@{1}`
      },
      {
        title: "Восстановление удаленной ветки",
        code: `# Удалили ветку
git branch -D feature

# Найти последний коммит ветки
git reflog | grep feature

# Восстановить ветку
git checkout -b feature abc123
# или
git branch feature HEAD@{5}`
      },
      {
        title: "Восстановление после rebase",
        code: `# Сделали rebase, но нужно вернуться
git reflog

# Найти состояние до rebase
# abc123 HEAD@{10}: checkout: moving from main to feature
# def456 HEAD@{9}: rebase finished: returning to refs/heads/feature

# Вернуться к состоянию до rebase
git reset --hard HEAD@{10}`
      },
      {
        title: "Очистка reflog",
        code: `# Удалить старые записи (старше 90 дней)
git reflog expire --expire=now --all

# Удалить все записи reflog
git reflog expire --expire=now --all
git gc --prune=now

# Осторожно! Это удалит возможность восстановления`
      }
    ],
    relatedTopics: ['git-cherry-pick', 'git-hooks'],
  },
{
    id: 'git-hooks',
    title: 'Git: Hooks',
    difficulty: 'advanced',
    description: 'Hooks — скрипты, автоматически выполняемые при определенных событиях Git. Хранятся в .git/hooks/. Pre-commit выполняется перед коммитом, post-commit после. Можно использовать для проверки кода, запуска тестов, форматирования. Client-side hooks (локальные) и server-side hooks (на сервере). Можно использовать инструменты типа Husky для управления hooks.',
    keyPoints: [
      'Hooks — скрипты, выполняемые при событиях Git.',
      'Хранятся в .git/hooks/ (не коммитятся в репозиторий).',
      'Pre-commit: выполняется перед коммитом, может его отменить.',
      'Post-commit: выполняется после коммита.',
      'Можно использовать для проверки кода, тестов, форматирования.',
      'Husky упрощает управление hooks в проекте.'
    ],
    tags: ['git', 'version-control', 'hooks', 'automation', 'advanced', 'tools', 'productivity'],
    examples: [
      {
        title: "Доступные hooks",
        code: `# Pre-commit: перед коммитом
.git/hooks/pre-commit

# Post-commit: после коммита
.git/hooks/post-commit

# Pre-push: перед push
.git/hooks/pre-push

# Commit-msg: проверка сообщения коммита
.git/hooks/commit-msg

# И другие...`
      },
      {
        title: "Простой pre-commit hook",
        code: `#!/bin/sh
# .git/hooks/pre-commit

# Запустить линтер
npm run lint

# Если линтер вернул ошибку, отменить коммит
if [ $? -ne 0 ]; then
  echo "Линтер нашел ошибки. Коммит отменен."
  exit 1
fi

exit 0`
      },
      {
        title: "Pre-commit с проверкой тестов",
        code: `#!/bin/sh
# .git/hooks/pre-commit

echo "Запуск тестов..."

# Запустить тесты
npm test

if [ $? -ne 0 ]; then
  echo "Тесты не прошли. Коммит отменен."
  exit 1
fi

echo "Тесты прошли успешно!"
exit 0`
      },
      {
        title: "Commit-msg hook",
        code: `#!/bin/sh
# .git/hooks/commit-msg

# Проверить формат сообщения
commit_msg=$(cat "$1")

# Должно начинаться с типа: feat, fix, docs, etc.
if ! echo "$commit_msg" | grep -qE "^(feat|fix|docs|style|refactor|test|chore): "; then
  echo "Ошибка: сообщение должно начинаться с типа (feat, fix, docs, etc.)"
  exit 1
fi

exit 0`
      },
      {
        title: "Использование Husky",
        code: `# Установить Husky
npm install --save-dev husky

# Инициализировать
npx husky install

# Добавить pre-commit hook
npx husky add .husky/pre-commit "npm test"

# Добавить commit-msg hook
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

# Hooks хранятся в .husky/ и коммитятся в репозиторий`
      }
    ],
    relatedTopics: ['git-reflog', 'git-submodules'],
  },
{
    id: 'git-submodules',
    title: 'Git: Submodules',
    difficulty: 'advanced',
    description: 'Submodules позволяют включать один Git репозиторий как поддиректорию другого. Полезно для зависимостей, библиотек, общих компонентов. git submodule add добавляет submodule. git submodule update обновляет submodules. Работа с вложенными репозиториями требует осторожности. Можно использовать вместо этого monorepo или пакетные менеджеры.',
    keyPoints: [
      'Submodules позволяют включать один репозиторий в другой.',
      'Полезно для зависимостей, библиотек, общих компонентов.',
      'git submodule add добавляет submodule.',
      'git submodule update обновляет submodules.',
      'Работа с вложенными репозиториями требует осторожности.',
      'Альтернативы: monorepo, пакетные менеджеры.'
    ],
    tags: ['git', 'version-control', 'submodules', 'dependencies', 'advanced', 'tools', 'productivity'],
    examples: [
      {
        title: "Добавление submodule",
        code: `# Добавить submodule
git submodule add https://github.com/user/library.git libs/library

# Это создаст:
# - .gitmodules файл с конфигурацией
# - libs/library директорию с репозиторием`
      },
      {
        title: "Клонирование с submodules",
        code: `# Клонировать репозиторий с submodules
git clone --recursive https://github.com/user/project.git

# Или после клонирования
git clone https://github.com/user/project.git
cd project
git submodule init
git submodule update

# Или одной командой
git submodule update --init --recursive`
      },
      {
        title: "Обновление submodules",
        code: `# Обновить все submodules до последней версии
git submodule update --remote

# Обновить конкретный submodule
git submodule update --remote libs/library

# Обновить и закоммитить изменения
git submodule update --remote
git add .gitmodules libs/library
git commit -m "Обновить submodule"`
      },
      {
        title: "Работа с submodule",
        code: `# Перейти в submodule
cd libs/library

# Работать как с обычным репозиторием
git checkout -b feature
# ... изменения ...
git commit -m "Изменения в submodule"
git push origin feature

# Вернуться в основной репозиторий
cd ../..
git add libs/library
git commit -m "Обновить ссылку на submodule"`
      },
      {
        title: "Удаление submodule",
        code: `# 1. Удалить из .gitmodules
git rm --cached libs/library

# 2. Удалить из .git/config
git config -f .git/config --remove-section submodule.libs/library

# 3. Удалить директорию
rm -rf .git/modules/libs/library
rm -rf libs/library

# 4. Закоммитить
git commit -m "Удалить submodule"`
      }
    ],
    relatedTopics: ['git-hooks', 'git-workflow'],
  },
{
    id: 'git-workflow',
    title: 'Git: Workflow в команде',
    difficulty: 'advanced',
    description: 'Популярные workflow: Git Flow (main, develop, feature, release, hotfix ветки), GitHub Flow (простой, main + feature ветки), GitLab Flow (с environment ветками). Code review через Pull Requests. Защита веток, правила слияния. Соглашения о коммитах (Conventional Commits). Работа с большими командами требует четких правил.',
    keyPoints: [
      'Git Flow: сложный workflow с develop, feature, release, hotfix ветками.',
      'GitHub Flow: простой workflow с main и feature ветками.',
      'GitLab Flow: с environment ветками (staging, production).',
      'Code review через Pull Requests обязателен.',
      'Защита веток предотвращает прямые коммиты в main.',
      'Соглашения о коммитах улучшают читаемость истории.'
    ],
    tags: ['git', 'version-control', 'workflow', 'team', 'collaboration', 'advanced', 'tools', 'productivity'],
    examples: [
      {
        title: "Git Flow",
        code: `# Основные ветки
main        # Production код
develop     # Development код

# Вспомогательные ветки
feature/*   # Новая функциональность
release/*   # Подготовка к релизу
hotfix/*    # Срочные исправления

# Workflow:
# 1. feature/xxx -> develop
# 2. develop -> release/1.0
# 3. release/1.0 -> main + develop
# 4. hotfix/xxx -> main + develop`
      },
      {
        title: "GitHub Flow",
        code: `# Простой workflow
main        # Production код

# Workflow:
# 1. Создать feature ветку от main
git checkout -b feature/login

# 2. Работать, коммитить
git commit -m "Добавить форму входа"

# 3. Push и создать Pull Request
git push origin feature/login

# 4. Code review, merge в main
# 5. Удалить feature ветку`
      },
      {
        title: "Conventional Commits",
        code: `# Формат: <type>(<scope>): <subject>

# Типы:
feat: новая функциональность
fix: исправление бага
docs: изменения в документации
style: форматирование (не влияет на код)
refactor: рефакторинг
test: добавление тестов
chore: обновление зависимостей, конфигов

# Примеры:
git commit -m "feat(auth): добавить OAuth2"
git commit -m "fix(api): исправить обработку ошибок"
git commit -m "docs: обновить README"`
      },
      {
        title: "Защита веток",
        code: `# На GitHub/GitLab можно настроить:
# - Требовать Pull Request для merge
# - Требовать code review (минимум N одобрений)
# - Требовать прохождение CI/CD
# - Запретить force push
# - Запретить удаление ветки

# Это предотвращает случайные изменения в main`
      },
      {
        title: "Code Review Best Practices",
        code: `# Pull Request должен:
# - Иметь понятное описание
# - Включать скриншоты (для UI)
# - Проходить все тесты
# - Не иметь конфликтов
# - Следовать стилю кода проекта

# Reviewer должен проверить:
# - Логику изменений
# - Качество кода
# - Тесты
# - Документацию`
      }
    ],
    relatedTopics: ['git-submodules', 'git-remote-advanced'],
   }
];
