'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeItem, setActiveItem] = useState('/');

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Profile', href: '/profile' },
    { label: 'Workspace', href: '/workspace' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Set active item based on current path
    setActiveItem(window.location.pathname);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 backdrop-blur-[24px] bg-[rgba(15,15,15,0.1)] shadow-sm transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <img src="/assets/images/common/main-logo.svg" alt="Logo" />
            </a>
          </div>

          {/* Updated Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 bg-[#DADEE51A] p-1 rounded-[30px]">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 rounded-[30px] transition-all duration-300
                  ${
                    activeItem === item.href
                      ? 'bg-[#FFFFFF1A]'
                      : 'group hover:bg-[linear-gradient(260.52deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]'
                  }
                `}
              >
                {activeItem === item.href && (
                  <>
                    <div className="absolute inset-0 rounded-[30px] bg-pink-500/20" />
                    <div className="absolute bottom-[-7px] left-1/2 -translate-x-1/2 w-1/2 h-[3px] rounded-bl-md rounded-br-md rounded-tl-none  rounded-tr-none  bg-gradient-to-r from-[#ED0C93] to-[#C80CED]" />
                  </>
                )}
                <span
                  className={`relative z-10  ${
                    activeItem === item.href
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] font-[font-eb]'
                      : 'text-[#F3F3F4] group-hover:text-[#E30485] transition-all duration-200 font-[font-r]'
                  }`}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Get in Touch Button */}
          <div>
            <button className="bg-[#5955F4] text-white px-5 py-3 font-[font-sb] rounded-[30px] hover:bg-gradient-to-r from-[#ED0C93] to-[#C80CED] ">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
