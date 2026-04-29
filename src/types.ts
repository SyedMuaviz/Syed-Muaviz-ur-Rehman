export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  problemSolved: string;
  githubUrl?: string;
  demoUrl?: string;
  category: 'AI' | 'Data Science' | 'IoT' | 'Web';
  imageUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export interface Research {
  title: string;
  venue: string;
  doi?: string;
  impact: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  icon: string; // Lucide icon name
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  badge?: string;
}

export interface Activity {
  role: string;
  organization: string;
  description: string;
}
