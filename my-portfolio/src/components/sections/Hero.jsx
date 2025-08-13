import { useState, useEffect } from 'react';
import Squares from '../common/Squares';
import BlurText from '../common/BlurText';
import { Github, Linkedin, Mail, ArrowRight, Code, Palette, Zap, Sparkles, Terminal, Coffee } from 'lucide-react';
import { scrollToSection } from '../../utils/helpers';
import TextType from '../common/TextType';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);

        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const floatingIcons = [
        { icon: Code, delay: 0, position: 'top-20 left-20' },
        { icon: Palette, delay: 1, position: 'top-32 right-24' },
        { icon: Zap, delay: 2, position: 'bottom-32 left-16' },
        { icon: Terminal, delay: 0.5, position: 'top-48 left-1/4' },
        { icon: Coffee, delay: 1.5, position: 'bottom-24 right-20' },
        { icon: Sparkles, delay: 2.5, position: 'top-64 right-1/3' }
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <Squares
                    direction="diagonal"
                    speed={0.3}
                    squareSize={60}
                    borderColor="rgba(255, 196, 0, 0.08)"
                    hoverFillColor="rgba(255, 196, 0, 0.83)"
                />
            </div>

            {/* Dynamic Gradient Orb */}
            <div
                className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-1000 ease-out"
                style={{
                    background: 'radial-gradient(circle, rgba(255,196,0,0.4) 0%, rgba(255,196,0,0.1) 50%, transparent 100%)',
                    left: `${mousePosition.x * 0.02}%`,
                    top: `${mousePosition.y * 0.02}%`,
                }}
            />

            {/* Floating Tech Icons */}
            {floatingIcons.map(({ icon: Icon, delay, position }, index) => (
                <div
                    key={index}
                    className={`absolute ${position} opacity-10 dark:opacity-20 animate-bounce`}
                    style={{
                        animationDelay: `${delay}s`,
                        animationDuration: '3s'
                    }}
                >
                    <Icon size={24} className="text-yellow-500" />
                </div>
            ))}

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Status Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium mb-8 
                    ...;mm, pulse">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping"></div>
                        Available for new opportunities
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-4xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white leading-tight">
                        Hello, I'm{' '}
                        <span className="block mt-2">
                            <TextType
                                text={["JP Cunanan", "JP Cunanan", "JP Cunanan"]}
                                typingSpeed={140}
                                pauseDuration={2000}
                                deletingSpeed={60}
                                textColors={["rgba(255, 195, 0, 1)"]}
                                showCursor={true}
                                cursorCharacter="|"
                                className="text-8xl text-yellow-400"
                            />
                        </span>
                    </h1>

                    {/* Subtitle with Blur Effect */}
                    <div className="mb-24">
                        <BlurText
                            text="Full-stack developer crafting digital experiences with modern technologies"
                            className="text-2xl md:text-xl text-gray-600 dark:text-gray-300 font-light max-w-4xl mx-auto leading-relaxed"
                        />
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="group relative px-10 py-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold rounded-2xl hover:from-yellow-500 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-yellow-400/25 flex items-center"
                        >
                            View My Work
                            <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />

                            {/* Shine Effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                            </div>
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group px-10 py-4 bg-transparent border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
                        >
                            Let's Connect
                            <Mail size={20} className="ml-2 inline group-hover:rotate-12 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 dark:text-gray-600 animate-bounce">
                <div className="flex flex-col items-center space-y-2">
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;