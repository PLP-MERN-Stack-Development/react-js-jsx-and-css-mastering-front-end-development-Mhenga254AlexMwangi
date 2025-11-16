const TaskFilter = ({ currentFilter, onFilterChange, stats, onClearCompleted }) => {
  const filters = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' }
  ];

  return (
    <div className="mb-6">
      <div className="flex flex-wrap gap-4 justify-between items-center mb-4">
        <div className="flex gap-2">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => onFilterChange(key)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentFilter === key
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        
        {stats.completed > 0 && (
          <button
            onClick={onClearCompleted}
            className="px-4 py-2 text-red-500 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
          >
            Clear Completed ({stats.completed})
          </button>
        )}
      </div>
      
      <div className="text-sm text-gray-600">
        {stats.active} active, {stats.completed} completed of {stats.total} total tasks
      </div>
    </div>
  );
};

export default TaskFilter;
