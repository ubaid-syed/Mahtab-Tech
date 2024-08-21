// // src/components/Portfolio.js
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Portfolio.css"; // Ensure you create this CSS file for styles

// gsap.registerPlugin(ScrollTrigger);

// const Portfolio = () => {
//   const headerRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.to(headerRef.current, {
//       x: "-135%",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         scroller: "body",
//         //  markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
//       },
//     });
//   }, []);

//   return (
//     <>
//       <div id="page2" ref={sectionRef}>
//         <div className="absolute top-16 left-44 ">
//           <h1 className="text-white text-2xl font-mono ">WORK</h1>
//         </div>
//         <div ref={headerRef} className="image-container">
//           <img
//             src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//             alt="hello"
//           />

//           <img
//             src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//             alt="hello"
//           />
//           <img
//             src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//             alt="hello"
//           />
//           <img
//             src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//             alt="hello"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;

// src/components/Portfolio.js

//last

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Portfolio.css"; // Ensure this CSS file includes the styles you provided

// gsap.registerPlugin(ScrollTrigger);

// const Portfolio = () => {
//   const headerRef = useRef(null);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     gsap.to(headerRef.current, {
//       x: "-135%",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         scroller: "body",
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
//       },
//     });
//   }, []);

//   return (
//     <div id="page2" ref={sectionRef}>
//       <div className="header-container">
//         <h1 className="header-text">WORK</h1>
//       </div>
//       <div ref={headerRef} className="image-container">
//         <div className="text-image-container">
//           <img
//             src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//             alt="hello"
//           />
//           <div className="text-overlay">
//             <h1 className="text-lg inline">STONE ONE</h1>
//             <p className="flex">Design + Development</p>
//           </div>
//         </div>
//         <img
//           src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//           alt="hello"
//         />
//         <img
//           src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//           alt="hello"
//         />
//         <img
//           src="https://media.springernature.com/lw703/springer-static/image/art%3A10.1038%2F528452a/MediaObjects/41586_2015_Article_BF528452a_Figg_HTML.jpg"
//           alt="hello"
//         />
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

// import React from "react";

// const Portfolio = () => {
//   return (
//     <div className="bg-slate-900 h-screen text-white relative ">
//       <div className="absolute top-16 left-36">
//         <h1 className=" text-xl">WORK</h1>
//       </div>
//       <div className="top-48 absolute left-16 flex gap-48">
//         <div className="">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//             alt="image"
//             className="h-96"
//           />
//           <div className="flex justify-between bg-blue-500 w-[842px]">
//             <h1>Website Design</h1>
//             <p>figma, html, wordpress.</p>
//           </div>
//         </div>
//         <div className="">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//             alt="image"
//             className="h-96"
//           />
//           <div className="flex justify-between bg-blue-500 w-[842px]">
//             <h1>Website Design</h1>
//             <p>figma, html, wordpress.</p>
//           </div>
//         </div>
//         <div className="">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//             alt="image"
//             className="h-96"
//           />
//           <div className="flex justify-between bg-blue-500 w-[842px]">
//             <h1>Website Design</h1>
//             <p>figma, html, wordpress.</p>
//           </div>
//         </div>
//         <div className="">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//             alt="image"
//             className="h-96"
//           />
//           <div className="flex justify-between bg-blue-500 w-[842px]">
//             <h1>Website Design</h1>
//             <p>figma, html, wordpress.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Portfolio = () => {
//   useEffect(() => {
//     gsap.to(".scroll-container", {
//       xPercent: -100 * (4 - 1), // Adjust based on the number of items
//       scrollTrigger: {
//         trigger: ".portfolio",
//         scroller: "body",
//         markers: true,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1,
//         pin: true,
//       },
//     });
//   }, []);

