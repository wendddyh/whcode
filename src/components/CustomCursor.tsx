import { useEffect, useState } from 'react';
import '../assets/animations.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverLink, setHoverLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    const handleMouseEnter = () => setHoverLink(true);
    const handleMouseLeave = () => setHoverLink(false);

    window.addEventListener('mousemove', handleMouseMove);

    const link = document.querySelectorAll('a');
    link.forEach(l => {
      l.addEventListener('mouseenter', handleMouseEnter);
      l.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      link.forEach((l) => {
        l.removeEventListener('mouseenter', handleMouseEnter);
        l.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
    
  }, []);

  return (
    <div
      className={`custom-cursor ${hoverLink ? 'hovering-link' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        {hoverLink && <div className="orange"></div>}
      </div>
  );
};

export default CustomCursor;
