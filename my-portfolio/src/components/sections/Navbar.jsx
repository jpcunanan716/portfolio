import { useState, useEffect } from 'react';
import { scrollToSection } from '../../utils/helpers';
import { Sun, Moon } from 'lucide-react';

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

            // Show navbar only when at the top of the page (within 50px)
            if (currentScrollY < 50) {
                setIsVisible(true);
            }
            // Hide navbar when scrolling away from top
            else {
                setIsVisible(false);
                // Close mobile menu when hiding navbar
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
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-yellow-400 text-xl font-bold cursor-pointer">
                        &lt;Portfolio/&gt;
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                className="text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                                onClick={() => scrollToSection(item.toLowerCase())}
                            >
                                {item}
                            </button>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                    </div>

                    {/* Mobile Controls */}
                    <div className="md:hidden flex items-center space-x-4">
                        {/* Mobile Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="flex flex-col justify-center items-center w-6 h-6"
                            aria-label="Toggle mobile menu"
                        >
                            <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : 'mb-1'}`}></span>
                            <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
                            <span className={`block w-5 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="py-4 space-y-4 border-t border-gray-200 dark:border-gray-700">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-base font-medium py-2"
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