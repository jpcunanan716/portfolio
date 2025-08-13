import { Mail, Github, Linkedin, Download } from "lucide-react";

const Contact = () => (
    <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">Let's Work Together</h2>
            <p className="text-xl text-neutral-800 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can bring your ideas to life.
            </p>

            {/* Contact Icons */}
            <div className="flex justify-center space-x-8 mb-12">
                {[
                    {
                        icon: Mail,
                        href: "mailto:jpcunanan716@gmail.com",
                        label: "jpcunanan716@gmail.com",
                        color: "hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                    },
                    {
                        icon: Github,
                        href: "https://github.com/jpcunanan716",
                        label: "github.com/jpcunanan716",
                        color: "hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700/20"
                    },
                    {
                        icon: Linkedin,
                        href: "https://www.linkedin.com/in/jp-cunanan/",
                        label: "LinkedIn Profile",
                        color: "hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                    }
                ].map(({ icon: Icon, href, label, color }, index) => (
                    <a
                        key={index}
                        href={href}
                        target={href.startsWith('http') ? '_blank' : '_self'}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
                        className={`group relative p-4 rounded-2xl text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${color} flex items-center`}
                    >
                        <Icon size={28} />

                        {/* Hover Text - Now positioned above the icon */}
                        <span className="absolute bottom-full mb-2 px-3 py-2 bg-black/90 dark:bg-white/90 text-white dark:text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none z-10 transform translate-y-2 group-hover:translate-y-0">
                            {label}
                            {/* Arrow - Now pointing downward */}
                            <span className="absolute left-1/2 top-full transform -translate-x-1/2 -translate-y-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-black/90 dark:border-t-white/90"></span>
                        </span>
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
                <a
                    href="/files/Jhon_Paul_Cunanan_Resume.pdf"
                    download="JP_Cunanan_CV.pdf"
                    className="group bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center hover:scale-105 hover:shadow-lg"
                >
                    <Download className="mr-2 transform group-hover:scale-110 transition-transform" size={20} />
                    Download CV
                </a>
            </div>
        </div>
    </section>
);

export default Contact;