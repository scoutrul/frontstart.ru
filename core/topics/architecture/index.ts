import { Category } from '../../types';
import { ARCHITECTURE_INTRO_TOPICS } from './intro';
import { COMPONENT_ARCHITECTURE_TOPICS } from './component-architecture';
import { STATE_MANAGEMENT_TOPICS } from './state-management';
import { CODE_ORGANIZATION_TOPICS } from './code-organization';
import { DATA_LAYER_TOPICS } from './data-layer';
import { STYLES_ARCHITECTURE_TOPICS } from './styles-architecture';
import { RENDERING_STRATEGIES_TOPICS } from './rendering-strategies';
import { CACHING_TOPICS } from './caching';
import { BFF_BACKEND_TOPICS } from './bff-backend';
import { SCALING_TOPICS } from './scaling';
import { MONITORING_TOPICS } from './monitoring';
import { TESTING_TOPICS } from './testing';
import { DEVOPS_CICD_TOPICS } from './devops-cicd';
import { CODE_ANALYSIS_TOPICS } from './code-analysis';
import { AUDIT_TOPICS } from './audit';
import { DOCUMENTATION_TOPICS } from './documentation';
import { MIGRATION_TOPICS } from './migration';
import { PRACTICE_TOPICS } from './practice';

export const ARCHITECTURE_CATEGORIES: Category[] = [
  {
    id: 'intro',
    title: 'Введение: Эволюция и критерии выбора',
    topics: ARCHITECTURE_INTRO_TOPICS
  },
  {
    id: 'component-architecture',
    title: 'Компонентная архитектура',
    topics: COMPONENT_ARCHITECTURE_TOPICS
  },
  {
    id: 'state-management',
    title: 'Управление состоянием',
    topics: STATE_MANAGEMENT_TOPICS
  },
  {
    id: 'code-organization',
    title: 'Организация кодовой базы',
    topics: CODE_ORGANIZATION_TOPICS
  },
  {
    id: 'data-layer',
    title: 'Слой данных и API',
    topics: DATA_LAYER_TOPICS
  },
  {
    id: 'styles-architecture',
    title: 'Архитектура стилей',
    topics: STYLES_ARCHITECTURE_TOPICS
  },
  {
    id: 'rendering-strategies',
    title: 'Стратегии рендеринга',
    topics: RENDERING_STRATEGIES_TOPICS
  },
  {
    id: 'caching',
    title: 'Кэширование и загрузка данных',
    topics: CACHING_TOPICS
  },
  {
    id: 'bff-backend',
    title: 'BFF и взаимодействие с бэкендом',
    topics: BFF_BACKEND_TOPICS
  },
  {
    id: 'scaling',
    title: 'Масштабирование команды и кодовой базы',
    topics: SCALING_TOPICS
  },
  {
    id: 'monitoring',
    title: 'Мониторинг и observability',
    topics: MONITORING_TOPICS
  },
  {
    id: 'testing',
    title: 'Тестирование',
    topics: TESTING_TOPICS
  },
  {
    id: 'devops-cicd',
    title: 'DevOps и CI/CD',
    topics: DEVOPS_CICD_TOPICS
  },
  {
    id: 'code-analysis',
    title: 'Статический анализ и метрики',
    topics: CODE_ANALYSIS_TOPICS
  },
  {
    id: 'audit',
    title: 'Архитектурный аудит',
    topics: AUDIT_TOPICS
  },
  {
    id: 'documentation',
    title: 'Документирование и case studies',
    topics: DOCUMENTATION_TOPICS
  },
  {
    id: 'migration',
    title: 'Миграционные стратегии',
    topics: MIGRATION_TOPICS
  },
  {
    id: 'practice',
    title: 'Практические вопросы',
    topics: PRACTICE_TOPICS
  }
];

export const ARCHITECTURE_TOPICS_EXPORT = [
  ...ARCHITECTURE_INTRO_TOPICS,
  ...COMPONENT_ARCHITECTURE_TOPICS,
  ...STATE_MANAGEMENT_TOPICS,
  ...CODE_ORGANIZATION_TOPICS,
  ...DATA_LAYER_TOPICS,
  ...STYLES_ARCHITECTURE_TOPICS,
  ...RENDERING_STRATEGIES_TOPICS,
  ...CACHING_TOPICS,
  ...BFF_BACKEND_TOPICS,
  ...SCALING_TOPICS,
  ...MONITORING_TOPICS,
  ...TESTING_TOPICS,
  ...DEVOPS_CICD_TOPICS,
  ...CODE_ANALYSIS_TOPICS,
  ...AUDIT_TOPICS,
  ...DOCUMENTATION_TOPICS,
  ...MIGRATION_TOPICS,
  ...PRACTICE_TOPICS
];
