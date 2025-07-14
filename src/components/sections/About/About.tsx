import { motion } from "framer-motion";
import './About.css';
import aboutImage from '../../../assets/images/about-section-image.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            My Journey
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Hey there! I'm <span className="highlight">Bhanu Sharma</span>, a self-taught developer currently pursuing my B.Tech at Arya College. My coding journey began in my first year when I wrote my first "Hello World" in C, and since then, there's been no looking back.
            </p>
            
            <p>
              What started as curiosity soon became passion—I taught myself <span className="highlight">HTML, CSS, JavaScript</span>, and eventually the <span className="highlight">MERN stack</span>. But bookish knowledge wasn't enough—I wanted to build <span className="highlight">real projects</span> that solve problems.
            </p>

            <p>
              My internship at <span className="highlight">Brudite</span> was the turning point where I got hands-on experience with <span className="highlight">FastAPI, REST APIs</span>, and production-level code. Today, I build web apps with confidence while continuously learning new technologies.
            </p>
          </motion.div>

          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="image-frame">
              <img src={aboutImage} alt="Bhanu Sharma" className="about-real-image" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 