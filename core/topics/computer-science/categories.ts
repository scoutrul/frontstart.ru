import { Category } from '../../types';
import { CS_REPRESENTATION_TOPICS } from './representation-and-information';
import { CS_ALGORITHMS_TOPICS } from './algorithms-and-logic';
import { CS_MECHANIZATION_TOPICS } from './mechanization';
import { CS_PROGRAMMING_CONCEPT_TOPICS } from './programming-concept';
import { CS_ELECTRONIC_COMPUTERS_TOPICS } from './electronic-computers';
import { CS_PROCESSORS_TOPICS } from './processors-and-microprocessors';
import { CS_PROGRAMMING_LANGUAGES_TOPICS } from './programming-languages';
import { CS_OPERATING_SYSTEMS_TOPICS } from './operating-systems';
import { CS_NETWORK_AND_INTERNET_TOPICS } from './network-and-internet';
import { CS_ARCHITECTURE_SEPARATION_TOPICS } from './architecture-separation';
import { CS_IT_INDUSTRY_TOPICS } from './it-industry';
import { CS_FUTURE_TOPICS } from './future';

export const CS_KNOWLEDGE_BASE: Category[] = [
  {
    id: 'representation-and-information',
    title: 'Репрезентация и информация',
    topics: CS_REPRESENTATION_TOPICS
  },
  {
    id: 'algorithms-and-logic',
    title: 'Алгоритмы и логика',
    topics: CS_ALGORITHMS_TOPICS
  },
  {
    id: 'mechanization',
    title: 'Механизация вычислений',
    topics: CS_MECHANIZATION_TOPICS
  },
  {
    id: 'programming-concept',
    title: 'Концепция программирования',
    topics: CS_PROGRAMMING_CONCEPT_TOPICS
  },
  {
    id: 'electronic-computers',
    title: 'Электронные вычислительные машины',
    topics: CS_ELECTRONIC_COMPUTERS_TOPICS
  },
  {
    id: 'processors-and-microprocessors',
    title: 'Процессоры и микропроцессоры',
    topics: CS_PROCESSORS_TOPICS
  },
  {
    id: 'programming-languages',
    title: 'Языки программирования',
    topics: CS_PROGRAMMING_LANGUAGES_TOPICS
  },
  {
    id: 'operating-systems',
    title: 'Операционные системы',
    topics: CS_OPERATING_SYSTEMS_TOPICS
  },
  {
    id: 'network-and-internet',
    title: 'Сети и интернет',
    topics: CS_NETWORK_AND_INTERNET_TOPICS
  },
  {
    id: 'architecture-separation',
    title: 'Архитектурное разделение',
    topics: CS_ARCHITECTURE_SEPARATION_TOPICS
  },
  {
    id: 'it-industry',
    title: 'Информатика, индустрия и капитал',
    topics: CS_IT_INDUSTRY_TOPICS
  },
  {
    id: 'future',
    title: 'Будущее информатики',
    topics: CS_FUTURE_TOPICS
  }
];
