import { Category } from '../../types';
import { TOOLS_INTRODUCTION_TOPICS } from './tools-introduction';
import { BROWSERS_TOPICS } from './browsers';
import { DEVTOOLS_TOPICS } from './devtools';
import { TERMINAL_TOPICS } from './terminal';
import { NODEJS_TOPICS } from './nodejs';
import { NPM_TOPICS } from './npm';
import { FRONTEND_INFRASTRUCTURE_TOPICS } from './frontend-infrastructure';
import { GIT_TOPICS } from './git';
import { TESTING_TOPICS } from './testing';
import { DOCKER_TOPICS } from './docker';
import { AI_TOOLS_TOPICS } from './ai-tools';
import { CI_CD_TOPICS } from './ci-cd';
import { TEAM_DEVELOPMENT_TOPICS } from './team-development';

export const TOOLS_CATEGORIES: Category[] = [
  {
    id: 'tools-introduction',
    title: 'Инструменты',
    description: 'Обзор инструментов фронтенд-разработчика: редакторы кода, ОС, базовые понятия о рабочем окружении.',
    topics: TOOLS_INTRODUCTION_TOPICS
  },
  {
    id: 'frontend-infrastructure',
    title: 'Фронтенд-инфраструктура',
    description: 'Сборщики (Webpack, Vite, esbuild), транспиляторы, линтеры, форматтеры и конфигурация проекта.',
    topics: FRONTEND_INFRASTRUCTURE_TOPICS
  },
  {
    id: 'browsers',
    title: 'Браузеры',
    description: 'Как работают браузерные движки, рендеринг страниц, различия между Chrome, Firefox, Safari.',
    topics: BROWSERS_TOPICS
  },
  {
    id: 'devtools',
    title: 'DevTools',
    description: 'Инструменты разработчика в браузере: Elements, Console, Network, Performance, отладка кода.',
    topics: DEVTOOLS_TOPICS
  },
  {
    id: 'terminal',
    title: 'Terminal',
    description: 'Командная строка для разработчика: навигация, базовые команды, shell-скрипты, настройка окружения.',
    topics: TERMINAL_TOPICS
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    description: 'JavaScript-рантайм для серверной разработки и CLI-инструментов: модули, npm-скрипты, основы backend.',
    topics: NODEJS_TOPICS
  },
  {
    id: 'npm',
    title: 'Пакетные менеджеры',
    description: 'npm, Yarn, pnpm: установка зависимостей, lockfile, публикация пакетов, управление версиями.',
    topics: NPM_TOPICS
  },
  {
    id: 'git',
    title: 'Git',
    description: 'Система контроля версий: коммиты, ветки, merge/rebase, разрешение конфликтов, GitHub workflow.',
    topics: GIT_TOPICS
  },
  {
    id: 'testing',
    title: 'Тестирование',
    description: 'Unit, integration, e2e тесты: Jest, Vitest, Testing Library, Playwright, стратегии тестирования.',
    topics: TESTING_TOPICS
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Контейнеризация для фронтенда: образы, контейнеры, docker-compose, локальная разработка и деплой.',
    topics: DOCKER_TOPICS
  },
  {
    id: 'ai',
    title: 'ИИ-инструменты',
    description: 'AI-помощники в разработке: GitHub Copilot, Cursor, ChatGPT — как использовать эффективно.',
    topics: AI_TOOLS_TOPICS
  },
  {
    id: 'ci-cd',
    title: 'CI/CD + VPS/SSH',
    description: 'Автоматизация: GitHub Actions, GitLab CI, деплой на VPS, SSH-ключи, настройка пайплайнов.',
    topics: CI_CD_TOPICS
  },
  {
    id: 'team-development',
    title: 'Командная разработка',
    description: 'Работа в команде: code review, pull requests, документация, Agile, коммуникация с коллегами.',
    topics: TEAM_DEVELOPMENT_TOPICS
  }
];

// Экспорт плоского массива для обратной совместимости
export const TOOLS_TOPICS = [
  ...TOOLS_INTRODUCTION_TOPICS,
  ...FRONTEND_INFRASTRUCTURE_TOPICS,
  ...BROWSERS_TOPICS,
  ...DEVTOOLS_TOPICS,
  ...TERMINAL_TOPICS,
  ...NODEJS_TOPICS,
  ...NPM_TOPICS,
  ...GIT_TOPICS,
  ...TESTING_TOPICS,
  ...DOCKER_TOPICS,
  ...AI_TOOLS_TOPICS,
  ...CI_CD_TOPICS,
  ...TEAM_DEVELOPMENT_TOPICS
];