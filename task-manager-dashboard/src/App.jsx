import 'react';
import AddTask from './components/AddTask';
import FilterBar from './components/FilterBar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="min-h-screen p-8 flex justify-center font-sans">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Task Manager</h1>
        <AddTask />
        <FilterBar />
        <TaskList />
      </div>
    </div>
  );
}

export default App;