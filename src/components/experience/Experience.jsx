import "./experience.css";

const experiences = [
  {
    id: 1,
    role: "Senior Front End Developer",
    company: "Better HR",
    location: "Yangon, Myanmar",
    img: "/betterhr.jpg",
    period: "Nov 2023 - Present",
    description:
      "Leading frontend development initiatives, mentoring junior developers, and implementing best practices for scalable applications.",
    skills: ["Vue.js", "Nuxt.js", "TypeScript", "Team Leadership", "Code Review"]
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
    skills: ["React", "JavaScript", "HTML/CSS", "REST APIs", "Git"]
  },
  {
    id: 3,
    role: "Network Engineer",
    company: "Frontiir",
    location: "Mandalay, Myanmar",
    img: "/betterhr.jpg",
    period: "Jan 2019 - Feb 2022",
    description:
      "Managed network infrastructure, implemented security protocols, and ensured reliable network connectivity for enterprise clients.",
    skills: ["Network Security", "Infrastructure", "Troubleshooting", "System Administration"]
  }
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h1 className="experience-title">Professional Experience</h1>
      <div className="timeline">
        {experiences.map((experience) => (
          <div className="experience-container" key={experience.id}>
            <img src={experience.img} alt={`${experience.company} logo`} className="company-logo" />
            <div className="text-box">
              <h2>{experience.role} @ {experience.company}</h2>
              <small>{experience.period} — {experience.location}</small>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
