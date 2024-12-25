const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="break-inside-avoid group  rounded-[16px] border-[1px] border-[#50505080] 
        bg-[linear-gradient(244.57deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_100%)]
        hover:bg-[linear-gradient(244.57deg,rgba(85,3,208,0.45)_0%,rgba(85,3,208,0)_100%)]
        transition-all duration-300 mb-6 p-6"
    >
      {/* Author Info */}
      <div className="flex items-center mb-6">
        <img
          src={testimonial.author.image}
          alt={testimonial.author.name}
          className="w-[60px] h-[60px] rounded-full me-4"
        />
        <div>
          <p className="text-[#B9BAC0] font-[font-b] text-base group-hover:text-white">
            {testimonial.author.name}
          </p>
          <p className="text-white font-[font-r] text-base  group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ED0C93] group-hover:to-[#C80CED] ">
            {testimonial.author.role}
          </p>
        </div>
      </div>
      {/* Testimonial Content */}
      <p
        className="text-[#B9BAC0] text-sm font-[font-r] group-hover:text-white"
        dangerouslySetInnerHTML={{ __html: testimonial.text }}
      ></p>
    </div>
  );
};

export default TestimonialCard;
