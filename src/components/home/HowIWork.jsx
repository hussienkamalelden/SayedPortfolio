const HowIWork = () => {
  const processSteps = [
    { name: 'Challenge', phase: '' },
    { name: 'Research', phase: 'Discover' },
    { name: 'Opportunities', phase: 'Define' },
    { name: 'Ideas', phase: 'Design' },
    { name: 'Solution', phase: 'Deliver' },
  ];

  const workPrinciples = [
    'I prioritize both needs of users and the businesses while I am designing.',
    'I base my design decisions on thorough user research, while also striving to maintain high design standards.',
    'I understand that the product development process is not always straightforward and therefore, I am involved in all phases of production.',
  ];

  const tools = [
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Framer', icon: '/icons/framer.svg' },
    { name: 'Webflow', icon: '/icons/webflow.svg' },
    { name: 'Miro', icon: '/icons/miro.svg' },
    { name: 'Teams', icon: '/icons/teams.svg' },
  ];

  return (
    <section className="bg-[#0F0F1A] py-6 px-4">
      <div className="container mx-auto">
        <h2 className="mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] text-xl font-[font-b]">
            __The way I work
          </span>
          <span> 🔥</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Process Diagram */}
          <div className="relative">
            <div className="flex justify-between items-center relative">
              {/* Diamond Pattern with Steps */}
              <svg className="w-full h-64" viewBox="0 0 800 200">
                {/* Purple connecting lines */}
                <path
                  d="M100,100 L200,50 L300,100 L400,50 L500,100"
                  stroke="#6366F1"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Dots at connection points */}
                {[100, 200, 300, 400, 500].map((x) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={x === 200 || x === 400 ? 50 : 100}
                    r="4"
                    fill="#6366F1"
                  />
                ))}
              </svg>

              {/* Process Steps */}
              <div className="absolute top-0 left-0 w-full flex justify-between px-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {step.phase && (
                      <div className="bg-[#6366F1] text-white px-4 py-1 rounded-full text-sm mb-4">
                        {step.phase}
                      </div>
                    )}
                    <span className="text-gray-400 text-sm">{step.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Work Principles and Tools */}
          <div className="space-y-8">
            {/* Principles */}
            <div className="bg-[#1E1B4B] rounded-xl p-6">
              {workPrinciples.map((principle, index) => (
                <div key={index} className="flex items-start mb-4 last:mb-0">
                  <div className="w-2 h-2 mt-2 rounded-full bg-green-400 mr-3 flex-shrink-0" />
                  <p className="text-gray-300 text-sm font-satoshi">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="bg-[#1E1B4B] rounded-xl p-6">
              <h3 className="text-gray-300 mb-4 font-satoshi">
                Tools I use for my daily work ✨
              </h3>
              <p className="text-gray-400 text-sm mb-4 font-satoshi">
                The best way to stay on top of my work is by using these four
                essential tools, either working solo or collaboratively in team.
              </p>
              <div className="flex gap-4">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-[#2D2B55] rounded-lg flex items-center justify-center hover:bg-[#3D3B65] transition-colors"
                  >
                    <img src={tool.icon} alt={tool.name} className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