//   return (
//     <div className="bg-slate-900 h-screen text-white relative portfolio overflow-hidden">
//       <div className="absolute top-16 left-36">
//         <h1 className="text-xl">WORK</h1>
//       </div>
//       <div className="scroll-container flex gap-48 top-48 absolute left-0">
//         <div className="item flex-shrink-0 w-[842px]">
//           <img
//             src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//             alt="image"
//             className="h-96"
//           />
//           <div className="flex justify-between bg-blue-500 w-[842px]">
//             <h1>Website Design</h1>
//             <p>figma, html, wordpress.</p>
//           </div>
//         </div>
//         {/* Repeat items as needed */}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Portfolio.css"; // Ensure you create this CSS file for styles
// import { MdArrowOutward } from "react-icons/md";

// gsap.registerPlugin(ScrollTrigger);

// const Portfolio = () => {
//   const headerRef = useRef(null);
//   const sectionRef = useRef(null);
//   const buttonRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     gsap.to(headerRef.current, {
//       x: "-69%",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         scroller: "body",
//         // markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
//       },
//     });
//     gsap.set(textRef.current, { opacity: 0 });

//     gsap.fromTo(
//       buttonRef.current,
//       { width: "auto" },
//       {
//         width: "8rem", // Initial width
//         duration: 0.3,
//         ease: "power1.inOut",
//         onStart: () => {
//           gsap.to(textRef.current, {
//             opacity: 1,
//             duration: 0.3,
//             ease: "power1.inOut",
//           });
//         },
//         onReverseComplete: () => {
//           gsap.to(textRef.current, {
//             opacity: 0,
//             duration: 0.3,
//             ease: "power1.inOut",
//           });
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <div id="page2" ref={sectionRef}>
//         <div className="absolute top-16 left-44 ">
//           <h1 className="text-white text-2xl font-mono ">WORK</h1>
//         </div>

//         <div className="top-48 absolute left-16 flex gap-48" ref={headerRef}>
//           <div className="relative imgeee">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="relative">
//               <button
//                 ref={buttonRef}
//                 className="absolute bg-black left-[650px] bottom-10 text-white flex items-center p-2 rounded transition-all duration-300 hover:bg-white hover:text-black"
//                 onMouseLeave={() =>
//                   gsap.to(buttonRef.current, { width: "8rem", duration: 0.3 })
//                 }
//               >
//                 <MdArrowOutward
//                   size={30}
//                   className="transition-colors duration-300"
//                 />
//                 <span ref={textRef} className="ml-2 whitespace-nowrap">
//                   View Details
//                 </span>
//               </button>
//             </div>

//             <div className="flex justify-between text-white w-[790px]">
//               <h1>Website Design</h1>
//               <p>figma, html, wordpress.</p>
//             </div>
//           </div>
//           <div className="">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="flex justify-between text-white w-[790px]">
//               <h1>Website Design</h1>
//               <p>figma, html, wordpress.</p>
//             </div>
//           </div>
//           <div className="">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="flex justify-between text-white w-[790px]">
//               <h1>Website Design</h1>
//               <p>figma, html, wordpress.</p>
//             </div>
//           </div>
//           <div className="">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="flex justify-between text-white w-[790px]">
//               <h1>Website Design</h1>
//               <p>figma, html, wordpress.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
/////////////////////////////////////////////

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Portfolio.css"; // Ensure you create this CSS file for styles
// import { MdArrowOutward } from "react-icons/md";
// import { FaFigma, FaReact, FaWordpressSimple } from "react-icons/fa";
// gsap.registerPlugin(ScrollTrigger);

// const Portfolio = () => {
//   const headerRef = useRef(null);
//   const sectionRef = useRef(null);
//   const buttonRef = useRef(null);
//   const textRef = useRef(null);

//   useEffect(() => {
//     gsap.to(headerRef.current, {
//       x: "-69%",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         scroller: "body",
//         // markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin: true,
//       },
//     });
//     gsap.set(textRef.current, { opacity: 0 });

//     gsap.fromTo(
//       buttonRef.current,
//       { width: "auto" },
//       {
//         width: "8rem", // Initial width
//         duration: 0.3,
//         ease: "power1.inOut",
//         onStart: () => {
//           gsap.to(textRef.current, {
//             opacity: 1,
//             duration: 0.3,
//             ease: "power1.inOut",
//           });
//         },
//         onReverseComplete: () => {
//           gsap.to(textRef.current, {
//             opacity: 0,
//             duration: 0.3,
//             ease: "power1.inOut",
//           });
//         },
//       }
//     );
//   }, []);

