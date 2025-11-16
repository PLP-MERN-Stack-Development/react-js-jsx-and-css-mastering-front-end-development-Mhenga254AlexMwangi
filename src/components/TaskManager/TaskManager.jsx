import { useState, useEffect } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  // Add new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  // Toggle task completion
  const toggleTask = (id) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  // Clear all completed tasks
  const clearCompleted = () => {
    setTasks(prevTasks => prevTasks.filter(task => !task.completed));
  };

  // Get task statistics
  const stats = {
    total: tasks.length,
    active: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Task Manager
      </h1>
      
      <TaskForm onAddTask={addTask} />
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <TaskFilter 
          currentFilter={filter} 
          onFilterChange={setFilter}
          stats={stats}
          onClearCompleted={clearCompleted}
        />
        
        <TaskList
          tasks={filteredTasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
        
        {tasks.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            <p className="text-lg">No tasks yet. Add one above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskManager;
