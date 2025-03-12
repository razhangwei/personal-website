import Layout from "@/components/Layout";
import Link from "next/link";

export default function BlogIndex() {
  // This would be replaced with actual blog data
  const posts = [
    {
      slug: 'getting-started-with-machine-learning',
      title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
      date: 'March 10, 2025',
      excerpt: 'A comprehensive introduction to machine learning concepts, tools, and workflows for beginners.',
      tags: ['Machine Learning', 'Beginner']
    },
    {
      slug: 'productivity-systems',
      title: '5 Productivity Systems That Actually Work',
      date: 'March 5, 2025',
      excerpt: 'A deep dive into productivity systems that have stood the test of time and how to implement them.',
      tags: ['Productivity', 'Systems']
    },
    {
      slug: 'interactive-ml-demos',
      title: 'Building Interactive ML Demos with TensorFlow.js',
      date: 'February 28, 2025',
      excerpt: 'Learn how to create interactive machine learning demonstrations that run directly in the browser.',
      tags: ['Machine Learning', 'Web Development', 'JavaScript']
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Blog
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Thoughts on machine learning, productivity, and software engineering.
          </p>

          <div className="mt-12 space-y-10">
            {posts.map((post) => (
              <div key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-10">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <time dateTime={post.date}>{post.date}</time>
                  <span className="mx-2">•</span>
                  <div className="flex space-x-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-6">
                  <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-medium">
                    Read article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
}
