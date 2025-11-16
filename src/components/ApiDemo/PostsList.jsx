import React from 'react';
import Card, { CardBody, CardHeader } from '../Card/Card';

const PostsList = ({ posts, loading }) => {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <Card key={index}>
            <CardBody>
              <div className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <Card>
        <CardBody>
          <p className="text-gray-500 text-center">No posts found</p>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <Card key={post.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardHeader>
            <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
          </CardHeader>
          <CardBody>
            <p className="text-gray-600">{post.body}</p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <span className="text-sm text-blue-500">Post ID: {post.id}</span>
              <span className="text-sm text-gray-500 ml-4">User ID: {post.userId}</span>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default PostsList;
