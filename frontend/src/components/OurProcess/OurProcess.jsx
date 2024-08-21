//last
// import React, { useState } from "react";

// const OurProcess = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     {
//       title: "Setting up a kick-off meeting",
//       image:
//         "https://www.novaadvertising.com/wp-content/uploads/2019/03/website-design-process-1.png",
//       para: [
//         "An initial discovery session determines the short-term objectives for developing a successful minimum viable product.",
//       ],
//     },
//     {
//       title: "Planning for the sprints",
//       image:
//         "https://www.novaadvertising.com/wp-content/uploads/2019/03/website-design-process-1.png",
//       para: [
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       ],
//     },
//     {
//       title: "Getting Results",
//       image:
//         "https://www.novaadvertising.com/wp-content/uploads/2019/03/website-design-process-1.png",
//       para: [
//         "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
//       ],
//     },
//     {
//       title: "Fast-paced Scaling",
//       image:
//         "https://www.novaadvertising.com/wp-content/uploads/2019/03/website-design-process-1.png",
//       para: [
//         "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
//       ],
//     },
//   ];

//   return (
//     <div className="bg-black m-12 rounded-3xl">
//       <div className="text-white flex justify-between p-3 m-9">
//         <h1 className="text-6xl font-mono">Four easy steps</h1>
//         <button className="bg-blue-400 hover:bg-blue-500 hover:transition-all hover:duration-150 rounded-lg text-lg w-44">
//           Get Started
//         </button>
//       </div>
//       <div className="flex justify-between">
//         <div className="w-1/2 bg-opacity-75 ml-5">
//           {steps.map((step, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <div className="text-white w-24 h-20 rounded-full bg-[#0c0c0c] text-center flex items-center justify-center">
//                 {index + 1}
//               </div>
//               <button
//                 onClick={() => setCurrentStep(index)}
//                 className={`ml-4 py-2 px-4 text-left w-full transition-colors duration-150 ${
//                   currentStep === index
//                     ? "bg-[#2e2e2e] text-white"
//                     : "bg-[#0000] text-white hover:bg-[#1a1a1a]"
//                 }`}
//               >
//                 <h2>{step.title}</h2>
//                 {step.para.map((para, idx) => (
//                   <p className="mt-2" key={idx}>
//                     {para}
//                   </p>
//                 ))}
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="w-2/3 p-4 bg-opacity-75">
//           <img
//             src={steps[currentStep].image}
//             alt="Process Step"
//             className="w-full h-auto mb-4"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;

// import React, { useState } from "react";

// const OurProcess = () => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const steps = [
//     {
//       title: "Setting up a kick-off meeting",
//       image:
//         "https://www.novaadvertising.com/wp-content/uploads/2019/03/website-design-process-1.png",
//       para: [
//         "An initial discovery session determines the short-term objectives for developing a successful minimum viable product.",
//       ],
//     },
//     {
//       title: "Planning for the sprints",
//       image:
//         "https://www.the-pixel.com/wp-content/uploads/2021/03/create-a-website-process.png",
//       para: [
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       ],
//     },
//     {
//       title: "Getting Results",
//       image: "https://webutopian.com/wp-content/uploads/2020/09/info_6ste.png",
//       para: [
//         "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
//       ],
//     },
//     {
//       title: "Fast-paced Scaling",
//       image:
//         "https://www.wpminds.com/wp-content/uploads/2022/02/Website-development-process-flowchart.png",
//       para: [
//         "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
//       ],
//     },
//   ];

