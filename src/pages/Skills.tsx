import { motion } from "framer-motion";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiExpress, 
  SiNodedotjs, 
  SiMongodb, 
  SiVscodium, 
  SiGithub, 
  SiDocker, 
  SiAmazon, 
  SiPostman, 
  SiFastapi, 
  SiFlask, 
  SiReactrouter, 
  SiCloudinary, 
  SiTypescript
} from "react-icons/si";
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss3 },
        { name: "JavaScript", icon: SiJavascript },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express", icon: SiExpress },
        { name: "MongoDB", icon: SiMongodb },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Flask", icon: SiFlask }
      ]
    },
    {
      category: "Mobile Development",
      skills: [
        { name: "React Native", icon: SiReactrouter }
      ]
    },
    {
      category: "Development Tools",
      skills: [
        { name: "VS Code", icon: SiVscodium },
        { name: "Git & GitHub", icon: SiGithub },
        { name: "Postman", icon: SiPostman }
      ]
    },
    {
      category: "Cloud Services",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", icon: SiAmazon },
        { name: "Cloudinary", icon: SiCloudinary }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", icon: SiDocker },
        { name: "REST API", icon: SiPostman }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Skills & Expertise
          </h2>
          <p className="section-subtitle">
            Technologies I've worked with and my proficiency level
          </p>
        </motion.div>

        <div className="skills-container">
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="category-title">
                <span className="category-icon">{index + 1}.</span>
                {category.category}
              </h3>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div 
                      key={skillIndex}
                      className="skill-item"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className="skill-info">
                        <div className="skill-icon-name">
                          <IconComponent className="skill-icon" />
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 