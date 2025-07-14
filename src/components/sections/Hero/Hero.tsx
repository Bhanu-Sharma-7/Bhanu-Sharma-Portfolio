import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import './Hero.css';

const Hero = () => {

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring" as const, damping: 12, stiffness: 100 } 
    }
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.h6 className="hero-subtitle" variants={item}>
          Hello, my name is
        </motion.h6>
        
        <motion.h1 className="hero-title" variants={item}>
          Bhanu <span className="name-accent">Sharma</span>.
        </motion.h1>
        
        <motion.h2 className="hero-role" variants={item}>
          I build <span className="role-highlight">digital experiences</span> for
          <br />
          web and mobile platforms.
        </motion.h2>
        
        <motion.p className="hero-description" variants={item}>
          Full Stack Developer specializing in modern web technologies
          <br />
          and cross-platform mobile solutions.
        </motion.p>
        
        <motion.div 
          className="hero-cta"
          variants={item}
        >
          <motion.div
            whileHover={{ y: -3, transition: { type: "spring" as const, stiffness: 300 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/projects" className="cta-button primary">
              Explore My Work
              <span className="arrow">→</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, transition: { type: "spring" as const, stiffness: 300 } }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/contact" className="cta-button secondary">
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 