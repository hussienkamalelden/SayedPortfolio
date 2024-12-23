'use client';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const onMouseMove = (e) => {
      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Set buffer zone (adjust this value as needed)
      const buffer = 1;

      // Check if cursor is near edges
      const isNearEdge =
        e.clientX <= buffer ||
        e.clientX >= viewportWidth - buffer ||
        e.clientY <= buffer ||
        e.clientY >= viewportHeight - buffer;

      setIsVisible(!isNearEdge);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      setIsPointer(
        target.tagName.toLowerCase() === 'a' ||
          target.tagName.toLowerCase() === 'button' ||
          target.onclick ||
          target.closest('a') ||
          target.closest('button') ||
          window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    document.addEventListener('mousemove', onMouseMove);
    return () => document.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.2s ease-out',
      }}
    >
      <img
        style={{
          width: '15px',
          height: '15px',
        }}
        src="/assets/images/common/cursor.svg"
        alt=""
        className="w-8 h-8"
      />
    </div>
  );
};

export default CustomCursor;
