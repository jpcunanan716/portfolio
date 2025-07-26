import DecryptedText from "../common/DecryptedText";
import TiltedCard from "../common/TiltedCard";
import { Code, Palette, Zap } from 'lucide-react';
import profileImage from '/src/assets/images/1x1_image.jpg';

const About = () => (

    <section id="about" className="py-20 px-6 bg-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div style={{ marginTop: '4rem' }}>
                        <DecryptedText
                            text="I'm a passionate full-stack developer with 5+ years of experience creating scalable web applications. I specialize in React, Node.js, and modern JavaScript frameworks, always staying current with the latest technologies.

When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or sharing knowledge with the developer community."
                            speed={10}
                            maxIterations={15}
                            animateOn="view"
                            className="revealed text-gray-300 text-lg leading-relaxed mb-6"
                            revealDirection="start"
                            sequential={true}
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                        />
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
                    <div className="w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-black rounded-2xl mx-auto">
                        <TiltedCard
                            imageSrc={profileImage}
                            altText="JP Cunanan Profile Image"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={20}
                            scaleOnHover={1.05}
                            showMobileWarning={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section >
);

export default About;   