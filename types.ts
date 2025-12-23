
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Topic {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  codeExample?: string;
  keyPoints: string[];
  relatedTopics: string[]; // IDs of related topics
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
