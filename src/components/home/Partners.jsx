'use client';

const Partners = () => {
  const partners = [
    { name: 'AIPA', logo: '/assets/images/partners/AIPA.svg' },
    { name: 'Aosc-m', logo: '/assets/images/partners/Aosc-m.svg' },
    { name: 'CFC', logo: '/assets/images/partners/CFC.svg' },
    { name: 'Clubenz', logo: '/assets/images/partners/Clubenz.svg' },
    { name: 'Co-Court', logo: '/assets/images/partners/Co-Court.svg' },
    { name: 'Contact Cars', logo: '/assets/images/partners/Contact cars.svg' },
    { name: 'DCC', logo: '/assets/images/partners/DCC.svg' },
    { name: 'E-courte', logo: '/assets/images/partners/E-courte.svg' },
    { name: 'EDA', logo: '/assets/images/partners/EDA.svg' },
    { name: 'egypt-post', logo: '/assets/images/partners/egypt-post.svg' },
    { name: 'EHS', logo: '/assets/images/partners/EHS.svg' },
    { name: 'FAB', logo: '/assets/images/partners/FAB.svg' },
    { name: 'Find-square', logo: '/assets/images/partners/Find-square.svg' },
    { name: 'GEM', logo: '/assets/images/partners/GEM.svg' },
    { name: 'grid', logo: '/assets/images/partners/grid.svg' },
    { name: 'HSA', logo: '/assets/images/partners/HSA.svg' },
    { name: 'IHF', logo: '/assets/images/partners/IHF.svg' },
    { name: 'ISDB', logo: '/assets/images/partners/ISDB.svg' },
    { name: 'MCIT-EG', logo: '/assets/images/partners/MCIT-EG.svg' },
    { name: 'MOCIT', logo: '/assets/images/partners/MOCIT.svg' },
    { name: 'MOE', logo: '/assets/images/partners/MOE.svg' },
    { name: 'RCJY', logo: '/assets/images/partners/RCJY.svg' },
    { name: 'realize', logo: '/assets/images/partners/realize.svg' },
    { name: 'SEHA', logo: '/assets/images/partners/SEHA.svg' },
    { name: 'Servebig', logo: '/assets/images/partners/Servebig.svg' },
    {
      name: 'Social-ministry',
      logo: '/assets/images/partners/Social-ministry.svg',
    },
    { name: 'SSA', logo: '/assets/images/partners/SSA.svg' },
    { name: 'STC-Bank', logo: '/assets/images/partners/STC-Bank.svg' },
    { name: 'UEFA logo', logo: '/assets/images/partners/UEFA logo.svg' },
  ];

  return (
    <section className=" py-6 overflow-hidden  bg-[#10111a]">
      <div className="bg-[#10111a] relative py-6 border-y border-[#444655] shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
        <div
          className="absolute left-0 top-0 w-[10%] h-full z-10"
          style={{
            background:
              'linear-gradient(90deg, #10111A 17.32%, rgba(16, 17, 26, 0) 100%)',
          }}
        />

        <div
          className="absolute right-0 top-0 w-[10%] h-full z-10"
          style={{
            background:
              'linear-gradient(-90deg, #10111A 17.32%, rgba(16, 17, 26, 0) 100%)',
          }}
        />

        <div
          className="flex items-center space-x-16 whitespace-nowrap animate-marquee"
          style={{
            animation: 'marquee 30s linear infinite',
          }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
