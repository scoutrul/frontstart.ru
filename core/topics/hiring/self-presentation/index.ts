import { Category } from '../../../types';
import { HIRING_SELF_PRESENTATION_TELL_ABOUT_TOPICS } from './tell-about';
import { HIRING_SELF_PRESENTATION_STAR_TOPICS } from './star';
import { HIRING_SELF_PRESENTATION_PROJECTS_TOPICS } from './projects';
import { HIRING_SCREENING_BASIC_TOPICS } from './basic-screening';
import { HIRING_SCREENING_EXPERIENCE_REALITY_CHECK_TOPICS } from './experience-reality-check';
import { HIRING_SCREENING_CORPORATE_PROCESSES_TOPICS } from './corporate-processes';
import { HIRING_SCREENING_BEHAVIORAL_TOPICS } from './behavioral-questions';
import { HIRING_SCREENING_WEAKNESSES_TOPICS } from './weaknesses';
import { HIRING_SCREENING_SELF_ASSESSMENT_TOPICS } from './self-assessment';
import { HIRING_SCREENING_MOTIVATION_CULTURE_TOPICS } from './motivation-culture';
import { HIRING_SCREENING_TRAP_QUESTIONS_TOPICS } from './trap-questions';
import { HIRING_SCREENING_FINAL_QUESTIONS_TOPICS } from './final-questions';

export const HIRING_SELF_PRESENTATION_CATEGORIES: Category[] = [
  {
    id: 'hiring-self-presentation',
    title: 'Скрининг',
    description: 'HR-интервью и скрининг: "Расскажите о себе", STAR-метод, вопросы о проектах, мотивации, зарплатных ожиданиях. Ловушки и контрольные вопросы, которые выявляют реальный опыт.',
    topics: [
      ...HIRING_SELF_PRESENTATION_TELL_ABOUT_TOPICS,
      ...HIRING_SELF_PRESENTATION_STAR_TOPICS,
      ...HIRING_SELF_PRESENTATION_PROJECTS_TOPICS,
      ...HIRING_SCREENING_BASIC_TOPICS,
      ...HIRING_SCREENING_EXPERIENCE_REALITY_CHECK_TOPICS,
      ...HIRING_SCREENING_CORPORATE_PROCESSES_TOPICS,
      ...HIRING_SCREENING_BEHAVIORAL_TOPICS,
      ...HIRING_SCREENING_WEAKNESSES_TOPICS,
      ...HIRING_SCREENING_SELF_ASSESSMENT_TOPICS,
      ...HIRING_SCREENING_MOTIVATION_CULTURE_TOPICS,
      ...HIRING_SCREENING_TRAP_QUESTIONS_TOPICS,
      ...HIRING_SCREENING_FINAL_QUESTIONS_TOPICS
    ]
  }
];
