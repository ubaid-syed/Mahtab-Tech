// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger);

// const   Services = () => {
//   const   [activeIndex, setActiveIndex] = useState(null);
//   const   sectionRefs = useRef([]);

//   useEffect(() => {
//     sectionRefs.current.forEach((section, index) => {
//       if (section) {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top center",
//           end: "bottom center",
//           onEnter: () => setActiveIndex(index),
//           onLeaveBack: () => setActiveIndex(index - 1),
//         });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const   getBackgroundColor = (index) => {
//     const   colors = [
//       "bg-gradient-to-r from-red-100 via-yellow-100 to-pink-200",
//       "bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200",
//       "bg-gradient-to-r from-green-100 to-blue-200",
//       "bg-gradient-to-r from-yellow-100 to-red-200",
//       "bg-gradient-to-r from-teal-100 to-blue-200",
//       "bg-gradient-to-r from-indigo-100 to-purple-200",
//       "bg-gradient-to-r from-orange-100 to-red-200",
//       "bg-gradient-to-r from-pink-100 to-indigo-200",
//     ];

//     return colors[index % colors.length];
//   };

//   const   handleSectionClick = (index) => {
//     if (sectionRefs.current[index]) {
//       sectionRefs.current[index].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen  transition-background ${
//         activeIndex !== null ? getBackgroundColor(activeIndex) : "bg-white"
//       }`}
//     >
//       <div className="flex justify-start gap-14 mt-24  p-5">
//         <div className="sticky top-40 w-[600px] h-96 mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-16">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>

//           <div className="ml-2 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 w-[100%]">
//           {[
//             "Web Design & Development",
//             "Digital Marketing",
//             "SEO Optimization",
//             "Content Creation",
//             "Brand Strategy",
//             "UI/UX Design",
//             "App Development",
//             "E-commerce Solutions",
//           ].map((service, index) => (
//             <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
//               <Section
//                 heading={service}
//                 para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                 para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
//last
// export default Services;

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger);

// const   Services = () => {
//   const   [activeIndex, setActiveIndex] = useState(null);
//   const   sectionRefs = useRef([]);
//   const   containerRef = useRef(null);

//   useEffect(() => {
//     sectionRefs.current.forEach((section, index) => {
//       if (section) {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top center",
//           end: "bottom center",
//           onEnter: () => setActiveIndex(index),
//           onLeaveBack: () => setActiveIndex(index - 1),
//         });
//       }
//     });

//     // Scroll to the next section when the user scrolls to the end of the current section
//     const   handleScroll = () => {
//       if (containerRef.current) {
//         const   scrollTop = containerRef.current.scrollTop;
//         const   containerHeight = containerRef.current.clientHeight;

//         sectionRefs.current.forEach((section, index) => {
//           if (section) {
//             const   sectionTop = section.offsetTop;
//             const   sectionHeight = section.clientHeight;

//             if (scrollTop >= sectionTop + sectionHeight - containerHeight) {
//               const   nextIndex =
//                 index + 1 < sectionRefs.current.length ? index + 1 : index;
//               containerRef.current.scrollTo({
//                 top: sectionRefs.current[nextIndex].offsetTop,
//                 behavior: "smooth",
//               });
//             }
//           }
//         });
//       }
//     };

//     containerRef.current.addEventListener("scroll", handleScroll);

//     return () => {
//       console.log("scroll");

//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//       containerRef.current.removeEventListener("scroll", handleScroll);
//       console.log("after scroll");
//     };
//   }, []);

//   const   getBackgroundColor = (index) => {
//     const   colors = [
//       "bg-gradient-to-r from-red-100 via-yellow-100 to-pink-200",
//       "bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200",
//       "bg-gradient-to-r from-green-100 to-blue-200",
//       "bg-gradient-to-r from-yellow-100 to-red-200",
//       "bg-gradient-to-r from-teal-100 to-blue-200",
//       "bg-gradient-to-r from-indigo-100 to-purple-200",
//       "bg-gradient-to-r from-orange-100 to-red-200",
//       "bg-gradient-to-r from-pink-100 to-indigo-200",
//     ];

//     return colors[index % colors.length];
//   };

