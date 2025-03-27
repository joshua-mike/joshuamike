export default function Blog()
{
    // Place holder data
    const posts = [
        {
            title: "Getting Started with Next.js",
            excerpt: "A beginner's guide to building modern web applications with Next.js",
            date: "March 15, 2024",
            slug: "getting-started-nextjs"
        },
        {
            title: "Why I Switched from .NET to Next.js",
            excerpt: "My journey transitioning from backend to full-stack development",
            date: "March 10, 2024",
            slug: "dotnet-to-nextjs"
        }
    ];

    return (
        <div className="container justify-start px-16 py-8 max-w-4xl">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-3xl font-bold mb-4">Blog</h1>
                <p className="text-gray-600">
                    Thoughts on software development, web technologies, and my journey from .NET to Next.js
                </p>
            </header>

            {/* Blog Posts List */}
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