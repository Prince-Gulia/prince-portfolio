// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio!
// To add a new project, just add a new object to the projects array.
// ============================================================

export const personalInfo = {
  name: "Prince Gulia",
  firstName: "Prince",
  lastName: "Gulia",
  title: "Backend Developer & Data Scientist",
  tagline: "Building robust backends and intelligent systems.",
  description:
    "I'm a passionate Backend Developer and BCA student specializing in high-performance REST APIs, real-time architectures, and AI-integrated systems. Proven experience building asynchronous background queues (BullMQ/Redis), JWT authentication, and secure, document-grounded RAG pipelines using pgvector.",
  email: "princegulia170306@gmail.com",
  phone: "8527875112",
  location: "Delhi, India",
  available: true,
  availableText: "Available for Opportunities",
  resumeUrl: "/Prince_Gulia_FlowCV_Resume_2026-06-18 (6).pdf",
  social: {
    github: "https://github.com/Prince-Gulia",
    linkedin: "https://www.linkedin.com/in/princegulia/",
  },
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  status: "BCA Graduate", // or BCA student/candidate
  university: "Guru Gobind Singh Indraprastha University (IITM Janakpuri)",
  years: "2023 – 2026",
  location: "New Delhi, India",
  gpa: "9.5 / 10.0",
  progress: 98,
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Software Engineering",
    "Data Science",
    "C/C++",
    "Database Management Systems",
    "Web Development",
    "Computer Networks",
    "Photo Shop"
  ],
};

export const achievements = [
  "Tech Society Core Member",
  "Code of Duty Winner (problem solving contest)",
  "Leetcode 650+ Problem solved",
];

export const certifications = [
  {
    title: "Solutions Architecture Job Simulation",
    year: "2025",
    provider: "AWS (Forage)",
    description: "Completed tasks in designing a simple, scalable, hosting architecture.",
    credentialUrl: "/AWS.pdf"
  },
  {
    title: "Technology Job Simulation",
    year: "2025",
    provider: "Deloitte (Forage)",
    description: "Completed practical simulation tasks in Coding and Development.",
    credentialUrl: "/Deloitte pdf.pdf"
  },
  {
    title: "Data Science & Analytics",
    year: "2025",
    provider: "HP LIFE",
    description: "Examined the benefits of data-driven business approaches, learning key tools and methodologies.",
    credentialUrl: "/certificate.pdf"
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    year: "2025",
    provider: "TATA (Forage)",
    description: "Completed tasks in exploratory data analysis, risk profiling, predictive AI, and collection strategies.",
    credentialUrl: "/TATA GEN AI.pdf"
  },
  {
    title: "Data Analysis with Python",
    year: "2025",
    provider: "IBM (Cognitive Class)",
    description: "Certified passing grade in data analysis, pandas, numpy, and python-driven data visualization.",
    credentialUrl: "/Data_Analytics_With_IBM.pdf"
  }
];

export const highlights = [
  "Strong background in Backend development",
];

export const stats = [
  { value: "3+", label: "Projects Completed", color: "accent" },
  { value: "12+", label: "Technologies Mastered", color: "teal" },
  { value: "9.5", label: "GPA / 10", color: "accent" },
  { value: "∞", label: "Coffee Cups", color: "teal" },
];

export const skills = [
  {
    category: "Languages",
    icon: "code",
    color: "accent",
    items: [
      { name: "JavaScript", level: "Expert", percentage: 95, color: "#F7DF1E" },
      { name: "C++", level: "Expert", percentage: 90, color: "#00599C" },
      { name: "Python", level: "Advanced", percentage: 92, color: "#4B8BBE" },
      { name: "HTML/CSS", level: "Expert", percentage: 92, color: "#E34F26" },
      { name: "Java", level: "Proficient", percentage: 65, color: "#007396" }
    ],
  },
  {
    category: "Frameworks & Libs",
    icon: "server",
    color: "teal",
    items: [
      { name: "React", level: "Basic", percentage: 60, color: "#61DAFB" },
      { name: "Tailwind CSS", level: "Expert", percentage: 90, color: "#06B6D4" },
      { name: "Streamlit", level: "Advanced", percentage: 85, color: "#FF4B4B" },
      { name: "FastAPI", level: "Proficient", percentage: 70, color: "#009688" }
    ],
  },
  {
    category: "Databases & AI",
    icon: "database",
    color: "purple",
    items: [
      { name: "PostgreSQL", level: "Expert", percentage: 88, color: "#336791" },
      { name: "Redis", level: "Advanced", percentage: 80, color: "#DC382D" },
      { name: "pgvector", level: "Advanced", percentage: 85, color: "#009688" },
      { name: "RAG Pipelines", level: "Expert", percentage: 90, color: "#a78bfa" },
      { name: "GenAI", level: "Advanced", percentage: 82, color: "#FFA116" }
    ],
  },
  {
    category: "Tools & DevOps",
    icon: "wrench",
    color: "green",
    items: [
      { name: "Git & GitHub", level: "Expert", percentage: 90, color: "#F05032" },
      { name: "Linux", level: "Advanced", percentage: 80, color: "#FCC624" },
      { name: "BullMQ / Redis", level: "Advanced", percentage: 85, color: "#4B8BBE" }
    ],
  }
];

export const projectCategories = [
  "All Projects",
  "Full Stack",
  "AI/ML",
  "Backend",
];

export const projects = [
  {
    title: "DocuMind — AI Document Assistant",
    description:
      "Architected a RAG pipeline utilizing the Gemini API for vector embeddings and pgvector for high-performance semantic search. Features async background queues using BullMQ for PDF processing, 500-word text chunking with boundary overlaps, and strict AI query guardrails to eliminate hallucinations.",
    category: "AI/ML",
    tags: ["Node.js", "Express", "PostgreSQL", "pgvector", "BullMQ", "Gemini API", "RAG"],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/DocuMind",
    live: "https://docu-mind-frontend-pi.vercel.app/",
    featured: true,
    accentColor: "var(--accent)",
  },
  {
    title: "Real Time Chat App",
    description:
      "Built a real-time chat backend with Socket.io handling persistent WebSocket connections authenticated via JWT. Optimized for sub-second message delivery under 512MB RAM constraints with a PostgreSQL schema for message history and secure room-based broadcasting.",
    category: "Full Stack",
    tags: ["Node.js", "Express", "Socket.io", "PostgreSQL", "JWT", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/Real_Time_Chat",
    live: "https://real-time-chat-frontend-r3tw.onrender.com",
    featured: true,
    accentColor: "var(--teal)",
  },
  {
    title: "Study Tracker — Habit Tracker App",
    description:
      "Developed a JWT-authenticated study tracking platform supporting task categorization and progress monitoring. Features REST APIs for CRUD operations, productivity analytics using Chart.js visualizations, and modular backend architecture for future scalability.",
    category: "Full Stack",
    tags: ["Node.js", "Express", "Chart.js", "JWT", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/Study-Tracker",
    live: "https://marvelous-mermaid-d54410.netlify.app/",
    featured: true,
    accentColor: "#a78bfa",
  },
];

export const roles = [
  "Backend Developer",
  "Data Scientist",
  "AI Systems Builder",
  "Full Stack Developer",
];
