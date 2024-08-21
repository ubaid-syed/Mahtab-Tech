// import React from "react";

// const Work = () => {
//   return (
//     <div className="h-screen w-full">
//       <div>
//         <h1 className="text-center text-6xl underline mt-24 text-[#0f0f0f]">
//           5 KEY STAGES OF WEB DESIGN
//         </h1>
//       </div>
//       <div className="relative ml-16">
//         <div className="absolute top-64 left-40">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative">
//           <div className=" absolute top-96 left-[250px] w-16 h-16 rounded-full bg-blue-950"></div>
//         </div>
//         <div className="absolute top-52 left-80">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative">
//           <div className=" absolute top-72 left-96 w-16 h-16 rounded-full bg-blue-700"></div>
//         </div>
//         <div className="absolute top-64 right-80">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative">
//           <div className=" absolute top-96 right-[360px] w-16 h-16 rounded-full bg-green-700"></div>
//         </div>
//         <div className="absolute top-64 left-40">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative">
//           <div className=" absolute top-72 right-[520px] w-16 h-16 rounded-full bg-green-500"></div>
//         </div>
//         <div className="absolute top-64 left-40">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative">
//           <div className=" absolute top-60 left-[540px] w-16 h-16 rounded-full bg-orange-600"></div>
//         </div>

//         <div className="relative">
//           <div className="bg-slate-300 w-80 h-40 absolute top-[350px] left-[425px] rounded-t-full flex items-center justify-center ">
//             <div className="absolute top-28 right-[270px] ">
//               <div
//                 className="bg-blue-950 w-4 h-4 rounded-full absolute"
//                 style={{ top: "10px", left: "20px" }}
//               ></div>
//               {/* Dot 2 */}
//               <div
//                 className="bg-blue-700 w-4 h-4 rounded-full absolute"
//                 style={{ top: "10px", left: "60px" }}
//               ></div>
//               {/* Dot 3 */}
//               <div
//                 className="bg-orange-600 w-4 h-4 rounded-full absolute"
//                 style={{ top: "10px", left: "100px" }}
//               ></div>
//               <div
//                 className="bg-green-500 w-4 h-4 rounded-full absolute"
//                 style={{ top: "10px", left: "140px" }}
//               ></div>
//               <div
//                 className="bg-green-700 w-4 h-4 rounded-full absolute"
//                 style={{ top: "10px", left: "180px" }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

// //last
// import React, { useEffect } from "react";
// import { gsap } from "gsap";

// const Work = () => {
//   useEffect(() => {
//     // Initially set opacity to 0 and then animate to opacity 1 one by one
//     gsap.fromTo(
//       ".fade-in-element",
//       { opacity: 0 },
//       { opacity: 1, stagger: 0.5, duration: 0.6 }
//     );
//   }, []);

//   const handleClick = (color) => {
//     // Reset scale for all elements with the class scale-element
//     gsap.to(".scale-element", { scale: 1.1, duration: 0.5 });

//     // Scale up the elements with the same background color
//     gsap.to(`.bg-${color}`, { scale: 1, duration: 0.5 });
//   };

//   return (
//     <div className="h-screen w-full">
//       <div>
//         <h1 className="text-center text-6xl underline mt-24 text-[#0f0f0f] fade-in-element">
//           5 KEY STAGES OF WEB DESIGN
//         </h1>
//       </div>
//       <div className="relative ml-16">
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-blue-950">
//           <div className="absolute top-96 left-[250px] w-16 h-16 rounded-full bg-blue-950"></div>
//         </div>
//         <div className="absolute top-52 left-80 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-blue-700">
//           <div className="absolute top-72 left-96 w-16 h-16 rounded-full bg-blue-700"></div>
//         </div>
//         <div className="absolute top-64 right-80 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-green-700">
//           <div className="absolute top-96 right-[360px] w-16 h-16 rounded-full bg-green-700"></div>
//         </div>
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-green-500">
//           <div className="absolute top-72 right-[520px] w-16 h-16 rounded-full bg-green-500"></div>
//         </div>
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-orange-600">
//           <div className="absolute top-60 left-[540px] w-16 h-16 rounded-full bg-orange-600"></div>
//         </div>

//         <div className="relative">
//           <div className="bg-slate-300 w-80 h-40 absolute top-[350px] left-[425px] rounded-t-full flex items-center justify-center fade-in-element scale-element">
//             <div className="absolute top-28 right-[270px] ">
//               <div
//                 className="dot bg-blue-950 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "20px" }}
//                 onClick={() => handleClick("blue-950")}
//               ></div>
//               <div
//                 className="dot bg-blue-700 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "60px" }}
//                 onClick={() => handleClick("blue-700")}
//               ></div>
//               <div
//                 className="dot bg-orange-600 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "100px" }}
//                 onClick={() => handleClick("orange-600")}
//               ></div>
//               <div
//                 className="dot bg-green-500 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "140px" }}
//                 onClick={() => handleClick("green-500")}
//               ></div>
//               <div
//                 className="dot bg-green-700 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "180px" }}
//                 onClick={() => handleClick("green-700")}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

