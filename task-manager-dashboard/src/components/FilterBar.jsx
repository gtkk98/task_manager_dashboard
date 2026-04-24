import React from "react";
import useTaskStore from "../store/useTaskStore";

const FilterBar = () => {
    const filter = useTaskStore((state) => state.filter);
    const setFilter = useTaskStore((state) => state.setFilter);

    return (
    
    )
}