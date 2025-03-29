import { getAllPosts } from '@/app/lib/posts';
import { MDXRemote } from 'next-mdx-remote/rsc';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function generateStaticParams()
{
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } })
{
    const { slug } = params;
    const fullPath = path.join(process.cwd(), 'app/blog/posts', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);

    return (
        <article className="container mx-auto px-4 py-8 max-w-4xl">
            <header className="mb-8">
                <time className="text-sm text-gray-500 mb-2 block">
                    {data.date}
                </time>
                <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
            </header>
            <div className="prose lg:prose-xl">
                <MDXRemote source={content} />
            </div>
        </article>
    );
}