import { Briefcase, ChevronRight, ExternalLink } from "lucide-react";

const experiences = [
    {
        role: "Frontend Developer",
        company: "Tech Innovations Inc.",
        period: "2022 - Present",
        description: "Lead development of responsive web applications using React and TypeScript. Implemented state management solutions and CI/CD pipelines.",
        link: "https://techinnovations.example.com",
        tech: ["React", "TypeScript", "Redux", "Tailwind", "Jest"]
    },
    {
        role: "Web Developer Intern",
        company: "Digital Solutions LLC",
        period: "2021 - 2022",
        description: "Built client websites with accessibility compliance. Optimized Core Web Vitals scores by 40% across projects.",
        link: "https://digitalsolutions.example.com",
        tech: ["JavaScript", "HTML/CSS", "WordPress", "SEO"]
    },
    {
        role: "Freelance Developer",
        company: "Self-Employed",
        period: "2020 - 2021",
        description: "Delivered 15+ websites for small businesses focusing on mobile-first responsive designs and CMS integrations.",
        tech: ["HTML/CSS", "JavaScript", "PHP", "WordPress"]
    },
    {
        role: "Coding Bootcamp",
        company: "Tech Academy",
        period: "2019 - 2020",
        description: "Completed intensive full-stack program with focus on modern JavaScript frameworks and backend development.",
        tech: ["JavaScript", "Node.js", "Express", "MongoDB"]
    }
];

const ExperienceRoadmap = () => {
    return (
        <section id="experience" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-yellow-400">Career Roadmap</h2>
                <p className="text-center text-gray-800 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
                    My professional journey through the years, showcasing growth and key milestones.
                </p>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-yellow-400/30 transform -translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-[50%] pl-10' : 'md:pl-[50%] pr-10'} ${index === experiences.length - 1 ? 'mb-0' : ''}`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute top-6 left-4 w-4 h-4 rounded-full bg-yellow-400 border-4 border-neutral-300 dark:border-neutral-900 transform -translate-x-1/2 md:left-1/2"></div>

                            <div className="group relative bg-neutral-300 dark:bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 border border-neutral-300 dark:border-zinc-800 ml-2 md:ml-0">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-yellow-400/10 rounded-full">
                                        <Briefcase className="text-yellow-400" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-black dark:text-white">
                                                    {exp.role}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400">
                                                    {exp.company} • {exp.period}
                                                </p>
                                            </div>
                                            {exp.link && (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-700 dark:text-gray-500 hover:text-blue-600 transition-colors"
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 my-4 leading-relaxed pl-14">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pl-14">
                                    {exp.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-400 hover:text-black transition-colors border border-neutral-500"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Connector arrow for mobile */}
                                {index !== experiences.length - 1 && (
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:hidden">
                                        <ChevronRight className="text-yellow-400" size={24} />
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceRoadmap;