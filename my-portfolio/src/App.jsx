import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight, Code, Palette, Zap } from 'lucide-react';
import profileImage from './assets/images/1x1_image.jpg';
import BlurText from './BlurText';
import Squares from './Squares';

export default function ModernPortfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "Full-stack React dashboard with real-time analytics, built with TypeScript and Node.js",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      link: "#",
      featured: true
    },
    {
      title: "AI Chat Interface",
      description: "Modern chat application with AI integration, featuring real-time messaging",
      tech: ["Next.js", "Socket.io", "OpenAI API", "Tailwind"],
      link: "#",
      featured: true
    },
    {
      title: "Design System Library",
      description: "Comprehensive component library with Storybook documentation",
      tech: ["React", "Storybook", "Styled Components"],
      link: "#",
      featured: false
    },
    {
      title: "Mobile Banking App",
      description: "React Native application with biometric authentication and secure transactions",
      tech: ["React Native", "Firebase", "Redux"],
      link: "#",
      featured: false
    }
  ];

  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "React", "BootStrap", "Javascript", "Tailwind CSS"] },
    { category: "Backend & Databases", items: ["Node.js", "Python", "PHP", "Laravel", "C++", "Java", "SQL", "MongoDB", "Firebase"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Figma", "Vite", "Postman"] }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Squares
            direction="diagonal"
            speed={0.5}
            squareSize={60}
            borderColor="rgba(234, 179, 8, 0.15)"
            hoverFillColor="rgba(196, 154, 26, 1)"
          />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="opacity-100 transition-opacity duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <BlurText
                text="Hello, I'm JP Cunanan"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-7xl mb-8 text-yellow-400"
              />
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Full-stack developer crafting digital experiences with modern technologies
            </p>
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://github.com/jpcunanan716" className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jp-cunanan-508470276/" className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all transform hover:scale-105 flex items-center mx-auto"
            >
              View My Work
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div style={{ marginTop: '4rem' }}>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a passionate full-stack developer with 5+ years of experience creating scalable web applications.
                  I specialize in React, Node.js, and modern JavaScript frameworks, always staying current with the latest technologies.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>
              <div className="flex space-x-4 mt-8">
                <div className="flex items-center space-x-2">
                  <Code className="text-yellow-400" size={20} />
                  <span className="text-gray-400">Clean Code</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className="text-yellow-400" size={20} />
                  <span className="text-gray-400">UI/UX Focus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="text-yellow-400" size={20} />
                  <span className="text-gray-400">Performance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-black rounded-2xl mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-zinc-800 overflow-hidden">
                <img
                  src={profileImage}
                  alt="JP Cunanan"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Projects Section */}
      < section id="projects" className="py-20 px-6" >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-yellow-400">Featured Projects</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 border border-zinc-800 ${project.featured ? 'md:col-span-2' : ''}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    className="text-gray-500 group-hover:text-yellow-400 transition-colors transform group-hover:scale-110"
                    size={18}
                  />
                </div>

                <p className="text-zinc-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm font-medium hover:bg-yellow-400 hover:text-black transition-colors border border-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Skills Section */}
      < section id="skills" className="py-20 px-6 bg-black/80" >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">Skills & Technologies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-300 transform hover:scale-105 border border-zinc-800">
                <h3 className="text-xl font-bold mb-4 text-yellow-400 group-hover:text-yellow-300 transition-colors">
                  {skillCategory.category}
                </h3>
                <div className="space-y-3">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors cursor-default"
                    >
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Contact Section */}
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

      {/* Footer */}
      < footer className="py-8 px-6 border-t border-zinc-800/80 bg-black" >
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
    </div >
  );
}