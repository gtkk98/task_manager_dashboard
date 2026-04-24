import { useState } from "react";
import useTaskStore from "../store/useTaskStore";

const AddTask = () => {
    const [title, setTitle] = useState('');
    const addTask = useTaskStore((state) => state.addTask);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) 
            return; // Prevent empty tasks
        addTask(title);
        setTitle('') // clear input after adding
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6 flex gap-2">
            <input 
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a new task"
            className="flex-1 px-4 py-2 border border-green-300 rounded-md rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button type="submit"
            className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
            >
                Add
            </button>
        </form>
    );
};

export default AddTask;