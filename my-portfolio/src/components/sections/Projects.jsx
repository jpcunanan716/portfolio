import { useState } from "react";
import { projects, projectImages, githubLinks } from "../../constants/projects";
import { ExternalLink, Github, X } from "lucide-react";


const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = () => {
        setCurrentImageIndex(prev =>
            (prev + 1) % projectImages[selectedProject.title].length
        );
    };

    const prevImage = () => {
        setCurrentImageIndex(prev =>
            (prev - 1 + projectImages[selectedProject.title].length) % projectImages[selectedProject.title].length
        );
    };

    const ProjectCard = ({ project }) => (
        <div className="group relative bg-neutral-300 dark:bg-neutral-900 rounded-2xl p-6 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300 transform hover:scale-[1.02] border border-neutral-300 dark:border-zinc-800">
            {/* Project Image */}
            {projectImages[project.title] && (
                <div
                    className="mb-6 rounded-lg overflow-hidden cursor-pointer relative"
                    onClick={() => openModal(project)}
                >
                    <img
                        src={projectImages[project.title][0]}
                        alt={project.title}
                        className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                            View Project
                        </span>
                    </div>
                </div>
            )}

            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-black dark:text-white transition-colors">
                    {project.title}
                </h3>
                <div className="flex gap-3">
                    {githubLinks[project.title] && (
                        <a
                            href={githubLinks[project.title]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-500 hover:text-yellow-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={18} />
                        </a>
                    )}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 dark:text-gray-500 hover:text-yellow-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                    <span
                        key={techIndex}
                        className="px-3 py-1 bg-neutral-200 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors border border-neutral-500"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
    );

    return (
        <section id="projects" className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-4 text-yellow-400">My Projects</h2>
                <p className="text-center text-neutral-800 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
                    A collection of projects that showcase my skills and experience.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>

            {/* Project Modal */}
            {selectedProject && projectImages[selectedProject.title] && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                    <button
                        onClick={closeModal}
                        className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <div className="max-w-4xl w-full bg-neutral-800 rounded-xl overflow-hidden">
                        <div className="relative">
                            <img
                                src={projectImages[selectedProject.title][currentImageIndex]}
                                alt={selectedProject.title}
                                className="w-full h-auto max-h-[70vh] object-contain"
                            />

                            {projectImages[selectedProject.title].length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition-all"
                                    >
                                        &larr;
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition-all"
                                    >
                                        &rarr;
                                    </button>
                                </>
                            )}
                        </div>

                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white">
                                    {selectedProject.title}
                                </h3>
                                <div className="flex gap-4">
                                    {githubLinks[selectedProject.title] && (
                                        <a
                                            href={githubLinks[selectedProject.title]}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {selectedProject.link && (
                                        <a
                                            href={selectedProject.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <p className="text-gray-300 mb-4">
                                {selectedProject.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 bg-neutral-700 text-gray-300 rounded-full text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;