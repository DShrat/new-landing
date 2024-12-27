import { ChevronDown, Github, Linkedin } from "lucide-react";
import React from "react";
import { PersonalInfoP } from "@/utils/types/types";
import { links } from "@/utils/data/personal-information";

interface PersonalInfoProps {
    personalInfo: PersonalInfoP
}

export default function Personal({personalInfo}: PersonalInfoProps){
    return(
        <section id="about" className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(67,56,202,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(124,58,237,0.1),transparent_50%)]" />
        
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-3xl text-gray-300 mb-6">{personalInfo.title}</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">{personalInfo.bio}</p>
            
            <div className="flex justify-center space-x-6 mb-12">
              {[Github, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href={links[index]}
                  target="_blank"
                  className="p-3 rounded-full backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            <a
              href="#skills"
              className="inline-flex items-center gap-2 animate-bounce"
            >
              <span className="text-gray-400">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </a>
          </div>
        </div>
      </section>
    )
}