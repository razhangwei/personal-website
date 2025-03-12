import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  // This would be replaced with actual project data
  const projects = [
    {
      id: 'neural-network-visualizer',
      title: 'Neural Network Visualizer',
      description: 'An interactive tool that helps visualize and understand neural network architectures and their inner workings.',
      technologies: ['React', 'D3.js', 'TensorFlow.js'],
      image: '/placeholder-image.jpg',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 'productivity-tracker',
      title: 'Productivity Tracker',
      description: 'A web application to track and analyze productivity patterns with customizable metrics and visualization.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      image: '/placeholder-image.jpg',
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 'nlp-text-analyzer',
      title: 'NLP Text Analyzer',
      description: 'A tool that uses natural language processing to analyze text sentiment, extract key phrases, and identify entities.',
      technologies: ['Python', 'spaCy', 'Flask', 'React'],
      image: '/placeholder-image.jpg',
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              A showcase of my work in machine learning, web development, and productivity tools.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project) => (
                <div key={project.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                  <div className="flex-shrink-0 h-48 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                    Project Image
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex items-center space-x-4">
                      <a 
                        href={project.demoLink} 
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.codeLink}
                        className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
}
