import React, { useState, useEffect } from 'react';
import { getHeading, saveHeading } from '../services/api';

const CMS = () => {
  const [heading, setHeading] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [currentHeading, setCurrentHeading] = useState('');

  useEffect(() => {
    loadCurrentHeading();
  }, []);

  const loadCurrentHeading = async () => {
    try {
      const response = await getHeading();
      if (response.success && response.data.heading) {
        setCurrentHeading(response.data.heading);
        setHeading(response.data.heading);
      }
    } catch (error) {
      console.error('Error loading heading:', error);
      showMessage('Error loading current heading', 'error');
    }
  };

  const handleSave = async () => {
    if (!heading.trim()) {
      showMessage('Please enter a heading', 'error');
      return;
    }

    if (heading.length > 500) {
      showMessage('Heading cannot exceed 500 characters', 'error');
      return;
    }

    setLoading(true);

    try {
      const response = await saveHeading(heading.trim());
      
      if (response.success) {
        setCurrentHeading(heading.trim());
        showMessage('Heading saved successfully!', 'success');
      } else {
        showMessage(response.message || 'Error saving heading', 'error');
      }
    } catch (error) {
      console.error('Error saving heading:', error);
      showMessage('Error saving heading. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (text, type) => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSave();
    }
  };

  return (
    <div className="cms-container">
      <div className="container">
        <div className="cms-card">
          <h1 className="cms-title">Content Management System</h1>
          
          <div className="form-group">
            <label htmlFor="heading" className="form-label">
              Main Heading *
            </label>
            <textarea
              id="heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter the main heading for the website..."
              className="form-textarea"
              maxLength={500}
            />
            <div style={{ 
              fontSize: '12px', 
              color: '#6b7280', 
              marginTop: '4px',
              textAlign: 'right'
            }}>
              {heading.length}/500 characters
            </div>
          </div>

          <div className="form-actions">
            <button
              onClick={handleSave}
              disabled={loading || !heading.trim()}
              className="btn btn-primary"
              style={{ 
                opacity: loading || !heading.trim() ? 0.6 : 1,
                cursor: loading || !heading.trim() ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? (
                <>
                  <span className="loading-spinner" style={{ marginRight: '8px' }}></span>
                  Saving...
                </>
              ) : (
                'Save Heading'
              )}
            </button>
            
            {message && (
              <div className={`status-message status-${messageType}`}>
                {message}
              </div>
            )}
          </div>

          {currentHeading && (
            <div className="preview-section" style={{ marginTop: '30px' }}>
              <h3 className="preview-title">Current Heading Preview:</h3>
              <p className="preview-text">{currentHeading}</p>
            </div>
          )}
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
          <ul>
            <li>Enter the main heading text in the field above</li>
            <li>Click "Save Heading" to update the website content</li>
            <li>The heading will appear on the main ABC Company page</li>
            <li>Changes are reflected immediately after saving</li>
            <li>Use Ctrl+Enter as a keyboard shortcut to save</li>
            <li>Maximum 500 characters allowed</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CMS;