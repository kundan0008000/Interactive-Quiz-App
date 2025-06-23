import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from '../data/questions';
import './QuizGame.css';

const QuizGame = () => {
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [answerTimes, setAnswerTimes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const playerData = localStorage.getItem('currentPlayer');
    if (!playerData) {
      navigate('/quiz');
      return;
    }

    const player = JSON.parse(playerData);
    setCurrentPlayer(player);
    
    const quizQuestions = getQuestions(player.category, player.difficulty);
    setQuestions(quizQuestions);
    setStartTime(Date.now());
  }, [navigate]);

  useEffect(() => {
    if (timeLeft > 0 && !answered) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !answered) {
      handleTimeUp();
    }
  }, [timeLeft, answered]);

  const handleTimeUp = () => {
    setAnswered(true);
    setShowResult(true);
    setAnswerTimes(prev => [...prev, 15]);
    
    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (answered) return;
    
    const timeSpent = 15 - timeLeft;
    setAnswerTimes(prev => [...prev, timeSpent]);
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    setShowResult(true);
    
    const isCorrect = answerIndex === questions[currentQuestionIndex].correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1);
    }
    
    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowResult(false);
      setTimeLeft(15);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const endTime = Date.now();
    const totalTime = Math.round((endTime - startTime) / 1000);
    
    const quizResult = {
      playerName: currentPlayer.name,
      category: currentPlayer.category,
      difficulty: currentPlayer.difficulty,
      score: score,
      correctAnswers: correctAnswers,
      totalQuestions: questions.length,
      totalTime: totalTime,
      averageTime: answerTimes.reduce((a, b) => a + b, 0) / answerTimes.length,
      date: new Date().toISOString(),
      answerTimes: answerTimes
    };
    
    const existingResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    existingResults.push(quizResult);
    localStorage.setItem('quizResults', JSON.stringify(existingResults));
    localStorage.setItem('latestResult', JSON.stringify(quizResult));
    
    navigate('/scores');
  };

  const getProgressPercentage = () => {
    return ((currentQuestionIndex + 1) / questions.length) * 100;
  };

  const getMotivationalMessage = () => {
    const percentage = (score / (currentQuestionIndex + 1)) * 100;
    if (percentage >= 90) return "🔥 Coding Master!";
    if (percentage >= 80) return "💻 Great Developer!";
    if (percentage >= 70) return "⚡ Good Progress!";
    if (percentage >= 60) return "🎯 Keep Coding!";
    if (percentage >= 50) return "💪 Almost There!";
    return "🤔 Debug Mode!";
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

  const getDifficultyColor = (difficulty) => {
    const colors = {
      easy: '#10B981',
      medium: '#F59E0B',
      hard: '#EF4444'
    };
    return colors[difficulty] || '#6366F1';
  };

  if (!currentPlayer || questions.length === 0) {
    return (
      <div className="quiz-game loading">
        <div className="loading-spinner">Loading your coding challenge...</div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-game">
      <div className="container">
        <div className="quiz-header">
          <div className="player-info">
            <span className="player-name">👨‍💻 {currentPlayer.name}</span>
            <span className="quiz-category">
              {getCategoryIcon(currentPlayer.category)} {currentPlayer.category.toUpperCase()} 
              <span style={{ color: getDifficultyColor(currentPlayer.difficulty) }}>
                {' '}({currentPlayer.difficulty.toUpperCase()})
              </span>
            </span>
          </div>
          <div className="quiz-stats">
            <span className="score">Score: {score}/{questions.length}</span>
            <span className="motivation">{getMotivationalMessage()}</span>
          </div>
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
        </div>

        <div className="timer-section">
          <div className={`timer ${timeLeft <= 5 ? 'warning' : ''}`}>
            <div className="timer-circle">
              <span className="timer-number">{timeLeft}</span>
            </div>
            <span className="timer-label">seconds left</span>
          </div>
        </div>

        <div className="question-section">
          <div className="question-card">
            <h2 className="question-text">{currentQuestion.question}</h2>
            
            <div className="options-grid">
              {currentQuestion.options.map((option, index) => {
                let optionClass = 'option';
                
                if (showResult) {
                  if (index === currentQuestion.correct) {
                    optionClass += ' correct';
                  } else if (index === selectedAnswer && index !== currentQuestion.correct) {
                    optionClass += ' incorrect';
                  }
                }
                
                if (selectedAnswer === index && !showResult) {
                  optionClass += ' selected';
                }

                return (
                  <button
                    key={index}
                    className={optionClass}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={answered}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="option-text">{option}</span>
                  </button>
                );
              })}
            </div>

            {showResult && (
              <div className="result-feedback">
                {selectedAnswer === currentQuestion.correct ? (
                  <div className="feedback correct-feedback">
                    <span className="feedback-icon">✅</span>
                    <span className="feedback-text">Correct! Well done!</span>
                  </div>
                ) : (
                  <div className="feedback incorrect-feedback">
                    <span className="feedback-icon">❌</span>
                    <span className="feedback-text">
                      {selectedAnswer === null ? 'Time\'s up!' : 'Incorrect! Keep learning!'}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizGame;