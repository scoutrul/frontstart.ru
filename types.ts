
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  codeExample?: string;
  keyPoints: string[];
  tags: string[];         // Ключевые слова для поиска и фильтрации
  relatedTopics: string[]; // IDs of related topics
  nextTopicId?: string;    // ID of the logically next topic
}

export interface Category {
  id: string;
  title: string;
  topics: Topic[];
}

export interface AppState {
  selectedTopicId: string | null;
  searchQuery: string;
  selectedDifficulty: Difficulty | 'all';
  isAiInterviewerOpen: boolean;
}
