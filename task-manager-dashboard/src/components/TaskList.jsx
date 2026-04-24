import React, { useEffect} from "react";
import useTaskStore from "../store/useTaskStore";
import TaskItem from './TaskItem';

const TaskList = () => {
    const { tasks, isLoading, error, filter, fetchTasks } = useTaskStore();

    
}