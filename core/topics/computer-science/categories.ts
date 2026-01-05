import { Category } from '../../types';
import { CS_INTRODUCTION_TOPICS } from './introduction';
import { CS_PROGRAM_EXECUTION_TOPICS } from './program-execution';
import { CS_DATA_REPRESENTATION_TOPICS } from './data-representation';

export const CS_KNOWLEDGE_BASE: Category[] = [
  {
    id: 'introduction',
    title: 'Введение',
    topics: CS_INTRODUCTION_TOPICS
  },
  {
    id: 'program-execution',
    title: 'Как компьютер выполняет программу',
    topics: CS_PROGRAM_EXECUTION_TOPICS
  },
  {
    id: 'data-representation',
    title: 'Данные и их представление',
    topics: CS_DATA_REPRESENTATION_TOPICS
  }
];
