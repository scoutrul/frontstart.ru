import { Topic } from '../../../types';

export const VUE_TOPICS: Topic[] = [
  {
    id: 'vue-basics',
    title: 'Основы Vue',
    description: 'Vue.js — прогрессивный фреймворк для создания UI. Компоненты: Single File Components (.vue файлы). Реактивность: автоматическое обновление UI при изменении данных. Директивы: v-if, v-for, v-bind, v-on для управления DOM.',
    difficulty: 'beginner',
    tags: ['vue', 'components', 'reactivity'],
    keyPoints: [
      'Single File Components объединяют template, script и style.',
      'Реактивность автоматически обновляет DOM.',
      'v-if условно рендерит элементы.',
      'v-for итерирует массивы.',
      'v-bind связывает атрибуты с данными.'
    ],
    examples: [
      {
        title: 'Базовый компонент',
        code: `<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello Vue',
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    }
  }
};
</script>`
      }
    ],
    relatedTopics: []
  }
];

