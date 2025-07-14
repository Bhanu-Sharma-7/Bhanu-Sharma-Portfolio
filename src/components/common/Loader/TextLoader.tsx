import { motion, useMotionValue, useTransform } from "framer-motion";
import './TextLoader.css';

const TextLoader = () => {
  const loadingProgress = useMotionValue(0);
  const loadingText = useTransform(
    loadingProgress,
    [0, 25, 50, 75, 100],
    ["Loading", "Loading.", "Loading..", "Loading...", "Ready!"]
  );

  return (
    <div className="text-loader-container">
      <motion.div
        className="text-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.h2 className="loading-text">
          {loadingText}
        </motion.h2>
        
        <motion.div
          className="loading-bar-container"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          onUpdate={latest => {
            if (typeof latest.width === 'number') {
              loadingProgress.set(Math.round(latest.width * 100));
            }
          }}
        >
          <motion.div 
            className="loading-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ 
              duration: 2.5,
              ease: [0.65, 0, 0.35, 1]
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TextLoader; 