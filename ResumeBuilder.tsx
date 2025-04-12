import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Plus, Save } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ResumeForm {
  fullName: string;
  email: string;
  phone: string;
  summary: string;
  experience: string;
  education: string;
  skills: string;
}

const ResumeBuilder = () => {
  const { user, supabase } = useAuth();
  const [formData, setFormData] = useState<ResumeForm>({
    fullName: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('resumes')
        .insert([
          {
            user_id: user?.id,
            ...formData,
          },
        ]);

      if (error) throw error;
      // Handle success (e.g., redirect to analyzer)
    } catch (error) {
      console.error('Error creating resume:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            Create Your ATS-Friendly Resume
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-xl text-gray-600 dark:text-gray-400"
          >
            Build a professional resume that will get past ATS systems and impress employers
          </motion.p>
        </div>

        <motion.form
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="summary" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Professional Summary
              </label>
              <textarea
                name="summary"
                id="summary"
                rows={4}
                value={formData.summary}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Work Experience
              </label>
              <textarea
                name="experience"
                id="experience"
                rows={6}
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Education
              </label>
              <textarea
                name="education"
                id="education"
                rows={4}
                value={formData.education}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                required
              />
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Skills (comma-separated)
              </label>
              <textarea
                name="skills"
                id="skills"
                rows={3}
                value={formData.skills}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                required
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              Save as Draft
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Save className="h-5 w-5 mr-2" />
              Create Resume
            </button>
          </div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ResumeBuilder;