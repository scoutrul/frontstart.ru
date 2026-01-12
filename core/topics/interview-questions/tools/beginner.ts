import { InterviewQuestion } from '../../../types';

export const TOOLS_BEGINNER_QUESTIONS: InterviewQuestion[] = [
  {
    id: 'tools-beginner-package-managers',
    question: 'В чем разница между npm, yarn, pnpm?',
    answer: 'npm — стандартный менеджер Node.js. yarn — быстрее, lock-файл. pnpm — использует симлинки, экономит место, строгая изоляция зависимостей.',
    category: 'tools',
    difficulty: 'beginner',
    tags: ['tools', 'npm', 'yarn', 'pnpm', 'package-managers', 'basics']
  },
  {
    id: 'tools-beginner-package-json',
    question: 'Что такое package.json, package-lock.json, yarn.lock?',
    answer: 'package.json — описание проекта и зависимостей. package-lock.json/yarn.lock — точные версии зависимостей для воспроизводимых сборок.',
    category: 'tools',
    difficulty: 'beginner',
    tags: ['tools', 'npm', 'yarn', 'package-json', 'dependencies', 'basics']
  },
  {
    id: 'tools-beginner-bundlers',
    question: 'Как работают сборщики (Webpack, Vite, Parcel)?',
    answer: 'Webpack — модульный бандлер с loaders и plugins. Vite — быстрая сборка на основе esbuild для dev, Rollup для prod. Parcel — zero-config бандлер.',
    category: 'tools',
    difficulty: 'beginner',
    tags: ['tools', 'webpack', 'vite', 'parcel', 'bundlers', 'basics']
  },
  {
    id: 'tools-beginner-webpack-vite',
    question: 'Webpack vs Vite (базовое)',
    answer: 'Webpack — зрелый, гибкий, медленнее. Vite — быстрый dev-сервер на esbuild, production сборка через Rollup.',
    category: 'tools',
    difficulty: 'beginner',
    tags: ['tools', 'webpack', 'vite', 'bundlers', 'basics']
  }
];
