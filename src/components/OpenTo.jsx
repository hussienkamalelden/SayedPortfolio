const OpenTo = () => {
  const services = [
    {
      type: 'Design Request',
      title: 'Submit Your Project and Watch Your Idea Come to Life.',
      action: 'Submit your request',
      buttonClass: 'bg-transparent border border-white',
    },
    {
      type: 'Consulting',
      title: 'Expert Guidance to Elevate Your Product User Experience.',
      action: 'Schedule a Meeting',
      buttonClass: 'bg-transparent border border-white',
    },
    {
      type: 'Mentorship',
      title: 'Unlock Your Full Potential Through UX Mentorship Sessions.',
      action: 'Schedule a Session',
      buttonClass: 'bg-transparent border border-white',
    },
    {
      type: 'Are You Hiring?',
      title: 'Bring an Exceptional UX Design Lead to Your Team?',
      action: 'Hire Me Now',
      buttonClass: 'bg-[#6366F1] text-white',
      isHighlighted: true,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-[#E94DCA] text-xl mb-8">_I'm Open to</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl ${
                service.isHighlighted
                  ? 'bg-gradient-to-br from-[#1E1B4B] to-[#3730A3]'
                  : 'bg-[#1E1B4B]'
              }`}
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className="text-gray-300 mb-4">{service.type}</p>
                  <h3 className="text-white text-xl mb-8">{service.title}</h3>
                </div>

                <button
                  className={`${service.buttonClass} text-white px-6 py-3 rounded-full w-full hover:opacity-90 transition-opacity`}
                >
                  {service.action}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenTo;
