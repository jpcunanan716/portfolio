import { Mail } from "lucide-react";

const Contact = () => (
    < section id="contact" className="py-20 px-6" >
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-yellow-400">Let's Work Together</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                I'm always interested in new opportunities and exciting projects.
                Let's discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200 flex items-center group border border-yellow-400">
                    <Mail className="mr-2 transform group-hover:scale-110 transition-transform" size={18} />
                    Get In Touch
                </button>
                <a
                    href="/files/Jhon_Paul_Cunanan_Resume.pdf"
                    download="JP_Cunanan_CV.pdf"
                    className="border border-gray-700 text-gray-300 px-8 py-3 rounded-full font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200">
                    Download CV
                </a>
            </div>
        </div>
    </section >
);

export default Contact; 