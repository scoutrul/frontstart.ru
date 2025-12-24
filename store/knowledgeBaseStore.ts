import { create } from 'zustand';
import { Difficulty } from '../core/types';

interface KnowledgeBaseState {
  selectedTopicId: string;
  searchQuery: string;
  selectedDifficulty: Difficulty | 'all';
  selectedTags: string[];
  
  setSelectedTopicId: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedDifficulty: (difficulty: Difficulty | 'all') => void;
  toggleTag: (tag: string) => void;
  clearFilters: () => void;
}

export const useKnowledgeBaseStore = create<KnowledgeBaseState>((set) => ({
  selectedTopicId: 'var-let-const',
  searchQuery: '',
  selectedDifficulty: 'all',
  selectedTags: [],
  
  setSelectedTopicId: (id) => set({ selectedTopicId: id }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedDifficulty: (difficulty) => set({ selectedDifficulty: difficulty }),
  toggleTag: (tag) => set((state) => ({
    selectedTags: state.selectedTags.includes(tag)
      ? state.selectedTags.filter(t => t !== tag)
      : [...state.selectedTags, tag]
  })),
  clearFilters: () => set({ 
    searchQuery: '', 
    selectedDifficulty: 'all', 
    selectedTags: [] 
  }),
}));

