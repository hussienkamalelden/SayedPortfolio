'use client';
import { useEffect, useState } from 'react';

const Partners = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const partners = [
    { name: 'Emirates Post', logo: '/logos/emirates-post.png' },
    { name: 'EHS', logo: '/logos/ehs.png' },
    { name: 'FABMSR', logo: '/logos/fabmsr.png' },
    { name: 'Findsquare', logo: '/logos/findsquare.png' },
    { name: 'Grid', logo: '/logos/grid.png' },
    { name: 'ISDB', logo: '/logos/isdb.png' },
    // Add all other partner logos
    // Duplicate the list to create seamless loop
    { name: 'Emirates Post', logo: '/logos/emirates-post.png' },
    { name: 'EHS', logo: '/logos/ehs.png' },
    { name: 'FABMSR', logo: '/logos/fabmsr.png' },
    { name: 'Findsquare', logo: '/logos/findsquare.png' },
    { name: 'Grid', logo: '/logos/grid.png' },
    { name: 'ISDB', logo: '/logos/isdb.png' },
  ];

  useEffect(() => {
    const animationDuration = 30000; // 30 seconds for one complete loop
    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate scroll position based on time
      const newPosition =
        ((progress % animationDuration) / animationDuration) * 100;
      setScrollPosition(newPosition);

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="bg-[#0F0F1A] py-16 overflow-hidden">
      <div className="relative">
        <div
          className="flex items-center space-x-16 whitespace-nowrap"
          style={{
            transform: `translateX(-${scrollPosition}%)`,
            transition: 'transform 0.5s linear',
          }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
