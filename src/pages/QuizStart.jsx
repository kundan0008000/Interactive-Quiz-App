import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizStart.css';

const QuizStart = () => {
  const [playerName, setPlayerName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { value: 'html', label: 'HTML & Markup', icon: '🌐', description: 'HTML tags, attributes, and structure' },
    { value: 'javascript', label: 'JavaScript Fundamentals', icon: '⚡', description: 'Core JavaScript concepts and syntax' },
    { value: 'dom', label: 'DOM Manipulation', icon: '🎯', description: 'Document Object Model and browser APIs' },
    { value: 'functions', label: 'Functions & Scope', icon: '🔧', description: 'Function declarations, closures, and scope' },
    { value: 'arrays', label: 'Arrays & Methods', icon: '📊', description: 'Array manipulation and built-in methods' },
    { value: 'loops', label: 'Loops & Iteration', icon: '🔄', description: 'For loops, while loops, and iteration patterns' },
    { value: 'json', label: 'JSON & Data', icon: '📋', description: 'JSON parsing, stringifying, and data handling' }
  ];

  const difficulties = [
    { value: 'easy', label: 'Easy', icon: '🟢', description: 'Basic concepts and syntax' },
    { value: 'medium', label: 'Medium', icon: '🟡', description: 'Intermediate topics and patterns' },
    { value: 'hard', label: 'Hard', icon: '🔴', description: 'Advanced concepts and edge cases' }
  ];

  useEffect(() => {
    setIsFormValid(playerName.trim() !== '' && category !== '' && difficulty !== '');
  }, [playerName, category, difficulty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const playerData = {
        name: playerName.trim(),
        category,
        difficulty,
        startTime: new Date().toISOString()
      };
      
      localStorage.setItem('currentPlayer', JSON.stringify(playerData));
      navigate('/quiz/start');
    }
  };

  return (
    <div className="quiz-start">
      <div className="container">
        <div className="quiz-start-content">
          <div className="quiz-start-header animate-fadeIn">
            <h1>Ready to Test Your <span className="highlight">Coding Skills</span>?</h1>
            <p>Choose your programming challenge and show what you know!</p>
          </div>
          
          <div className="quiz-start-form-container animate-slideInRight">
            <form onSubmit={handleSubmit} className="quiz-start-form">
              <div className="form-group">
                <label htmlFor="playerName" className="form-label">
                  👤 Developer Name
                </label>
                <input
                  type="text"
                  id="playerName"
                  className="form-input"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Enter your name"
                  maxLength={50}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="category" className="form-label">
                  💻 Programming Topic
                </label>
                <select
                  id="category"
                  className="form-select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a programming topic</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.icon} {cat.label}
                    </option>
                  ))}
                </select>
                {category && (
                  <div className="category-description">
                    {categories.find(cat => cat.value === category)?.description}
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label htmlFor="difficulty" className="form-label">
                  🎯 Difficulty Level
                </label>
                <select
                  id="difficulty"
                  className="form-select"
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                >
                  <option value="">Select difficulty level</option>
                  {difficulties.map((diff) => (
                    <option key={diff.value} value={diff.value}>
                      {diff.icon} {diff.label}
                    </option>
                  ))}
                </select>
                {difficulty && (
                  <div className="difficulty-description">
                    {difficulties.find(diff => diff.value === difficulty)?.description}
                  </div>
                )}
              </div>
              
              <div className="form-actions">
                <button
                  type="submit"
                  className={`btn btn-primary btn-large ${!isFormValid ? 'disabled' : ''}`}
                  disabled={!isFormValid}
                >
                  🚀 Start Coding Challenge
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="quiz-preview">
          <div className="preview-card">
            <h3>🎮 What to Expect</h3>
            <div className="preview-grid">
              <div className="preview-item">
                <span className="preview-icon">❓</span>
                <div className="preview-content">
                  <h4>15-20 Questions</h4>
                  <p>Comprehensive programming challenges</p>
                </div>
              </div>
              <div className="preview-item">
                <span className="preview-icon">⏰</span>
                <div className="preview-content">
                  <h4>15 Seconds Each</h4>
                  <p>Quick thinking under pressure</p>
                </div>
              </div>
              <div className="preview-item">
                <span className="preview-icon">📊</span>
                <div className="preview-content">
                  <h4>Instant Feedback</h4>
                  <p>Learn from correct answers</p>
                </div>
              </div>
              <div className="preview-item">
                <span className="preview-icon">🏆</span>
                <div className="preview-content">
                  <h4>Performance Tracking</h4>
                  <p>Monitor your coding progress</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="topics-overview">
            <h3>📚 Available Topics</h3>
            <div className="topics-grid">
              {categories.map((cat) => (
                <div key={cat.value} className={`topic-card ${category === cat.value ? 'selected' : ''}`}>
                  <span className="topic-icon">{cat.icon}</span>
                  <h4>{cat.label}</h4>
                  <p>{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizStart;