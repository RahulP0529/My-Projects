import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Memberships from './components/Memberships/Memberships';
import Sports from './components/Sports/Sports';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import Valorant from './components/Sports/Valorant/Valorant';
import Player from './components/Sports/Valorant/Player/Player';
import styles from './style';

function App() {
  return (
    <Router>
      <div className="card">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/memberships" element={<Memberships />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/valorant" element={<Valorant />} />
          <Route path="/Player" element={<Player />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
