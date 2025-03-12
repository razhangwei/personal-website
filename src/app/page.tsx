import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hi, I'm [Your Name]</span>
              <span className="block text-blue-600 dark:text-blue-500">Machine Learning Engineer</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
              Welcome to my personal blog where I share insights on machine learning, productivity, and software engineering.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link href="/blog" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                Read Blog
              </Link>
              <Link href="/about" className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
                About Me
              </Link>
            </div>
          </div>
        </div>

        {/* Latest Articles Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
                Latest Articles
              </h2>
              
              <div className="space-y-8">
                {/* Article Card Placeholder - These would be populated dynamically */}
                <div className="bg-white dark:bg-gray-900 shadow overflow-hidden rounded-lg">
                  <div className="px-6 py-5">
                    <div className="text-sm text-gray-500 dark:text-gray-400">March 10, 2025</div>
                    <div className="mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        <Link href="#" className="hover:underline">
                          Getting Started with Machine Learning: A Beginner's Guide
                        </Link>
                      </h3>
                      <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                        A comprehensive introduction to machine learning concepts, tools, and workflows for beginners.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link href="#" className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-medium">
                        Read article →
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 shadow overflow-hidden rounded-lg">
                  <div className="px-6 py-5">
                    <div className="text-sm text-gray-500 dark:text-gray-400">March 5, 2025</div>
                    <div className="mt-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        <Link href="#" className="hover:underline">
                          5 Productivity Systems That Actually Work
                        </Link>
                      </h3>
                      <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                        A deep dive into productivity systems that have stood the test of time and how to implement them.
                      </p>
                    </div>
                    <div className="mt-4">
                      <Link href="#" className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-medium">
                        Read article →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <Link href="/blog" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 dark:text-blue-500 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800">
                  View all articles
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} [Your Name]. All rights reserved.
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
          </div>
        </footer>
      </div>
    </>
  );
}
