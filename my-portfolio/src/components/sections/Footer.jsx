import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
    < footer className="py-8 px-6 border-t border-zinc-800/80" >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 JP Cunanan. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="https://github.com/jpcunanan716" className="text-gray-500 hover:text-yellow-400 transition-colors">
                    <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/jp-cunanan-508470276/" className="text-gray-500 hover:text-yellow-400 transition-colors">
                    <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-500 hover:text-yellow-400 transition-colors">
                    <Mail size={18} />
                </a>
            </div>
        </div>
    </footer >
);

export default Footer;  