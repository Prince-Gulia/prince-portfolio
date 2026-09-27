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
  resumeUrl: "/PrinceGuliaResume.pdf",
  social: {
    github: "https://github.com/Prince-Gulia",
    linkedin: "https://www.linkedin.com/in/princegulia/",
  },
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  status: "BCA Graduate", // or BCA student/candidate
  university: "Guru Gobind Singh Indraprastha University (IITM Janakpuri)",
  years: "2024 – 2027 (Expected)",
  location: "New Delhi, India",
  gpa: "9.52 / 10.0",
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
  { value: "8+", label: "Projects Completed", color: "accent" },
  { value: "12+", label: "Technologies Mastered", color: "teal" },
  { value: "9.52", label: "GPA / 10", color: "accent" },
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
  "Data Science",
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
    title: "Agentic PPT Generator",
    description:
      "An AI agent application that automatically generates complete presentations (PPTs), generates contextual AI images, and fetches the latest web news using Google Gemini API and Tavily search integration.",
    category: "AI/ML",
    tags: ["Python", "Streamlit", "Gemini API", "Tavily API", "GenAI", "AI Agents"],
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/PPT-Generator",
    live: "https://pptgenerator17.streamlit.app/",
    featured: true,
    accentColor: "var(--accent)",
  },
  {
    title: "AI Powered Data Analyst Agent",
    description:
      "An intelligent data analysis agent that automatically processes uploaded datasets, generates univariate, bivariate, and multivariate visualizations, and enables conversational data exploration.",
    category: "Data Science",
    tags: ["Python", "Streamlit", "Groq API", "Gemini API", "Pandas", "Data Analysis"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/Practice_Ai_Agentic",
    live: "https://agenticai17.streamlit.app/",
    featured: true,
    accentColor: "#a78bfa",
  },
  {
    title: "AI Resume Generator",
    description:
      "Generates customized professional resumes tailored to target roles with real-time job application links, powered by multi-API integration with Tavily, Groq, and Gemini.",
    category: "AI/ML",
    tags: ["Python", "Streamlit", "Gemini API", "Groq API", "Tavily API", "GenAI"],
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/Resume_Maker_AI",
    live: "https://resumemakerai17.streamlit.app/",
    featured: true,
    accentColor: "var(--green)",
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
  {
    title: "File Upload & Processing API",
    description:
      "A secure backend service featuring user authentication, file uploads, background processing pipelines, and a management dashboard interface.",
    category: "Backend",
    tags: ["Node.js", "Express", "REST APIs", "JWT", "File Processing", "Render"],
    image:
      "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/file-upload-api",
    live: "https://file-upload-api-k981.onrender.com/dashboard.html",
    featured: false,
    accentColor: "#38bdf8",
  },
  {
    title: "ML Flower Classification App",
    description:
      "Interactive machine learning application that predicts iris flower species based on sepal and petal feature inputs using scikit-learn models and Streamlit.",
    category: "Data Science",
    tags: ["Python", "Streamlit", "Scikit-Learn", "Machine Learning", "Pandas"],
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop",
    github: "https://github.com/Prince-Gulia/ML_practice",
    live: "https://mlpractice-tvhpmvbkrjtxjzgghqmbyv.streamlit.app/",
    featured: false,
    accentColor: "var(--teal)",
  },
];

export const roles = [
  "Backend Developer",
  "Data Scientist",
  "AI Systems Builder",
  "Full Stack Developer",
];
