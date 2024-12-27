import { Menu, X } from "lucide-react";
import React from "react";
import { PersonalInfoP } from "@/utils/types/types";

export interface NavProps {
    personalInfo: PersonalInfoP;
    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;
    activeSection: string;
    handleNavClick: (section: string) => void;
}


export default function Nav({personalInfo, isMenuOpen, setIsMenuOpen, activeSection, handleNavClick}: NavProps){

    const Navigation = () => (
        <div className="hidden md:flex space-x-8">
          {['about', 'skills', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section);
              }}
              className={`capitalize relative px-2 py-1 group transition-all duration-300
                ${
                  activeSection === section
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
            >
              {section}
              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300
                  ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-x-100'
                      : 'bg-blue-400 scale-x-0 group-hover:scale-x-100'
                  }`}
              />
            </a>
          ))}
        </div>
      );

    return(
        <nav className="fixed w-full backdrop-blur-md bg-black/30 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
            
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>

            <Navigation />
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full backdrop-blur-md bg-black/30">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    )
}