//   return (
//     <div className="bg-black m-12 rounded-3xl">
//       <div className="text-white flex justify-between p-3 m-9">
//         <h1 className="text-6xl font-mono">Four easy steps</h1>
//         <button className="bg-blue-400 hover:bg-blue-500 hover:transition-all hover:duration-150 rounded-lg text-lg w-44">
//           Get Started
//         </button>
//       </div>
//       <div className="flex justify-between ml-5">
//         <div className="w-1/2 bg-opacity-75 ">
//           {steps.map((step, index) => (
//             <div key={index} className="flex items-center mb-4">
//               <div
//                 className={`w-24 h-20 text-white rounded-full text-center flex items-center justify-center transition-colors duration-150 ${
//                   currentStep === index ? "bg-[#2e2e2e]" : "bg-[#0c0c0c]"
//                 }`}
//               >
//                 {index + 1}
//               </div>
//               <button
//                 onClick={() => setCurrentStep(index)}
//                 className={`ml-4 py-2 px-4 text-left w-full transition-colors duration-150 rounded-lg ${
//                   currentStep === index
//                     ? "bg-[#2e2e2e] text-white"
//                     : "bg-[#0000] text-white hover:bg-[#1a1a1a]"
//                 }`}
//               >
//                 <h2>{step.title}</h2>
//                 {step.para.map((para, idx) => (
//                   <p key={idx}>{para}</p>
//                 ))}
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="w-2/3 p-4 bg-opacity-75">
//           <img
//             src={steps[currentStep].image}
//             alt="Process Step"
//             className="w-full h-[450px] mb-4"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;

//laaaaaaaaaast

// import React, { useState, useEffect, useRef } from "react";

// const OurProcess = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const stepRefs = useRef([]);

//   const steps = [
//     {
//       title: "Setting up a kick-off meeting",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eoIwzLryvkkMEdgSEZLAUlixMkDjRwfw2Yg0goalTkAJpHbEPpSLS7sbS8Ui_pe8Kgk&usqp=CAU",
//       para: [
//         "An initial discovery session determines the short-term objectives for developing a successful minimum viable product.",
//       ],
//     },
//     {
//       title: "Planning for the sprints",
//       image:
//         "https://www.the-pixel.com/wp-content/uploads/2021/03/create-a-website-process.png",
//       para: [
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       ],
//     },
//     {
//       title: "Getting Results",
//       image: "https://webutopian.com/wp-content/uploads/2020/09/info_6ste.png",
//       para: [
//         "Over time, retainers improve as we better understand your business objectives through continued collaboration.",
//       ],
//     },
//     {
//       title: "Fast-paced Scaling",
//       image:
//         "https://www.wpminds.com/wp-content/uploads/2022/02/Website-development-process-flowchart.png",
//       para: [
//         "With WordPress retainers, we deliver quickly via weekly sprints, allowing us to move fast, experiment, and iterate efficiently without complex roadmaps.",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const options = {
//       root: null, // Use the viewport as the root
//       rootMargin: "0px",
//       threshold: 0.5, // Trigger when 50% of the element is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = stepRefs.current.indexOf(entry.target);
//           if (index !== -1) {
//             setCurrentStep(index);
//           }
//         }
//       });
//     }, options);

//     stepRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       stepRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   return (
//     <div className="bg-black m-12 rounded-3xl">
//       <div className="text-white flex justify-between p-3 m-9">
//         <h1 className="text-6xl font-mono">Four easy steps</h1>
//         <button className="bg-blue-400 hover:bg-blue-500 hover:transition-all hover:duration-150 rounded-lg text-lg w-44">
//           Get Started
//         </button>
//       </div>
//       <div className="flex justify-between ml-5">
//         <div className="w-1/2 bg-opacity-75">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               ref={(el) => (stepRefs.current[index] = el)}
//               className={`flex items-center mb-4 transition-transform duration-500 ${
//                 currentStep === index ? "transform scale-105" : ""
//               }`}
//             >
//               <div
//                 className={`w-24 h-20 text-white rounded-full text-center flex items-center justify-center transition-colors duration-500 ${
//                   currentStep === index ? "bg-[#4D4C51]" : "bg-[#0c0c0c]"
//                 }`}
//               >
//                 {index + 1}
//               </div>
//               <button
//                 onClick={() => setCurrentStep(index)}
//                 className={`ml-4 py-2 px-4 text-left w-full transition-colors duration-500 rounded-lg ${
//                   currentStep === index
//                     ? "bg-[#2e2e2e] text-white"
//                     : "bg-[#0000] text-white hover:bg-[#1a1a1a]"
//                 }`}
//               >
//                 <h2 className="text-xl">{step.title}</h2>
//                 {step.para.map((para, idx) => (
//                   <p className="text-[#666669]" key={idx}>
//                     {para}
//                   </p>
//                 ))}
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="w-2/3 p-4 bg-opacity-75">
//           <img
//             src={steps[currentStep].image}
//             alt="Process Step"
//             className="w-full h-[450px] mb-4 transition-transform duration-500"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;
//last

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import "./OurProcess.css";