//   return (
//     <>
//       <div id="page2" ref={sectionRef}>
//         <div className="absolute top-10 left-44 ">
//           <h1 className="text-white text-2xl font-mono ">WORK</h1>
//         </div>

//         <div className="top-24 absolute left-16 flex gap-48" ref={headerRef}>
//           <div className="relative imgeee">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="relative">
//               <button
//                 ref={buttonRef}
//                 className="absolute bg-black left-[630px] bottom-10 text-white flex items-center p-2 rounded transition-all duration-300 hover:bg-white hover:text-black"
//                 onMouseLeave={() =>
//                   gsap.to(buttonRef.current, { width: "8rem", duration: 0.3 })
//                 }
//               >
//                 <MdArrowOutward
//                   size={30}
//                   className="transition-colors duration-300"
//                 />
//                 <span ref={textRef} className="ml-2 whitespace-nowrap">
//                   View Details
//                 </span>
//               </button>
//             </div>

//             <div className="flex justify-between text-white w-[790px] mt-2">
//               <h1>Website Design</h1>
//               <p className="flex gap-2 items-center">
//                 <FaFigma />
//                 <FaWordpressSimple />
//                 <FaReact />
//                 <p>website designing</p>
//               </p>
//             </div>
//           </div>
//           <div className="relative imgeee">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="relative">
//               <button
//                 ref={buttonRef}
//                 className="absolute bg-black left-[630px] bottom-10 text-white flex items-center p-2 rounded transition-all duration-300 hover:bg-white hover:text-black"
//                 onMouseLeave={() =>
//                   gsap.to(buttonRef.current, { width: "8rem", duration: 0.3 })
//                 }
//               >
//                 <MdArrowOutward
//                   size={30}
//                   className="transition-colors duration-300"
//                 />
//                 <span ref={textRef} className="ml-2 whitespace-nowrap">
//                   View Details
//                 </span>
//               </button>
//             </div>

//             <div className="flex justify-between text-white w-[790px]">
//               <h1>Website Design</h1>
//               <p className="flex gap-2 items-center">
//                 <FaFigma />
//                 <FaWordpressSimple />
//                 <FaReact />
//                 <p>website designing</p>
//               </p>
//             </div>
//           </div>
//           <div className="relative imgeee">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="relative">
//               <button
//                 ref={buttonRef}
//                 className="absolute bg-black left-[630px] bottom-10 text-white flex items-center p-2 rounded transition-all duration-300 hover:bg-white hover:text-black"
//                 onMouseLeave={() =>
//                   gsap.to(buttonRef.current, { width: "8rem", duration: 0.3 })
//                 }
//               >
//                 <MdArrowOutward
//                   size={30}
//                   className="transition-colors duration-300"
//                 />
//                 <span ref={textRef} className="ml-2 whitespace-nowrap">
//                   View Details
//                 </span>
//               </button>
//             </div>

//             <div className="flex justify-between text-white w-[790px]">
//               <h1>Website Design</h1>
//               <p className="flex gap-2 items-center">
//                 <FaFigma />
//                 <FaWordpressSimple />
//                 <FaReact />
//                 <p>website designing</p>
//               </p>
//             </div>
//           </div>
//           <div className="relative imgeee">
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
//               alt="image"
//               className="h-96 w-[800px]"
//             />
//             <div className="relative">
//               <button
//                 ref={buttonRef}
//                 className="absolute bg-black left-[630px] bottom-10 text-white flex items-center p-2 rounded transition-all duration-300 hover:bg-white hover:text-black"
//                 onMouseLeave={() =>
//                   gsap.to(buttonRef.current, { width: "8rem", duration: 0.3 })
//                 }
//               >
//                 <MdArrowOutward
//                   size={30}
//                   className="transition-colors duration-300"
//                 />
//                 <span ref={textRef} className="ml-2 whitespace-nowrap">
//                   View Details
//                 </span>
//               </button>
//             </div>

