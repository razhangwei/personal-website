import Link from 'next/link';

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export default function BlogCard({ slug, title, date, excerpt, tags }: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <time dateTime={date}>{date}</time>
          <span className="mx-2">•</span>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            <Link href={`/blog/${slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
              {title}
            </Link>
          </h3>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            {excerpt}
          </p>
        </div>
        <div className="mt-6">
          <Link href={`/blog/${slug}`} className="text-blue-600 dark:text-blue-500 hover:underline font-medium">
            Read article →
          </Link>
        </div>
      </div>
    </div>
  );
}
