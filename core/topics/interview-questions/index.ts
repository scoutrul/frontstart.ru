import { InterviewCategory } from '../../types';
import { JAVASCRIPT_INTERVIEW_CATEGORY } from './javascript';
import { CSS_INTERVIEW_CATEGORY } from './css';
import { HTML_INTERVIEW_CATEGORY } from './html';
import { NETWORK_INTERVIEW_CATEGORY } from './network';
import { REACT_INTERVIEW_CATEGORY } from './react';
import { TYPESCRIPT_INTERVIEW_CATEGORY } from './typescript';
import { TOOLS_INTERVIEW_CATEGORY } from './tools';
import { ARCHITECTURE_INTERVIEW_CATEGORY } from './architecture';
import { PERFORMANCE_INTERVIEW_CATEGORY } from './performance';
import { PRACTICAL_INTERVIEW_CATEGORY } from './practical';
import { SEO_SSR_INTERVIEW_CATEGORY } from './seo-ssr';

export const INTERVIEW_QUESTIONS_CATEGORIES: InterviewCategory[] = [
  JAVASCRIPT_INTERVIEW_CATEGORY,
  CSS_INTERVIEW_CATEGORY,
  HTML_INTERVIEW_CATEGORY,
  NETWORK_INTERVIEW_CATEGORY,
  REACT_INTERVIEW_CATEGORY,
  TYPESCRIPT_INTERVIEW_CATEGORY,
  TOOLS_INTERVIEW_CATEGORY,
  ARCHITECTURE_INTERVIEW_CATEGORY,
  PERFORMANCE_INTERVIEW_CATEGORY,
  PRACTICAL_INTERVIEW_CATEGORY,
  SEO_SSR_INTERVIEW_CATEGORY
];

/**
 * Получить все вопросы из всех категорий
 */
export function getAllInterviewQuestions() {
  return INTERVIEW_QUESTIONS_CATEGORIES.flatMap(category => category.questions);
}

/**
 * Получить вопрос по ID
 */
export function getInterviewQuestionById(id: string) {
  const allQuestions = getAllInterviewQuestions();
  return allQuestions.find(q => q.id === id);
}

/**
 * Получить вопросы по категории
 */
export function getInterviewQuestionsByCategory(categoryId: string) {
  const category = INTERVIEW_QUESTIONS_CATEGORIES.find(c => c.id === categoryId);
  return category?.questions || [];
}

/**
 * Получить вопросы по сложности
 */
export function getInterviewQuestionsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced') {
  return getAllInterviewQuestions().filter(q => q.difficulty === difficulty);
}
