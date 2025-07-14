import { motion } from "framer-motion";
import './Resume.css';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Arya College",
      year: "2023 - 2027",
      description: "Specialized in software development, algorithms, and data structures. Completed projects in web development and mobile applications."
    }
  ];

  const experience = [
    {
      position: "Full Stack Developer Intern",
      company: "Brudite",
      duration: "Jan 2024 - Present",
      description: [
        "Learning FastAPI and modern backend development",
        "Working with Docker, Jira, Git/GitHub, and AWS",
        "Collaborating with team members using Agile methodologies"
      ]
    },
    {
      position: "Self-Taught Developer",
      company: "Personal Projects",
      duration: "2022 - Present",
      description: [
        "Learned MERN stack independently through YouTube and documentation",
        "Built custom websites and web applications",
        "Implemented responsive designs and modern UI/UX principles"
      ]
    }
  ];

  const skills = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Authentication"]
    },
    {
      category: "Mobile",
      skills: ["React Native", "Cross-platform Development"]
    },
    {
      category: "Tools & Others",
      skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "Docker", "AWS", "Cloudinary"]
    }
  ];

  return (
    <section className="resume-section">
      <div className="resume-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Resume
          </h2>
          <p className="section-subtitle">
            My education, experience, and technical skills
          </p>
        </motion.div>

        <div className="resume-content">
          {/* Education Section */}
          <motion.div 
            className="resume-section-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="section-heading">
              <span className="section-icon">🎓</span>
              Education
            </h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h4 className="item-title">{edu.degree}</h4>
                    <p className="item-subtitle">{edu.institution}</p>
                    <p className="item-duration">{edu.year}</p>
                    <p className="item-description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            className="resume-section-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="section-heading">
              <span className="section-icon">💼</span>
              Experience
            </h3>
            <div className="timeline">
              {experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h4 className="item-title">{exp.position}</h4>
                    <p className="item-subtitle">{exp.company}</p>
                    <p className="item-duration">{exp.duration}</p>
                    <ul className="item-description">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="resume-section-block"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="section-heading">
              <span className="section-icon">🛠️</span>
              Technical Skills
            </h3>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <h4 className="skill-category-title">{skillGroup.category}</h4>
                  <div className="skill-tags">
                    {skillGroup.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Download Resume Button */}
          <motion.div 
            className="resume-download"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href="/resume.pdf"
              download
              className="download-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7,10 12,15 17,10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 