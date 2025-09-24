//Experience
export const Experience = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    duration: "May, 2025 - Present",
    highlights: [
      "Collaborated with clients to gather requirements and deliver customized web solutions aligned with their business needs",
      "Engineered cost-effective solutions using the Firebase serverless stack (Firestore, Cloud Functions), reducing projected back-end and monthly maintenance overhead compared to traditional server architectures.",
      "Actively prepared for technical interviews by solving DSA problems and studying system design fundamentals.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Moxienous Pvt Ltd",
    location: "Chennai",
    duration: "May, 2023 - May, 2025",
    highlights: [
      "Drove a 40% improvement in user-perceived performance by re-architecting the front-end with route-based code splitting and lazy loading, reducing initial load time from 3.2s to 1.9s and elevating the Google Light-house score to 95+.",
      "Spearheaded integration of Stripe / Razorpay with multicurrency support, boosting international payment success by 25% and reducing checkout drop-offs by 15%.",
      "Collaborated within a cross-functional Agile team to translate business goals into modular UI/UX flows, delivering responsive and accessible platforms for multiple client projects.",
    ],
  },
];

//Education
export const Education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    collegeName: "Mar Gregorios College",
    timeline: "2019 - 2022",
    score: "GPA: 3.3/4",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    collegeName: "Government Higher Secondary School",
    timeline: "2017 - 2019",
    score: "Percentage: 75%",
  },
];

//Projects
export const Projects = [
  {
    name: "QRCode4you - E-Commerce Platform",
    responsibility: [
      "Engineered a QR-based digital goods marketplace with dynamic pricing and secure checkout.",
      "Used Node.js child process (fork) to offload heavy PDF generation and QR code creation.",
      "Integrated Stripe and Razorpay for seamless international transactions with real-time currency formatting.",
      "Built a modular, responsive UI following Atomic Design principles.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Razorpay",
      "TailwindCSS",
    ],
    // gitHub: "https://github.com/veeracp/qrcode4you",
    link: "https://qrcode4you.com",
  },

  {
    name: "Journal Publication Website",
    responsibility: [
      "Built a journal management system enabling authors to submit, review, and publish research papers.",
      "Designed a responsive front-end with React and Tailwind for seamless reading experience.",
      "Created backend APIs for submissions, peer review workflows, and notifications.",
      // "Deployed on cloud with CI/CD pipelines for fast iteration.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "Docker"],
    // gitHub: "https://github.com/veeracp/journal-website",
    link: "https://ijengt.com/",
  },
  {
    name: "Radush Website",
    responsibility: [
      "Developed a modern, responsive company website for Radush, focusing on performance and accessibility.",
      "Implemented reusable React components with TailwindCSS for rapid development and consistent UI design.",
      "Integrated SEO best practices and optimized images to achieve faster load times and better search visibility.",
      "Collaborated with stakeholders to translate branding requirements into an engaging user experience.",
    ],
    stack: ["React", "Node.js", "Express", "TailwindCSS", "Vercel"],
    // gitHub: "https://github.com/veeracp/radush-website",
    link: "https://radush.io/",
  },
];

export const Skills = [
  {
    topic: "Frontend Technologies",
    lists: [
      {
        icon: "FaJsSquare",
        name: "JavaScript",
        color: "text-yellow-400",
      },
      {
        icon: "FaHtml5",
        name: "HTML5",
        color: "text-orange-500",
      },
      {
        icon: "FaCss3Alt",
        name: "CSS3",
        color: "text-blue-500",
      },
      {
        icon: "FaReact",
        name: "React.js",
        color: "text-blue-400",
      },
      {
        icon: "SiRedux",
        name: "Redux",
        color: "text-purple-600",
      },
      {
        icon: "SiTailwindcss",
        name: "Tailwind CSS",
        color: "text-cyan-500",
      },
      {
        icon: "SiMui",
        name: "Material UI",
        color: "text-blue-700",
      },
      {
        icon: "SiFramer",
        name: "Framer Motion",
        color: "text-primary",
      },
    ],
  },
  {
    topic: "Backend Technologies",
    lists: [
      {
        icon: "FaNodeJs",
        name: "Node.js",
        color: "text-green-500",
      },
      {
        icon: "SiExpress",
        name: "Express.js",
        color: "text-primary",
      },
      {
        icon: "AiOutlineApi",
        name: "RESTful APIs",
        color: "text-blue-400",
      },
      {
        icon: "SiFirebase",
        name: "Firebase",
        color: "text-yellow-600",
      },
    ],
  },
  {
    topic: "Database",
    lists: [
      {
        icon: "SiMysql",
        name: "MySQL",
        color: "text-blue-500",
      },
      {
        icon: "SiMongodb",
        name: "MongoDB",
        color: "text-green-600",
      },
    ],
  },
  {
    topic: "Developer Tools",
    lists: [
      {
        icon: "FaGitAlt",
        name: "Git",
        color: "text-red-500",
      },
      {
        icon: "SiNetlify",
        name: "Netlify",
        color: "text-cyan-500",
      },
      {
        icon: "SiPostman",
        name: "Postman",
        color: "text-orange-600",
      },
    ],
  },
];

export const navs = [
  { name: "About", section: "#about" },
  { name: "Experience", section: "#experience" },
  { name: "Projects", section: "#projects" },
  { name: "Skills", section: "#skills" },
  { name: "Education", section: "#education" },
  // { name: "Contact", section: "#contact" },
];
