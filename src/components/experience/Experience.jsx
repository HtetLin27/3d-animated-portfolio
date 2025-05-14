import { motion } from "framer-motion";
import "./experience.css";

const experiences = [
  {
    id: 1,
    role: "Senior Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    period: "Nov 2023 - Present",
    description: "Leading frontend development initiatives, mentoring junior developers, and implementing best practices for scalable applications.",
    skills: ["Vue.js", "Nuxt.js", "TypeScript", "Team Leadership", "Code Review"]
  },
  {
    id: 2,
    role: "Junior Web Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    period: "Sep 2022 - Nov 2023",
    description: "Developed and maintained responsive web applications, collaborated with cross-functional teams, and implemented modern UI/UX designs.",
    skills: ["React", "JavaScript", "HTML/CSS", "REST APIs", "Git"]
  },
  {
    id: 3,
    role: "Network Engineer",
    company: "Frontiir",
    location: "Mandalay, Myanmar",
    period: "Jan 2019 - Feb 2022",
    description: "Managed network infrastructure, implemented security protocols, and ensured reliable network connectivity for enterprise clients.",
    skills: ["Network Security", "Infrastructure", "Troubleshooting", "System Administration"]
  }
];

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="experience-section">
      <motion.div 
        className="experience-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1 
          className="experience-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Professional Journey
        </motion.h1>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className="timeline-item"
              variants={itemVariants}
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <motion.h2 
                    className="role"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {exp.role}
                  </motion.h2>
                  <div className="company-info">
                    <h3>{exp.company}</h3>
                    <span className="location">{exp.location}</span>
                  </div>
                  <div className="period">{exp.period}</div>
                </div>
                
                <p className="description">{exp.description}</p>
                
                <div className="skills-container">
                  {exp.skills.map((skill, skillIndex) => (
                    <motion.span 
                      key={skillIndex}
                      className="skill-tag"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience; 