//             <div className="flex justify-between text-white w-[760px]">
//               <h1>Website Design</h1>
//               <p className="flex gap-2 items-center">
//                 <FaFigma />
//                 <FaWordpressSimple />
//                 <FaReact />
//                 <p>website designing</p>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div>
//           <button className="relative top-[250px] bg-transparent border-2  rounded-full w-36 h-10 text-white font-light text-base md:text-lg transition-all duration-300 hover:border-transparent hover:w-40 group overflow-hidden hover:text-black border-white">
//             <span className="relative z-10 flex items-center justify-center gap-1">
//               VIEW MORE
//               <MdArrowOutward />
//             </span>
//             <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Portfolio;
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Portfolio.css"; // Ensure you create this CSS file for styles
import { MdArrowOutward } from "react-icons/md";
import { FaFigma, FaReact, FaWordpressSimple } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    gsap.to(headerRef.current, {
      x: "-69%",
      scrollTrigger: {
        trigger: sectionRef.current,
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
      },
    });
  }, []);

  useEffect(() => {
    buttonRefs.current.forEach((button, index) => {
      if (hoveredIndex === index) {
        // Animate button when hovered
        gsap.fromTo(
          button,
          {
            opacity: 0,
            scale: 0.9,
            x: 190,
            // y: 30,
          },
          {
            opacity: 1,
            scale: 1,
            x: 0, // Ensure x and y are reset
            y: 0,
            duration: 0.3,
            ease: "linear",
          }
        );
      } else {
        // Animate button when not hovered
        gsap.fromTo(
          button,
          {
            opacity: 1,
            scale: 1.1,

            y: 0,
          },
          {
            opacity: 0,
            scale: 1,
            y: 50,
            duration: 0.3,
            ease: "power1.inOut",
          }
        );
      }
    });
  }, [hoveredIndex]);

  return (
    <>
      <div id="page2" ref={sectionRef}>
        <div className="absolute top-10 left-44 ">
          <h1 className="text-white text-2xl font-mono ">WORK</h1>
        </div>

        <div className="top-24 absolute left-16 flex gap-48" ref={headerRef}>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="relative imgeee"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png"
                  alt="image"
                  className="h-96 w-[800px]"
                />
                <div className="relative">
                  {/* <button
                    ref={(el) => (buttonRefs.current[index] = el)}
                    className={`absolute  left-[630px] hover:bg-white hover:text-black hover:duration-500 bottom-10 text-white flex items-center p-2 rounded transition-all duration-300
                     hover:before:content-['View details'] ${
                       hoveredIndex === index
                         ? "opacity-100 bg-black"
                         : "opacity-0"
                     }`}
                    style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  >
                    <MdArrowOutward
                      size={30}
                      className="transition-colors duration-300"
                    /> */}
                  {/* <span
                      className={`ml-2 whitespace-nowrap ${
                        hoveredIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    >
                      View Details
                    </span> */}
                  {/* </button> */}
                  {/* <button
                    className={`button-container absolute left-[630px] bg-black bottom-10 text-white flex items-center p-2 rounded transition-all duration-300`}
                  >
                    <MdArrowOutward
                      size={30}
                      className="transition-colors duration-300 "
                    />
                  </button> */}
                  <button class="button-container absolute -top-24 right-7 ">
                    <div className="flu rounded-lg">
                      <span class="arrow ">
                        <MdArrowOutward size={30} />
                      </span>
                      <span class="text">More Details</span>
                    </div>
                  </button>
                </div>

                <div className="flex justify-between text-white w-[790px] mt-2">
                  <h1>Website Design</h1>
                  <p className="flex gap-2 items-center">
                    <FaFigma />
                    <FaWordpressSimple />
                    <FaReact />
                    <p>website designing</p>
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div>
          <button className="relative top-[250px] bg-transparent border-2 rounded-full w-36 h-10 text-white font-light text-base md:text-lg transition-all duration-300 hover:border-transparent hover:w-40 group overflow-hidden hover:text-black border-white">
            <span className="relative z-10 flex items-center justify-center gap-1">
              VIEW MORE
              <MdArrowOutward />
            </span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
