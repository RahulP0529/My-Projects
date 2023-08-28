// SignUpForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('/signup', { username, password });
      console.log(response.data.message);
      // Handle successful sign-up
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUpForm;
