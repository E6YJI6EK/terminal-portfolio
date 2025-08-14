"use client";

import { motion } from "framer-motion";

const profile = {
  name: "Aidos Nurzhanov",
  title: "Frontend Developer",
  location: "Astana, Kazakhstan",
  email: "nurzhanovai@gmail.com",
  website: "https://github.com/nurzhanovai",
  summary:
    "Passionate React developer with a strong focus on building interactive, performant, and accessible web applications. Experienced in modern frontend technologies and UI/UX best practices.",
};

const skills = [
  "React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "Redux", "Zustand", "Framer Motion", "Styled Components", "CSS Modules", "Tailwind CSS", "HTML5", "REST APIs", "Git", "Figma", "Jest", "Cypress"
];

const experience = [
  {
    company: "Tech Solutions LLC",
    role: "Frontend Developer",
    period: "2022 - Present",
    details: [
      "Developed and maintained scalable React applications for enterprise clients.",
      "Implemented responsive UI components with accessibility in mind.",
      "Collaborated with backend teams to integrate RESTful APIs.",
      "Optimized performance and reduced bundle size by 30%."
    ]
  },
  {
    company: "Freelance",
    role: "Frontend Engineer",
    period: "2020 - 2022",
    details: [
      "Built custom dashboards and landing pages for startups.",
      "Worked closely with designers to deliver pixel-perfect UIs.",
      "Introduced modern state management and testing practices."
    ]
  }
];

const education = [
  {
    school: "Astana IT University",
    degree: "BSc in Computer Science",
    period: "2018 - 2022"
  }
];

const projects = [
  {
    name: "Terminal Portfolio",
    link: "https://github.com/nurzhanovai/terminal-portfolio",
    description: "A terminal-inspired portfolio site with interactive commands and animations. Built with Next.js and Framer Motion."
  },
  {
    name: "Cognizer Quiz App",
    link: "https://github.com/nurzhanovai/cognizer",
    description: "A real-time quiz platform for schools and events. Features live leaderboards and chat."
  }
];

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      type: "spring"
    }
  })
};

export default function ResumePage() {
  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem", fontFamily: "'JetBrains Mono', monospace" }}>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        custom={0}
        style={{ marginTop: 548, marginBottom: 32 }}
      >
        <h1 style={{ fontSize: 36, margin: 0 }}>{profile.name}</h1>
        <h2 style={{ fontSize: 22, color: "#888", margin: "8px 0 0 0" }}>{profile.title}</h2>
        <div style={{ color: "#aaa", margin: "8px 0" }}>{profile.location} | <a href={`mailto:${profile.email}`} style={{ color: "#aaa" }}>{profile.email}</a></div>
        <div style={{ color: "#aaa", marginBottom: 8 }}><a href={profile.website} target="_blank" rel="noopener noreferrer" style={{ color: "#aaa" }}>{profile.website}</a></div>
        <p style={{ marginTop: 16, fontSize: 18 }}>{profile.summary}</p>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        custom={1}
        style={{ marginBottom: 32 }}
      >
        <h3 style={{ fontSize: 22, marginBottom: 12 }}>Skills</h3>
        <ul style={{ display: "flex", flexWrap: "wrap", gap: 12, listStyle: "none", padding: 0, margin: 0 }}>
          {skills.map(skill => (
            <li key={skill} style={{ background: "#222", color: "#fff", borderRadius: 6, padding: "6px 14px", fontSize: 15 }}>{skill}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        custom={2}
        style={{ marginBottom: 32 }}
      >
        <h3 style={{ fontSize: 22, marginBottom: 12 }}>Experience</h3>
        {experience.map((exp, idx) => (
          <div key={exp.company} style={{ marginBottom: 18 }}>
            <div style={{ fontWeight: 600, fontSize: 17 }}>{exp.role} <span style={{ color: "#888" }}>@ {exp.company}</span></div>
            <div style={{ color: "#aaa", fontSize: 15 }}>{exp.period}</div>
            <ul style={{ margin: "8px 0 0 18px", color: "#ddd", fontSize: 16 }}>
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        custom={3}
        style={{ marginBottom: 32 }}
      >
        <h3 style={{ fontSize: 22, marginBottom: 12 }}>Education</h3>
        {education.map(edu => (
          <div key={edu.school} style={{ marginBottom: 10 }}>
            <div style={{ fontWeight: 600, fontSize: 17 }}>{edu.degree}</div>
            <div style={{ color: "#888", fontSize: 15 }}>{edu.school} | {edu.period}</div>
          </div>
        ))}
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        custom={4}
      >
        <h3 style={{ fontSize: 22, marginBottom: 12 }}>Projects</h3>
        <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
          {projects.map(proj => (
            <li key={proj.name} style={{ marginBottom: 14 }}>
              <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: "#fff", fontSize: 17, textDecoration: "underline" }}>{proj.name}</a>
              <div style={{ color: "#aaa", fontSize: 15 }}>{proj.description}</div>
            </li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
