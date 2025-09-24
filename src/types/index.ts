export interface Experience {
  role: string;
  company: string;
  location: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  collegeName: string;
  timeline: string;
  //using cgpa
  score: string;
}

export interface Project {
  name: string;
  responsibility: string[];
  stack: string[];
  gitHub?: string;
  link: string;
}

export interface Skill {
  topic: string;
  lists: { icon: string; name: string; color: string }[];
}
