import { motion } from "framer-motion";
import "./about.css";

const About = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const paragraphVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="about-section">
      <motion.div
        className="about-container"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={textVariants}
      >
        <motion.h1 className="about-title" variants={paragraphVariants}>
          About Me
        </motion.h1>

        <motion.div className="about-content" variants={paragraphVariants}>
          <p>
            I'm a dedicated and results-driven frontend developer who enjoys
            crafting intuitive, user-focused web experiences. I take pride in
            turning ideas into responsive and accessible interfaces that not
            only look great but also perform well. With a strong eye for detail
            and a deep understanding of user needs, I aim to create solutions
            that are both functional and enjoyable to use.
          </p>
          <p>
            Collaboration, continuous learning, and thoughtful problem-solving
            are at the core of how I work. I thrive in fast-paced environments,
            enjoy working with diverse teams, and am always looking for
            opportunities to grow—both personally and professionally.
          </p>
        </motion.div>

        <motion.div className="skills-container" variants={paragraphVariants}>
          <h2>Core Skills</h2>
          <div className="skills-grid">
            <motion.div
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3>Frontend</h3>
              <ul>
                <li>Vue.js / Nuxt.js</li>
                <li>React / Next.js</li>
                <li>JavaScript / TypeScript</li>
                <li>HTML5 / CSS3</li>
              </ul>
            </motion.div>
            <motion.div
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3>State Management</h3>
              <ul>
                <li>Vuex / Pinia</li>
                <li>Redux</li>
                <li>Context API</li>
              </ul>
            </motion.div>
            <motion.div
              className="skill-category"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <h3>Tools & Others</h3>
              <ul>
                <li>Git / GitHub</li>
                <li>RESTful APIs</li>
                <li>Webpack / Vite</li>
                <li>Responsive Design</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
