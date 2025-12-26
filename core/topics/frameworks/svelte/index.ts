import { Topic } from '../../../types';

export const SVELTE_TOPICS: Topic[] = [
  {
    id: 'svelte-basics',
    title: 'Основы Svelte',
    description: 'Svelte — компилятор, который превращает компоненты в оптимизированный JavaScript. Компоненты: .svelte файлы с template, script и style. Реактивность: автоматическое обновление через присваивание ($: для реактивных выражений). Stores: глобальное состояние через writable, readable, derived.',
    difficulty: 'beginner',
    tags: ['svelte', 'components', 'reactivity'],
    keyPoints: [
      'Svelte компилируется в оптимизированный JavaScript.',
      'Реактивность через присваивание переменных.',
      '$: создаёт реактивные выражения.',
      'Stores для глобального состояния.',
      'Нет виртуального DOM — прямое обновление DOM.'
    ],
    examples: [
      {
        title: 'Базовый компонент',
        code: `<script>
  let count = 0;
  
  function increment() {
    count++;
  }
  
  $: doubled = count * 2;
</script>

<button on:click={increment}>
  Count: {count}, Doubled: {doubled}
</button>`
      },
      {
        title: 'Stores',
        code: `// store.js
import { writable } from 'svelte/store';

export const count = writable(0);

// Component.svelte
<script>
  import { count } from './store.js';
  
  $count = 10;  // Обновить store
</script>

<p>Count: {$count}</p>`
      }
    ],
    relatedTopics: []
  }
];

