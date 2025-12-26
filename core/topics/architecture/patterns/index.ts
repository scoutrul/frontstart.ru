import { Topic } from '../../../types';

export const ARCHITECTURE_TOPICS: Topic[] = [
  {
    id: 'design-patterns',
    title: 'Паттерны проектирования',
    description: 'Паттерны проектирования — переиспользуемые решения типичных проблем. Singleton: один экземпляр класса. Factory: создание объектов без указания конкретного класса. Observer: уведомление зависимых объектов об изменениях. MVC: Model-View-Controller разделение ответственности. MVP: Model-View-Presenter вариант MVC.',
    difficulty: 'intermediate',
    tags: ['patterns', 'architecture', 'design'],
    keyPoints: [
      'Singleton гарантирует один экземпляр класса.',
      'Factory инкапсулирует создание объектов.',
      'Observer уведомляет подписчиков об изменениях.',
      'MVC разделяет данные, представление и логику.',
      'Паттерны решают типичные проблемы проектирования.'
    ],
    examples: [
      {
        title: 'Singleton',
        code: `class Database {
  private static instance: Database;
  
  private constructor() {}
  
  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}`
      },
      {
        title: 'Observer',
        code: `class Subject {
  private observers: Observer[] = [];
  
  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
  
  notify(data: any) {
    this.observers.forEach(obs => obs.update(data));
  }
}`
      }
    ],
    relatedTopics: ['clean-code']
  },
  {
    id: 'clean-code',
    title: 'Чистый код',
    description: 'SOLID принципы: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion. Код-ревью: проверка кода коллегами для улучшения качества. Рефакторинг: улучшение структуры кода без изменения функциональности.',
    difficulty: 'intermediate',
    tags: ['clean-code', 'solid', 'best-practices'],
    keyPoints: [
      'Single Responsibility: класс должен иметь одну причину для изменения.',
      'Open/Closed: открыт для расширения, закрыт для модификации.',
      'Liskov Substitution: подклассы должны заменять базовые классы.',
      'Interface Segregation: много маленьких интерфейсов лучше одного большого.',
      'Dependency Inversion: зависеть от абстракций, а не от конкретики.'
    ],
    examples: [
      {
        title: 'Single Responsibility',
        code: `// Плохо
class User {
  save() { }
  sendEmail() { }
  generateReport() { }
}

// Хорошо
class User {
  save() { }
}

class EmailService {
  sendEmail() { }
}

class ReportGenerator {
  generateReport() { }
}`
      }
    ],
    relatedTopics: ['design-patterns', 'project-structure']
  },
  {
    id: 'project-structure',
    title: 'Структура проекта',
    description: 'Организация файлов: логическая группировка по функциональности или типу. Модули: разделение кода на независимые модули. Архитектура приложений: выбор подходящей архитектуры (MVC, MVVM, Clean Architecture).',
    difficulty: 'intermediate',
    tags: ['architecture', 'structure', 'organization'],
    keyPoints: [
      'Группировка по функциональности лучше группировки по типу.',
      'Модули должны быть независимыми и переиспользуемыми.',
      'Архитектура должна соответствовать размеру проекта.',
      'Структура должна быть понятной для новых разработчиков.',
      'Разделение на слои улучшает поддерживаемость.'
    ],
    examples: [
      {
        title: 'Структура по функциональности',
        code: `src/
  features/
    auth/
      components/
      hooks/
      utils/
    dashboard/
      components/
      hooks/
  shared/
    components/
    utils/`
      }
    ],
    relatedTopics: ['clean-code']
  }
];

