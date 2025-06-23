import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text animate-fadeIn">
              <h1 className="hero-title">
                Master Your
                <span className="highlight"> Coding Skills</span>
                <br />with Interactive Quizzes
              </h1>
              <p className="hero-description">
                Challenge yourself with comprehensive programming quizzes covering HTML, JavaScript, 
                DOM manipulation, functions, arrays, and more. Track your progress and become a 
                better developer with every question!
              </p>
              <div className="hero-features">
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>Timed Challenges</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎯</span>
                  <span>Skill-Based</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📊</span>
                  <span>Progress Tracking</span>
                </div>
              </div>
              <div className="hero-actions">
                <Link to="/quiz" className="btn btn-primary btn-large">
                  Start Coding Quiz
                </Link>
                <Link to="/leaderboard" className="btn btn-outline btn-large">
                  View Leaderboard
                </Link>
              </div>
            </div>
            <div className="hero-image animate-slideInRight">
              <div className="code-illustration animate-float">
                <div className="code-window">
                  <div className="code-line">
                    <span className="line-number">1</span>
                    <span className="code-content">
                      <span className="keyword">function</span> <span className="function">calculateScore</span>() {'{'}
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">2</span>
                    <span className="code-content">
                      &nbsp;&nbsp;<span className="keyword">const</span> correct = <span className="string">'Awesome!'</span>;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">3</span>
                    <span className="code-content">
                      &nbsp;&nbsp;<span className="keyword">return</span> correct;
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">4</span>
                    <span className="code-content">{'}'}</span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">5</span>
                    <span className="code-content"></span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">6</span>
                    <span className="code-content">
                      <span className="comment">// Ready to test your skills?</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">7</span>
                    <span className="code-content">
                      <span className="function">startQuiz</span>();
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose CodeQuiz?</h2>
          <p className="section-subtitle">
            Comprehensive programming challenges designed to test and improve your coding knowledge
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-large">💻</div>
              <h3>Programming Focused</h3>
              <p>Questions covering HTML, JavaScript, DOM manipulation, functions, arrays, loops, and JSON handling.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">⏱️</div>
              <h3>Timed Challenges</h3>
              <p>Race against time with our 15-second countdown timer to test your quick problem-solving skills.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">📈</div>
              <h3>Skill Assessment</h3>
              <p>Track your programming knowledge across different difficulty levels and identify areas for improvement.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon-large">🏅</div>
              <h3>Performance Analytics</h3>
              <p>Detailed statistics showing your strengths, response times, and progress over multiple attempts.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;