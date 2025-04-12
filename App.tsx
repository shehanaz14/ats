import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ResumeBuilder from './pages/ResumeBuilder';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import JobMatching from './pages/JobMatching';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <AuthProvider>
        <Router>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
              <Route path="/job-matching" element={<JobMatching />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;