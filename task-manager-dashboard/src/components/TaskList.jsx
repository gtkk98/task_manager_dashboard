import React, { useEffect} from "react";
import useTaskStore from "../store/useTaskStore";
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, isLoading, error, filter, fetchTasks } = useTaskStore();

    // Fetch tasks when the component mounts
    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    // Apply the selected filter
    const filteredTasks = tasks.filter((task) => {
        if (filter === 'completed')
            return task.completed;
        if (filter === 'incomplete')
            return !task.completed;
        return true; // all
    });

    if (isLoading) {
        return <div className="text-center py-8 text-gray-500">Loading tasks...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-gray-500">Error: {error}</div>;
    }

    if (filteredTasks.length === 0) {
        return <div className="text-center py-8 text-gray-500">Not task found.</div>;
    }

    return (
        <div>
            {filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskList;