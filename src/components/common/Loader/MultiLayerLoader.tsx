import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './MultiLayerLoader.css';

interface MultiLayerLoaderProps {
  onComplete: () => void;
}

const MultiLayerLoader: React.FC<MultiLayerLoaderProps> = ({ onComplete }) => {
  const nameLayer = useRef<HTMLDivElement>(null);
  const grayLayer = useRef<HTMLDivElement>(null);
  const accentLayer = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create master timeline
    const master = gsap.timeline({
      onComplete: onComplete
    });

    // 1. Initial dot pulse animation
    master.to(dot.current, {
      scale: 1.2,
      opacity: 1,
      duration: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // 2. Name layer moves up
    master.to(nameLayer.current, {
      y: -60,
      duration: 0.8,
      ease: "expo.out"
    }, ">");

    // 3. Gray layer starts moving (after 0.3s delay)
    master.to(grayLayer.current, {
      y: "-100%",
      duration: 0.7,
      ease: "expo.out"
    }, ">0.3");

    // 4. Accent layer starts moving (after 0.2s more)
    master.to(accentLayer.current, {
      y: "-100%",
      duration: 0.6,
      ease: "expo.out"
    }, ">0.2");

    // 5. Name layer completes its movement
    master.to(nameLayer.current, {
      y: "-100vh",
      duration: 0.8,
      ease: "expo.out"
    }, "<0.4"); // Starts 0.4s before accent layer finishes

    return () => {
      master.kill();
    };
  }, [onComplete]);

  return (
    <div className="ml-loader-container">
      {/* Name Layer (with dot) */}
      <div 
        ref={nameLayer} 
        className="ml-layer ml-name-layer"
      >
        <h1>Bhanu Sharma</h1>
        <div ref={dot} className="ml-dot"></div>
      </div>

      {/* Gray Layer */}
      <div 
        ref={grayLayer} 
        className="ml-layer ml-gray-layer"
        style={{ top: '100%' }}
      ></div>

      {/* Accent Layer */}
      <div 
        ref={accentLayer} 
        className="ml-layer ml-accent-layer"
        style={{ top: '100%' }}
      ></div>
    </div>
  );
};

export default MultiLayerLoader; 