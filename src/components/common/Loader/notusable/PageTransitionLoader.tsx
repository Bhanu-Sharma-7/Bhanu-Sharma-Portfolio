import { motion, AnimatePresence } from "framer-motion";
import './PageTransitionLoader.css';

const PageTransitionLoader = () => {
  return (
    <AnimatePresence>
      <div className="transition-container">
        {/* Layer 1 - Name + Loader */}
        <motion.div
          className="layer name-layer"
          initial={{ y: 0 }}
          animate={{ y: -60 }}
          exit={{ y: -window.innerHeight }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="name">Bhanu Sharma</h1>
          <motion.div 
            className="loader-dot"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Layer 2 - Soft Gray */}
        <motion.div
          className="layer gray-layer"
          initial={{ y: 0 }}
          animate={{ y: -window.innerHeight }}
          transition={{ 
            delay: 0.3,
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        />

        {/* Layer 3 - Accent Color */}
        <motion.div
          className="layer accent-layer"
          initial={{ y: 0 }}
          animate={{ y: -window.innerHeight }}
          transition={{ 
            delay: 0.5,
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default PageTransitionLoader; 