import { getPostBySlug, getAllPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Custom components for MDX
const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
  p: (props: any) => <p className="my-4 text-gray-700 dark:text-gray-300" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-5 my-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-5 my-4" {...props} />,
  li: (props: any) => <li className="my-1" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5 font-mono text-sm" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-100 dark:bg-gray-800 rounded p-4 overflow-x-auto my-6 font-mono text-sm" {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-600 dark:text-blue-400 hover:underline" {...props} />
  ),
  // Add more custom components as needed
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <Link href="/blog" className="text-blue-600 dark:text-blue-500 hover:underline flex items-center">
              ← Back to all posts
            </Link>
          </div>
          
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {post.frontMatter.title}
              </h1>
              <div className="mt-4 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                <time dateTime={post.frontMatter.date}>
                  {new Date(post.frontMatter.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.frontMatter.tags.map((tag: string) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </header>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <MDXRemote {...post.content} components={components} />
            </div>
          </article>
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
