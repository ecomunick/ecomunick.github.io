export const siteConfig = {
  name: "Marcia Cabral",
  title: "AI & Computer Vision Engineer",
  description: "Portfolio website of Marcia Cabral — data scientist passionate about AI, robotics, and solving real-world problems",
  accentColor: "#1d4ed8",
  social: {
    email: "marciamunick@gmail.com",
    linkedin: "https://linkedin.com/in/marcia-cabral",
    twitter: "https://x.com/ecomunick",
    github: "https://github.com/ecomunick",
  },
  aboutMe:
    "Animal lover and creative builder. In my free time, I prototype robots, small self-driving cars, paint, or set up plant nurseries. Professionally, I develop deep learning and computer vision models to build AI-driven solutions that improve industrial processes. Passionate about turning complex data into scalable real-world impacts."
,
  skills: [
    "Python",
    "PyTorch",
    "TensorFlow",
    "Computer Vision",
    "Deep Learning",
    "OpenCV",
    "Docker",
    "SQL",
    "MLOps",
  ],
  projects: [
    {
      name: "Textile Defect Detection AI",
      description: "Developed deep learning pipelines for automatic textile defect classification at Desion GmbH.",
      link: "https://github.com/ecomunick/textile-defect-detection",
      skills: ["PyTorch", "YOLO", "Computer Vision"],
    },
    {
      name: "Autonomous Garden Robot",
      description: "Prototyped a small AI-powered robot for garden monitoring and obstacle avoidance.",
      link: "https://github.com/ecomunick/garden-robot",
      skills: ["Python", "ROS", "Robotics", "Deep Learning"],
    },
    {
      name: "Agentic Mental Health Chatbot",
      description: "Contributed to an AI chatbot project focused on mental health assistance using natural language processing.",
      link: "https://github.com/ecomunick/agentic-mental-health",
      skills: ["NLP", "Transformers", "Python"],
    },
  ],
  experience: [
    {
      company: "Desion GmbH",
      title: "Data Scientist Intern",
      dateRange: "Sep 2025 - Present",
      bullets: [
        "Built and optimized deep learning models for textile defect detection.",
        "Enhanced inspection pipeline robustness, increasing classification accuracy.",
        "Assisted in data annotation and technical documentation to ensure deployment readiness.]",
      ],
    },
    {
      company: "Hadi-Plast GmbH",
      title: "Data Scientist Consultant",
      dateRange: "Jul 2025 - Aug 2025",
      bullets: [
        "Designed an unsupervised anomaly detection system for plastics manufacturing.",
        "Developed interactive defect visualization application improving quality checks.",
      ],
    },
    {
      company: "NielsenIQ",
      title: "Data Scientist",
      dateRange: "2022 - 2025",
      bullets: [
        "Created predictive models and dashboards for market insights.",
        "Applied NLP techniques to analyze customer sentiment from social media.",
      ],
    },
  ],
  education: [
  {
    school: "University of Aveiro",
    degree: "Graduate-level research and coursework toward PhD in Biological Sciences",
    dateRange: "2014 - 2019",
    achievements: [
      "Conducted extensive research in environmental data analysis",
      "Published and presented research at international conferences",
      "Accumulated experience equivalent to advanced academic training"
    ],
    },
    {
      school: "Online AI Courses & Certifications",
      degree: "Data Science, Deep Learning, Computer Vision, AI Certifications]",
      dateRange: "2020 - 2025",
      achievements: [
        "Completed extensive coursework on PyTorch, TensorFlow, and AI ethics.",
        "Built multiple AI projects focused on industrial applications.",
      ],
    },
  ],
};