// import React, { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Work = () => {
//   useEffect(() => {
//     // Initial animation: fade in and stagger the elements
//     gsap.fromTo(
//       ".fade-in-element",
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         stagger: 0.3,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: ".fade-in-element",
//           start: "top bottom", // Animation starts when the top of the element hits the bottom of the viewport
//           end: "bottom top", // Animation ends when the bottom of the element hits the top of the viewport
//           scrub: true, // Link animation progress to scrollbar position
//         },
//       }
//     );
//   }, []);

//   const handleClick = (color) => {
//     // Reset scale for all elements
//     gsap.to(".scale-element", {
//       y: 0,
//       duration: 0.5,
//       ease: "power2.out",
//     });

//     // Scale up the elements with the same background color
//     gsap.to(`.bg-${color}`, {
//       y: -8,
//       duration: 0.5,
//       ease: "linear",
//     });
//   };

//   return (
//     <div className="h-screen w-full">
//       <div>
//         <h1 className="text-center text-6xl underline mt-24 text-[#0f0f0f] fade-in-element">
//           5 KEY STAGES OF WEB DESIGN
//         </h1>
//       </div>
//       <div className="relative ml-16">
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-blue-950">
//           <div className="absolute top-96 left-[250px] w-16 h-16 rounded-full bg-blue-950"></div>
//         </div>
//         <div className="absolute top-52 left-80 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-blue-700">
//           <div className="absolute top-72 left-96 w-16 h-16 rounded-full bg-blue-700"></div>
//         </div>
//         <div className="absolute top-64 right-80 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-green-700">
//           <div className="absolute top-96 right-[360px] w-16 h-16 rounded-full bg-green-700"></div>
//         </div>
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-green-500">
//           <div className="absolute top-72 right-[520px] w-16 h-16 rounded-full bg-green-500"></div>
//         </div>
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-orange-600">
//           <div className="absolute top-60 left-[540px] w-16 h-16 rounded-full bg-orange-600"></div>
//         </div>

//         <div className="relative">
//           <div className="bg-slate-300 w-80 h-40 absolute top-[350px] left-[425px] rounded-t-full flex items-center justify-center">
//             <div className="absolute top-28 right-[270px]">
//               <div
//                 className="dot bg-blue-950 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "20px" }}
//                 onClick={() => handleClick("blue-950")}
//               ></div>
//               <div
//                 className="dot bg-blue-700 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "60px" }}
//                 onClick={() => handleClick("blue-700")}
//               ></div>
//               <div
//                 className="dot bg-orange-600 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "100px" }}
//                 onClick={() => handleClick("orange-600")}
//               ></div>
//               <div
//                 className="dot bg-green-500 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "140px" }}
//                 onClick={() => handleClick("green-500")}
//               ></div>
//               <div
//                 className="dot bg-green-700 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "180px" }}
//                 onClick={() => handleClick("green-700")}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

//last last

// import React, { useEffect } from "react";
// import { gsap } from "gsap";

// const Work = () => {
//   useEffect(() => {
//     // Initial animation: fade in and stagger the elements
//     gsap.fromTo(
//       ".fade-in-element",
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, stagger: 0.3, duration: 1, ease: "power2.out" }
//     );
//   }, []);

//   const handleClick = (color) => {
//     // Reset scale for all elements
//     gsap.to(".scale-element", {
//       y: 0,
//       duration: 0.5,
//       ease: "power2.out",
//     });

//     // Scale up the elements with the same background color
//     gsap.to(`.bg-${color}`, {
//       y: -8,
//       duration: 0.5,
//       ease: "linear",
//     });
//   };

//   return (
//     <div className="h-screen w-full">
//       <div>
//         <h1 className="text-center text-6xl underline mt-24 text-[#0f0f0f] fade-in-element">
//           5 KEY STAGES OF WEB DESIGN
//         </h1>
//       </div>
//       <div className="relative ml-16 ">
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-blue-950">
//           <div className="absolute top-96 left-[250px] w-16 h-16 rounded-full bg-blue-950"></div>
//         </div>
//         <div className="absolute top-52 left-80 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-blue-700">
//           <div className="absolute top-72 left-96 w-16 h-16 rounded-full bg-blue-700"></div>
//         </div>
//         <div className="absolute top-64 right-80 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>

//         <div className="relative fade-in-element scale-element bg-orange-600">
//           <div className="absolute top-60 left-[540px] w-16 h-16 rounded-full bg-orange-600"></div>
//         </div>

//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-green-500">
//           <div className="absolute top-72 right-[520px] w-16 h-16 rounded-full bg-green-500"></div>
//         </div>
//         <div className="absolute top-64 left-40 fade-in-element scale-element bg-div">
//           <h1>hello world</h1>
//         </div>
//         <div className="relative fade-in-element scale-element bg-green-700">
//           <div className="absolute top-96 right-[360px] w-16 h-16 rounded-full bg-green-700"></div>
//         </div>

