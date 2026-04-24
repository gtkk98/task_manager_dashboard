import { create } from "zustand";

// creates a custom hook called useTaskStore that stores and manages task-related state.
const useTaskStore = create((set) => ({
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
    },

    //  add a new task
    addTask: (title) => {
        const newTask = {
            id: Date.now(), // generate a unique ID 
            title,
            completed: false,
        };

        // new task shows at the top of list
        set((state) => ({tasks: [newTask, ...state.tasks]}));
    },

    // Toggle completion
    toggleTaskCompletion: (id) => {
        set((state => ({
            tasks: state.tasks.map((task) => 
                task.id === id ? {...task, completed: !task.completed } : task
            ),
        })));
    },

    // Delete Task
    deleteTask: (id) => {
        set((state) => ({
            tasks: state.tasks.filter((task) => task.id !== id),
        }));
    }

}));

export default useTaskStore;