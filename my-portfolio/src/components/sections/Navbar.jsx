import { scrollToSection } from '../../utils/helpers';

const Navbar = () => (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-yellow-400 text-xl font-bold cursor-pointer hover:text-yellow-300 transition-colors">
                &lt;portfolio/&gt;
            </div>
            <div className="hidden md:flex space-x-8">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                    <button
                        key={item}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-sm font-medium"
                        onClick={() => scrollToSection(item.toLowerCase())}
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    </nav>
);
export default Navbar;