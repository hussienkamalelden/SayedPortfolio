export default function Banner() {
  return (
    <section className="relative bg-[#10111a] text-white pb-28 pt-[178px] px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-6 max-w-[50%]">
            <h1 className="text-5xl md:text-6xl font-bold">
              UX Design Specialist
            </h1>
            <p className="text-emerald-400 text-lg">
              Designing digital products{' '}
              <span className="text-white">
                by transforming complex challenges into seamless digital
                experiences for Agencies & Enterprises since 2018.
              </span>
            </p>
            <p className="text-lg">
              Through out the past 3 years I've{' '}
              <span className="text-orange-400">
                Trained & mentored over 1000 UX students
              </span>{' '}
              across regions, contributing to shaping the next generation of UX
              professionals.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#portfolio"
                className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg"
              >
                My Portfolio
              </a>
              <a
                href="https://linkedin.com"
                className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg flex items-center gap-2"
              >
                Let's Connect
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80">
              <img
                src="/assets/images/banner/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <p className="text-sm">Hi, I'm Sayeed! 👋</p>
              <p className="text-xs">and this is my picture</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
