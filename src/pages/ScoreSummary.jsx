import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ScoreSummary.css';

const ScoreSummary = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const latestResult = localStorage.getItem('latestResult');
    if (latestResult) {
      setResult(JSON.parse(latestResult));
    }
  }, []);

  const getScorePercentage = () => {
    if (!result) return 0;
    return Math.round((result.score / result.totalQuestions) * 100);
  };

  const getPerformanceMessage = () => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return "🏆 Coding Genius! You're a programming master!";
    if (percentage >= 80) return "🌟 Excellent Developer! Outstanding knowledge!";
    if (percentage >= 70) return "💻 Great Programmer! You know your stuff!";
    if (percentage >= 60) return "⚡ Good Coder! Keep building those skills!";
    if (percentage >= 50) return "🎯 Decent Progress! You're on the right track!";
    if (percentage >= 40) return "💪 Keep Learning! Practice makes perfect!";
    return "🤔 Debug Mode Activated! Time to level up!";
  };

  const getPerformanceColor = () => {
    const percentage = getScorePercentage();
    if (percentage >= 80) return 'var(--success)';
    if (percentage >= 60) return 'var(--accent)';
    if (percentage >= 40) return 'var(--warning)';
    return 'var(--error)';
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
  };

  const getAverageTime = () => {
    if (!result || !result.averageTime) return 0;
    return Math.round(result.averageTime * 10) / 10;
  };

  const getCategoryIcon = (category) => {
    const icons = {
      html: '🌐',
      javascript: '⚡',
      dom: '🎯',
      functions: '🔧',
      arrays: '📊',
      loops: '🔄',
      json: '📋'
    };
    return icons[category] || '💻';
  };

  const getCategoryName = (category) => {
    const names = {
      html: 'HTML & Markup',
      javascript: 'JavaScript Fundamentals',
      dom: 'DOM Manipulation',
      functions: 'Functions & Scope',
      arrays: 'Arrays & Methods',
      loops: 'Loops & Iteration',
      json: 'JSON & Data'
    };
    return names[category] || category;
  };

  const getDifficultyIcon = (difficulty) => {
    const icons = {
      easy: '🟢',
      medium: '🟡',
      hard: '🔴'
    };
    return icons[difficulty] || '⚪';
  };

  const resetQuiz = () => {
    localStorage.removeItem('currentPlayer');
    localStorage.removeItem('latestResult');
  };

  if (!result) {
    return (
      <div className="score-summary">
        <div className="container">
          <div className="no-result">
            <h2>🤔 No quiz results found</h2>
            <p>Take a coding quiz first to see your results!</p>
            <Link to="/quiz" className="btn btn-primary btn-large">
              🚀 Start Coding Challenge
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="score-summary">
      <div className="container">
        <div className="summary-content animate-fadeIn">
          <div className="summary-header">
            <div className="score-circle" style={{ borderColor: getPerformanceColor() }}>
              <div className="score-percentage" style={{ color: getPerformanceColor() }}>
                {getScorePercentage()}%
              </div>
              <div className="score-label">Accuracy</div>
            </div>
            <div className="performance-message">
              <h1>{getPerformanceMessage()}</h1>
            </div>
          </div>

          <div className="summary-stats">
            <div className="stat-card">
              <div className="stat-icon">👨‍💻</div>
              <div className="stat-content">
                <div className="stat-label">Developer</div>
                <div className="stat-value">{result.playerName}</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">{getCategoryIcon(result.category)}</div>
              <div className="stat-content">
                <div className="stat-label">Topic</div>
                <div className="stat-value">{getCategoryName(result.category)}</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">{getDifficultyIcon(result.difficulty)}</div>
              <div className="stat-content">
                <div className="stat-label">Difficulty</div>
                <div className="stat-value">
                  <span className={`difficulty-badge difficulty-${result.difficulty}`}>
                    {result.difficulty.charAt(0).toUpperCase() + result.difficulty.slice(1)}
                  </span>
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <div className="stat-label">Correct Answers</div>
                <div className="stat-value">{result.correctAnswers} / {result.totalQuestions}</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-content">
                <div className="stat-label">Total Time</div>
                <div className="stat-value">{formatTime(result.totalTime)}</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <div className="stat-label">Avg. Time/Question</div>
                <div className="stat-value">{getAverageTime()}s</div>
              </div>
            </div>
          </div>

          <div className="performance-details">
            <h3>📈 Performance Analysis</h3>
            <div className="progress-bar-container">
              <div className="progress-bar-label">
                <span>Coding Accuracy</span>
                <span>{getScorePercentage()}%</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ 
                    width: `${getScorePercentage()}%`,
                    background: `linear-gradient(90deg, ${getPerformanceColor()}, ${getPerformanceColor()}dd)`
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <Link 
              to="/quiz" 
              className="btn btn-primary btn-large"
              onClick={resetQuiz}
            >
              🔄 Code Another Challenge
            </Link>
            <Link to="/leaderboard" className="btn btn-secondary btn-large">
              🏆 View Leaderboard
            </Link>
            <Link to="/" className="btn btn-outline btn-large">
              🏠 Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreSummary;