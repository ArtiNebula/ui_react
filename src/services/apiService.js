// src/authService.js
const API_URL = 'https://18.234.159.251/api/createuser';

const signup = async (userData) => {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_AUTH_TOKEN_HERE`, // Add your authentication token here
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to sign up');
  }
  return response.json();
};

export { signup };
  