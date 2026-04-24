import React from "react";
import useTaskStore from "../store/useTaskStore";

const TaskItem = ({ task }) => {
    const toggleTaskCompletion = useTaskStore((state) => state.toggleTaskCompletion);

    return (
        <div className="flex items-center justify-between p-4 mb-2 bg-white border border-gray-200 rounded-md shadow-md hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4">


            </div>
        </div>
    )
}