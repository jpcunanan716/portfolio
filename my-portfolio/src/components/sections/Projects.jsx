import { projects } from "../../constants/Projects";
import { ExternalLink } from "lucide-react";

const Projects = () => (
    < section id="projects" className="py-20 px-6" >
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-yellow-400">Featured Projects</h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
                A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`group relative bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 border border-zinc-800 ${project.featured ? 'md:col-span-2' : ''}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                                {project.title}
                            </h3>
                            <ExternalLink
                                className="text-gray-500 group-hover:text-yellow-400 transition-colors transform group-hover:scale-110"
                                size={18}
                            />
                        </div>

                        <p className="text-zinc-400 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors border border-zinc-600"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    </section >
);

export default Projects;    