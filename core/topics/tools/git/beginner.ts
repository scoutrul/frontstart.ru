import { Topic } from '../../../types';

export const GIT_BEGINNER_TOPICS: Topic[] = [
{
    id: 'git-init-clone',
    title: 'Git: Инициализация и клонирование',
    difficulty: 'beginner',
    description: 'git init создает новый репозиторий в текущей директории. git clone <url> клонирует удаленный репозиторий. .git директория содержит всю историю и метаданные. После клонирования создается рабочая копия с полной историей.',
    keyPoints: [
      'git init: создает новый репозиторий в текущей директории.',
      'git clone <url>: клонирует удаленный репозиторий локально.',
      '.git директория: содержит всю историю, конфигурацию, ветки.',
      'После клонирования получаешь полную копию с историей коммитов.'
    ],
    tags: ['git', 'version-control', 'basics', 'init', 'clone', 'tools', 'productivity'],
    examples: [
      {
        title: "Создание нового репозитория",
        code: `# Создать новый репозиторий
git init

# Создать репозиторий с именем
git init my-project

# Проверить статус
git status`
      },
      {
        title: "Клонирование репозитория",
        code: `# Клонировать публичный репозиторий
git clone https://github.com/user/repo.git

# Клонировать в конкретную папку
git clone https://github.com/user/repo.git my-folder

# Клонировать только определенную ветку
git clone -b main https://github.com/user/repo.git`
      },
      {
        title: "Проверка репозитория",
        code: `# Проверить, что это Git репозиторий
ls -la .git

# Посмотреть удаленные репозитории
git remote -v

# Посмотреть текущую ветку
git branch`
      }
    ],
    relatedTopics: ['git-add-commit', 'git-status-log'],
  },
{
    id: 'git-add-commit',
    title: 'Git: Добавление и коммиты',
    difficulty: 'beginner',
    description: 'git add добавляет файлы в staging area (индекс). git commit создает снимок изменений с сообщением. Рабочая директория → staging area → репозиторий. Коммит сохраняет состояние файлов на момент времени. Каждый коммит имеет уникальный хеш (SHA-1).',
    keyPoints: [
      'git add: добавляет файлы в staging area (индекс).',
      'git commit: создает снимок изменений с сообщением.',
      'Три области: рабочая директория → staging → репозиторий.',
      'Коммит имеет уникальный хеш SHA-1 (40 символов).',
      'Хорошие сообщения коммитов: краткие, описательные, в повелительном наклонении.'
    ],
    tags: ['git', 'version-control', 'basics', 'add', 'commit', 'staging', 'tools', 'productivity'],
    examples: [
      {
        title: "Базовый workflow",
        code: `# Проверить статус
git status

# Добавить все изменения
git add .

# Добавить конкретный файл
git add index.js

# Добавить несколько файлов
git add file1.js file2.js

# Создать коммит
git commit -m "Добавить функцию авторизации"

# Добавить и закоммитить одной командой (только для измененных файлов)
git commit -am "Исправить баг"`
      },
      {
        title: "Интерактивное добавление",
        code: `# Интерактивный режим (выбрать части файлов)
git add -p

# Добавить только часть изменений в файле
# Git покажет каждое изменение и спросит, добавить ли его`
      },
      {
        title: "Хорошие сообщения коммитов",
        code: `# Плохо
git commit -m "fix"
git commit -m "изменения"
git commit -m "WIP"

# Хорошо
git commit -m "Исправить ошибку валидации email"
git commit -m "Добавить компонент Button"
git commit -m "Обновить зависимости до версии 2.0"`
      }
    ],
    relatedTopics: ['git-init-clone', 'git-status-log'],
  },
{
    id: 'git-status-log',
    title: 'Git: Статус и история',
    difficulty: 'beginner',
    description: 'git status показывает состояние рабочей директории и staging area. git log показывает историю коммитов. git diff показывает различия между версиями. Важно понимать статусы файлов: untracked, modified, staged.',
    keyPoints: [
      'git status: показывает измененные, добавленные, неотслеживаемые файлы.',
      'git log: показывает историю коммитов с авторами, датами, сообщениями.',
      'git diff: показывает различия между версиями файлов.',
      'Статусы файлов: untracked (новый), modified (изменен), staged (в индексе).'
    ],
    tags: ['git', 'version-control', 'basics', 'status', 'log', 'diff', 'history', 'tools', 'productivity'],
    examples: [
      {
        title: "Проверка статуса",
        code: `# Полный статус
git status

# Короткий статус
git status -s

# Статус с игнорированием подмодулей
git status --ignore-submodules

# Вывод:
# ??  новый файл (untracked)
# M   измененный файл (modified)
# A   добавленный в индекс (staged)
# MM  изменен и в рабочей директории, и в индексе`
      },
      {
        title: "Просмотр истории",
        code: `# Полная история
git log

# Компактный вид
git log --oneline

# Граф веток
git log --oneline --graph --all

# Последние 5 коммитов
git log -5

# История конкретного файла
git log -- index.js`
      },
      {
        title: "Просмотр различий",
        code: `# Различия в рабочей директории
git diff

# Различия в staging area
git diff --staged
# или
git diff --cached

# Различия между коммитами
git diff HEAD~1 HEAD

# Различия конкретного файла
git diff file.js`
      }
    ],
    relatedTopics: ['git-add-commit', 'git-branches'],
  },
{
    id: 'git-branches',
    title: 'Git: Ветки',
    difficulty: 'beginner',
    description: 'Ветки позволяют работать над разными версиями кода параллельно. git branch создает/показывает ветки. git checkout переключается между ветками. main/master — основная ветка. Ветки — это указатели на коммиты. Создание ветки не копирует файлы, только создает новый указатель.',
    keyPoints: [
      'git branch: создает новую ветку или показывает список веток.',
      'git checkout: переключается на другую ветку.',
      'main/master: основная ветка проекта.',
      'Ветка — это указатель на коммит, не копия файлов.',
      'HEAD указывает на текущую ветку/коммит.'
    ],
    tags: ['git', 'version-control', 'basics', 'branches', 'checkout', 'tools', 'productivity'],
    examples: [
      {
        title: "Работа с ветками",
        code: `# Показать все ветки
git branch

# Показать все ветки (включая удаленные)
git branch -a

# Создать новую ветку
git branch feature-login

# Переключиться на ветку
git checkout feature-login

# Создать и переключиться одной командой
git checkout -b feature-login

# Удалить ветку (после merge)
git branch -d feature-login

# Принудительно удалить ветку
git branch -D feature-login`
      },
      {
        title: "Переименование ветки",
        code: `# Переименовать текущую ветку
git branch -m new-name

# Переименовать другую ветку
git branch -m old-name new-name`
      },
      {
        title: "Проверка веток",
        code: `# На какой ветке я нахожусь
git branch --show-current

# Последний коммит в каждой ветке
git branch -v

# Ветки, слитые в текущую
git branch --merged

# Ветки, не слитые в текущую
git branch --no-merged`
      }
    ],
    relatedTopics: ['git-status-log', 'git-merge'],
  },
{
    id: 'git-merge',
    title: 'Git: Слияние веток',
    difficulty: 'beginner',
    description: 'git merge объединяет изменения из одной ветки в другую. Fast-forward merge происходит, когда нет новых коммитов в целевой ветке. Merge commit создается, когда нужно объединить две истории. После merge можно удалить слитую ветку.',
    keyPoints: [
      'git merge: объединяет изменения из ветки в текущую.',
      'Fast-forward: когда целевая ветка не имеет новых коммитов.',
      'Merge commit: создается при объединении двух историй.',
      'После merge можно безопасно удалить слитую ветку.',
      'Всегда мержить в основную ветку (main/master).'
    ],
    tags: ['git', 'version-control', 'basics', 'merge', 'branches', 'tools', 'productivity'],
    examples: [
      {
        title: "Базовое слияние",
        code: `# Переключиться на основную ветку
git checkout main

# Слить feature ветку в main
git merge feature-login

# После успешного merge удалить ветку
git branch -d feature-login

# Если merge не удался, отменить
git merge --abort`
      },
      {
        title: "Fast-forward merge",
        code: `# Быстрое слияние (без merge commit)
git checkout main
git merge feature-login

# Если нужен merge commit даже при fast-forward
git merge --no-ff feature-login`
      },
      {
        title: "Слияние с конфликтами",
        code: `# При конфликтах Git остановит merge
git merge feature-login
# CONFLICT (content): Merge conflict in file.js

# Открыть файл и разрешить конфликты вручную
# После разрешения:
git add file.js
git commit

# Или использовать инструмент для разрешения
git mergetool`
      }
    ],
    relatedTopics: ['git-branches', 'git-remote'],
  },
{
    id: 'git-remote',
    title: 'Git: Удаленные репозитории',
    difficulty: 'beginner',
    description: 'Удаленный репозиторий — копия проекта на сервере (GitHub, GitLab). git remote показывает удаленные репозитории. origin — стандартное имя для основного удаленного репозитория. git push отправляет коммиты на сервер. git pull получает изменения с сервера.',
    keyPoints: [
      'git remote: показывает список удаленных репозиториев.',
      'origin: стандартное имя для основного удаленного репозитория.',
      'git push: отправляет коммиты на удаленный репозиторий.',
      'git pull: получает и сливает изменения с удаленного репозитория.',
      'git fetch: получает изменения без слияния.'
    ],
    tags: ['git', 'version-control', 'basics', 'remote', 'push', 'pull', 'github', 'tools', 'productivity'],
    examples: [
      {
        title: "Работа с удаленными репозиториями",
        code: `# Показать удаленные репозитории
git remote -v

# Добавить удаленный репозиторий
git remote add origin https://github.com/user/repo.git

# Изменить URL удаленного репозитория
git remote set-url origin https://github.com/user/new-repo.git

# Удалить удаленный репозиторий
git remote remove origin`
      },
      {
        title: "Отправка изменений",
        code: `# Отправить текущую ветку на origin
git push origin main

# Отправить и установить upstream
git push -u origin main

# После установки upstream можно просто
git push

# Отправить все ветки
git push --all origin`
      },
      {
        title: "Получение изменений",
        code: `# Получить изменения без слияния
git fetch origin

# Получить и слить изменения
git pull origin main

# Или просто (если upstream установлен)
git pull

# Получить все ветки
git fetch --all`
      }
    ],
    relatedTopics: ['git-merge', 'git-init-clone']
  }
];
