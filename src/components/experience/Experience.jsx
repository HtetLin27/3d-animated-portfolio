import { useRef } from "react";
import "./experience.css";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Network Engineer",
    company: "Frontiir",
    location: "Mandalay, Myanmar",
    img: "/frontiir.jpeg",
    period: "Jan 2019 - Feb 2022",
    description:
      "Managed network infrastructure, implemented security protocols, and ensured reliable network connectivity for enterprise clients.",
    skills: [
      "Network Security",
      "Infrastructure",
      "Troubleshooting",
      "System Administration",
    ],
  },
  {
    id: 2,
    role: "Junior Web Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    img: "/betterhr.jpg",
    period: "Sep 2022 - Nov 2023",
    description:
      "Developed and maintained responsive web applications, collaborated with cross-functional teams, and implemented modern UI/UX designs.",
    skills: ["React", "JavaScript", "HTML/CSS", "REST APIs", "Git"],
  },
  {
    id: 3,
    role: "Senior Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    img: "/betterhr.jpg",
    period: "Nov 2023 - Present",
    description:
      "Leading frontend development initiatives, mentoring junior developers, and implementing best practices for scalable applications.",
    skills: [
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Team Leadership",
      "Code Review",
    ],
  },
];

const Experience = () => {
  const ref = useRef();
  const isInview = useInView(ref, { margin: "-200px" });

  return (
    <motion.div
      className="experience-section"
      initial={{ opacity: 0 }}
      animate={isInview ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <motion.h1
        className="experience-title"
        initial={{ y: -50, opacity: 0 }}
        animate={isInview ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Journey
      </motion.h1>
      <div className="timeline">
        <motion.div
          className="experience-container"
          initial={{ x: -100, opacity: 0 }}
          animate={isInview ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/beEC.jpeg" alt="Company logo" className="company-logo" />
          <div className="text-box">
            <h2>Bachelor of Engineering in Electronic and Communication</h2>
            <small>2012 - 2018</small>
            <p>
              Completed a comprehensive engineering program specializing in
              electronic and communication systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="experience-container"
          initial={{ x: 100, opacity: 0 }}
          animate={isInview ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/ccna.jpg" alt="Company logo" className="company-logo" />
          <div className="text-box">
            <h2>CCNA Certification</h2>
            <small>2020 - 2021</small>
            <p>
              Earned the Cisco Certified Network Associate (CCNA) certification,
              demonstrating expertise in networking fundamentals.
            </p>
          </div>
        </motion.div>

        {experiences.map((experience, index) => (
          <motion.div
            className="experience-container"
            key={experience.id}
            initial={{ y: 50, opacity: 0 }}
            animate={isInview ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
          >
            <img
              src={experience.img}
              alt={`${experience.company} logo`}
              className="company-logo"
            />
            <div className="text-box">
              <h2>
                {experience.role} @ {experience.company}
              </h2>
              <small>
                {experience.period} — {experience.location}
              </small>
              <p>{experience.description}</p>
            </div>
          </motion.div>
        ))}
        <motion.h2
          className="upcoming-title"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            isInview ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
          }
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          And More
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Experience;