//         <div className="relative">
//           <div className="bg-slate-300 w-80 h-40 absolute top-[350px] left-[425px] rounded-t-full flex items-center justify-center ">
//             <div className="absolute top-28 right-[270px] ">
//               <div
//                 className="dot bg-blue-950 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "20px" }}
//                 onClick={() => handleClick("blue-950")}
//               ></div>
//               <div
//                 className="dot bg-blue-700 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "60px" }}
//                 onClick={() => handleClick("blue-700")}
//               ></div>
//               <div
//                 className="dot bg-orange-600 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "100px" }}
//                 onClick={() => handleClick("orange-600")}
//               ></div>
//               <div
//                 className="dot bg-green-500 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "140px" }}
//                 onClick={() => handleClick("green-500")}
//               ></div>
//               <div
//                 className="dot bg-green-700 w-4 h-4 rounded-full absolute cursor-pointer"
//                 style={{ top: "10px", left: "180px" }}
//                 onClick={() => handleClick("green-700")}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

// import React from "react";

// const Work = () => {
//   return (
//     <div className="h-screen m-20 ">
//       <div className="flex justify-between ml-20">
//         <div>
//           <div className="bg-black justify-center items-center mt-36 border-gray-800 border-[20px] h-80 w-80  text-white rounded-full">
//             <div className="mt-20 ml-12 ">
//               <h1 className="text-3xl font-bold">How it Works</h1>
//               <p className="text-2xl">KEY STAGES OF WEB DESIGN</p>
//             </div>
//           </div>
//         </div>
//         <div className="relative ">
//           {/* 1st */}
//           <div className="flex items-center justify-center bg-slate-100 w-80  h-28  gap-3 absolute top-5 right-[350px]">
//             <div>
//               <img
//                 src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png"
//                 className="w-80"
//                 alt="helo"
//               />
//             </div>
//             <div className="space-y-1">
//               {" "}
//               <h1 className="text-base font-bold text-blue-950">
//                 Setting up a kick-off meeting
//               </h1>{" "}
//               <p className="text-start text-xs">
//                 An initial discovery session is conducted in order to determine
//                 what the short-term objectives are toward the development of a
//                 successful minimum viable product.
//               </p>
//             </div>
//           </div>
//           {/* 1st */}
//           <div className="flex items-center justify-center bg-slate-100 w-80  h-28  gap-3 absolute top-36 right-[250px]">
//             <div>
//               <img
//                 src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png"
//                 className="w-80"
//                 alt="helo"
//               />
//             </div>
//             <div className="space-y-1">
//               {" "}
//               <h1 className="text-base font-bold text-blue-500">
//                 Planning for the sprints
//               </h1>{" "}
//               <p className="text-start text-xs">
//                 With our flexible, agile model, your project can be developed,
//                 delivered, and iterated as needed.
//               </p>
//             </div>
//           </div>
//           {/* 1st */}
//           <div className="flex items-center justify-center bg-slate-100 w-80  h-28  gap-3 absolute top-[270px] right-[160px]">
//             <div>
//               <img
//                 src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png"
//                 className="w-80"
//                 alt="helo"
//               />
//             </div>
//             <div className="space-y-1">
//               {" "}
//               <h1 className="text-base font-bold text-orange-600 ">
//                 Getting Results
//               </h1>{" "}
//               <p className="text-start text-xs">
//                 With time, retainers become more successful. The more time we
//                 spend working together, the better we will be able to understand
//                 your business objectives.
//               </p>
//             </div>
//           </div>
//           {/* 1st */}
//           <div className="flex items-center justify-center bg-slate-100 w-80 h-28  gap-3 absolute top-[400px] right-[250px]">
//             <div>
//               <img
//                 src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png"
//                 className="w-80"
//                 alt="helo"
//               />
//             </div>
//             <div className="space-y-1">
//               {" "}
//               <h1 className="text-base font-bold  text-green-500">
//                 Fast-paced Scaling
//               </h1>{" "}
//               <p className="text-start text-xs">
//                 Through WordPress retainers, we are able to deliver quickly
//                 through weekly sprints. Move fast, experiment, and iterate
//                 toward success rather than getting bogged down by complex
//                 roadmaps.
//               </p>
//             </div>
//           </div>
//           {/* 1st */}
//           <div className="flex items-center justify-center bg-slate-100 w-80 h-28  gap-3 absolute top-[520px] right-[350px]">
//             <div>
//               <img
//                 src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png"
//                 className="w-80"
//                 alt="helo"
//               />
//             </div>
//             <div className="space-y-1">
//               {" "}
//               <h1 className="text-base font-bold text-green-700 ">
//                 Setting up a kick-off meeting
//               </h1>{" "}
//               <p className="text-start text-xs">
//                 An initial discovery session is conducted in order to determine
//                 what the short-term objectives are toward the development of a
//                 successful minimum viable product.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import "./Work.css";
// // Custom hook to detect when an element is in the viewport
// const useInView = (ref) => {
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref]);

//   return isInView;
// };

// const Work = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef);

