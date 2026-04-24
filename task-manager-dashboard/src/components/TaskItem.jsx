import "react";
import useTaskStore from "../store/useTaskStore";

const TaskItem = ({ task }) => {
    const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);

    return (
        <div className="flex items-center justify-between p-4 mb-2 bg-white border border-gray-200 rounded-md shadow-md hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">
                <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer" 
                />
                <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                    {task.title}
                </span>
            </div>
        </div>
    );
};

export default TaskItem;