import React from 'react';
import Card, { CardBody } from '../Card/Card';

const UsersList = ({ users, onUserSelect, selectedUserId }) => {
  if (!users || users.length === 0) {
    return (
      <Card>
        <CardBody>
          <p className="text-gray-500 text-center">No users found</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <Card 
          key={user.id}
          className={`cursor-pointer transition-all duration-200 ${
            selectedUserId === user.id 
              ? 'ring-2 ring-blue-500 transform scale-105' 
              : 'hover:shadow-lg'
          }`}
          onClick={() => onUserSelect(user.id)}
        >
          <CardBody>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                {user.name.charAt(0)}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{user.name}</h3>
              <p className="text-sm text-gray-600 mb-2">@{user.username}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
              <p className="text-xs text-blue-500 mt-2">{user.company.name}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default UsersList;