// const OurProcess = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [prevStep, setPrevStep] = useState(null);
//   const stepRefs = useRef([]);
//   const imageRef = useRef(null);

//   const steps = [
//     {
//       title: "Setting up a kick-off meeting",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eoIwzLryvkkMEdgSEZLAUlixMkDjRwfw2Yg0goalTkAJpHbEPpSLS7sbS8Ui_pe8Kgk&usqp=CAU",
//       para: [
//         "An initial discovery session determines the short-term objectives for developing a successful minimum viable product.",
//       ],
//     },
//     {
//       title: "Planning for the sprints",
//       image:
//         "https://www.the-pixel.com/wp-content/uploads/2021/03/create-a-website-process.png",
//       para: [
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       ],
//     },
//     {
//       title: "Getting Results",
//       image: "https://webutopian.com/wp-content/uploads/2020/09/info_6ste.png",
//       para: [
//         "Over time, retainers improve as we better understand your business objectives through continued collaboration.",
//       ],
//     },
//     {
//       title: "Fast-paced Scaling",
//       image:
//         "https://www.wpminds.com/wp-content/uploads/2022/02/Website-development-process-flowchart.png",
//       para: [
//         "With WordPress retainers, we deliver quickly via weekly sprints, allowing us to move fast, experiment, and iterate efficiently without complex roadmaps.",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const options = {
//       root: null, // Use the viewport as the root
//       rootMargin: "0px",
//       threshold: 0.5, // Trigger when 50% of the element is visible
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = stepRefs.current.indexOf(entry.target);
//           if (index !== -1) {
//             setCurrentStep(index);
//           }
//         }
//       });
//     }, options);

//     stepRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       stepRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const handleImageChange = useCallback(() => {
//     if (imageRef.current) {
//       imageRef.current.classList.remove("fade-in");
//       imageRef.current.classList.add("fade-out");

//       setTimeout(() => {
//         imageRef.current.classList.remove("fade-out");
//         imageRef.current.classList.add("fade-in");
//       }, 500); // match the animation duration
//     }
//   }, [currentStep]);

//   useEffect(() => {
//     handleImageChange();
//     setPrevStep(currentStep);
//   }, [currentStep, handleImageChange]);

//   return (
//     <div className="bg-[#202125] m-12 rounded-3xl">
//       <div className="text-white flex justify-between p-3 m-9">
//         <h1 className="text-5xl font-serif mt-10">Four easy steps</h1>
//         <button className="bg-blue-400 hover:bg-blue-500 hover:transition-all hover:duration-150 rounded-lg text-lg mt-10 w-44">
//           Get Started
//         </button>
//       </div>
//       <div className="flex justify-between ml-5">
//         <div className="w-1/2 bg-opacity-75 ml-5 mt-6">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               ref={(el) => (stepRefs.current[index] = el)}
//               className={`flex items-center mb-4 transition-transform duration-500 ${
//                 currentStep === index ? "transform scale-105" : ""
//               }`}
//             >
//               <div
//                 className={`w-20 h-16 text-white rounded-full text-center flex items-center justify-center transition-colors duration-500 text-xl ${
//                   currentStep === index ? "bg-[#4D4C51]" : "bg-[#0c0c0c]"
//                 }`}
//               >
//                 {index + 1}
//               </div>
//               <button
//                 onClick={() => setCurrentStep(index)}
//                 className={`ml-4 py-2 px-4 text-left w-full transition-colors duration-500 rounded-lg ${
//                   currentStep === index
//                     ? "bg-[#2e2e2e] text-white"
//                     : "bg-[#0000] text-white hover:bg-[#1a1a1a]"
//                 }`}
//               >
//                 <h2 className="text-lg">{step.title}</h2>
//                 {step.para.map((para, idx) => (
//                   <p className="text-[#666669] text-sm" key={idx}>
//                     {para}
//                   </p>
//                 ))}
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="w-2/3 p-4 bg-opacity-75 mr-7 -mt-3">
//           <img
//             src={steps[currentStep].image}
//             alt="Process Step"
//             className="w-full h-[450px] mb-4 transition-transform duration-1000 border border-blue-600 fade-in rounded-lg"
//             ref={imageRef}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;

