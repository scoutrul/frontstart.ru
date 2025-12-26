import { Topic } from '../../../types';

export const TERMINAL_INTERMEDIATE_TOPICS: Topic[] = [
  {
    id: 'terminal-intermediate',
    title: 'Terminal средний уровень',
    description: 'Перенаправление ввода-вывода позволяет управлять потоками данных между командами и файлами. Операторы > и >> перенаправляют вывод в файл (перезапись и добавление), < читает из файла, | передаёт вывод одной команды на вход другой. Переменные окружения хранят системные настройки: export устанавливает переменную, env показывает все переменные, PATH определяет пути поиска программ, .bashrc/.zshrc загружаются при запуске shell. Управление процессами: ps показывает процессы, top/htop — интерактивный мониторинг, kill завершает процесс, jobs показывает фоновые задачи, bg/fg переключают между фоном и передним планом, nohup запускает процесс, игнорируя сигнал завершения. Архивация: tar создаёт архивы, zip/gzip сжимают файлы, unzip/gunzip распаковывают. Пакетные менеджеры: apt/yum для Linux, brew для macOS управляют установкой программ.',
    difficulty: 'intermediate',
    tags: ['terminal', 'cli', 'bash', 'shell', 'pipes', 'environment', 'processes', 'archives', 'tools', 'productivity'],
    keyPoints: [
      'Перенаправление: > перезаписывает файл, >> добавляет в конец, < читает из файла, | передаёт вывод между командами.',
      'Переменные: export устанавливает переменную окружения, $PATH содержит пути поиска программ, .bashrc/.zshrc загружаются при старте shell.',
      'Процессы: ps показывает процессы, top/htop — мониторинг в реальном времени, kill завершает процесс по PID, killall — по имени.',
      'Фоновые задачи: & запускает в фоне, jobs показывает фоновые задачи, bg продолжает в фоне, fg возвращает на передний план, nohup игнорирует сигнал завершения.',
      'Архивация: tar создаёт архивы, zip/gzip сжимают, unzip/gunzip распаковывают, 7z поддерживает множество форматов.',
      'Пакетные менеджеры: apt (Debian/Ubuntu), yum/dnf (RHEL/CentOS), brew (macOS) устанавливают и управляют программами.'
    ],
    examples: [
      {
        title: 'Перенаправление ввода-вывода',
        code: `ls > files.txt            # Сохранить вывод в файл (перезаписать)
ls >> files.txt           # Добавить вывод в конец файла
cat < input.txt           # Читать из файла
ls | grep ".js"           # Передать вывод ls в grep
ls | grep ".js" | wc -l   # Цепочка команд через pipe`
      },
      {
        title: 'Переменные окружения',
        code: `export MY_VAR="value"      # Установить переменную
echo $MY_VAR              # Вывести значение
env                       # Показать все переменные окружения
echo $PATH                # Пути поиска программ
export PATH="$PATH:/new/path"  # Добавить путь в PATH

# В .bashrc или .zshrc:
export EDITOR="vim"
export LANG="ru_RU.UTF-8"`
      },
      {
        title: 'Управление процессами',
        code: `ps aux                    # Показать все процессы
ps aux | grep node        # Найти процессы node
top                       # Интерактивный мониторинг процессов
htop                      # Улучшенная версия top
kill 1234                 # Завершить процесс по PID
killall node              # Завершить все процессы node
kill -9 1234              # Принудительное завершение (SIGKILL)`
      },
      {
        title: 'Фоновые задачи',
        code: `long-task.sh &            # Запустить в фоне
jobs                      # Показать фоновые задачи
fg %1                     # Вернуть задачу #1 на передний план
bg %1                     # Продолжить задачу #1 в фоне
nohup script.sh &         # Запустить, игнорируя сигнал завершения
wait                      # Дождаться завершения всех фоновых задач`
      },
      {
        title: 'Архивация',
        code: `tar -czf archive.tar.gz dir/    # Создать архив .tar.gz
tar -xzf archive.tar.gz          # Распаковать .tar.gz
zip -r archive.zip dir/          # Создать .zip архив
unzip archive.zip                # Распаковать .zip
gzip file.txt                    # Сжать файл (создаст file.txt.gz)
gunzip file.txt.gz               # Распаковать .gz
7z a archive.7z dir/             # Создать .7z архив`
      },
      {
        title: 'Пакетные менеджеры',
        code: `# Debian/Ubuntu (apt)
sudo apt update           # Обновить список пакетов
sudo apt install nodejs   # Установить пакет
sudo apt upgrade          # Обновить все пакеты

# RHEL/CentOS (yum/dnf)
sudo yum install nodejs   # Установить пакет
sudo dnf update           # Обновить пакеты

# macOS (brew)
brew update               # Обновить формулы
brew install node         # Установить пакет
brew upgrade node         # Обновить пакет`
      }
    ],
    relatedTopics: ['terminal-basics', 'terminal-advanced']
  }
];

