export default function Banner() {
  return (
    <section className="relative bg-[#10111a] text-white pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6 max-w-[65%]">
            <h1 className="text-[80px] text-white font-[font-eb] mb-5">
              UX Design Specialist
            </h1>
            <p className="text-[#0CEDA6] text-xl font-[font-m] m-0">
              Designing digital products{' '}
              <span className="text-[#F3F3F4]">
                by transforming complex challenges into seamless digital
                experiences for Agencies & Enterprises since 2018.
              </span>
            </p>
            <p className="text-xl font-[font-m]">
              Through out the past 3 years I've{' '}
              <span className="text-[#F68511]">
                Trained & mentored over 1000 UX students
              </span>{' '}
              across regions, contributing to shaping the next generation of UX
              professionals.
            </p>
            <div className="flex gap-4 pt-4">
              <div>
                <button className="bg-[#5955F4] text-white px-5 py-3 font-[font-sb] rounded-[30px] hover:bg-gradient-to-r from-[#ED0C93] to-[#C80CED] ">
                  My Portfolio
                </button>
              </div>
              <button
                className={`text-white text-[14px] font-[font-b] bg-[#FFFFFF0D] px-6 py-2 flex items-center border-[1px] border-[#F6F6FE] rounded-full hover:bg-gradient-to-r hover:from-[#ED0C93] hover:to-[#C80CED] hover:border-none transition-all duration-300`}
              >
                Let’s Connect{' '}
                <i class="icon-linkedin text-base ms-2 mt-[-1px]"></i>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-[400px]">
              <img
                src="/assets/images/banner/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 ">
              <img src="/assets/images/banner/floating-indicator.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