// import React, { useState, useEffect, useRef, useCallback } from "react";
// import "./OurProcess.css";

// const OurProcess = () => {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [prevStep, setPrevStep] = useState(null);
//   const stepRefs = useRef([]);
//   const imageRef = useRef(null);

//   const steps = [
//     {
//       title: "Setting up a kick-off meeting",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eoIwzLryvkkMEdgSEZLAUlixMkDjRwfw2Yg0goalTkAJpHbEPpSLS7sbS8Ui_pe8Kgk&usqp=CAU",
//       para: [
//         "An initial discovery session determines the short-term objectives for developing a successful minimum viable product.",
//       ],
//     },
//     {
//       title: "Planning for the sprints",
//       image:
//         "https://www.the-pixel.com/wp-content/uploads/2021/03/create-a-website-process.png",
//       para: [
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       ],
//     },
//     {
//       title: "Getting Results",
//       image: "https://webutopian.com/wp-content/uploads/2020/09/info_6ste.png",
//       para: [
//         "Over time, retainers improve as we better understand your business objectives through continued collaboration.",
//       ],
//     },
//     {
//       title: "Fast-paced Scaling",
//       image:
//         "https://www.wpminds.com/wp-content/uploads/2022/02/Website-development-process-flowchart.png",
//       para: [
//         "With WordPress retainers, we deliver quickly via weekly sprints, allowing us to move fast, experiment, and iterate efficiently without complex roadmaps.",
//       ],
//     },
//   ];

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const index = stepRefs.current.indexOf(entry.target);
//           if (index !== -1) {
//             setCurrentStep(index);
//           }
//         }
//       });
//     }, options);

//     stepRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       stepRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const handleImageChange = useCallback(() => {
//     if (imageRef.current) {
//       imageRef.current.classList.remove("fade-in");
//       imageRef.current.classList.add("fade-out");

//       setTimeout(() => {
//         imageRef.current.classList.remove("fade-out");
//         imageRef.current.classList.add("fade-in");
//       }, 500); // match the animation duration
//     }
//   }, [currentStep]);

//   useEffect(() => {
//     handleImageChange();
//     setPrevStep(currentStep);
//   }, [currentStep, handleImageChange]);

//   return (
//     <div className="bg-[#202125] upper-section  m-12 rounded-3xl">
//       <div className=" text-white  flex justify-between p-3 m-9">
//         <h1 className="text-5xl font-serif mt-10">Four easy steps</h1>
//         <button className="bg-blue-400 hover:bg-blue-500 hover:transition-all hover:duration-150 rounded-lg text-lg mt-10 w-44">
//           Get Started
//         </button>
//       </div>
//       <div className="flex justify-between ml-5">
//         <div className="w-1/2 bg-opacity-75 ml-5 mt-6">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               ref={(el) => (stepRefs.current[index] = el)}
//               className={`flex items-center mb-4 transition-transform duration-500 ${
//                 currentStep === index ? "transform scale-105" : ""
//               }`}
//             >
//               <div
//                 className={`w-20 h-16 text-white rounded-full text-center flex items-center justify-center transition-colors duration-500 text-xl ${
//                   currentStep === index ? "bg-[#4D4C51]" : "bg-[#0c0c0c]"
//                 }`}
//               >
//                 {index + 1}
//               </div>
//               <button
//                 onClick={() => setCurrentStep(index)}
//                 className={`ml-4 py-2 px-4 text-left w-full transition-colors duration-500 rounded-lg ${
//                   currentStep === index
//                     ? "bg-[#2e2e2e] text-white"
//                     : "bg-[#0000] text-white hover:bg-[#1a1a1a]"
//                 }`}
//               >
//                 <h2 className="text-lg">{step.title}</h2>
//                 {step.para.map((para, idx) => (
//                   <p className="text-[#666669] text-sm" key={idx}>
//                     {para}
//                   </p>
//                 ))}
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="w-2/3 p-4 bg-opacity-75 mr-7 -mt-3">
//           <img
//             src={steps[currentStep].image}
//             alt="Process Step"
//             className="w-full h-[450px] mb-4 transition-transform duration-1000 border border-blue-600 fade-in rounded-lg"
//             ref={imageRef}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProcess;

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurProcess.css";

