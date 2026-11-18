const TestimonialTemplate = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="text-center pb-10">
        <blockquote className="text-[14px] sm:text-lg font-medium pb-6">
          “{testimonial?.quote}”
        </blockquote>
        <div className="mx-auto">
          <p className="text-[14px] sm:text-[16px] md:text-lg font-medium mb-2">
            {testimonial?.name}
          </p>
          <p className="text-[14px] md:text-[16px] font-light text-gray-600">
            {testimonial?.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialTemplate;
