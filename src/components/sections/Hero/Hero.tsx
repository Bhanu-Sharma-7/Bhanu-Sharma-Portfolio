import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import './Hero.css';

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check user's system preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

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
    <section className={`hero ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="hero-background"></div>
      
      {/* Theme Toggle Button */}
      <button 
        className="theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
      </button>
      
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
          <motion.a 
            href="#projects" 
            className="cta-button primary"
            whileHover={{ 
              y: -3,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
            <span className="arrow">→</span>
          </motion.a>
          
          <motion.a 
            href="#contact" 
            className="cta-button secondary"
            whileHover={{ 
              y: -3,
              transition: { type: "spring" as const, stiffness: 300 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 