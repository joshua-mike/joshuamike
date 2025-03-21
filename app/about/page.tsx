export default function About()
{
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Hero/Intro Section */}
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p className="text-lg text-gray-600">
                    Software developer with over 7 years of experience
                    specializing in .NET/C# development. Currently exploring Next.js/React
                    and the workings of large language models.
                </p>
            </section>

            {/* Background Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Background</h2>
                <p className="mb-4">
                    I started experimenting with WordPress 12+ years ago. From there I taught myself HTML, CSS and Javascript.
                    About 8 years ago I was fortunate enough to join a cohort of programmers from Culver City, Ca. where I learned
                    full stack development (ASP.NET, Angular, Javascript) in a structured enviroment. After 6 months I landed a job
                    working on a project for the Department of Defense and I've been employed as a professional software developer ever since.
                </p>
                <p className="mb-4">
                    I'm passionate about writing well articulated, readable, extensible and maintainable code but most of all I love solving problems.
                </p>
            </section>

            {/* Skills Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium mb-2">Backend</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>C#</li>
                            <li>.NET</li>
                            <li>SQL Server</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium mb-2">Frontend</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Tailwind CSS</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                        <h3 className="font-medium mb-2">Other</h3>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Git</li>
                            <li>Azure</li>
                            <li>Agile/Scrum</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Interests/Hobbies Section (Optional) */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Beyond Coding</h2>
                <p className="text-gray-600">
                    When I'm not coding, you can find me doing all things fitness.
                    I start at 3am, keep up.
                </p>
            </section>
        </div>
    )
}