import Squares from '../common/Squares';
import BlurText from '../common/BlurText';
import { Github, Linkedin, Mail, ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';
import TextType from '../common/TextType';

const Hero = () => (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Squares
                direction="diagonal"
                speed={0.5}
                squareSize={60}
                borderColor="rgba(9, 68, 171, 0.15)"
                hoverFillColor="oklch(48.8% 0.243 264.376)"

            />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="opacity-100 transition-opacity duration-1000">
                <h1 className="text-5xl md:text-5xl font-bold mb-6 text-neutral-800 dark:text-white">
                    Hello, I'm{' '}
                    <TextType
                        text={["JP Cunanan", "JP Cunanan", "JP Cunanan"]}
                        typingSpeed={140}
                        pauseDuration={1500}
                        deletingSpeed={60}
                        textColors={["#2563eb"]}
                        showCursor={true}
                        cursorCharacter="|"
                        className="text-7xl  text-blue-600"

                    />
                </h1>
                <p className="text-xl md:text-xl mb-8 max-w-2xl mx-auto text-gray-600  dark:text-gray-300">
                    Full-stack developer crafting digital experiences with modern technologies
                </p>
                <div className="flex justify-center space-x-6 mb-12">
                    <a href="https://github.com/jpcunanan716" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                        <Github size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/jp-cunanan-508470276/" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                        <Mail size={24} />
                    </a>
                </div>
                <button
                    onClick={() => scrollToSection('projects')}
                    className="group bg-neutral-800 dark:bg-gray-300 text-neutral-200 dark:text-neutral-950 px-8 py-3 rounded-lg font-semibold hover:bg-gray-950 dark:hover:bg-gray-400 transition-all transform hover:scale-105 flex items-center mx-auto"
                >
                    View My Work
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </section>
);

export default Hero;