gsap.registerPlugin(ScrollTrigger);

const OurProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepRefs = useRef([]);
  const imageRef = useRef(null);

  const steps = [
    {
      title: "Setting up a kick-off meeting",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eoIwzLryvkkMEdgSEZLAUlixMkDjRwfw2Yg0goalTkAJpHbEPpSLS7sbS8Ui_pe8Kgk&usqp=CAU",
      para: [
        "An initial discovery session determines the short-term objectives for developing a successful minimum viable product.",
      ],
    },
    {
      title: "Planning for the sprints",
      image:
        "https://www.the-pixel.com/wp-content/uploads/2021/03/create-a-website-process.png",
      para: [
        "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
      ],
    },
    {
      title: "Getting Results",
      image: "https://webutopian.com/wp-content/uploads/2020/09/info_6ste.png",
      para: [
        "Over time, retainers improve as we better understand your business objectives through continued collaboration.",
      ],
    },
    {
      title: "Fast-paced Scaling",
      image:
        "https://www.wpminds.com/wp-content/uploads/2022/02/Website-development-process-flowchart.png",
      para: [
        "With WordPress retainers, we deliver quickly via weekly sprints, allowing us to move fast, experiment, and iterate efficiently without complex roadmaps.",
      ],
    },
  ];

  useEffect(() => {
    stepRefs.current.forEach((ref, index) => {
      if (ref) {
        ScrollTrigger.create({
          trigger: ref,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentStep(index),
          onEnterBack: () => setCurrentStep(index),
        });
      }
    });

    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom",
          end: "bottom top",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
      }
    );
  }, [currentStep]);

  return (
    <div className="bg-[#202125] upper-section m-12 rounded-3xl">
      <div className="text-white flex justify-between p-3 m-9">
        <h1 className="text-5xl font-serif mt-10">Four easy steps</h1>
        <button className="bg-blue-400 hover:bg-blue-500 hover:transition-all hover:duration-150 rounded-lg text-lg mt-10 w-44">
          Get Started
        </button>
      </div>
      <div className="flex justify-between ml-5">
        <div className="w-1/2 bg-opacity-75 ml-5 mt-6">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`flex items-center mb-4 transition-transform duration-500 ${
                currentStep === index ? "transform scale-105" : ""
              }`}
            >
              <div
                className={`w-20 h-16 text-white rounded-full text-center flex items-center justify-center transition-colors duration-500 text-xl ${
                  currentStep === index ? "bg-[#4D4C51]" : "bg-[#0c0c0c]"
                }`}
              >
                {index + 1}
              </div>
              <button
                onClick={() => setCurrentStep(index)}
                className={`ml-4 py-2 px-4 text-left w-full transition-colors duration-500 rounded-lg ${
                  currentStep === index
                    ? "bg-[#2e2e2e] text-white"
                    : "bg-[#0000] text-white hover:bg-[#1a1a1a]"
                }`}
              >
                <h2 className="text-lg">{step.title}</h2>
                {step.para.map((para, idx) => (
                  <p className="text-[#666669] text-sm" key={idx}>
                    {para}
                  </p>
                ))}
              </button>
            </div>
          ))}
        </div>
        <div className="w-2/3 p-4 bg-opacity-75 mr-7 -mt-3">
          <img
            src={steps[currentStep].image}
            alt="Process Step"
            className="w-full h-[450px] mb-4 transition-opacity duration-1000 fade-in rounded-lg"
            ref={imageRef}
          />
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
