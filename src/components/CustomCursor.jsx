'use client';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
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
      }}
    >
      <img
        style={{
          width: '15px',
          height: '15px',
        }}
        src="/images/cursor.svg"
        alt=""
        className="w-8 h-8"
      />
    </div>
  );
};

export default CustomCursor;
