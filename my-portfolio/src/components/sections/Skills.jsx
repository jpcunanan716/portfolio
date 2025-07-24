import { skills } from "../../constants/skills";

const Skills = () => (
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
);

export default Skills;