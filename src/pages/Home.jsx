import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

/**
 * Home Page Component
 * Landing page for MGNREGA application with multilingual support
 */
const Home = () => {
  return (
    <div className="home-container" role="main">
      <header className="home-header">
        <h1 className="home-title" tabIndex="0">
          MGNREGA Portal
        </h1>
        <p className="home-subtitle" tabIndex="0">
          Mahatma Gandhi National Rural Employment Guarantee Act
        </p>
        <p className="home-subtitle-hindi" lang="hi" tabIndex="0">
          महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम
        </p>
      </header>
      
      <section className="home-content">
        <div className="home-description" tabIndex="0">
          <p>
            The MGNREGA portal provides transparent access to employment data,
            wage information, and work progress across India. Built with
            accessibility and multilingual support at its core.
          </p>
        </div>
        
        <nav className="home-actions" aria-label="Primary navigation">
          <Link 
            to="/dashboard" 
            className="home-button home-button--primary"
            aria-label="Go to dashboard to view MGNREGA data and metrics"
          >
            View Dashboard
          </Link>
          <a 
            href="https://github.com/ankitBytes/mgnrega-backend" 
            className="home-button home-button--secondary"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Learn more about the MGNREGA backend system"
          >
            Learn More
          </a>
        </nav>
      </section>
      
      <footer className="home-footer">
        <p>
          Committed to transparency, accessibility, and empowerment through technology
        </p>
      </footer>
    </div>
  );
};

export default Home;
