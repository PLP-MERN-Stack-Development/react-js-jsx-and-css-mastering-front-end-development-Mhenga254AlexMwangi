const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className={`flex items-center gap-3 p-4 border rounded-lg transition-all duration-200 ${
      task.completed 
        ? 'bg-green-50 border-green-200' 
        : 'bg-white border-gray-200 hover:shadow-md'
    }`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="h-5 w-5 text-blue-500 rounded focus:ring-blue-500"
      />
      
      <span className={`flex-1 ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
        {task.text}
      </span>
      
      <button
        onClick={() => onDelete(task.id)}
        className="px-3 py-1 text-red-500 hover:bg-red-50 rounded transition-colors"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
