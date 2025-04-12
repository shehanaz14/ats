import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Search, Briefcase } from 'lucide-react';

const Dashboard = () => {
  const features = [
    {
      title: 'Resume Builder',
      description: 'Create an ATS-friendly resume that stands out to employers',
      icon: FileText,
      link: '/resume-builder',
      color: 'bg-blue-500',
    },
    {
      title: 'Resume Analyzer',
      description: 'Get your resume scored and optimized for ATS systems',
      icon: Search,
      link: '/resume-analyzer',
      color: 'bg-green-500',
    },
    {
      title: 'Job Matching',
      description: 'Find jobs that match your skills and experience',
      icon: Briefcase,
      link: '/job-matching',
      color: 'bg-purple-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
          >
            Welcome to Your Career Dashboard
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl mt-5 mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Build your career with our AI-powered tools designed to help you land your dream job.
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={feature.link}
                  className="block h-full hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="h-full relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <div className={`inline-flex p-3 rounded-lg ${feature.color}`}>
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-base text-gray-500 dark:text-gray-400">
            Need help getting started? Check out our{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              guide
            </a>{' '}
            or{' '}
            <a href="#" className="text-blue-600 hover:text-blue-500">
              contact support
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;