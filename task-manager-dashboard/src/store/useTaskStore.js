import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useTaskStore = create(
  persist(
    (set, get) => ({
      // --- State ---
      tasks: [],
      isLoading: false,
      error: null,
      filter: 'all',

      // --- Actions ---
      setFilter: (filter) => set({ filter }),

      fetchTasks: async () => {
        if (get().tasks.length > 0) return;

        set({ isLoading: true, error: null });
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
          if (!response.ok) throw new Error('Failed to fetch tasks');
          
          const data = await response.json();
          set({ tasks: data, isLoading: false });
        } catch (error) {
          set({ error: error.message, isLoading: false });
        }
      },

      addTask: (title) => {
        const newTask = {
          id: Date.now(),
          title,
          completed: false,
        };
        set((state) => ({ tasks: [newTask, ...state.tasks] }));
      },

      toggleTaskCompletion: (id) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        }));
      },

      deleteTask: (id) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        }));
      }
    }),
    {
      name: 'task-storage', // The key used in localStorage
      partialize: (state) => ({ tasks: state.tasks }),
    }
  )
);

export default useTaskStore;