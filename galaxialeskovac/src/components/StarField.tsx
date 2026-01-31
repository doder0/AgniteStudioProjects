import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
}

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const stars: Star[] = [];
    const numStars = 100;
    
    // Generate stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: Math.random() * 3 + 2,
      });
    }
    
    // Create star elements
    stars.forEach((star, i) => {
      const starEl = document.createElement('div');
      starEl.className = 'absolute rounded-full bg-foreground';
      starEl.style.cssText = `
        left: ${star.x}%;
        top: ${star.y}%;
        width: ${star.size}px;
        height: ${star.size}px;
        opacity: ${star.opacity};
        animation: twinkle ${star.twinkleSpeed}s ease-in-out infinite;
        animation-delay: ${Math.random() * 3}s;
      `;
      container.appendChild(starEl);
    });
    
    return () => {
      container.innerHTML = '';
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default StarField;
