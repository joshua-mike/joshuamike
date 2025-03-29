import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'app/blog/posts');

export function getAllPosts()
{
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) =>
    {
        // Remove ".mdx" from file name to get slug
        const slug = fileName.replace(/\.mdx$/, '');

        // Read MDX file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata
        const { data } = matter(fileContents);

        // Combine the data with the slug
        return {
            slug,
            ...(data as { title: string; date: string; excerpt: string })
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) =>
    {
        if (a.date < b.date)
        {
            return 1;
        } else
        {
            return -1;
        }
    });
}