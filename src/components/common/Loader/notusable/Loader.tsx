import { motion } from "framer-motion";
import './Loader.css';
import Skeleton from './Skeleton';

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="loader-circle"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <svg viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" strokeWidth="8" fill="none" />
          </svg>
        </motion.div>
        <div className="loader-skeleton-text">
          <Skeleton width="120px" height="20px" style={{ margin: '16px auto 0 auto', display: 'block' }} />
          <Skeleton width="80px" height="16px" style={{ margin: '8px auto 0 auto', display: 'block' }} />
        </div>
      </motion.div>
    </div>
  );
};

export default Loader; 