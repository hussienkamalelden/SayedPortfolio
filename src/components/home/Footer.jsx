const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Profile', href: '/profile' },
    { name: 'My Workspace', href: '/workspace' },
  ];

  return (
    <footer className="bg-[#0F0F1A]   pt-6">
      <div className="border-t border-[#44465533]">
        <div className="container mx-auto py-6 ">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 relative">
            {/* Logo and Company Name */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold">
                <img src="/assets/images/common/main-logo.svg" alt="Logo" />
              </a>
            </div>

            {/* Navigation */}
            <nav className="flex items-center space-x-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="">
                  <span className="text-[#F6F6FE] font-base font-[font-r] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ED0C93] hover:to-[#C80CED]">
                    {item.name}
                  </span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div>
              <button className="bg-[#5955F4] text-white px-5 py-3 font-[font-sb] rounded-[30px] hover:bg-gradient-to-r from-[#ED0C93] to-[#C80CED] ">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center border-t border-[#444655] pt-6">
            <p className="text-[#B9BAC0] text-sm font-[font-r]">
              All Rights Reserved © {new Date().getFullYear()} Sayed Abdelaal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
