import { projects } from './constants/Projects';
import { skills } from './constants/skills';
import { Hero, About, Projects, Skills, Contact, Footer, Navbar } from './components/sections';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;