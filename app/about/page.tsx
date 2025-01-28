export default function About()
{
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Hero/Intro Section */}
            <section className="mb-12">
                <h1 className="text-4xl font-bold mb-4">About Me</h1>
                <p className="text-lg text-gray-600">
                    Hi, I'm [Your Name]. I'm a software developer with 7 years of experience
                    specializing in .NET/C# development, currently exploring the world of web development
                    with Next.js and React.
                </p>
            </section>

            {/* Background Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Background</h2>
                <p className="mb-4">
                    With a strong foundation in backend development using .NET, I've worked on
                    [brief description of the types of projects you've worked on].
                </p>
                <p className="mb-4">
                    I'm passionate about writing clean, maintainable code and building
                    solutions that solve real-world problems.
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
                            <li>.NET Core</li>
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
                    When I'm not coding, you can find me [your interests/hobbies].
                    I also enjoy [other activities or interests].
                </p>
            </section>
        </div>
    )
}