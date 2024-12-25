'use client';
import RecentWorkCard from '../shared/RecentWorkCard';

const RecentWork = () => {
  const projects = [
    {
      title: 'Smart Bricks',
      description:
        'A smart real estate investing platform powered by AI, Empowering investors with AI real estate investing analytics to make informed decisions. Smart Bricks does AI ROI simulation based on data analytics powered by AI.',
      image: '/assets/images/recent-work/project.jpg',
      associate: {
        name: 'Nada Hazem',
        role: 'Smart Bricks CTO | Product Consultant',
      },
    },
    {
      title: 'Smart Bricks',
      description:
        'A smart real estate investing platform powered by AI, Empowering investors with AI real estate investing analytics to make informed decisions. Smart Bricks does AI ROI simulation based on data analytics powered by AI.',
      image: '/assets/images/recent-work/project.jpg',
      associate: {
        name: 'Nada Hazem',
        role: 'Smart Bricks CTO | Product Consultant',
      },
    },
    {
      title: 'Smart Bricks',
      description:
        'A smart real estate investing platform powered by AI, Empowering investors with AI real estate investing analytics to make informed decisions. Smart Bricks does AI ROI simulation based on data analytics powered by AI.',
      image: '/assets/images/recent-work/project.jpg',
      associate: {
        name: 'Nada Hazem',
        role: 'Smart Bricks CTO | Product Consultant',
      },
    },
    {
      title: 'Smart Bricks',
      description:
        'A smart real estate investing platform powered by AI, Empowering investors with AI real estate investing analytics to make informed decisions. Smart Bricks does AI ROI simulation based on data analytics powered by AI.',
      image: '/assets/images/recent-work/project.jpg',
      associate: {
        name: 'Nada Hazem',
        role: 'Smart Bricks CTO | Product Consultant',
      },
    },
  ];

  return (
    <section className="bg-[#0F0F1A] py-6 ">
      <div className="container mx-auto">
        <h2 className="mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] text-xl font-[font-b]">
            __Recent Work
          </span>
          <span> 🔥</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <RecentWorkCard key={index} project={project} />
          ))}
        </div>

        {/* View Portfolio Button */}
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="group inline-flex items-center text-sm font-[font-r] text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ED0C93] hover:to-[#C80CED] transition-all duration-200"
          >
            View Portfolio
            <span className="group-hover:text-[#C80CED] group-hover:rotate-[-45deg] transition-all duration-200">
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
