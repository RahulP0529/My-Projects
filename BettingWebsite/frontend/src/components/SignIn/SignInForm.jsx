// SignInForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

function SignInForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await axios.post('/login', { username, password });
      console.log(response.data.message);
      // Handle successful sign-in
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}

export default SignInForm;
