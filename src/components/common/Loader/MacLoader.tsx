import { motion, useTransform, useMotionValue } from "framer-motion";
import './MacLoader.css';

const MacLoader = () => {
  const progress = useMotionValue(0);
  const dashOffset = useTransform(progress, [0, 100], [187, 0]);

  return (
    <div className="mac-loader-container">
      {/* Visually hidden loader text for accessibility */}
      <span style={{ position: 'absolute', left: '-9999px', fontFamily: 'Baloo2, cursive' }}>Loading...</span>
      {/* MacBook Top Bar */}
      <motion.div 
        className="macbook-top-bar"
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      
      {/* Screen Area */}
      <div className="macbook-screen">
        {/* Apple-like progress circle */}
        <svg className="progress-circle" viewBox="0 0 64 64">
          <motion.circle
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2"
            strokeDasharray="187"
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            initial={{ strokeDashoffset: 187 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
        
        {/* Dynamic dots */}
        <div className="loading-dots">
          {[...Array(3)].map((_, i) => (
            <motion.span
              key={i}
              className="dot"
              style={{ background: "var(--accent)" }}
              animate={{
                y: [0, -8, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
      
      {/* MacBook Bottom Bar */}
      <motion.div 
        className="macbook-bottom-bar"
        initial={{ width: 0 }}
        animate={{ width: "60%" }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Subtle glow effect */}
      <motion.div 
        className="screen-glow"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />
    </div>
  );
};

export default MacLoader; 