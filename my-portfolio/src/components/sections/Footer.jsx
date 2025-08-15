import { ArrowUp } from "lucide-react";
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
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Back to Top Button - Centered */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="flex flex-col items-center group animate-bounce hover:animate-none"
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

                <div className="w-full flex flex-row justify-between items-center">
                    <span className="text-yellow-400 font-mono text-lg">&lt;portfolio/&gt;</span>
                    <p className="text-gray-500 text-sm">© 2025 JP Cunanan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;