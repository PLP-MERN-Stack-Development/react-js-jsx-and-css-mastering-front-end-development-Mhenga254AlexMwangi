import React from 'react';
import Button from '../Button/Button';

const SearchFilter = ({
  searchTerm,
  onSearchChange,
  currentView,
  onViewChange,
  selectedUserId,
  onClearSelection
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Search Input */}
        <div className="flex-1 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* View Toggle */}
        <div className="flex gap-2">
          <Button
            variant={currentView === 'users' ? 'primary' : 'outline'}
            size="small"
            onClick={() => onViewChange('users')}
          >
            Users
          </Button>
          <Button
            variant={currentView === 'posts' ? 'primary' : 'outline'}
            size="small"
            onClick={() => onViewChange('posts')}
          >
            Posts
          </Button>
        </div>

        {/* Clear Selection */}
        {selectedUserId && (
          <Button
            variant="outline"
            size="small"
            onClick={onClearSelection}
          >
            Clear Selection
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
