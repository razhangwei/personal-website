import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            About Me
          </h1>
          
          <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-64 h-64 relative rounded-full overflow-hidden">
              {/* Replace with your actual profile photo */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                Profile Photo
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                [Your Name]
              </h2>
              <p className="mt-2 text-lg text-blue-600 dark:text-blue-500">
                Machine Learning Engineer
              </p>
              
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                I'm a machine learning engineer with expertise in developing AI systems that solve real-world problems. My background includes [your background here] and I'm passionate about [your interests here].
              </p>
              
              <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
                On this blog, I share insights from my work with machine learning, productivity techniques that have helped me, and software engineering best practices I've learned along the way.
              </p>
              
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'PyTorch', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision'].map((skill) => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Connect with me
                </h3>
                <div className="mt-4 flex space-x-6">
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
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Professional Experience
            </h2>
            
            <div className="mt-6 space-y-8">
              <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  [Company Name]
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Machine Learning Engineer • 2022 - Present
                </p>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  [Description of your role and achievements]
                </p>
              </div>
              
              <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  [Previous Company]
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  [Previous Role] • 2019 - 2022
                </p>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  [Description of your role and achievements]
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
            
            <div className="mt-6 space-y-8">
              <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  [University Name]
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  [Degree] in [Field] • Graduated [Year]
                </p>
                <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                  [Brief description or highlights]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
    </>
  );
}
