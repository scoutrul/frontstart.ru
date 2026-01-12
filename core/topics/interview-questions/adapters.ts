import { Category, Topic } from '../../types';
import { InterviewCategory, InterviewQuestion } from '../../types';

/**
 * Преобразует InterviewQuestion в Topic для совместимости с существующей системой
 */
function interviewQuestionToTopic(question: InterviewQuestion): Topic {
  return {
    id: question.id,
    title: question.question,
    description: question.answer,
    difficulty: question.difficulty,
    keyPoints: [question.answer], // Ответ как ключевой пункт
    tags: [...question.tags, question.category, 'interview', 'qa'],
    relatedTopics: question.relatedQuestions || [],
    isFrontendEssential: false
  };
}

/**
 * Преобразует InterviewCategory в Category
 */
function interviewCategoryToCategory(interviewCategory: InterviewCategory): Category {
  return {
    id: interviewCategory.id,
    title: interviewCategory.title,
    topics: interviewCategory.questions.map(interviewQuestionToTopic)
  };
}

/**
 * Преобразует массив InterviewCategory в массив Category
 */
export function interviewCategoriesToCategories(interviewCategories: InterviewCategory[]): Category[] {
  return interviewCategories.map(interviewCategoryToCategory);
}
