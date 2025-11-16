// API service for JSONPlaceholder
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  // Get all users
  async getUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  },

  // Get all posts
  async getPosts() {
    const response = await fetch(`${BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    return response.json();
  },

  // Get posts by user ID
  async getPostsByUserId(userId) {
    const response = await fetch(`${BASE_URL}/posts?userId=${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user posts');
    }
    return response.json();
  },

  // Get user by ID
  async getUserById(userId) {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  }
};
