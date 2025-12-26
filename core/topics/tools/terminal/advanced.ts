import { Topic } from '../../../types';

export const TERMINAL_ADVANCED_TOPICS: Topic[] = [
  {
    id: 'terminal-advanced',
    title: 'Продвинутый Terminal',
    description: 'Bash скрипты позволяют автоматизировать задачи: создание файлов .sh, использование переменных, условий, циклов, функций. Alias создаёт короткие команды для длинных, функции позволяют группировать команды. Регулярные выражения в grep, sed, awk: grep -E для расширенных regex, sed для замены текста, awk для обработки данных с паттернами и группами захвата. Параллельное выполнение: xargs -P запускает команды параллельно, GNU parallel для сложных задач, wait синхронизирует фоновые процессы. Мультиплексоры терминала: tmux и screen создают сессии, которые сохраняются при отключении, поддерживают окна и панели, позволяют работать удалённо. Кастомизация shell: автодополнение команд, кастомные промпты (PS1), функции в .bashrc/.zshrc, плагины через oh-my-zsh. SSH для удалённого доступа, rsync для синхронизации файлов, scp для копирования.',
    difficulty: 'advanced',
    tags: ['terminal', 'cli', 'bash', 'shell', 'scripting', 'regex', 'tmux', 'ssh', 'automation', 'tools', 'productivity'],
    keyPoints: [
      'Bash скрипты: создание .sh файлов, переменные ($VAR, $1-$9 для аргументов), условия (if/else), циклы (for/while), функции.',
      'Alias: создание коротких команд через alias name="command", функции для сложной логики, сохранение в .bashrc/.zshrc.',
      'Регулярные выражения: grep -E для расширенных regex, sed для замены (s/old/new/g), awk для обработки данных с паттернами.',
      'Параллелизм: xargs -P N для параллельного выполнения, GNU parallel для сложных задач, wait для синхронизации фоновых процессов.',
      'Мультиплексоры: tmux/screen создают сессии, окна (windows), панели (panes), сессии сохраняются при отключении.',
      'SSH/rsync: ssh для удалённого доступа, rsync для синхронизации файлов, scp для копирования, ключи для аутентификации без пароля.'
    ],
    examples: [
      {
        title: 'Bash скрипты',
        code: `#!/bin/bash
# script.sh

NAME=$1                    # Первый аргумент
if [ -z "$NAME" ]; then
  echo "Usage: $0 <name>"
  exit 1
fi

for i in {1..5}; do
  echo "Hello $NAME ($i)"
done

function greet() {
  echo "Hello, $1!"
}
greet "World"`
      },
      {
        title: 'Alias и функции',
        code: `# В .bashrc или .zshrc:

# Простые alias
alias ll='ls -lah'
alias gs='git status'
alias ..='cd ..'

# Функции для сложной логики
function mkcd() {
  mkdir -p "$1" && cd "$1"
}

function find_and_replace() {
  find . -type f -name "$1" -exec sed -i "s/$2/$3/g" {} \\;
}`
      },
      {
        title: 'Регулярные выражения',
        code: `# grep с regex
grep -E "^[0-9]+$" file.txt        # Только числа
grep -E "error|warning" log.txt    # error или warning

# sed для замены
sed 's/old/new/g' file.txt         # Заменить все вхождения
sed -i 's/old/new/g' file.txt      # Изменить файл на месте
sed -n '10,20p' file.txt           # Строки 10-20

# awk для обработки данных
awk '{print $1, $3}' file.txt      # Первое и третье поле
awk '/pattern/ {print $0}' file.txt  # Строки с паттерном
awk -F',' '{sum+=$2} END {print sum}' data.csv  # Сумма второго поля`
      },
      {
        title: 'Параллельное выполнение',
        code: `# xargs с параллельным выполнением
find . -name "*.txt" | xargs -P 4 -I {} wc -l {}

# GNU parallel
parallel wc -l ::: *.txt           # Параллельно обработать все .txt
parallel -j 4 'command {}' ::: file1 file2 file3

# Фоновые процессы с wait
for file in *.txt; do
  process.sh "$file" &
done
wait  # Дождаться завершения всех`
      },
      {
        title: 'tmux - мультиплексор терминала',
        code: `tmux new -s mysession      # Создать сессию
tmux attach -t mysession    # Подключиться к сессии
tmux ls                     # Список сессий

# Внутри tmux:
Ctrl+b c                    # Создать новое окно
Ctrl+b n                    # Следующее окно
Ctrl+b %                    # Разделить панель вертикально
Ctrl+b "                    # Разделить панель горизонтально
Ctrl+b d                    # Отключиться (сессия продолжит работать)`
      },
      {
        title: 'SSH и rsync',
        code: `# SSH подключение
ssh user@hostname           # Подключиться к удалённому серверу
ssh -p 2222 user@hostname   # Указать порт
ssh-keygen                  # Создать SSH ключ
ssh-copy-id user@hostname   # Скопировать ключ на сервер

# rsync для синхронизации
rsync -avz local/ user@host:/remote/  # Синхронизировать директории
rsync -avz --delete local/ user@host:/remote/  # Удалить лишние файлы

# scp для копирования
scp file.txt user@host:/path/        # Копировать файл
scp -r dir/ user@host:/path/         # Копировать директорию`
      }
    ],
    relatedTopics: ['terminal-intermediate']
  }
];

