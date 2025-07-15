import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import { getHeading } from '../services/api';

const Website = () => {
  const [heading, setHeading] = useState('Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHeading();
    
    // Poll for updates every 5 seconds
    const interval = setInterval(loadHeading, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const loadHeading = async () => {
    try {
      const response = await getHeading();
      if (response.success && response.data.heading) {
        setHeading(response.data.heading);
      }
    } catch (error) {
      console.error('Error loading heading:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Hero heading={heading} />
      <Features />
    </div>
  );
};

export default Website;