import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const stepsRef = useRef([]);

  useEffect(() => {
    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.3,
        }
      );
    });
  }, []);

  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            How does it work?
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            MAHTAB-TECH Focus on your business objectives and delegate your
            technical needs completely. As one of the leading WordPress
            agencies, we implement appropriate workflows based on the needs of
            our clients.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              alt=""
            />
          </div>

          <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className="step"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    title: "Setting up a kick-off meeting",
    description:
      "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
  },
  {
    title: "Planning for the sprints",
    description:
      "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
  },
  {
    title: "Getting Results",
    description:
      "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
  },
  {
    title: "Fast-paced Scaling",
    description:
      "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
  },
];

export default HowItWorks;
