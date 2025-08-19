// Import skills from constants file
import { skills } from "../../constants/skills";
import React from "react";

// ScrollFloat component from react-bits
const ScrollFloat = ({ children, className = "", offset = 50, duration = 1000, delay = 0 }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const elementRef = React.useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [delay]);

    return (
        <div
            ref={elementRef}
            className={`transform transition-all ease-out ${className}`}
            style={{
                transform: isVisible ? 'translateY(0px) scale(1)' : `translateY(${offset}px) scale(0.8)`,
                opacity: isVisible ? 1 : 0,
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
};

// Logo mapping for each skill
const skillLogos = {
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "BootStrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "Javascript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "PHP": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    "Laravel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    "Figma": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "Vite": "https://vitejs.dev/logo.svg",
    "Postman": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "WordPress": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
    "OutSystems": "https://images.seeklogo.com/logo-png/33/1/outsystems-logo-png_seeklogo-336505.png"
};

const Skills = () => {
    return (
        <section id="skills" className="py-16 px-6">
            <div className="max-w-5xl mx-auto">
                <ScrollFloat offset={40} duration={600}>
                    <h2 className="text-3xl font-semibold text-center mb-16 text-yellow-400">
                        Skills & Technologies
                    </h2>
                </ScrollFloat>

                <div className="grid md:grid-cols-3 gap-10">
                    {skills.map((skillCategory, categoryIndex) => (
                        <ScrollFloat
                            key={categoryIndex}
                            offset={30}
                            duration={800}
                            delay={categoryIndex * 150}
                        >
                            <div className="space-y-6">
                                <div className="text-center">
                                    <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mb-3">
                                        {skillCategory.category}
                                    </h3>
                                    <div className="w-12 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto"></div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {skillCategory.items.map((skill, skillIndex) => (
                                        <ScrollFloat
                                            key={skillIndex}
                                            offset={20}
                                            duration={500}
                                            delay={categoryIndex * 150 + skillIndex * 50}
                                        >
                                            <div className="group flex flex-col items-center p-3 transition-all duration-300 cursor-pointer relative">
                                                <div className="w-20 h-20 mb-2 flex items-center justify-center bg-neutral-300 dark:bg-neutral-900 rounded-xl transition-all duration-300 group-hover:bg-gray-200 dark:group-hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-800 relative overflow-hidden">
                                                    <img
                                                        src={skillLogos[skill] || `https://via.placeholder.com/32x32/6B7280/FFFFFF?text=${skill.charAt(0)}`}
                                                        alt={skill}
                                                        className="w-10 h-10 object-contain transition-all group-hover:w-15 group-hover:h-15 duration-300 group-hover:opacity-30"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'flex';
                                                        }}
                                                    />
                                                    <div className="w-8 h-8 bg-gray-500 rounded-md items-center justify-center text-sm font-medium text-white hidden group-hover:opacity-30 transition-all duration-300">
                                                        {skill.charAt(0)}
                                                    </div>

                                                    {/* Skill name overlay inside the image container (desktop) */}
                                                    <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <span className="text-xs font-semibold text-gray-900 dark:text-white text-center px-1 leading-tight">
                                                            {skill}
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Skill name below the icon (mobile) */}
                                                <span className="md:hidden text-xs font-medium text-gray-700 dark:text-gray-300 text-center mt-1">
                                                    {skill}
                                                </span>
                                            </div>
                                        </ScrollFloat>
                                    ))}
                                </div>
                            </div>
                        </ScrollFloat>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;