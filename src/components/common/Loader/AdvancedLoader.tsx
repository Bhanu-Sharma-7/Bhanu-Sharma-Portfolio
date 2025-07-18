import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AdvancedLoader.css';

interface AdvancedLoaderProps {
  onComplete?: () => void;
}

const AdvancedLoader = ({ onComplete = () => {} }: AdvancedLoaderProps) => {
  const accentLayerRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete,
      });
      tl.to([nameRef.current, accentLayerRef.current], {
        y: "-100vh",
        duration: 0.5,
        ease: "power2.inOut"
      });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <div className="advanced-loader">
      <div className="loader-layer accent-layer" ref={accentLayerRef}>
        <div className="loader-name" ref={nameRef}>Bhanu Sharma</div>
        <div className="loader-spinner" style={{ background: 'none', boxShadow: 'none', width: 40, height: 40, position: 'relative', marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg 
            className="circular-loader" 
            viewBox="22 22 44 44"
            style={{ width: 40, height: 40 }}
          >
            <circle
              className="loader-circle"
              cx="44"
              cy="44"
              r="20.2"
              fill="none"
              stroke="#fff"
              strokeWidth={3.6}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdvancedLoader; 