//   useEffect(() => {
//     if (isInView) {
//       gsap.to(".animate", { opacity: 1, y: 0, stagger: 0.2, duration: 0.6 });
//     }
//   }, [isInView]);

//   const cards = [
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-5 right-[350px]",
//       color: "text-blue-950",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "planning sprints",
//       title: "Planning for the sprints",
//       description:
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       position: "top-36 right-[250px]",
//       color: "text-blue-500",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "getting results",
//       title: "Getting Results",
//       description:
//         "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
//       position: "top-[270px] right-[160px]",
//       color: "text-orange-600",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "fast-paced scaling",
//       title: "Fast-paced Scaling",
//       description:
//         "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
//       position: "top-[400px] right-[250px]",
//       color: "text-green-500",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-[520px] right-[350px]",
//       color: "text-green-700",
//     },
//   ];

//   return (
//     <div ref={sectionRef} className="h-screen  bg-pic">
//       <div className="flex justify-between ml-20 relative">
//         <div>
//           <div className="bg-black justify-center items-center mt-40 border-gray-800 border-[20px] h-80 w-80 text-white rounded-full ml-[200px]">
//             <div className="mt-20 ml-12">
//               <h1 className="text-3xl font-bold">How it Works</h1>
//               <p className="text-2xl">KEY STAGES OF WEB DESIGN</p>
//               <div className="flex gap-3 mt-2 ">
//                 <div className="bg-[#172554] h-7 w-7 rounded-full cursor-pointer z-30"></div>
//                 <div className="bg-[#3B82F6] h-7 w-7 rounded-full cursor-pointer z-30"></div>
//                 <div className="bg-[#EA580C] h-7 w-7 rounded-full cursor-pointer z-30"></div>
//                 <div className="bg-[#22C55E] h-7 w-7 rounded-full cursor-pointer z-30"></div>
//                 <div className="bg-[#15803D] h-7 w-7 rounded-full cursor-pointer z-30"></div>
//               </div>
//             </div>
//           </div>
//           <div className="hello -mt-[374px] ml-40 ">
//             <ul>
//               <li class="one">
//                 <span>1</span>
//               </li>
//               <li class="two">
//                 <span>2</span>
//               </li>
//               <li class="three">
//                 <span>3</span>
//               </li>
//               <li class="four">
//                 <span>4</span>
//               </li>
//               <li class="five">
//                 <span>5</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="relative">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`flex items-center justify-center  w-[400px] h-28 gap-3 absolute animate opacity-0 transform translate-y-10 ${card.position}`}
//             >
//               <div>
//                 <img src={card.img} className="w-80" alt={card.alt} />
//               </div>
//               <div className="space-y-1 ml-8">
//                 <h1 className={`text-base font-bold ${card.color}`}>
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-xs">{card.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
//////////////////////////////////////////////////////////////////

// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import "./Work.css";

// // Custom hook to detect when an element is in the viewport
// const useInView = (ref) => {
//   const [isInView, setIsInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsInView(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref]);

//   return isInView;
// };

// const Work = () => {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef);
//   const [activeColor, setActiveColor] = useState("");

//   useEffect(() => {
//     if (isInView) {
//       gsap.to(".animate", { opacity: 1, y: 0, stagger: 0.2, duration: 0.3 });
//     }
//   }, [isInView]);

//   useEffect(() => {
//     gsap.to(".card", {
//       scale: 1,
//       duration: 0.3, // Adjust duration for a faster animation
//       ease: "power2.out", // Use a smoother easing function
//       stagger: 0.1, // Adjust stagger for a quicker sequence
//       onComplete: () => {
//         gsap.to(`.card[data-color="${activeColor}"]`, {
//           scale: 1.1,
//           duration: 0.3, // Ensure consistency with the previous animation
//           ease: "power2.out", // Use the same easing function
//         });
//       },
//     });
//   }, [activeColor]);

//   const cards = [
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-5 right-[350px]",
//       color: "#172554",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "planning sprints",
//       title: "Planning for the sprints",
//       description:
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       position: "top-36 right-[250px]",
//       color: "#3B82F6",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "getting results",
//       title: "Getting Results",
//       description:
//         "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
//       position: "top-[270px] right-[160px]",
//       color: "#EA580C",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "fast-paced scaling",
//       title: "Fast-paced Scaling",
//       description:
//         "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
//       position: "top-[400px] right-[250px]",
//       color: "#22C55E",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-[520px] right-[350px]",
//       color: "#15803D",
//     },
//   ];

//   const handleColorClick = (color) => {
//     setActiveColor(color);
//   };

