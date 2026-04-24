import "react";
import useTaskStore from "../store/useTaskStore";

const FilterBar = () => {
    const filter = useTaskStore((state) => state.filter);
    const setFilter = useTaskStore((state) => state.setFilter);

    return (
    <div className="flex justify-end mb-4">
        <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:rind-2 focus:ring-blue-500"
        >
            <option value="all">All Task</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incompleted</option>
         </select>
    </div>
    );
};

export default FilterBar;