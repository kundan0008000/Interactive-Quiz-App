import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import QuizStart from './pages/QuizStart';
import QuizGame from './pages/QuizGame';
import ScoreSummary from './pages/ScoreSummary';
import Leaderboard from './pages/Leaderboard';
import AboutPage from './pages/AboutPage';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizStart />} />
            <Route path="/quiz/start" element={<QuizGame />} />
            <Route path="/scores" element={<ScoreSummary />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;