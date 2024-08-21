import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  const testimonialsRef = useRef([]);

  useEffect(() => {
    testimonialsRef.current.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonial,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  const gradientBackground = {
    background:
      "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              Over 850+ Happy Clients and Growing
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy clients say about us
            </h2>
          </div>

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={gradientBackground}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden shadow-xl"
                  ref={(el) => (testimonialsRef.current[index] = el)}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-[#FDB241]"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="flex-1 mt-8">
                        <p className="text-lg leading-relaxed text-gray-900 font-pj">
                          {testimonial.quote}
                        </p>
                      </blockquote>
                    </div>
                    <div className="flex items-center mt-8">
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={testimonial.image}
                        alt=""
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {testimonial.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    quote:
      "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
    name: "Leslie Alexander",
    title: "Freelance React Developer",
  },
  {
    quote:
      "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    name: "Jacob Jones",
    title: "Digital Marketer",
  },
  {
    quote:
      "“I have been using this product for a year now and it has completely transformed my business. The customer support is top-notch.”",
    image:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png",
    name: "John Doe",
    title: "Entrepreneur",
  },
];

export default Testimonial;
