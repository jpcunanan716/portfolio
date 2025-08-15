import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="py-8 px-6 border-t border-zinc-800/80 relative">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Back to Top Button - Centered */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="flex flex-col items-center mb-6 group animate-bounce hover:animate-none"
                    >
                        <div className="flex items-center text-yellow-400 group-hover:text-yellow-300 transition-colors">
                            <span className="mr-2 text-sm font-medium">Back to Top</span>
                            <div className="relative">
                                <ArrowUp
                                    size={18}
                                    className="group-hover:-translate-y-1 transition-transform duration-300"
                                />
                                <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping duration-1000"></span>
                                </span>
                            </div>
                        </div>
                    </button>
                )}

                <div className="w-full flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm order-2 sm:order-1 mt-4 sm:mt-0">© 2025 JP Cunanan. All rights reserved.</p>
                    <div className="flex space-x-6 order-1 sm:order-2">
                        <a
                            href="https://github.com/jpcunanan716"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-yellow-400 transition-colors"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jp-cunanan-508470276/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-yellow-400 transition-colors"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="mailto:your-email@example.com"
                            className="text-gray-500 hover:text-yellow-400 transition-colors"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;