const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Profile', href: '/profile' },
    { name: 'My Workspace', href: '/workspace' },
  ];

  return (
    <footer className="bg-[#0F0F1A] border-t border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="bg-[#E94DCA] rounded-lg p-2">
              <svg
                className="w-6 h-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">Sayed Abdelaal</span>
              <span className="text-gray-400 text-sm">UX Specialist</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="bg-[#6366F1] text-white px-6 py-2 rounded-full hover:bg-[#5558E6] transition-colors">
            Get in Touch
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center md:text-left">
          <p className="text-gray-400 text-sm">
            All Rights Reserved © {new Date().getFullYear()} Sayed Abdelaal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
