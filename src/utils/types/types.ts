export interface PersonalInfoP {
    name: string;
    title: string;
    bio: string;    
}

export interface SkillsP {
    category: string;
    items: string[];
}


export interface SkillsProps {
    skills: SkillsP[];
}

export interface ProjectsP {
    title: string;
    description: string;
    tech: string[];
    link: string;
}

export interface ProjectsProps {
    projects: ProjectsP[];
}

