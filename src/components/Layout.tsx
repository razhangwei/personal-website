import Navbar from './Navbar';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Wei's Tech Blog. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              GitHub
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
