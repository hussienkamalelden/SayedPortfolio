import OpenToCard from '../shared/OpenToCard';

const OpenTo = () => {
  const services = [
    {
      type: 'Design Request',
      title: 'Submit Your Project and Watch Your Idea Come to Life.',
      action: 'Submit your request',
    },
    {
      type: 'Consulting',
      title: 'Expert Guidance to Elevate Your Product User Experience.',
      action: 'Schedule a Meeting',
    },
    {
      type: 'Mentorship',
      title: 'Unlock Your Full Potential Through UX Mentorship Sessions.',
      action: 'Schedule a Session',
    },
    {
      type: 'Are You Hiring?',
      title: 'Bring an Exceptional UX Design Lead to Your Team?',
      action: 'Hire Me Now',
    },
  ];

  return (
    <section className="py-6 bg-[#10111a]">
      <div className="container mx-auto">
        <h2 className="mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] text-xl font-[font-b]">
            __I'm Open to
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <OpenToCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenTo;
