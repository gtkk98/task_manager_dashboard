import { create } from "zustand";

const useTaskStore = create((set, get) => ({
    // State
    tasks: [],
    isLoading: false,
    error: null,
    filter: 'all', // can be 'all', 'completed', 'incompleted'

    
}))