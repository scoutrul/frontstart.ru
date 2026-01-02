import { Topic } from '../../../types';

export const FRONTEND_INFRASTRUCTURE_BEGINNER_TOPICS: Topic[] = [
  {
    id: 'frontend-infrastructure-intro',
    title: 'Введение',
    difficulty: 'beginner',
    description: `Современный фронтенд невозможно представить без отдельного слоя инфраструктуры.
Это набор инструментов и процессов, которые работают вне браузера, но напрямую влияют на то, как разрабатывается, собирается и запускается фронтенд-приложение.

К этой инфраструктуре относятся:
• Node.js как основная среда выполнения инструментов
• Dev-серверы, обеспечивающие удобную разработку
• Сборщики (bundlers), подготавливающие код к production
• HMR, ускоряющий обратную связь при разработке
• Современные инструменты вроде Vite
• Альтернативные runtime-платформы (Bun, Deno)
• Разделение dev и prod pipeline`,
    keyPoints: [
      'Node.js — фундамент современной фронтенд-инфраструктуры',
      'Большинство инструментов разработки — это Node.js-приложения',
      'Dev-сервер используется только в разработке',
      'Build step подготавливает код для production',
      'Bundler строит граф зависимостей и оптимизирует код',
      'HMR ускоряет разработку, обновляя код без перезагрузки страницы',
      'Vite представляет современный подход к dev/build процессу',
      'Dev pipeline и Prod pipeline — это разные процессы',
      'Существуют альтернативы Node.js: Bun и Deno'
    ],
    additionalDescription: `JavaScript-код может выполняться в разных окружениях.
В браузере он отвечает за интерфейс и взаимодействие с пользователем.
В Node.js — за инструменты, которые обслуживают разработку и сборку.

Dev-серверы, сборщики, линтеры, тест-раннеры — всё это запускается в Node.js, локально на машине разработчика.
Браузер в этом процессе — лишь клиент, который получает результат работы этих инструментов.

При этом:
• В development важны скорость, удобство и быстрая обратная связь
• В production важны оптимизация, размер бандла и стабильность

Поэтому один и тот же проект проходит разные этапы обработки в dev и prod.`,
    funFact: `До Webpack основными инструментами сборки были task runner'ы — например, Grunt и Gulp.
Они не строили полноценный граф зависимостей, а просто выполняли последовательность задач: «собери», «скопируй», «минифицируй».

Webpack стал поворотной точкой, потому что:
• ввёл концепцию dependency graph
• сделал модули центральной частью сборки
• заложил основу для современных подходов (code splitting, federation)

Сегодня Webpack всё ещё широко используется (в том числе из-за Module Federation), но в разработке де-факто стандартом стал Vite — за счёт скорости и использования нативных возможностей браузера.`,
    tags: ['tools', 'infrastructure', 'nodejs', 'bundler', 'vite', 'webpack', 'architecture'],
    relatedTopics: ['nodejs-intro', 'npm-basics', 'vite-basics'],
    examples: [
      {
        title: 'Node.js — среда выполнения dev-сервера и сборщика',
        code: `// Node.js запускает все инструменты разработки:
// - dev-серверы (vite dev, webpack-dev-server)
// - сборщики (webpack, vite build, rollup)
// - линтеры (eslint)
// - тест-раннеры (jest, vitest)`
      },
      {
        title: 'Webpack — мощный и гибкий bundler',
        code: `// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\\.tsx?$/, use: 'ts-loader' }
    ]
  }
};`
      },
      {
        title: 'Vite — современный dev-сервер + сборка для production',
        code: `// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: true // Hot Module Replacement
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild'
  }
});`
      },
      {
        title: 'HMR — обновление модулей без перезагрузки страницы',
        code: `// Vite автоматически включает HMR в dev-режиме
// При изменении файла браузер обновляет только этот модуль
// без полной перезагрузки страницы

// App.tsx изменён → только этот компонент обновился
// styles.css изменён → стили применились без перезагрузки`
      },
      {
        title: 'Bun — runtime + bundler + dev server в одном инструменте',
        code: `// Установка с Bun
bun install

// Запуск dev-сервера
bun dev

// Сборка проекта
bun run build

// Bun работает быстрее Node.js и имеет встроенный bundler`
      },
      {
        title: 'Dev pipeline — локальная разработка',
        code: `// npm run dev запускает dev-сервер с HMR
// Код НЕ минифицирован, есть source maps
// Быстрая пересборка при изменениях
// Используется для локальной разработки

npm run dev
// → запуск vite dev на localhost:3000`
      },
      {
        title: 'Prod pipeline — сборка и деплой приложения',
        code: `// npm run build создаёт оптимизированный бандл
// Код минифицирован, tree-shaking, code splitting
// Готов к деплою на production

npm run build
// → создание dist/ с оптимизированными файлами

npm run preview
// → просмотр production сборки локально`
      }
    ]
  }
];
