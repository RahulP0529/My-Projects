import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Content() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/profile');
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      {/* Profile page content */}
    </div>
  );
}

export default Content;
