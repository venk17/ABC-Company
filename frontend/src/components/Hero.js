import React from 'react';

const Hero = ({ heading }) => {
  const highlightWords = (text) => {
    const words = text.split(' ');
    return words.map((word, index) => {
      if (word.includes('Revenue') || word.includes('Management,') || word.includes('Marketing')) {
        return (
          <span key={index} className="highlight">
            {word}{' '}
          </span>
        );
      }
      return word + ' ';
    });
  };

  return (
    <section className="hero">
      <div className="decorative-dots">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>{highlightWords(heading)}</h1>
            
            <p>
              Powerful AI solutions that go beyond mere data sorting and exploration. 
              Use our array of AI enabled solutions that understand your business and 
              recommend the optimal way forward.
            </p>
            
            <div className="hero-actions">
              <button className="btn btn-primary">Get started</button>
              <div className="author-tag">Priyanshu Singh</div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-icon">
                💡
              </div>
              <h3>AI Powered</h3>
              <p>Business Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;