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
}