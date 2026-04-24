import { create } from "zustand";

const useTaskStore = create((set, get) => ({
    // State
    tasks: [],
    isLoading: false,
    error: null,
    filter: 'all', // can be 'all', 'completed', 'incompleted'

    // operations
    
    // Change filter
    setFilter: (filter) => set({ filter }),

    // Fetch task from API
    fetchTasks: async () => {
        set({ isLoading: true, error: null});
        
    }
}))