import { useState, useEffect } from 'react';
import { scrollToSection } from '../../utils/helpers';

const Navbar = () => {
    const [isDark, setIsDark] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        // Initialize theme on component mount
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
        const systemPrefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : true;

        if (savedTheme === 'light' || (!savedTheme && !systemPrefersDark)) {
            setIsDark(false);
            if (typeof document !== 'undefined') {
                document.documentElement.classList.remove('dark');
            }
        } else {
            setIsDark(true);
            if (typeof document !== 'undefined') {
                document.documentElement.classList.add('dark');
            }
        }
    }, []);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
                setIsMobileMenuOpen(false);
            }

            setLastScrollY(currentScrollY);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar, { passive: true });

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    const toggleTheme = () => {
        if (typeof window === 'undefined') return;

        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (item) => {
        scrollToSection(item.toLowerCase());
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className="max-w-6xl mx-auto px-6 py-4">
                {/* Desktop and Mobile Header */}
                <div className="flex justify-between items-center px-4 py-2">
                    {/* Logo with Glassmorphism */}
                    <div className="px-4 py-2 text-blue-700 dark:text-blue-600 text-2xl font-bold cursor-pointer">
                        &lt;portfolio/&gt;
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="flex space-x-4">
                            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    className="bg-neutral-400/5 dark:bg-black/10 rounded-2xl px-4 py-2 shadow-lg shadow-black/30 dark:shadow-white/10
                                    text-gray-700 dark:text-gray-300 hover:bg-black/20 dark:hover:bg-white/20 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl hover:shadow-black//80 
                                    dark:hover:shadow-black/40 hover:border-white/30 dark:hover:border-white/30 hover:scale-105 transition-all duration-300 text-sm font-medium"
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        {/* Desktop Theme Toggle with Enhanced Glass Effect */}
                        <div className="ml-6">
                            <button
                                onClick={toggleTheme}
                                className="relative w-10 h-10 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-xl shadow-lg shadow-black/30 dark:shadow-white/10 hover:bg-white/20 dark:hover:bg-white/10 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-black/40 hover:border-white/30 dark:hover:border-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                                aria-label="Toggle theme"
                            >
                                <div className="relative w-5 h-5 flex items-center justify-center">
                                    {/* Sun Icon */}
                                    <svg
                                        className={`absolute w-4 h-4 text-yellow-500 dark:text-yellow-400 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    {/* Moon Icon */}
                                    <svg
                                        className={`absolute w-4 h-4 text-blue-500 dark:text-blue-300 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Theme Toggle with Glass Effect */}
                        <button
                            onClick={toggleTheme}
                            className="relative w-9 h-9 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/20 shadow-lg shadow-black/10 dark:shadow-black/30 hover:bg-white/20 dark:hover:bg-white/20 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-black/40 hover:border-white/30 dark:hover:border-white/30 hover:scale-105 transition-all duration-300 flex items-center justify-center"
                            aria-label="Toggle theme"
                        >
                            <div className="relative w-4 h-4 flex items-center justify-center">
                                {/* Sun Icon */}
                                <svg
                                    className={`absolute w-3.5 h-3.5 text-yellow-500 dark:text-yellow-400 transition-all duration-300 ${isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                        clipRule="evenodd"
                                    />
                                </svg>

                                {/* Moon Icon */}
                                <svg
                                    className={`absolute w-3.5 h-3.5 text-blue-500 dark:text-blue-300 transition-all duration-300 ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            </div>
                        </button>

                        {/* Burger Menu Button with Glass Effect */}
                        <button
                            onClick={toggleMobileMenu}
                            className="relative w-9 h-9 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/20 shadow-lg shadow-black/10 dark:shadow-black/30 hover:bg-white/20 dark:hover:bg-white/20 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-black/40 hover:border-white/30 dark:hover:border-white/30 hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center space-y-1"
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with Glass Effect */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="py-4 space-y-3 border-t border-white/20 dark:border-white/20">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                className="block w-full text-left bg-white/10 dark:bg-white/10 backdrop-blur-xl rounded-full px-4 py-3 border border-white/20 dark:border-white/20 shadow-lg shadow-black/10 dark:shadow-black/30 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-xl hover:shadow-black/20 dark:hover:shadow-black/40 hover:border-white/30 dark:hover:border-white/30 hover:scale-[1.02] transition-all duration-300 text-base font-medium"
                                onClick={() => handleNavClick(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;