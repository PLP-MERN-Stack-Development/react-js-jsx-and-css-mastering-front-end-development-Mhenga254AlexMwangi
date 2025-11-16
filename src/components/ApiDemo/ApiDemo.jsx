import React, { useState, useMemo } from 'react';
import { useApiData } from '../../hooks/useApiData';
import { api } from '../../services/api';
import UsersList from './UsersList';
import PostsList from './PostsList';
import SearchFilter from './SearchFilter';
import Button from '../Button/Button';
import Card, { CardBody } from '../Card/Card';

const ApiDemo = () => {
  const [currentView, setCurrentView] = useState('users');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Fetch users and posts data
  const { data: users, loading: usersLoading, error: usersError } = useApiData(api.getUsers);
  const { data: allPosts, loading: postsLoading, error: postsError } = useApiData(api.getPosts);
  const { data: userPosts, loading: userPostsLoading } = useApiData(
    () => selectedUserId ? api.getPostsByUserId(selectedUserId) : Promise.resolve([]),
    [selectedUserId]
  );

  // Filter users based on search term
  const filteredUsers = useMemo(() => {
    if (!users) return [];
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Handle user selection
  const handleUserSelect = (userId) => {
    setSelectedUserId(userId);
    setCurrentView('posts');
  };

  // Clear user selection
  const handleClearSelection = () => {
    setSelectedUserId(null);
    setCurrentView('users');
  };

  // Determine which data to display
  const displayData = currentView === 'users' ? filteredUsers : (selectedUserId ? userPosts : allPosts);
  const loading = currentView === 'users' ? usersLoading : (selectedUserId ? userPostsLoading : postsLoading);
  const error = currentView === 'users' ? usersError : postsError;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
        API Integration Demo
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Fetching data from JSONPlaceholder API
      </p>

      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        currentView={currentView}
        onViewChange={setCurrentView}
        selectedUserId={selectedUserId}
        onClearSelection={handleClearSelection}
      />

      {/* Loading State */}
      {loading && (
        <Card>
          <CardBody>
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading data...</p>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Error State */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardBody>
            <div className="text-center py-4">
              <p className="text-red-600 font-semibold">Error: {error}</p>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="mt-3"
              >
                Retry
              </Button>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Data Display */}
      {!loading && !error && (
        <>
          {currentView === 'users' ? (
            <UsersList
              users={filteredUsers}
              onUserSelect={handleUserSelect}
              selectedUserId={selectedUserId}
            />
          ) : (
            <PostsList
              posts={displayData}
              loading={loading}
            />
          )}
        </>
      )}

      {/* Statistics */}
      {!loading && !error && displayData && (
        <Card className="mt-6">
          <CardBody>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
              <span>Total {currentView}: {displayData.length}</span>
              {selectedUserId && (
                <span>Showing posts for user: {selectedUserId}</span>
              )}
              {searchTerm && (
                <span>Filtered by: "{searchTerm}"</span>
              )}
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default ApiDemo;
