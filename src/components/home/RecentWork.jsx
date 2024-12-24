'use client';

const RecentWork = () => {
  const projects = [
    {
      title: 'Simplify Your Real Estate Investing Journey',
      company: 'Smart Bricks',
      description:
        'A smart real estate investing platform powered by AI, Empowering investors with AI real estate investing analytics to make informed decisions. Smart Bricks does AI ROI simulation based on data analytics powered by AI.',
      image: '/images/smart-bricks.jpg',
      associate: {
        name: 'Nada Hazem',
        role: 'Smart Bricks CTO | Product Consultant',
      },
    },
    // Duplicate the same project 3 more times for the grid
  ];

  return (
    <section className="bg-[#0F0F1A] py-6 px-4">
      <div className="container mx-auto">
        <h2 className="mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] text-xl font-[font-b]">
            __Recent Work
          </span>
          <span> 🔥</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Project Card */}
              <div className="bg-[#1E1B4B] rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Company Name */}
                  <div className="text-[#E94DCA] text-sm mb-3">
                    {project.company}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-white text-xl font-semibold mb-4">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Associate Info */}
                  <div className="flex items-center justify-between">
                    <div className="text-gray-400 text-sm">
                      <span className="opacity-70">— Associated with </span>
                      <span className="text-white">
                        {project.associate.name}
                      </span>
                      <div className="text-xs opacity-70">
                        {project.associate.role}
                      </div>
                    </div>

                    <button className="text-white text-sm border border-gray-700 px-4 py-2 rounded-full hover:bg-gray-700 transition-colors">
                      Read the full story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Portfolio Button */}
        <div className="text-center mt-12">
          <a
            href="/portfolio"
            className="inline-flex items-center text-white hover:text-[#E94DCA] transition-colors"
          >
            View Portfolio
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
          </a>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
