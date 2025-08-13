import { projects } from './constants/Projects';
import { skills } from './constants/skills';
import { Hero, About, Projects, Skills, Contact, Footer, Experience, Navbar } from './components/sections';

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950/97 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Experience />
      <Skills skills={skills} />
      <Contact />
      <Footer />
    </div >
  );
};

export default App;