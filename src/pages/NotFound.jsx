import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found-content animate-fadeIn">
          <div className="error-illustration">
            <div className="error-number">404</div>
            <div className="error-emoji">🤔</div>
          </div>
          
          <div className="error-message">
            <h1>Oops! Page Not Found</h1>
            <p>
              Looks like you've wandered into uncharted territory! 
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="error-suggestions">
            <h3>Here's what you can do:</h3>
            <ul>
              <li>🏠 Go back to the homepage</li>
              <li>🧠 Start a new quiz</li>
              <li>🏆 Check out the leaderboard</li>
              <li>📖 Learn more about QuizMaster</li>
            </ul>
          </div>
          
          <div className="error-actions">
            <Link to="/" className="btn btn-primary btn-large">
              Back to Home
            </Link>
            <Link to="/quiz" className="btn btn-secondary btn-large">
              Start Quiz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;