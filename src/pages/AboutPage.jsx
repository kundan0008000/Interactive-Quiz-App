import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content animate-fadeIn">
          <div className="about-header">
            <h1>About CodeQuiz</h1>
            <p>Your ultimate programming knowledge testing platform! 💻✨</p>
          </div>

          <div className="about-sections">
            <section className="about-section">
              <h2>🎯 What is CodeQuiz?</h2>
              <p>
                CodeQuiz is an interactive programming quiz application designed to test and improve 
                your coding knowledge across essential web development topics. Whether you're a 
                beginner learning the basics or an experienced developer brushing up on fundamentals, 
                CodeQuiz provides comprehensive challenges to enhance your skills!
              </p>
            </section>

            <section className="about-section">
              <h2>🚀 Features</h2>
              <div className="features-grid">
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <div className="feature-content">
                    <h3>Timed Challenges</h3>
                    <p>15-second timer per question to test your quick problem-solving skills.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💻</span>
                  <div className="feature-content">
                    <h3>Programming Topics</h3>
                    <p>HTML, JavaScript, DOM, Functions, Arrays, Loops, and JSON handling.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🎯</span>
                  <div className="feature-content">
                    <h3>Difficulty Levels</h3>
                    <p>Easy, Medium, and Hard levels with 15-20 questions each.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">📊</span>
                  <div className="feature-content">
                    <h3>Performance Tracking</h3>
                    <p>Detailed statistics and progress tracking for continuous improvement.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">🏆</span>
                  <div className="feature-content">
                    <h3>Leaderboard</h3>
                    <p>Compare your scores and track your progress over time.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💾</span>
                  <div className="feature-content">
                    <h3>Local Storage</h3>
                    <p>Your progress is saved locally, so you never lose your achievements.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2>🛠️ Built With</h2>
              <div className="tech-stack">
                <div className="tech-item">
                  <span className="tech-icon">⚛️</span>
                  <div className="tech-content">
                    <h3>React</h3>
                    <p>Modern JavaScript library for building interactive user interfaces</p>
                  </div>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🎨</span>
                  <div className="tech-content">
                    <h3>CSS3</h3>
                    <p>Advanced styling with animations, gradients, and responsive design</p>
                  </div>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">🚀</span>
                  <div className="tech-content">
                    <h3>React Router</h3>
                    <p>Declarative routing for seamless single-page application navigation</p>
                  </div>
                </div>
                <div className="tech-item">
                  <span className="tech-icon">⚡</span>
                  <div className="tech-content">
                    <h3>Vite</h3>
                    <p>Next generation frontend tooling for lightning-fast development</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="about-section">
              <h2>📈 What I Learned</h2>
              <div className="learning-points">
                <div className="learning-item">
                  <span className="learning-icon">🔧</span>
                  <p><strong>React State Management:</strong> Mastered useState and useEffect hooks for managing complex application state and side effects.</p>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">🎯</span>
                  <p><strong>Component Architecture:</strong> Built reusable, modular components with clean separation of concerns and proper data flow.</p>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">🎨</span>
                  <p><strong>Modern CSS:</strong> Implemented CSS Grid, Flexbox, custom properties, and smooth animations for enhanced user experience.</p>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">📱</span>
                  <p><strong>Responsive Design:</strong> Created a mobile-first design that adapts seamlessly across all device sizes and orientations.</p>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">🗃️</span>
                  <p><strong>Data Persistence:</strong> Implemented localStorage for maintaining user data and quiz results across browser sessions.</p>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">🧭</span>
                  <p><strong>SPA Routing:</strong> Built a single-page application with multiple routes, navigation, and proper URL handling.</p>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">⏱️</span>
                  <p><strong>Timer Logic:</strong> Implemented countdown timers, auto-progression, and time-based scoring systems.</p>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">🎮</span>
                  <p><strong>Interactive UX:</strong> Created engaging user interactions with hover effects, transitions, and feedback mechanisms.</p>
                </div>
              </div>
            </section>

            <section className="about-section fun-section">
              <h2>😄 Developer Life</h2>
              <div className="fun-content">
                <div className="meme-section">
                  <h3>Coding Memes & Reality</h3>
                  <div className="memes">
                    <div className="meme">
                      <span className="meme-text">When your code works on the first try:</span>
                      <span className="meme-emoji">🤔😱</span>
                    </div>
                    <div className="meme">
                      <span className="meme-text">CSS: "Why isn't this centering?"</span>
                      <span className="meme-emoji">😤</span>
                    </div>
                    <div className="meme">
                      <span className="meme-text">When you fix a bug and create 5 more:</span>
                      <span className="meme-emoji">🐛🐛🐛🐛🐛</span>
                    </div>
                    <div className="meme">
                      <span className="meme-text">Explaining my code to other developers:</span>
                      <span className="meme-emoji">🤡</span>
                    </div>
                    <div className="meme">
                      <span className="meme-text">When the client says "just a small change":</span>
                      <span className="meme-emoji">💀</span>
                    </div>
                  </div>
                </div>
                
                <div className="stats-fun">
                  <h3>Development Stats</h3>
                  <div className="fun-stats">
                    <div className="fun-stat">
                      <span className="stat-icon">☕</span>
                      <span className="stat-value">∞</span>
                      <span className="stat-label">Cups of Coffee</span>
                    </div>
                    <div className="fun-stat">
                      <span className="stat-icon">🤯</span>
                      <span className="stat-value">404</span>
                      <span className="stat-label">Stack Overflow Visits</span>
                    </div>
                    <div className="fun-stat">
                      <span className="stat-icon">💡</span>
                      <span className="stat-value">3 AM</span>
                      <span className="stat-label">Best Ideas Time</span>
                    </div>
                    <div className="fun-stat">
                      <span className="stat-icon">🔥</span>
                      <span className="stat-value">100%</span>
                      <span className="stat-label">Passion Level</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="about-footer">
            <p>Ready to test your programming skills? Let's start coding! 🚀</p>
            <div className="about-actions">
              <Link to="/quiz" className="btn btn-primary btn-large">
                🎯 Start Coding Quiz
              </Link>
              <Link to="/" className="btn btn-outline btn-large">
                🏠 Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;