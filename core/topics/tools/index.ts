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
    topics: TOOLS_INTRODUCTION_TOPICS
  },
  {
    id: 'frontend-infrastructure',
    title: 'Фронтенд-инфраструктура',
    topics: FRONTEND_INFRASTRUCTURE_TOPICS
  },
  {
    id: 'browsers',
    title: 'Браузеры',
    topics: BROWSERS_TOPICS
  },
  {
    id: 'devtools',
    title: 'DevTools',
    topics: DEVTOOLS_TOPICS
  },
  {
    id: 'terminal',
    title: 'Terminal',
    topics: TERMINAL_TOPICS
  },
  {
    id: 'nodejs',
    title: 'Node.js',
    topics: NODEJS_TOPICS
  },
  {
    id: 'npm',
    title: 'Пакетные менеджеры',
    topics: NPM_TOPICS
  },
  {
    id: 'git',
    title: 'Git',
    topics: GIT_TOPICS
  },
  {
    id: 'testing',
    title: 'Тестирование',
    topics: TESTING_TOPICS
  },
  {
    id: 'docker',
    title: 'Docker',
    topics: DOCKER_TOPICS
  },
  {
    id: 'ai',
    title: 'ИИ-инструменты',
    topics: AI_TOOLS_TOPICS
  },
  {
    id: 'ci-cd',
    title: 'CI/CD + VPS/SSH',
    topics: CI_CD_TOPICS
  },
  {
    id: 'team-development',
    title: 'Командная разработка',
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