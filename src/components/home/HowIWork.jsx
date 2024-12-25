const HowIWork = () => {
  const workPrinciples = [
    'I prioritize both needs of users and the businesses while I am designing.',
    'I base my design decisions on thorough user research, while also striving to maintain high design standards.',
    'I understand that the product development process is not always straightforward and therefore, I am involved in all phases of production.',
  ];

  return (
    <section className="bg-[#0F0F1A] py-6 ">
      <div className="container mx-auto">
        <h2 className="mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] text-xl font-[font-b]">
            __The way I work
          </span>
          <span> 🔥</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Process Diagram */}
          <div className="flex items-center">
            <img
              src="/assets/images/how-i-work/diagram.png"
              alt="How I Work"
              className="w-full"
            />
          </div>

          {/* Work Principles and Tools */}
          <div>
            {/* Principles */}
            <div className="bg-[linear-gradient(244.57deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)] border border-[#50505080] rounded-3xl p-6 mb-6">
              {workPrinciples.map((principle, index) => (
                <div key={index} className="flex items-baseline mb-4 last:mb-0">
                  <img src="/assets/images/how-i-work/check.svg" alt="Check" />
                  <p className="text-white text-sm font-[font-r] ms-[6px]">
                    {principle}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="bg-[linear-gradient(244.57deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)] border border-[#50505080] rounded-3xl p-6">
              <h3 className="text-[#B9BAC0] mb-4 font-[font-r] font-base ">
                Tools I use for my daily work ✦
              </h3>
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
                <p className="text-white text-sm font-[font-r]">
                  The best way to stay on top of my work is by using these four
                  essential tools, either working solo or collaboratively in
                  team.
                </p>
                <div className="flex gap-2">
                  <div className="group border border-[#646871] rounded-xl h-12 w-12 inline-flex items-center justify-center hover:border-white ">
                    <i class="icon-figma text-[#646871] text-2xl group-hover:text-white"></i>
                  </div>
                  <div className="group border border-[#646871] rounded-xl h-12 w-12 inline-flex items-center justify-center hover:border-white ">
                    <i class="icon-notion text-[#646871] text-2xl group-hover:text-white"></i>
                  </div>
                  <div className="group border border-[#646871] rounded-xl h-12 w-12 inline-flex items-center justify-center hover:border-white ">
                    <i class="icon-miro text-[#646871] text-2xl group-hover:text-white"></i>
                  </div>
                  <div className="group border border-[#646871] rounded-xl h-12 w-12 inline-flex items-center justify-center hover:border-white ">
                    <i class="icon-useberry text-[#646871] text-2xl group-hover:text-white"></i>
                  </div>
                  <div className="group border border-[#646871] rounded-xl h-12 w-12 inline-flex items-center justify-center hover:border-white ">
                    <i class="icon-teams text-[#646871] text-2xl group-hover:text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
