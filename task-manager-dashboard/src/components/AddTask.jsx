import React, { useState } from "react";
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
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
                Add
            </button>
        </form>
    );
};

export default AddTask;