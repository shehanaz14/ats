import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AnalysisResult {
  score: number;
  suggestions: string[];
  missingSkills: string[];
}

const ResumeAnalyzer = () => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const analyzeResume = async () => {
    if (!file) return;
    
    setAnalyzing(true);
    try {
      // TODO: Implement actual resume analysis
      // Simulated analysis result
      setTimeout(() => {
        setResult({
          score: 65,
          suggestions: [
            'Add more quantifiable achievements',
            'Include relevant keywords from the job description',
            'Improve formatting for better readability',
          ],
          missingSkills: ['Python', 'React Native', 'AWS'],
        });
        setAnalyzing(false);
      }, 2000);
    } catch (error) {
      console.error('Error analyzing resume:', error);
      setAnalyzing(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Resume Analysis
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          >
            Get your resume analyzed by our AI-powered ATS system
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
        >
          <div className="space-y-8">
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1 text-gray-500 dark:text-gray-400">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>

            {file && (
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Selected file: {file.name}
                </p>
                <button
                  onClick={analyzeResume}
                  disabled={analyzing}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {analyzing ? 'Analyzing...' : 'Analyze Resume'}
                </button>
              </div>
            )}

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-6"
              >
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold mb-2">
                      {result.score}%
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      ATS Compatibility Score
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Suggestions for Improvement
                  </h3>
                  <ul className="space-y-4">
                    {result.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{suggestion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                    Missing Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {result.missingSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResumeAnalyzer;