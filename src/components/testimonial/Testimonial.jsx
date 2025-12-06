import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "Working with Mr Oluwasegun is amazing..He is such a skilled employee & having strong expertise in his role play.Good in administration activities & many of the employee engagement programs successfully executed with his creative thoughts & involvement.Apart from that he is having excellent content writing abilities & appreciable employee friendly characteristics.",
    quote: `Good in administration activities & many of the employee engagement programs successfully executed with his creative thoughts & involvement`,
    name: "Nataraj Mpharm, MBA",
    designation: "Head – Manufacturing & Operations,Shalina Healthcare",
  },
  {
    message:
      "I had the pleasure of working closely with Segun during our collaboration on Project Get A Job's Empowering Careers virtual job fair. As a Human Resources Generalist, Segun's expertise and dedication truly stood out.Segun is exceptionally skilled in his role, demonstrating a profound understanding of human resources principles and practices. His ability to navigate complex situations with ease and precision significantly contributed to the success of our project. Throughout our collaboration, Segun showcased remarkable collaboration and team player skills, fostering a positive and productive working environment for everyone involved.One of Segun's most impressive qualities is his innovative and resourceful approach to challenges. He consistently offered creative solutions and valuable insights, demonstrating his commitment to finding the best possible outcomes. Segun's proactive nature and willingness to go above and beyond expectations greatly enhanced the effectiveness of our team.It was truly a pleasure to work alongside Segun, and I have no doubt that his exceptional talents and professionalism will continue to make a significant impact in any endeavor he pursues. I wholeheartedly recommend Segun for any role that requires a highly skilled and dedicated human resources professional.",
    quote: `One of Segun's most impressive qualities is his innovative and resourceful approach to challenges. He consistently offered creative solutions and valuable insights, demonstrating his commitment to finding the best possible outcomes.`,
    name: "Ebibowei Nabena",
    designation: "Founder , The Analyst Hub",
  },
  {
    message:
      "I am delighted to recommend Oluwasegun Mustapha for the position of HR/Admin Executive. Oluwasegun has consistently demonstrated exemplary professionalism, attention to detail, and a strong commitment to HR and administrative functions. His ability to handle diverse tasks, such as talent acquisition, employee relations, and office management, is truly impressive. Oluwasegun’s dedication to fostering a positive workplace culture and ensuring operational efficiency makes him a valuable asset to any organization",
    quote: `Oluwasegun’s dedication to fostering a positive workplace culture and ensuring operational efficiency makes him a valuable asset to any organization`,
    name: "David Aipoh",
    designation: "Site Admin Officer, Suntory Beverage & Food Nigeria Ltd",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
