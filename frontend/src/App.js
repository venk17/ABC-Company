import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Website from './components/Website';
import CMS from './components/CMS';

function App() {
  const [currentView, setCurrentView] = useState('website');

  return (
    <Router>
      <div className="App">
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        <Routes>
          <Route 
            path="/" 
            element={currentView === 'website' ? <Website /> : <CMS />} 
          />
          <Route path="/website" element={<Website />} />
          <Route path="/cms" element={<CMS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;