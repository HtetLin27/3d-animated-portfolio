import "./portfolio.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "Full Stack Blog Application",
    desc: "A modern blog application with real-time updates, user authentication, and rich text editing capabilities.",
    link: "/",
    tools: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    languages: ["JavaScript", "HTML", "CSS", "TypeScript"]
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "School Management System",
    desc: "Comprehensive school management solution with student records, attendance tracking, and grade management.",
    link: "/",
    tools: ["React", "Redux", "Node.js", "PostgreSQL", "Docker"],
    languages: ["JavaScript", "TypeScript", "SQL", "HTML", "CSS"]
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Real-time Chat Application",
    desc: "Instant messaging platform with real-time message delivery, file sharing, and group chat features.",
    link: "/",
    tools: ["React", "Firebase", "WebRTC", "Material-UI", "Redux"],
    languages: ["JavaScript", "HTML", "CSS", "TypeScript"]
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Social Media Project",
    desc: "Social networking platform with user profiles, posts, comments, and real-time notifications.",
    link: "/",
    tools: ["React", "GraphQL", "Apollo", "MongoDB", "AWS"],
    languages: ["JavaScript", "GraphQL", "HTML", "CSS"]
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "Interactive portfolio website showcasing projects with 3D animations and modern design.",
    link: "/",
    tools: ["React", "Three.js", "Framer Motion", "Vite", "Tailwind CSS"],
    languages: ["JavaScript", "GLSL", "HTML", "CSS"]
  },
];

const ListItem = ({ item }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div 
      ref={ref}
      className="pItem"
      style={{ opacity, scale }}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="pImg">
        <motion.img 
          src={item.img} 
          alt="" 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="pText">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {item.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {item.desc}
        </motion.p>
        
        <motion.div 
          className="tools-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="tools-section">
            <h3>Tools & Technologies</h3>
            <div className="tools-list">
              {item.tools.map((tool, index) => (
                <motion.span 
                  key={index}
                  className="tool-tag"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
          <div className="languages-section">
            <h3>Languages</h3>
            <div className="languages-list">
              {item.languages.map((language, index) => (
                <motion.span 
                  key={index}
                  className="language-tag"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {language}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.a 
          href={item.link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button>View Project</button>
        </motion.a>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio">
      <motion.h1 
        className="portfolio-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut",
          delay: 0.2
        }}
      >
        Projects
      </motion.h1>
      <motion.div 
        className="pList"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Portfolio;
