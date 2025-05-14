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
        <motion.h1 
          className="about-title"
          variants={paragraphVariants}
        >
          About Me
        </motion.h1>
        
        <motion.div 
          className="about-content"
          variants={paragraphVariants}
        >
          <p>
            I am a passionate and results-driven frontend developer with strong expertise in Vue.js, Nuxt.js, and modern JavaScript frameworks. With a proven track record in building responsive, user-centric web applications, I specialize in crafting intuitive interfaces and seamless user experiences. My professional background includes collaborating with cross-functional teams in fast-paced environments to develop scalable and maintainable codebases.
          </p>
          <p>
            Having worked on diverse projects across e-commerce, SaaS platforms, and performance management systems, I bring a keen eye for detail, a commitment to code quality, and an eagerness to learn and adapt to new technologies. I am particularly skilled in integrating RESTful APIs, managing state with Vuex or Pinia, optimizing frontend performance, and ensuring cross-browser compatibility.
          </p>
          <p>
            Outside of coding, I'm an effective communicator who enjoys working collaboratively, solving complex challenges, and continuously improving both personally and professionally. My goal is to contribute to meaningful projects that make a positive impact while growing as a developer and team player.
          </p>
        </motion.div>

        <motion.div 
          className="skills-container"
          variants={paragraphVariants}
        >
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