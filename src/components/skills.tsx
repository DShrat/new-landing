import React from "react";
import { SkillsProps } from "@/utils/types/types";

export default function Skills({skills}: SkillsProps){
    return(
        <section id="skills" className="py-20 relative">
            <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skillGroup, index) => (
                <div
                    key={index}
                    className="backdrop-blur-md bg-white/10 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
                >
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                        <span
                        key={skillIndex}
                        className="bg-white/5 backdrop-blur-md px-3 py-1 rounded-full text-sm hover:bg-white/10 transition-colors duration-300"
                        >
                        {skill}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    )
}