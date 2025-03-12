import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeHighlight from 'rehype-highlight';

const contentDirectory = path.join(process.cwd(), 'src/content');

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const filePath = path.join(contentDirectory, 'blog', `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight]
    },
    scope: data,
  });

  return {
    slug: realSlug,
    frontMatter: data,
    content: mdxSource,
  };
}

export async function getAllPosts() {
  const blogDirectory = path.join(contentDirectory, 'blog');
  const filenames = fs.readdirSync(blogDirectory);
  
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      
      return {
        slug,
        frontMatter: data,
      };
    })
  );
  
  // Sort posts by date
  return posts.sort((post1, post2) => {
    const date1 = new Date(post1.frontMatter.date);
    const date2 = new Date(post2.frontMatter.date);
    return date2.getTime() - date1.getTime();
  });
}
