import { Project, Experience, Education, Research, Skill, Certification, Activity, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export const PERSONAL_INFO = {
  name: 'Syed Muaviz Ur Rehman',
  title: 'AI Research Specialist & Python Developer',
  tagline: 'Architecting the future of Intelligent Systems through research and engineering.',
  summary: 'Final-year Computer Science student (CGPA 3.89/4.00) with rigorous training in Advanced Python (NUTECH). Emerging researcher focusing on LLMs, Data Science, and IoT to contribute to innovative privacy and security solutions.',
  email: 'syedmuavizurrehman0198@gmail.com',
  linkedin: 'https://linkedin.com/in/syed-muaviz-ur-rehman',
  github: 'https://github.com/Muaviz-ur',
  cvUrl: '/cv.pdf',
};

export const PROJECTS: Project[] = [
  {
    id: 'ielts-scoring',
    title: 'Automated IELTS Essay Scoring',
    description: 'Engineered a pipeline utilizing LLMs and NLP techniques on a dataset of 1,435 essays to deliver human-aligned band scores based on official rubrics.',
    tech: ['Python', 'LLMs', 'NLP', 'Transformers'],
    problemSolved: 'Addressed latency and inconsistency of manual grading with an automated high-accuracy alternative.',
    category: 'AI',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'preprocessing-impact',
    title: 'ML Pre-processing Efficacy',
    description: 'Leading empirical analysis benchmarking model performance before and after advanced cleaning protocols like categorical encoding and feature scaling.',
    tech: ['SciKit-Learn', 'Pandas', 'NumPy', 'Python'],
    problemSolved: 'Identified critical correlation between data hygiene and predictive accuracy of machine learning algorithms.',
    category: 'Data Science',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'transaction-nutech',
    title: 'Transaction Data Analysis',
    description: 'Analyzed bank transaction datasets at NUTECH to identify spending patterns and detect irregularities using advanced visualization techniques.',
    tech: ['Python', 'Matplotlib', 'Pandas', 'Seaborn'],
    problemSolved: 'Gained practical experience in detecting behavior patterns and cleaning high-dimensional financial data.',
    category: 'Data Science',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3885621?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'street-light-iot',
    title: 'Intelligent Street Light Control',
    description: 'Hardware-based automation system using light-dependent sensing to optimize power consumption in public lighting.',
    tech: ['IoT', 'Embedded Systems', 'Relay Logic', 'Sensors'],
    problemSolved: 'Eliminated redundant energy usage by automatically adjusting states based on environmental visibility.',
    category: 'IoT',
    imageUrl: 'https://images.unsplash.com/photo-1473163928189-3f404c7dd9b3?auto=format&fit=crop&q=80&w=800',
  },
];

export const EDUCATION: Education[] = [
  {
    institution: 'Thal University, Bhakkar',
    degree: 'Bachelor of Science in Computer Science',
    period: '2022 - 2026',
    cgpa: '3.89 / 4.00 (Aggregate: 85%)',
    highlights: ['Top-tier academic performance', 'Final Year Undergraduate', 'Focused on AI & Data Science'],
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'NUTECH ISLAMABAD',
    role: 'Python Development Trainee',
    period: 'July 2024 - Oct 2024',
    achievements: [
      'Completed intensive training on Advance Python Programming & Applications.',
      'Achieved A+ Grade (Reg. No. I-24-892739) demonstrating superior coding proficiency.',
      'Optimized backend logic and automated ETL pipelines.',
    ],
  },
];

export const RESEARCH: Research[] = [
  {
    title: 'Leveraging AI in Business Management: Optimizing Decision-Making through CS Techniques',
    venue: 'Journal of Management Science Research Review',
    doi: '10.5281/zenodo.18829960',
    impact: 'Established frameworks for operational efficiency using advanced compute techniques.',
  },
];

export const SKILLS: Skill[] = [
  { name: 'Python', proficiency: 98, icon: 'code-2' },
  { name: 'AI/ML', proficiency: 92, icon: 'brain' },
  { name: 'Data Science', proficiency: 90, icon: 'bar-chart-3' },
  { name: 'SQL', proficiency: 85, icon: 'database' },
  { name: 'IoT', proficiency: 80, icon: 'cpu' },
  { name: 'Java', proficiency: 75, icon: 'coffee' },
];

export const CERTIFICATIONS: Certification[] = [
  { name: 'Honhaar Scholarship Awardee', issuer: 'PHEC / Govt of Pakistan', date: 'Ongoing' },
  { name: 'Prime Minister\'s Laptop Scheme', issuer: 'PMYLS Phase IV', date: 'Awarded' },
  { name: 'IT Specialist: Python', issuer: 'Pearson VUE/Certiport', date: 'Jan 2025' },
  { name: 'Advanced Python Programming', issuer: 'NUTECH/NAVTTC', date: 'Oct 2024' },
  { name: 'Introduction to Databases', issuer: 'Meta', date: 'April 2024' },
];

export const ACTIVITIES: Activity[] = [
  {
    role: 'Technical Event Coordinator',
    organization: 'Thal University IT Club',
    description: 'Facilitated organization of technical workshops and seminars focusing on DS and AI.',
  },
  {
    role: 'Creative Lead & Graphic Designer',
    organization: 'Green Thal Society',
    description: 'Designed visual assets for environmental advocacy and community engagement.',
  },
];
