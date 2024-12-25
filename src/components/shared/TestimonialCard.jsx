const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="break-inside-avoid bg-[#1E1B4B] rounded-xl p-6 hover:shadow-xl transition-shadow mb-6">
      {/* Author Info */}
      <div className="flex items-center mt-6">
        <img
          src={testimonial.author.image}
          alt={testimonial.author.name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <p className="text-white font-medium">{testimonial.author.name}</p>
          <p className="text-gray-400 text-sm">{testimonial.author.role}</p>
        </div>
      </div>
      {/* Testimonial Content */}
      <p className="text-gray-300 text-base leading-relaxed">
        {testimonial.text}
      </p>
    </div>
  );
};

export default TestimonialCard;
