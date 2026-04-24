import React from "react";
import useTaskStore from "../store/useTaskStore";

const TaskItem = ({ task }) => {
    const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);

    return (
        
    )
}