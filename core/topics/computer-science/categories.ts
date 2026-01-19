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
    description: 'Как люди научились представлять информацию: от знаков до двоичной системы и кодирования данных.',
    topics: CS_REPRESENTATION_TOPICS
  },
  {
    id: 'algorithms-and-logic',
    title: 'Алгоритмы и логика',
    description: 'Формализация вычислений: логические операции, алгоритмы, машина Тьюринга.',
    topics: CS_ALGORITHMS_TOPICS
  },
  {
    id: 'mechanization',
    title: 'Механизация вычислений',
    description: 'От абака до механических калькуляторов: история автоматизации счёта.',
    topics: CS_MECHANIZATION_TOPICS
  },
  {
    id: 'programming-concept',
    title: 'Концепция программирования',
    description: 'Идея программируемых машин: перфокарты, Ада Лавлейс, первые программы.',
    topics: CS_PROGRAMMING_CONCEPT_TOPICS
  },
  {
    id: 'electronic-computers',
    title: 'Электронные вычислительные машины',
    description: 'Появление ЭВМ: ENIAC, архитектура фон Неймана, поколения компьютеров.',
    topics: CS_ELECTRONIC_COMPUTERS_TOPICS
  },
  {
    id: 'processors-and-microprocessors',
    title: 'Процессоры и микропроцессоры',
    description: 'От транзисторов к CPU: как работает процессор, архитектуры x86/ARM.',
    topics: CS_PROCESSORS_TOPICS
  },
  {
    id: 'programming-languages',
    title: 'Языки программирования',
    description: 'Эволюция языков: от машинного кода до JavaScript, парадигмы программирования.',
    topics: CS_PROGRAMMING_LANGUAGES_TOPICS
  },
  {
    id: 'operating-systems',
    title: 'Операционные системы',
    description: 'ОС как платформа: процессы, память, файловые системы, Unix/Linux/Windows.',
    topics: CS_OPERATING_SYSTEMS_TOPICS
  },
  {
    id: 'network-and-internet',
    title: 'Сети и интернет',
    description: 'От ARPANET до WWW: протоколы, маршрутизация, как работает интернет.',
    topics: CS_NETWORK_AND_INTERNET_TOPICS
  },
  {
    id: 'architecture-separation',
    title: 'Архитектурное разделение',
    description: 'Слои абстракции: клиент-сервер, frontend/backend, API, микросервисы.',
    topics: CS_ARCHITECTURE_SEPARATION_TOPICS
  },
  {
    id: 'it-industry',
    title: 'Информатика, индустрия и капитал',
    description: 'IT как индустрия: корпорации, стартапы, рынок труда, влияние на общество.',
    topics: CS_IT_INDUSTRY_TOPICS
  },
  {
    id: 'future',
    title: 'Будущее информатики',
    description: 'Тренды: AI, квантовые вычисления, Web3, куда движется технология.',
    topics: CS_FUTURE_TOPICS
  }
];
