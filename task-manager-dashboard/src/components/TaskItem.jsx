import "react";
import useTaskStore from "../store/useTaskStore";
import { Trash2 } from 'lucide-react';

const TaskItem = ({ task }) => {
    const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);
    const deleteTask = useTaskStore((state) => state.deleteTask);

    return (
        <div className="flex items-center justify-between p-4 mb-2 bg-green-400 border border-green-900 rounded-md shadow-md hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="w-5 h-5 text-gray-400 rounded focus:ring-gray-500 cursor-pointer" 
                />
                <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {task.title}
                </span>
            </div>

            {/* delete btn */}
            <button
                onClick={() => deleteTask(task.id)}
                className="text-black hover:text-red-700 hover:bg-green-200 p-2 rounded-md transition-colors"
                title="Delete task"
            >
                <Trash2 size={18}/>
            </button>
        </div>
    );
};

export default TaskItem;