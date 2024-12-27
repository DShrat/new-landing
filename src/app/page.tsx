"use client"
import React from "react";
import { useState, useEffect } from "react";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Personal from "@/components/personal";
import Nav from "@/components/navigation";
import ProgressBar from "@/components/progress-bar";
import { personalInfo, skills, projects } from "@/utils/data/personal-information";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      }
    );

    // Observer
    ['about', 'skills', 'projects', 'contact'].forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // smooth scroll
  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <ProgressBar scrollProgress={scrollProgress} />
      <Nav personalInfo={personalInfo} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} activeSection={activeSection} handleNavClick={handleNavClick} />
      <Personal personalInfo={personalInfo} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer personalInfo={personalInfo} />
    </div>
  );
}
