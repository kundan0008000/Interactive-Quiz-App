import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Leaderboard.css';

const Leaderboard = () => {
  const [results, setResults] = useState([]);
  const [sortBy, setSortBy] = useState('score');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    setResults(quizResults);
  }, []);

  const sortedResults = [...results].sort((a, b) => {
    let aValue, bValue;
    
    switch (sortBy) {
      case 'score':
        aValue = (a.score / a.totalQuestions) * 100;
        bValue = (b.score / b.totalQuestions) * 100;
        break;
      case 'time':
        aValue = a.totalTime;
        bValue = b.totalTime;
        break;
      case 'date':
        aValue = new Date(a.date);
        bValue = new Date(b.date);
        break;
      default:
        aValue = a[sortBy];
        bValue = b[sortBy];
    }
    
    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return minutes > 0 ? `${minutes}m ${remainingSeconds}s` : `${remainingSeconds}s`;
  };

  const getScorePercentage = (score, total) => {
    return Math.round((score / total) * 100);
  };

  const getPerformanceBadge = (percentage) => {
    if (percentage >= 90) return { emoji: '🏆', label: 'Champion', color: 'gold' };
    if (percentage >= 80) return { emoji: '🥇', label: 'Excellent', color: 'var(--success)' };
    if (percentage >= 70) return { emoji: '🥈', label: 'Great', color: 'silver' };
    if (percentage >= 60) return { emoji: '🥉', label: 'Good', color: 'bronze' };
    if (percentage >= 50) return { emoji: '💪', label: 'Decent', color: 'var(--accent)' };
    return { emoji: '📚', label: 'Learning', color: 'var(--text-secondary)' };
  };

  const clearLeaderboard = () => {
    if (window.confirm('Are you sure you want to clear all leaderboard data? This action cannot be undone.')) {
      localStorage.removeItem('quizResults');
      setResults([]);
    }
  };

  return (
    <div className="leaderboard">
      <div className="container">
        <div className="leaderboard-header animate-fadeIn">
          <h1>🏆 Leaderboard</h1>
          <p>Track your progress and see how you stack up against your previous attempts!</p>
        </div>

        {results.length === 0 ? (
          <div className="no-results">
            <div className="no-results-content">
              <div className="no-results-icon">📊</div>
              <h2>No quiz results yet!</h2>
              <p>Take your first quiz to see your results here.</p>
              <Link to="/quiz" className="btn btn-primary btn-large">
                Start Your First Quiz
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="leaderboard-controls">
              <div className="sort-controls">
                <span className="sort-label">Sort by:</span>
                <button
                  className={`sort-btn ${sortBy === 'score' ? 'active' : ''}`}
                  onClick={() => handleSort('score')}
                >
                  Score {sortBy === 'score' && (sortOrder === 'desc' ? '↓' : '↑')}
                </button>
                <button
                  className={`sort-btn ${sortBy === 'time' ? 'active' : ''}`}
                  onClick={() => handleSort('time')}
                >
                  Time {sortBy === 'time' && (sortOrder === 'desc' ? '↓' : '↑')}
                </button>
                <button
                  className={`sort-btn ${sortBy === 'date' ? 'active' : ''}`}
                  onClick={() => handleSort('date')}
                >
                  Date {sortBy === 'date' && (sortOrder === 'desc' ? '↓' : '↑')}
                </button>
              </div>
              <button className="clear-btn" onClick={clearLeaderboard}>
                Clear All
              </button>
            </div>

            <div className="leaderboard-stats">
              <div className="stat-item">
                <span className="stat-number">{results.length}</span>
                <span className="stat-label">Total Attempts</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {Math.round(results.reduce((acc, r) => acc + (r.score / r.totalQuestions) * 100, 0) / results.length)}%
                </span>
                <span className="stat-label">Average Score</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">
                  {Math.round(results.reduce((acc, r) => acc + r.totalTime, 0) / results.length)}s
                </span>
                <span className="stat-label">Average Time</span>
              </div>
            </div>

            <div className="leaderboard-table">
              <div className="table-header">
                <div className="table-row header-row">
                  <div className="table-cell rank-cell">Rank</div>
                  <div className="table-cell player-cell">Player</div>
                  <div className="table-cell category-cell">Category</div>
                  <div className="table-cell score-cell">Score</div>
                  <div className="table-cell time-cell">Time</div>
                  <div className="table-cell date-cell">Date</div>
                  <div className="table-cell badge-cell">Performance</div>
                </div>
              </div>
              <div className="table-body">
                {sortedResults.map((result, index) => {
                  const percentage = getScorePercentage(result.score, result.totalQuestions);
                  const badge = getPerformanceBadge(percentage);
                  
                  return (
                    <div key={index} className="table-row data-row">
                      <div className="table-cell rank-cell">
                        <span className="rank-number">#{index + 1}</span>
                      </div>
                      <div className="table-cell player-cell">
                        <div className="player-info">
                          <span className="player-name">{result.playerName}</span>
                          <span className="difficulty-badge">
                            {result.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="table-cell category-cell">
                        <span className="category-name">
                          {result.category.charAt(0).toUpperCase() + result.category.slice(1)}
                        </span>
                      </div>
                      <div className="table-cell score-cell">
                        <div className="score-info">
                          <span className="score-percentage">{percentage}%</span>
                          <span className="score-fraction">
                            {result.score}/{result.totalQuestions}
                          </span>
                        </div>
                      </div>
                      <div className="table-cell time-cell">
                        <span className="time-value">{formatTime(result.totalTime)}</span>
                      </div>
                      <div className="table-cell date-cell">
                        <span className="date-value">{formatDate(result.date)}</span>
                      </div>
                      <div className="table-cell badge-cell">
                        <div className="performance-badge" style={{ color: badge.color }}>
                          <span className="badge-emoji">{badge.emoji}</span>
                          <span className="badge-label">{badge.label}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="leaderboard-actions">
              <Link to="/quiz" className="btn btn-primary btn-large">
                Take Another Quiz
              </Link>
              <Link to="/" className="btn btn-outline btn-large">
                Back to Home
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;