//   const   handleSectionClick = (index) => {
//     if (sectionRefs.current[index]) {
//       sectionRefs.current[index].scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//       setActiveIndex(index);
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen transition-background bg-white ${
//         activeIndex !== null ? getBackgroundColor(activeIndex) : "bg-white"
//       }`}
//       ref={containerRef}
//     >
//       <div className="flex justify-start gap-14 mt-24 p-5">
//         <div className="sticky top-40 w-[600px] h-96 mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>

//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex flex-col gap-4 w-[100%]">
//           {[
//             "Web Design & Development",
//             "Digital Marketing",
//             "SEO Optimization",
//             "Content Creation",
//             "Brand Strategy",
//             "UI/UX Design",
//             "App Development",
//             "E-commerce Solutions",
//           ].map((service, index) => (
//             <div key={index} ref={(el) => (sectionRefs.current[index] = el)}>
//               <Section
//                 heading={service}
//                 index={index}
//                 para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                 para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
////////////////////////////////////////////////////////////

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const   Services = () => {
//   const   [activeIndex, setActiveIndex] = useState(0); // Default to the first section
//   const   containerRef = useRef(null);
//   const   sectionRefs = useRef([]);

//   useEffect(() => {
//     const   sections = gsap.utils.toArray(".section");

//     // Set up horizontal scrolling
//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none", // Use "none" for const  ant speed, no easing
//       scrollTrigger: {
//         trigger: containerRef.current,
//         delay: -10,
//         pin: true,
//         scrub: 0.1, // Reduced scrub value for faster response
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.offsetWidth * sections.length}`,
//         onUpdate: (self) => {
//           const   index = Math.round(self.progress * (sections.length - 1));
//           setActiveIndex(index);
//         },
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const   getBackgroundColor = (index) => {
//     const   colors = [
//       "bg-gradient-to-r from-red-100 via-yellow-100 to-pink-200",
//       "bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200",
//       "bg-gradient-to-r from-green-100 to-blue-200",
//       "bg-gradient-to-r from-yellow-100 to-red-200",
//       "bg-gradient-to-r from-teal-100 to-blue-200",
//       "bg-gradient-to-r from-indigo-100 to-purple-200",
//       "bg-gradient-to-r from-orange-100 to-red-200",
//       "bg-gradient-to-r from-pink-100 to-indigo-200",
//     ];

//     return colors[index % colors.length];
//   };

//   const   handleSectionClick = (index) => {
//     console.log("Clicked index:", index);

//     if (sectionRefs.current[index]) {
//       const   targetOffset = sectionRefs.current[index].offsetLeft;
//       console.log("Scrolling to offset:", targetOffset);

//       gsap.to(containerRef.current, {
//         scrollTo: {
//           x: targetOffset,
//           autoKill: false,
//         },
//         duration: 0,
//         ease: "power2.out",
//         onComplete: () => {
//           setActiveIndex(index);
//         },
//         onUpdate: () => {
//           console.log("Scroll position:", containerRef.current.scrollLeft);
//         },
//       });
//     } else {
//       console.log("Section ref not found for index:", index);
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         activeIndex !== null ? getBackgroundColor(activeIndex) : "bg-white"
//       }`}
//       ref={containerRef}
//     >
//       <div className="flex justify-start gap-14 mt-24 p-5">
//         <div className="sticky top-40 w-[600px] h-96 mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>

//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {[
//               "Web Design & Development",
//               "Digital Marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 style={{
//                   minWidth: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Section
//                   heading={service}
//                   index={index}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
////////////////////////////////////////////////

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const   Services = () => {
//   const   [activeIndex, setActiveIndex] = useState(0); // Default to the first section
//   const   containerRef = useRef(null);
//   const   sectionRefs = useRef([]);

//   useEffect(() => {
//     const   sections = gsap.utils.toArray(".section");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 0.5, // Adjust for smoothness
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.scrollWidth}`, // Ensure total scroll width
//         onUpdate: (self) => {
//           const   index = Math.round(self.progress * (sections.length - 1));
//           setActiveIndex(index);
//         },
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const   getBackgroundColor = (index) => {
//     const   colors = [
//       "bg-gradient-to-r from-red-100 via-yellow-100 to-pink-200",
//       "bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200",
//       "bg-gradient-to-r from-green-100 to-blue-200",
//       "bg-gradient-to-r from-yellow-100 to-red-200",
//       "bg-gradient-to-r from-teal-100 to-blue-200",
//       "bg-gradient-to-r from-indigo-100 to-purple-200",
//       "bg-gradient-to-r from-orange-100 to-red-200",
//       "bg-gradient-to-r from-pink-100 to-indigo-200",
//     ];

//     return colors[index % colors.length];
//   };

//   const   handleSectionClick = (index) => {
//     console.log("Clicked index:", index);

//     if (sectionRefs.current[index]) {
//       const   targetOffset = sectionRefs.current[index].offsetLeft;
//       console.log("Scrolling to offset:", targetOffset);

//       gsap.to(containerRef.current, {
//         scrollTo: {
//           x: targetOffset,
//           autoKill: false,
//         },
//         duration: 0,
//         ease: "power2.out",
//         onComplete: () => {
//           setActiveIndex(index);
//         },
//         onUpdate: () => {
//           console.log("Scroll position:", containerRef.current.scrollLeft);
//         },
//       });
//     } else {
//       console.log("Section ref not found for index:", index);
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen ${
//         activeIndex !== null ? getBackgroundColor(activeIndex) : "bg-white"
//       }`}
//       ref={containerRef}
//     >
//       <div className="flex justify-start gap-14  p-5">
//         <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>

