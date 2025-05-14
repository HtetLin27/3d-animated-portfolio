import { motion } from "framer-motion";
import "./getintouch.css";

const contactInfo = [
  {
    label: "Location",
    value: "Yangon, Myanmar",
    icon: "📍",
    color: "#4facfe"
  },
  {
    label: "Phone",
    value: "+959254351761",
    icon: "📞",
    color: "#00f2fe",
    link: "tel:+959254351761"
  },
  {
    label: "Email",
    value: "htetlinko.dev@gmail.com",
    icon: "✉️",
    color: "#ff6b6b",
    link: "mailto:htetlinko.dev@gmail.com"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: "easeOut" }
  })
};

const GetInTouch = () => {
  return (
    <section className="getintouch-section">
      <motion.div 
        className="getintouch-container redesigned"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1 
          className="getintouch-title redesigned"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Get In Touch
        </motion.h1>
        <div className="contact-card-list">
          {contactInfo.map((info, idx) => (
            <motion.div 
              className="contact-card"
              key={info.label}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: "0 6px 24px rgba(79,172,254,0.15)" }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <span className="contact-card-icon" style={{ background: info.color }}>
                {info.icon}
              </span>
              <div className="contact-card-info">
                <span className="contact-card-label">{info.label}</span>
                {info.link ? (
                  <a href={info.link} className="contact-card-value" target="_blank" rel="noopener noreferrer">
                    {info.value}
                  </a>
                ) : (
                  <span className="contact-card-value">{info.value}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default GetInTouch; 