import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sun, Moon, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/dashboard" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold"
            >
              ATS Resume Builder
            </motion.div>
          </Link>

          {user && (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="hover:text-blue-500 transition-colors">
                Dashboard
              </Link>
              <Link to="/resume-builder" className="hover:text-blue-500 transition-colors">
                Resume Builder
              </Link>
              <Link to="/resume-analyzer" className="hover:text-blue-500 transition-colors">
                Resume Analyzer
              </Link>
              <Link to="/job-matching" className="hover:text-blue-500 transition-colors">
                Job Matching
              </Link>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            {user && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSignOut}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <LogOut size={20} />
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}