//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {[
//               "Web Design & Development",
//               "Digital Marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 style={{
//                   minWidth: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Section
//                   heading={service}
//                   index={index}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React, { useState, useRef, useEffect } from "react";
// import { MdArrowOutward } from "react-icons/md";
// import gsap from "gsap";
// import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
// import "./Services.css";
// import Section from "./Section";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// const   Services = () => {
//   const   [activeIndex, setActiveIndex] = useState(0); // Default to the first section
//   const   containerRef = useRef(null);
//   const   sectionRefs = useRef([]);

//   useEffect(() => {
//     const   sections = gsap.utils.toArray(".section");

//     gsap.to(sections, {
//       xPercent: -100 * (sections.length - 1),
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: 0.5, // Adjust for smoothness
//         snap: 1 / (sections.length - 1),
//         end: () => `+=${containerRef.current.scrollWidth}`, // Ensure total scroll width
//         onUpdate: (self) => {
//           const   index = Math.round(self.progress * (sections.length - 1));
//           setActiveIndex(index);
//         },
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   const   getBackgroundColor = (index) => {
//     const   colors = [
//       "bg-gradient-to-r from-red-100 via-yellow-100 to-pink-200",
//       "bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200",
//       "bg-gradient-to-r from-green-100 to-blue-200",
//       "bg-gradient-to-r from-yellow-100 to-red-200",
//       "bg-gradient-to-r from-teal-100 to-blue-200",
//       "bg-gradient-to-r from-indigo-100 to-purple-200",
//       "bg-gradient-to-r from-orange-100 to-red-200",
//       "bg-gradient-to-r from-pink-100 to-indigo-200",
//     ];

//     return colors[index % colors.length];
//   };

//   const   handleSectionClick = (index) => {
//     setActiveIndex(index);

//     if (sectionRefs.current[index]) {
//       gsap.to(containerRef.current, {
//         scrollTo: {
//           x: sectionRefs.current[index].offsetLeft,
//           autoKill: false,
//         },
//         duration: 1, // Adjust duration for smoothness
//         ease: "power2.out",
//       });
//     }
//   };

//   return (
//     <div
//       className={`min-h-screen mt-14 ${
//         activeIndex !== null ? getBackgroundColor(activeIndex) : "bg-white"
//       }`}
//       ref={containerRef}
//     >
//       <div className="flex justify-start gap-14 p-5">
//         <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
//           <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
//             Core services.
//           </h1>
//           <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
//             We love building cohesive, consistent brands that speak to their
//             demographic in a meaningful and beautiful way. Social images, web
//             presences, print collateral; absolutely!
//           </p>
//           <div className="flex flex-col bg-transparent-500 rounded-lg w-10 justify-center items-center gap-2 absolute top-80 left-3">
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//             <span className="bg-white rounded-full w-5 h-5 hover:bg-black border border-black  cursor-pointer"></span>
//           </div>
//           <div className="-ml-1 space-y-3">
//             {[
//               "Web design and development",
//               "Digital marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div key={index}>
//                 <p
//                   className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
//                     activeIndex === index
//                       ? "text-black font-semibold"
//                       : "text-[#747373]"
//                   } hover:text-black hover:font-semibold`}
//                   onClick={() => handleSectionClick(index)}
//                 >
//                   <span className="text-[#000000] font-medium font-mono">
//                     {index + 1}
//                   </span>
//                   <span className="ml-2">{service}</span>
//                   {activeIndex === index && (
//                     <span className="ml-2">
//                       <MdArrowOutward />
//                     </span>
//                   )}
//                 </p>
//                 {activeIndex === index && (
//                   <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4 w-[100%] overflow-hidden">
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               width: "100%",
//               height: "100vh",
//             }}
//           >
//             {[
//               "Web Design & Development",
//               "Digital Marketing",
//               "SEO Optimization",
//               "Content Creation",
//               "Brand Strategy",
//               "UI/UX Design",
//               "App Development",
//               "E-commerce Solutions",
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="section"
//                 ref={(el) => (sectionRefs.current[index] = el)}
//                 style={{
//                   minWidth: "100vw",
//                   height: "100vh",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                   padding: "20px",
//                   boxSizing: "border-box",
//                 }}
//               >
//                 <Section
//                   heading={service}
//                   index={index}
//                   para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
//                   para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useState, useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import "./Services.css";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first section
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");
    console.error({ sections });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        markers: true,
        scrub: 0.5, // Adjust for smoothness
        snap: 1 / (sections.length - 1),
        end: () => `+=${containerRef.current.scrollWidth}`, // Ensure total scroll width
        onchange: () => {
          // console.error("onChange");
        },
        onSnapComplete: (e) => {
          console.error("On Snap complete", e);
          const index = Math.round(e.progress * (sections.length - 1));
          console.error(index);

          setActiveIndex(index);
        },
        onUpdate: (self) => {
          // const   index = Math.round(self.progress * (sections.length - 1));
          // setActiveIndex(index);
          // console.error(index);
          // alert(index);
        },
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getBackgroundColor = (index) => {
    const colors = [
      "bg-gradient-to-r from-red-100 via-yellow-100 to-pink-200",
      "bg-gradient-to-r from-blue-100 via-purple-100 to-blue-200",
      "bg-gradient-to-r from-green-100 to-blue-200",
      "bg-gradient-to-r from-yellow-100 to-red-200",
      "bg-gradient-to-r from-teal-100 to-blue-200",
      "bg-gradient-to-r from-indigo-100 to-purple-200",
      "bg-gradient-to-r from-orange-100 to-red-200",
      "bg-gradient-to-r from-pink-100 to-indigo-200",
    ];

    return colors[index % colors.length];
  };

  // const   handleSectionClick = (index) => {
  //   setActiveIndex(index);

  //   if (sectionRefs.current[index]) {
  //     gsap.to(containerRef.current, {
  //       scrollTo: {
  //         x: sectionRefs.current[index].offsetLeft,
  //         autoKill: false,
  //       },
  //       duration: 1, // Adjust duration for smoothness
  //       ease: "power2.out",
  //     });
  //   }
  // };

  const handleSectionClick = (index) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div
      className={`min-h-screen mt-14 ${
        activeIndex !== null ? getBackgroundColor(activeIndex) : "bg-white"
      }`}
      ref={containerRef}
    >
      <div className="flex justify-start gap-14 p-5">
        <div className="sticky top-40 w-[600px] h-screen mb-12 flex flex-col justify-center font-bold gap-5">
          <h1 className="text-4xl font-extralight font-serif text-[#191919] ml-14 mt-[43px]">
            Core services.
          </h1>
          <p className="text-base font-light font-serif text-[#191919] ml-[4.25vw]">
            We love building cohesive, consistent brands that speak to their
            demographic in a meaningful and beautiful way. Social images, web
            presences, print collateral; absolutely!
          </p>
          <div className="flex flex-col bg-transparent-500 rounded-lg w-10 justify-center items-center gap-2 absolute top-80 left-3">
            {Array.from({ length: 8 }, (_, index) => (
              <span
                key={index}
                className={`rounded-full w-3 h-3 border-2 border-black cursor-pointer transition-colors duration-300 ${
                  activeIndex === index ? "bg-black" : "bg-white"
                }`}
                onClick={() => handleSectionClick(index)}
              ></span>
            ))}
          </div>
          <div className="-ml-1 space-y-3">
            {[
              "Web design and development",
              "Digital marketing",
              "SEO Optimization",
              "Content Creation",
              "Brand Strategy",
              "UI/UX Design",
              "App Development",
              "E-commerce Solutions",
            ].map((service, index) => (
              <div key={index}>
                <p
                  className={`text-base font-light ml-16 transition-all duration-300 cursor-pointer flex items-center ${
                    activeIndex === index
                      ? "text-black font-semibold"
                      : "text-[#747373]"
                  } hover:text-black hover:font-semibold`}
                  onClick={() => handleSectionClick(index)}
                >
                  <span className="text-[#000000] font-medium font-mono">
                    {index + 1}
                  </span>
                  <span className="ml-2">{service}</span>
                  {activeIndex === index && (
                    <span className="ml-2">
                      <MdArrowOutward />
                    </span>
                  )}
                </p>
                {activeIndex === index && (
                  <div className="ml-16 border-b-2 border-black mt-2 animate-expand"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 w-[100%] overflow-hidden">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "100vh",
            }}
          >
            {[
              "Web Design & Development",
              "Digital Marketing",
              "SEO Optimization",
              "Content Creation",
              "Brand Strategy",
              "UI/UX Design",
              "App Development",
              "E-commerce Solutions",
            ].map((service, index) => (
              <div
                key={index}
                className="section"
                ref={(el) => (sectionRefs.current[index] = el)}
                style={{
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "20px",
                  boxSizing: "border-box",
                }}
              >
                <Section
                  heading={service}
                  para1="Your online presence is key in today’s marketplace. Whether you are a non-profit, small company, startup, or large corporation – we would love to help you realize your goals."
                  para2="We produce custom designed, gorgeous web experiences for our clients all while being cognizant of excellent usability and accessibility. We deliver a fully responsive, compliant website to you that you are sure to love."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