//   return (
//     <div ref={sectionRef} className="h-screen bg-pic">
//       <div className="flex justify-between ml-20 relative">
//         <div>
//           <div
//             id="hello"
//             className="  justify-center items-center mt-40 border-gray-800 border-[20px] h-80 w-80 text-white rounded-full ml-[200px]"
//           >
//             <div className="mt-20 ml-12">
//               <h1 className="text-3xl font-bold">How it Works</h1>
//               <p className="text-2xl">KEY STAGES OF WEB DESIGN</p>
//               <div className="flex gap-3 mt-2">
//                 {cards.map((card) => (
//                   <div
//                     key={card.color}
//                     className={`h-7 w-7 rounded-full cursor-pointer z-50 ${
//                       activeColor === card.color
//                         ? "bg-transparent"
//                         : "bg-current"
//                     }`}
//                     style={{ backgroundColor: card.color }}
//                     onMouseEnter={() => handleColorClick(card.color)}
//                     onMouseLeave={() => handleColorClick("")}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="hello -mt-[374px] ml-40">
//             <ul>
//               <li className="one">
//                 <span>1</span>
//               </li>
//               <li className="two">
//                 <span>2</span>
//               </li>
//               <li className="three">
//                 <span>3</span>
//               </li>
//               <li className="four">
//                 <span>4</span>
//               </li>
//               <li className="five">
//                 <span>5</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="relative">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`card flex items-center justify-center w-[400px] h-28 gap-3 absolute animate opacity-0 transform translate-y-10 ${card.position}`}
//               data-color={card.color}
//               style={{
//                 color: card.color,
//                 scale: activeColor === card.color ? 1.1 : 1,
//                 transition: "scale 0.1s ease-in-out", // Smooth scaling effect
//               }}
//             >
//               <div>
//                 <img src={card.img} className="w-80" alt={card.alt} />
//               </div>
//               <div className="space-y-1 ml-8">
//                 <h1 className="text-base font-bold text-{card.color}">
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-xs text-black">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

//last last last

// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "./Work.css";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Work = () => {
//   const sectionRef = useRef(null); // Added reference for the section
//   const cardRefs = useRef([]); // Array to hold references to card elements
//   const pointRefs = useRef([]);
//   const bgRef = useRef(null);

//   const [activeColor, setActiveColor] = useState("");

//   // Define initial x and y positions for each card
//   const initialPositions = [
//     { x: -440, y: 300 },
//     { x: -500, y: 200 },
//     { x: -550, y: 50 },
//     { x: -430, y: -80 },
//     { x: -280, y: -200 },
//   ];
//   useEffect(() => {
//     // Initialize GSAP timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: 2,
//         markers: true,
//         pin: true,
//       },
//     });

//     // Define colors for each card
//     const colors = ["#172554", "#3B82F6", "#EA580C", "#22C55E", "#15803D"];

//     // Animate border color for each card
//     cardRefs.current.forEach((card, index) => {
//       tl.to(bgRef.current, {
//         borderColor: colors[index], // Change to the corresponding color
//         duration: 1,
//         ease: "power1.out",
//         scrollTrigger: {
//           trigger: card,
//           start: "top bottom",
//           end: "top top",
//           scrub: 2,
//           onEnter: () =>
//             tl.to(bgRef.current, {
//               borderColor: colors[index],
//               duration: 1,
//               ease: "power1.out",
//             }),
//           onLeave: () =>
//             tl.to(bgRef.current, {
//               borderColor: colors[index === 0 ? colors.length - 1 : index - 1],
//               duration: 1,
//               ease: "power1.out",
//             }),
//         },
//       });
//     });

//     // Animate the section and cards
//     gsap.fromTo(
//       sectionRef.current,
//       { opacity: 0, y: 100 },
//       { opacity: 1, y: 0, duration: 1 }
//     );

//     gsap.fromTo(
//       cardRefs.current,
//       {
//         opacity: 0,
//         x: (index) => initialPositions[index].x,
//         y: (index) => initialPositions[index].y,
//         scale: 0,
//       },
//       {
//         opacity: 1,
//         scale: 1,
//         x: 0,
//         y: 0,
//         duration: 0.5,
//         ease: "power1.out",
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 2,
//         },
//       }
//     );

//     gsap.fromTo(
//       pointRefs.current,
//       { opacity: 0, scale: 0.5 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.5,
//         ease: "power1.out",
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 2,
//         },
//       }
//     );
//   }, []);

//   // useEffect(() => {
//   //   // Animate the section
//   //   // gsap.fromTo(
//   //   //   sectionRef.current,
//   //   //   { opacity: 0, y: 100 },
//   //   //   { opacity: 1, y: 0, duration: 1 }
//   //   // );

//   //   // Animate each card with unique properties and stagger
//   //   gsap.fromTo(
//   //     cardRefs.current,
//   //     {
//   //       opacity: 0,
//   //       x: (index) => initialPositions[index].x,
//   //       y: (index) => initialPositions[index].y,
//   //       scale: 0,
//   //     },
//   //     {
//   //       opacity: 1,
//   //       scale: 1,
//   //       x: 0,
//   //       y: 0,
//   //       duration: 0.5,
//   //       ease: "power1.out",
//   //       stagger: 0.3, // Adjust the delay between cards
//   //       scrollTrigger: {
//   //         trigger: sectionRef.current,
//   //         start: "top top",
//   //         end: "bottom top",
//   //         scrub: 2,
//   //         markers: true,
//   //         pin: true,
//   //       },
//   //     }
//   //   );

