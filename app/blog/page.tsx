import { getAllPosts } from '@/app/lib/posts';

export default function Blog()
{
    const posts = getAllPosts();

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <header className="mb-12">
                <h1 className="text-3xl font-bold mb-4">Blog</h1>
                <p className="text-gray-600">
                    Thoughts on software development and my journey in web development
                </p>
            </header>

            <div className="space-y-8">
                {posts.map((post) => (
                    <article
                        key={post.slug}
                        className="border-b border-gray-100 pb-8 last:border-b-0"
                    >
                        <time className="text-sm text-gray-500 mb-2 block">
                            {post.date}
                        </time>
                        <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">
                            <a href={`/blog/${post.slug}`}>
                                {post.title}
                            </a>
                        </h2>
                        <p className="text-gray-600">
                            {post.excerpt}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    );
}