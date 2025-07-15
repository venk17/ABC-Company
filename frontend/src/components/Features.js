import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '📊',
      title: 'Multi-source data',
      description: 'Combine data from various sources, both structured and unstructured datasets, to different formats and from varied sources.'
    },
    {
      icon: '🎯',
      title: 'Stakeholder alignment',
      description: 'Make sure all stakeholders understand the "how", "so what" and "now what", leading to clear, accountable actions that lead to results.'
    },
    {
      icon: '🔄',
      title: 'Continuous engagement',
      description: 'Extend existing models to enhance course-correct, and adapt the models to continuously refine your work.'
    },
    {
      icon: '🚀',
      title: 'Ready to Go Algos',
      description: 'We have ready accelerators embedded with learnings from our experience in varied projects, generating actionable results.'
    },
    {
      icon: '🏢',
      title: 'Internal capability building',
      description: 'We productize all our work, enhance them with the context of your strategy, and train your internal teams to leverage them.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <h2>Why Choose Our Platform</h2>
          <p>Comprehensive solutions designed to transform your business operations</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;