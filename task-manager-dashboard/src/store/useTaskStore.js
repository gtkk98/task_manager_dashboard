import { create } from "zustand";

// creates a custom hook called useTaskStore that stores and manages task-related state.
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
        try {
            // use a public API
            const response = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=5');
            if (!response.ok) throw new Error('Filed to fetch task');

            const data = await response.json();
            set({tasks: data, isLoading: false});
            
        } catch (error) {
            set({ error: error.message, isLoading: false})
        }
    }
}))