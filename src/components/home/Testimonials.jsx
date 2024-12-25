'use client';

import TestimonialCard from '../shared/TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      author: {
        name: 'Ahmed Farouk',
        role: 'Product @Contactcars.com',
        image: 'assets/images/testimonials/user.png',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was <span style="color: #0CEDA6;">consistently impressed</span> by his creativity, attention to detail, and <span style="color: #F68511;">user-centric approach</span>. Over the time we worked together, Sayed demonstrated an exceptional ability to <span style="color: #0CEDA6;">understand complex product requirements</span> and translate them into intuitive, beautiful designs. His <span style="color: #F68511;">collaborative spirit</span>, combined with his technical skills, made him an integral part of our team. He was <span style="color: #0CEDA6;">always open to feedback</span>, and his designs not only enhanced user experience but also aligned perfectly with our business objectives. If you’re looking for a designer who brings both creativity and practicality to the table, I highly recommend Sayed. He’s a true asset to any product team.',
    },
    {
      author: {
        name: 'Sarah Chen',
        role: 'Lead Designer @TechCorp',
        image: 'assets/images/testimonials/user.png',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was <span style="color: #0CEDA6;">consistently impressed</span> by his creativity, attention to detail, and <span style="color: #F68511;">user-centric approach</span>. Over the time we worked together, Sayed demonstrated an exceptional ability to <span style="color: #0CEDA6;">understand complex product requirements</span> and translate them into intuitive, beautiful designs.',
    },
    {
      author: {
        name: 'Michael Rodriguez',
        role: 'CTO @StartupInc',
        image: 'assets/images/testimonials/user.png',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was <span style="color: #0CEDA6;">consistently impressed</span> by his creativity, attention to detail, and <span style="color: #F68511;">user-centric approach</span>. Over the time we worked together, Sayed demonstrated an exceptional ability to <span style="color: #0CEDA6;">understand complex product requirements</span> and translate them into intuitive, beautiful designs. His <span style="color: #F68511;">collaborative spirit</span>, combined with his technical skills, made him an integral part of our team.',
    },
    {
      author: {
        name: 'Emma Thompson',
        role: 'Product Manager @InnovateLab',
        image: 'assets/images/testimonials/user.png',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was <span style="color: #0CEDA6;">consistently impressed</span> by his creativity, attention to detail, and <span style="color: #F68511;">user-centric approach</span>. Over the time we worked together, Sayed demonstrated an exceptional ability to <span style="color: #0CEDA6;">understand complex product requirements</span> and translate them into intuitive, beautiful designs. His <span style="color: #F68511;">collaborative spirit</span>, combined with his technical skills, made him an integral part of our team. He was <span style="color: #0CEDA6;">always open to feedback</span>, and his designs not only enhanced user experience but also aligned perfectly with our business objectives. If you’re looking for a designer who brings both creativity and practicality to the table, I highly recommend Sayed. He’s a true asset to any product team.',
    },
    {
      author: {
        name: 'David Kim',
        role: 'CEO @DesignStudio',
        image: 'assets/images/testimonials/user.png',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was <span style="color: #0CEDA6;">consistently impressed</span> by his creativity, attention to detail, and <span style="color: #F68511;">user-centric approach</span>. Over the time we worked together, Sayed demonstrated an exceptional ability to <span style="color: #0CEDA6;">understand complex product requirements</span> and translate them into intuitive, beautiful designs. His <span style="color: #F68511;">collaborative spirit</span>, combined with his technical skills, made him an integral part of our team. He was <span style="color: #0CEDA6;">always open to feedback</span>, and his designs not only enhanced user experience but also aligned perfectly with our business objectives.',
    },
    {
      author: {
        name: 'Lisa Wang',
        role: 'UX Director @GlobalTech',
        image: 'assets/images/testimonials/user.png',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was <span style="color: #0CEDA6;">consistently impressed</span> by his creativity, attention to detail, and <span style="color: #F68511;">user-centric approach</span>.',
    },
    {
      author: {
        name: 'James Mitchell',
        role: 'Founder @CreativeLabs',
        image: 'assets/images/testimonials/user.png',
      },
      text: 'I had the opportunity to work with Sayed, a talented Product UI/UX designer, and I was <span style="color: #0CEDA6;">consistently impressed</span> by his creativity, attention to detail, and <span style="color: #F68511;">user-centric approach</span>. Over the time we worked together, Sayed demonstrated an exceptional ability to <span style="color: #0CEDA6;">understand complex product requirements</span> and translate them into intuitive, beautiful designs. ',
    },
  ];

  return (
    <section className="bg-[#0F0F1A] py-6">
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
