import DecryptedText from "../common/DecryptedText";
import PixelTransition from "../common/PixelTransition";
import { Code, Palette, Zap } from 'lucide-react';
import profileImage from '/src/assets/images/1x1_image.jpg';

const About = () => (

    <section id="about" className="py-20 px-6 backdrop-blur-md">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div style={{ marginTop: '4rem' }}>
                        <DecryptedText
                            text="I'm a passionate full-stack developer with 1+ years of experience creating scalable web applications. I specialize in React, Node.js, PHP, Laravel, and modern JavaScript frameworks, always staying current with the latest technologies.

When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, sharing knowledge with the developer community, or creating content related to fashion, travel, and technology. I believe in the power of clean code and user-centric design to create exceptional digital experiences."
                            speed={10}
                            maxIterations={15}
                            animateOn="view"
                            className="revealed text-neutral-800 dark:text-gray-300 text-lg leading-relaxed mb-6"
                            revealDirection="start"
                            sequential={true}
                            parentClassName="all-letters"
                            encryptedClassName="encrypted"
                        />
                    </div>
                    <div className="flex space-x-4 mt-8">
                        <div className="flex items-center space-x-2">
                            <Code className="text-yellow-400" size={20} />
                            <span className="text-neutral-600 dark:text-gray-300">Clean Code</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Palette className="text-yellow-400" size={20} />
                            <span className="text-neutral-600 dark:text-gray-300">UI/UX Focus</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Zap className="text-yellow-400" size={20} />
                            <span className="text-neutral-600 dark:text-gray-300   ">Performance</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-80 h-80 from-yellow-400/10 to-black rounded-2xl mx-auto">
                        <PixelTransition
                            firstContent={
                                <img
                                    src={profileImage}
                                    alt="profile image2"
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            }
                            secondContent={
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        display: "grid",
                                        placeItems: "center",
                                        backgroundColor: "#111"
                                    }}
                                >
                                    <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>Kumusta!👋</p>
                                </div>
                            }
                            gridSize={12}
                            pixelColor='#ffffff'
                            animationStepDuration={0.4}
                            className="custom-pixel-card"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section >
);

export default About;   