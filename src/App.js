import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Rule from './Rule';
import Easy from './game/Easy';
import Medium from './game/Medium';
import Hard from './game/Hard';
import Navbar from './Navbar';

function App() {
  const [mobileMode, setMobileMode] = useState(false);

  return (
    <Router>
      <div>
        <Navbar mobileMode={mobileMode} setMobileMode={setMobileMode} />
        <div style={mobileMode ? styles.mobileContainer : styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rules" element={<Rule />} />
            <Route path="/game/easy" element={<Easy />} />
            <Route path="/game/medium" element={<Medium />} />
            <Route path="/game/hard" element={<Hard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    transform: 'scale(1)',
    transformOrigin: 'top center',
    transition: 'transform 0.3s ease',
  },
  mobileContainer: {
    transform: 'scale(0.5)',
    transformOrigin: 'top center',
    transition: 'transform 0.3s ease',
  },
};

export default App;
