import React, {useState} from "react";
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
        
    )
}