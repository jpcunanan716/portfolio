import { projects } from './constants/projects';
import { skills } from './constants/skills';
import { experiences } from './constants/experience';
import { Hero, About, Projects, Skills, Contact, Footer, Experience, Navbar } from './components/sections';


const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950/97 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div >
  );
};

export default App;