//   //   gsap.fromTo(
//   //     pointRefs.current,
//   //     { opacity: 0, scale: 0.5 },
//   //     {
//   //       opacity: 1,
//   //       scale: 1,
//   //       duration: 0.5,
//   //       ease: "power1.out",
//   //       stagger: 0.2, // Adjust the delay between points
//   //       scrollTrigger: {
//   //         trigger: sectionRef.current,
//   //         start: "top top",
//   //         end: "bottom top",
//   //         scrub: 2,
//   //       },
//   //     }
//   //   );
//   // }, []);

//   const cards = [
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-5 right-[350px]",
//       color: "#172554",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "planning sprints",
//       title: "Planning for the sprints",
//       description:
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       position: "top-36 right-[250px]",
//       color: "#3B82F6",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "getting results",
//       title: "Getting Results",
//       description:
//         "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
//       position: "top-[270px] right-[160px]",
//       color: "#EA580C",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "fast-paced scaling",
//       title: "Fast-paced Scaling",
//       description:
//         "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
//       position: "top-[400px] right-[250px]",
//       color: "#22C55E",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-[520px] right-[350px]",
//       color: "#15803D",
//     },
//   ];

//   return (
//     <div ref={sectionRef} className="h-screen bg-pic">
//       <div className="flex justify-between ml-20 relative">
//         <div>
//           <div
//             ref={bgRef}
//             className="bg-black justify-center items-center mt-40 border-gray-800 border-[20px] h-80 w-80 text-white rounded-full ml-[200px]"
//           >
//             <div className="mt-20 ml-12">
//               <h1 className="text-3xl font-bold">How it Works</h1>
//               <p className="text-2xl">KEY STAGES OF WEB DESIGN</p>
//               <div className="flex gap-3 mt-2">
//                 {cards.map((card) => (
//                   <div
//                     key={card.color}
//                     className={`h-7 w-7 rounded-full cursor-pointer z-50 ${
//                       activeColor === card.color
//                         ? "bg-transparent"
//                         : "bg-current"
//                     }`}
//                     style={{ backgroundColor: card.color }}
//                     onClick={() => setActiveColor(card.color)}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="hello -mt-[374px] ml-40">
//             <ul>
//               <li className="one" ref={(el) => (pointRefs.current[0] = el)}>
//                 <span>1</span>
//               </li>
//               <li className="two" ref={(el) => (pointRefs.current[1] = el)}>
//                 <span>2</span>
//               </li>
//               <li className="three" ref={(el) => (pointRefs.current[2] = el)}>
//                 <span>3</span>
//               </li>
//               <li className="four" ref={(el) => (pointRefs.current[3] = el)}>
//                 <span>4</span>
//               </li>
//               <li className="five" ref={(el) => (pointRefs.current[4] = el)}>
//                 <span>5</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="relative">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={`card flex items-center justify-center w-[400px] h-28 gap-3 absolute ${card.position}`}
//               ref={(el) => (cardRefs.current[index] = el)} // Assign card reference
//               data-color={card.color}
//               style={{
//                 color: card.color,
//               }}
//             >
//               <div>
//                 <img src={card.img} className="w-80" alt={card.alt} />
//               </div>
//               <div className="space-y-1 ml-8">
//                 <h1
//                   className="text-base font-bold"
//                   style={{ color: card.color }}
//                 >
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-xs text-black">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
//nnklnonefnknfkwnknwkfnwklnfklewnfklnefknefknwekfnewkjf

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Work.css";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const [progressVal, setProgressVal] = useState(0);
  const [myIndex, setMyIndex] = useState(0);
  const sectionRef = useRef(null); // Added reference for the section
  const cardRefs = useRef([]); // Array to hold references to card elements
  const pointRefs = useRef([]);
  const progressRefs = useRef([]);
  const bgRef = useRef(null);
  const [activeColor, setActiveColor] = useState("");
  const [colo, setColo] = useState([
    "#172554",
    "#3B82F6",
    "#EA580C",
    "#22C55E",
    "#15803D",
  ]);

  // useEffect(() => {
  //   setProgressVal(0);

  //   setTimeout(() => {
  //     setProgressVal(1);
  //   }, 11200);
  // }, [myIndex]);

  // Define initial x and y positions for each card
  const initialPositions = [
    { x: -440, y: 300 },
    { x: -500, y: 200 },
    { x: -550, y: 50 },
    { x: -430, y: -80 },
    { x: -280, y: -200 },
  ];

  useEffect(() => {
    // Initialize GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 5,
        markers: true,
        pin: true,
      },
    });

    // Define colors for each card
    const colors = ["#172554", "#3B82F6", "#EA580C", "#22C55E", "#15803D"];
    const myColor = ["#172554", "#3B82F6", "#EA580C", "#22C55E", "#15803D"];

    // Animate border color for each card
    cardRefs.current.forEach((card, index) => {
      const color = colors[index];
      gsap.to(bgRef.current, {
        borderColor: color,
        duration: 4,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "top top",
          scrub: 2,
          onEnter: () =>
            tl.to(bgRef.current, {
              borderColor: color,
              duration: 1,
              ease: "power1.out",
            }),
          onLeave: () =>
            tl.to(bgRef.current, {
              borderColor: colors[index === 0 ? colors.length - 1 : index - 1],
              duration: 1,
              ease: "power1.out",
            }),
          onUpdate: (val) => {
            const index = Math.round(val.progress * 4);
            setProgressVal(index);
            setMyIndex(index);
            console.error("-->", index, val);
          },
          onSnapComplete: (val) => {
            console.error("on snap", val);
          },
        },
      });
    });

    // Animate the section and cards
    // gsap.fromTo(
    //   sectionRef.current,
    //   { opacity: 0, y: 100 },
    //   { opacity: 1, y: 0, duration: 1 }
    // );

    gsap.fromTo(
      cardRefs.current,
      {
        opacity: 0,
        x: (index) => initialPositions[index].x,
        y: (index) => initialPositions[index].y,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "power1.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      }
    );

    gsap.fromTo(
      pointRefs.current,
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.1,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // gsap.fromTo(
    //   progressRefs.current,
    //   { opacity: 0, scale: 0.5 },
    //   {
    //     opacity: 1,
    //     scale: 1,
    //     duration: 0.5,
    //     ease: "power1.out",
    //     stagger: 0.2,
    //     scrollTrigger: {
    //       trigger: sectionRef.current,
    //       start: "top top",
    //       end: "bottom top",
    //       scrub: 2,
    //     },
    //   }
    // );
  }, []);

  const cards = [
    {
      img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
      alt: "kick-off meeting",
      title: "Setting up a kick-off meeting",
      description:
        "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
      position: "top-5 right-[350px]",
      color: "#172554",
    },
    {
      img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
      alt: "planning sprints",
      title: "Planning for the sprints",
      description:
        "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
      position: "top-36 right-[250px]",
      color: "#3B82F6",
    },
    {
      img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
      alt: "getting results",
      title: "Getting Results",
      description:
        "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
      position: "top-[270px] right-[160px]",
      color: "#EA580C",
    },
    {
      img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
      alt: "fast-paced scaling",
      title: "Fast-paced Scaling",
      description:
        "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
      position: "top-[400px] right-[250px]",
      color: "#22C55E",
    },
    {
      img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
      alt: "kick-off meeting",
      title: "Setting up a kick-off meeting",
      description:
        "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
      position: "top-[520px] right-[350px]",
      color: "#15803D",
    },
  ];

  return (
    <div ref={sectionRef} className="h-screen bg-pic">
      <div className="flex justify-between ml-20 relative">
        <div>
          <div
            // ref={bgRef}
            className="bg-black justify-center items-center mt-40 border-transparent  border-[20px] h-80 w-80 text-white rounded-full ml-[190px]"
          >
            <div
              className="absolute top-[10.5vw] left-[12.8vw]"
              style={{ zIndex: -1, width: "350px", height: "350px" }}
            >
              {progressVal !== 0 && (
                <CircularProgressbar
                  // ref={progressRefs}
                  value={progressVal}
                  maxValue={1}
                  strokeWidth={50}
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    pathColor: colo[myIndex],
                    pathTransition: 0.5,
                    pathTransitionDuration: 0.5,
                  })}
                />
              )}
            </div>

            <div className="mt-20 ml-12">
              <h1 className="text-3xl font-bold">How it Works</h1>
              <p className="text-2xl">KEY STAGES OF WEB DESIGN</p>
              <div className="flex gap-3 mt-2">
                {cards.map((card) => (
                  <div
                    key={card.color}
                    className={`h-7 w-7 rounded-full cursor-pointer z-50 ${
                      activeColor === card.color
                        ? "bg-transparent"
                        : "bg-current"
                    }`}
                    style={{ backgroundColor: card.color }}
                    onClick={() => setActiveColor(card.color)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="hello -mt-[374px] ml-40">
            <ul>
              <li className="one" ref={(el) => (pointRefs.current[0] = el)}>
                <span>1</span>
              </li>
              <li className="two" ref={(el) => (pointRefs.current[1] = el)}>
                <span>2</span>
              </li>
              <li className="three" ref={(el) => (pointRefs.current[2] = el)}>
                <span>3</span>
              </li>
              <li className="four" ref={(el) => (pointRefs.current[3] = el)}>
                <span>4</span>
              </li>
              <li className="five" ref={(el) => (pointRefs.current[4] = el)}>
                <span>5</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card flex items-center justify-center w-[400px] h-28 gap-3 absolute ${card.position}`}
              ref={(el) => (cardRefs.current[index] = el)} // Assign card reference
              data-color={card.color}
              style={{
                color: card.color,
              }}
            >
              <div>
                <img src={card.img} className="w-80" alt={card.alt} />
              </div>
              <div className="space-y-1 ml-8">
                <h1
                  className="text-base font-bold"
                  style={{ color: card.color }}
                >
                  {card.title}
                </h1>
                <p className="text-start text-xs text-black">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import "./Work.css";

// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const Work = () => {
//   const cardRef = useRef(null);
//   const [activeColor, setActiveColor] = useState("");

//   useEffect(() => {
//     gsap.fromTo(
//       cardRef.current,
//       { opacity: 0, x: -100 },
//       { opacity: 1, x: 0, duration: 1 }
//     );
//   }, []);

//   // useEffect(() => {
//   //   const cards = gsap.utils.toArray(".card");
//   //   const hello = document.querySelector(".hello");
//   //   // GSAP animation setup for sequential reveal
//   //   cards.forEach((card, index) => {
//   //     gsap.fromTo(
//   //       card,
//   //       { opacity: 0, y: 100 },
//   //       {
//   //         opacity: 1,
//   //         pin: 1,
//   //         y: 0,
//   //         duration: 0.5,
//   //         delay: index * 0.2,
//   //         scrollTrigger: {
//   //           trigger: card,
//   //           start: "top 80%",
//   //           end: "bottom 50%",
//   //           toggleActions: "play none none reverse",
//   //         },
//   //       }
//   //     );
//   //   });
//   //   gsap.fromTo(
//   //     hello,
//   //     { opacity: 0, y: 50 },
//   //     {
//   //       opacity: 1,
//   //       y: 0,
//   //       duration: 0.5,
//   //       scrollTrigger: {
//   //         trigger: hello,
//   //         start: "top 80%",
//   //         end: "top 50%",
//   //         toggleActions: "play none none reverse",
//   //       },
//   //     }
//   //   );
//   // }, []);

//   const cards = [
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-5 right-[350px]",
//       color: "#172554",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "planning sprints",
//       title: "Planning for the sprints",
//       description:
//         "With our flexible, agile model, your project can be developed, delivered, and iterated as needed.",
//       position: "top-36 right-[250px]",
//       color: "#3B82F6",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "getting results",
//       title: "Getting Results",
//       description:
//         "With time, retainers become more successful. The more time we spend working together, the better we will be able to understand your business objectives.",
//       position: "top-[270px] right-[160px]",
//       color: "#EA580C",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "fast-paced scaling",
//       title: "Fast-paced Scaling",
//       description:
//         "Through WordPress retainers, we are able to deliver quickly through weekly sprints. Move fast, experiment, and iterate toward success rather than getting bogged down by complex roadmaps.",
//       position: "top-[400px] right-[250px]",
//       color: "#22C55E",
//     },
//     {
//       img: "https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/Setting-up-a-kick-off-meeting.png",
//       alt: "kick-off meeting",
//       title: "Setting up a kick-off meeting",
//       description:
//         "An initial discovery session is conducted in order to determine what the short-term objectives are toward the development of a successful minimum viable product.",
//       position: "top-[520px] right-[350px]",
//       color: "#15803D",
//     },
//   ];

//   // const handleColorClick = (color) => {
//   //   setActiveColor(color);
//   // };

//   return (
//     <div ref={sectionRef} className="h-screen bg-pic">
//       <div className="flex justify-between ml-20 relative">
//         <div>
//           <div className="bg-black justify-center items-center mt-40 border-gray-800 border-[20px] h-80 w-80 text-white rounded-full ml-[200px]">
//             <div className="mt-20 ml-12">
//               <h1 className="text-3xl font-bold">How it Works</h1>
//               <p className="text-2xl">KEY STAGES OF WEB DESIGN</p>
//               <div className="flex gap-3 mt-2">
//                 {cards.map((card) => (
//                   <div
//                     key={card.color}
//                     className={`h-7 w-7 rounded-full cursor-pointer z-50 ${
//                       activeColor === card.color
//                         ? "bg-transparent"
//                         : "bg-current"
//                     }`}
//                     style={{ backgroundColor: card.color }}
//                     // onMouseEnter={() => handleColorClick(card.color)}
//                     // onMouseLeave={() => handleColorClick("")}
//                   ></div>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="hello -mt-[374px] ml-40">
//             <ul>
//               <li className="one">
//                 <span>1</span>
//               </li>
//               <li className="two">
//                 <span>2</span>
//               </li>
//               <li className="three">
//                 <span>3</span>
//               </li>
//               <li className="four">
//                 <span>4</span>
//               </li>
//               <li className="five">
//                 <span>5</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="relative">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className={` card flex items-center justify-center w-[400px] h-28 gap-3 absolute   ${card.position}`}
//               ref={cardRef}
//               data-color={card.color}
//               style={{
//                 color: card.color,
//                 // scale: activeColor === card.color ? 1.1 : 1,
//                 // transition: "scale 0.1s ease-in-out", // Smooth scaling effect
//               }}
//             >
//               <div>
//                 <img src={card.img} className="w-80" alt={card.alt} />
//               </div>
//               <div className="space-y-1 ml-8">
//                 <h1
//                   className="text-base font-bold"
//                   style={{ color: card.color }}
//                 >
//                   {card.title}
//                 </h1>
//                 <p className="text-start text-xs text-black">
//                   {card.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;
