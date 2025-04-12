import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Building, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  matchScore: number;
  description: string;
  requirements: string[];
  posted: string;
}

const JobMatching = () => {
  const { user, supabase } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        // TODO: Implement actual job fetching logic
        // Simulated job data
        const mockJobs: Job[] = [
          {
            id: '1',
            title: 'Senior Frontend Developer',
            company: 'Tech Corp',
            location: 'Remote',
            matchScore: 95,
            description: 'Looking for an experienced frontend developer...',
            requirements: ['React', 'TypeScript', 'CSS3'],
            posted: '2 days ago',
          },
          {
            id: '2',
            title: 'Full Stack Engineer',
            company: 'Startup Inc',
            location: 'New York, NY',
            matchScore: 85,
            description: 'Join our growing team of developers...',
            requirements: ['Node.js', 'React', 'PostgreSQL'],
            posted: '1 week ago',
          },
        ];
        setJobs(mockJobs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

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
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Job Matches
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          >
            Discover jobs that match your skills and experience
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {job.title}
                  </h2>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {job.matchScore}%
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Building className="h-5 w-5 mr-2" />
                    {job.company}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin className="h-5 w-5 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Briefcase className="h-5 w-5 mr-2" />
                    {job.posted}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {job.description}
                </p>

                <div className="space-y-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Required Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default JobMatching;