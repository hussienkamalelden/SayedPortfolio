'use client';

import TestimonialCard from '../shared/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      author: {
        name: 'Ahmed Farouk',
        role: 'Product @Contactcars.com',
        image: '/images/ahmed-farouk.jpg',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was consistently impressed by his creativity, attention to detail, and user-centric approach. Over the time we worked together, Sayed demonstrated an exceptional ability to understand complex product requirements and translate them into intuitive, beautiful designs.',
      highlightedText:
        'His collaborative spirit, combined with his technical skills, made him an integral part of our team.',
      height: 'medium', // Controls card height variation
    },
    {
      author: {
        name: 'Sarah Chen',
        role: 'Lead Designer @TechCorp',
        image: '/images/sarah-chen.jpg',
      },
      text: 'Working with this team has been an absolute pleasure. Their attention to detail and innovative solutions consistently exceeded our expectations.',
      height: 'short',
    },
    {
      author: {
        name: 'Michael Rodriguez',
        role: 'CTO @StartupInc',
        image: '/images/michael-rodriguez.jpg',
      },
      text: "The level of professionalism and creativity brought to our project was outstanding. They didn't just meet our requirements, they transformed our vision into something even better than we imagined.",
      highlightedText:
        'Their ability to think outside the box while maintaining user-centric design principles is remarkable.',
      height: 'long',
    },
    {
      author: {
        name: 'Emma Thompson',
        role: 'Product Manager @InnovateLab',
        image: '/images/emma-thompson.jpg',
      },
      text: 'Exceptional work on our UX overhaul. The attention to user feedback and iterative improvements made all the difference.',
      height: 'short',
    },
    {
      author: {
        name: 'David Kim',
        role: 'CEO @DesignStudio',
        image: '/images/david-kim.jpg',
      },
      text: 'Their collaborative approach and technical expertise made complex challenges seem simple. A truly valuable addition to any project.',
      highlightedText:
        'The ability to balance aesthetics with functionality is remarkable.',
      height: 'medium',
    },
    {
      author: {
        name: 'Lisa Wang',
        role: 'UX Director @GlobalTech',
        image: '/images/lisa-wang.jpg',
      },
      text: "Innovative solutions, timely delivery, and exceptional communication throughout the project. Couldn't ask for a better partnership.",
      height: 'short',
    },
    {
      author: {
        name: 'James Mitchell',
        role: 'Founder @CreativeLabs',
        image: '/images/james-mitchell.jpg',
      },
      text: "The depth of understanding in both design principles and user psychology sets them apart. Their work has significantly improved our product's user engagement.",
      highlightedText:
        'A rare combination of creative talent and technical expertise.',
      height: 'long',
    },
  ];

  return (
    <section className="bg-[#0F0F1A] py-6 px-4">
      <div className="container mx-auto">
        <h2 className="mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED0C93] to-[#C80CED] text-xl font-[font-b]">
            {' '}
            __People I work with says{' '}
          </span>
          <span>😍</span>
        </h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*:not(:first-child)]:mt-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
