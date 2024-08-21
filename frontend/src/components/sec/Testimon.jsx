// import React, { useState, useRef } from "react";

// const TestimonialWithVideo = () => {
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);
//   const videoRef = useRef(null);

//   const testimonials = [
//     {
//       quote:
//         "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
//       name: "Leslie Alexander",
//       title: "Freelance React Developer",
//     },
//     {
//       quote:
//         "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
//       name: "Jacob Jones",
//       title: "Digital Marketer",
//     },
//     {
//       quote:
//         "“I have been using this product for a year now and it has completely transformed my business. The customer support is top-notch.”",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png",
//       name: "John Doe",
//       title: "Entrepreneur",
//     },
//   ];

//   const handleTestimonialClick = (index) => {
//     setSelectedTestimonial(index);
//     if (videoRef.current) {
//       videoRef.current.play();
//     }
//   };

//   return (
//     <section className="py-8 bg-gray-50 relative">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-lg font-medium text-gray-600">
//             Over 850+ Happy Clients and Growing
//           </p>
//           <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
//             Our Happy Clients Say About Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-3">Watch Our Video</h2>
//             <div className="bg-gray-300 h-36 rounded-lg flex items-center justify-center">
//               {selectedTestimonial !== null && (
//                 <video
//                   ref={videoRef}
//                   className="w-full h-full object-cover rounded-lg"
//                   controls
//                   src="your-video-url.mp4" // Replace with your video URL
//                 />
//               )}
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">What Our Clients Say</h2>
//             <div className="space-y-4">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-lg border border-black w-72 h-40 shadow-xl ${
//                     selectedTestimonial === index ? "transform scale-105" : ""
//                   }`}
//                   onClick={() => handleTestimonialClick(index)}
//                 >
//                   <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                     />
//                   </div>
//                   <div className="ml-4 flex-1">
//                     <blockquote className="mb-2 text-sm text-gray-900">
//                       {testimonial.quote}
//                     </blockquote>
//                     <p className="text-sm font-bold text-gray-900">
//                       {testimonial.name}
//                     </p>
//                     <p className="text-xs text-gray-600">{testimonial.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialWithVideo;
//ubaiud

// const TestimonialWithVideo = () => {
//   return (
//     <section className="py-8 bg-gray-50 relative">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-lg font-medium text-gray-600">
//             Over 850+ Happy Clients and Growing
//           </p>
//           <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
//             Our Happy Clients Say About Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-3">Watch Our Video</h2>
//             <div className="bg-gray-300 h-36 rounded-lg flex items-center justify-center">
//               <video
//                 className="w-full h-full object-cover rounded-lg"
//                 controls
//                 src="your-video-url.mp4" // Replace with your video URL
//               />
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-md h-[400px]">
//             <h2 className="text-xl font-semibold mb-4 text-center">
//               What Our Clients Say
//             </h2>
//             <div className="relative items-center justify-center flex ">
//               <div
//                 className="flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-lg border border-black w-72 h-40 shadow-xl absolute top-36 left-52
//                   "
//               >
//                 <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
//                   <img
//                     className="w-full h-full object-cover"
//                     src=""
//                     alt="ubiow"
//                   />
//                 </div>
//                 <div className="ml-4 flex-1">
//                   <blockquote className="mb-2 text-sm text-gray-900">
//                     "We recently worked with Perfect Web Solutions to completely
//                     overhaul our current website design and integrate
//                     woocommerce into it."
//                   </blockquote>
//                   <p className="text-sm font-bold text-gray-900">
//                     "Ubaid Syed"
//                   </p>
//                   <p className="text-xs text-gray-600">React Developer</p>
//                 </div>
//               </div>
//               <div
//                 className="flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-lg border border-black w-72 h-40 shadow-xl absolute top-28 left-7
//                   "
//               >
//                 <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
//                   <img
//                     className="w-full h-full object-cover"
//                     src=""
//                     alt="ubiow"
//                   />
//                 </div>
//                 <div className="ml-4 flex-1">
//                   <blockquote className="mb-2 text-sm text-gray-900">
//                     "We recently worked with Perfect Web Solutions to completely
//                     overhaul our current website design and integrate
//                     woocommerce into it."
//                   </blockquote>
//                   <p className="text-sm font-bold text-gray-900">
//                     "Ubaid Syed"
//                   </p>
//                   <p className="text-xs text-gray-600">React Developer</p>
//                 </div>
//               </div>
//               <div
//                 className="flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-lg border border-black w-72 h-40 shadow-xl
//                 absolute top-4 right-18
//                   "
//               >
//                 <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
//                   <img
//                     className="w-full h-full object-cover"
//                     src=""
//                     alt="ubiow"
//                   />
//                 </div>
//                 <div className="ml-4 flex-1">
//                   <blockquote className="mb-2 text-sm text-gray-900">
//                     "We recently worked with Perfect Web Solutions to completely
//                     overhaul our current website design and integrate
//                     woocommerce into it."
//                   </blockquote>
//                   <p className="text-sm font-bold text-gray-900">
//                     "Ubaid Syed"
//                   </p>
//                   <p className="text-xs text-gray-600">React Developer</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialWithVideo;
//me
// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";

// const TestimonialWithVideo = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const testimonialsRef = useRef([]);

//   const handleTestimonialClick = (index) => {
//     setActiveIndex(index);

//     // Animate the clicked testimonial to the front
//     gsap.to(testimonialsRef.current[index], {
//       zIndex: 10,
//       scale: 1.1,
//       duration: 0.3,
//     });

//     // Animate the other testimonials to the back and apply blur
//     testimonialsRef.current.forEach((testimonial, i) => {
//       if (i !== index) {
//         gsap.to(testimonial, {
//           zIndex: 1,
//           scale: 0.95,
//           duration: 0.3,
//         });
//       }
//     });
//   };

//   useEffect(() => {
//     testimonialsRef.current = testimonialsRef.current.slice(0, 3);
//   }, []);

//   return (
//     <section className="py-8 bg-gray-50 relative">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-lg font-medium text-gray-600">
//             Over 850+ Happy Clients and Growing
//           </p>
//           <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
//             Our Happy Clients Say About Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-3">Watch Our Video</h2>
//             <div className="bg-gray-300 h-36 rounded-lg flex items-center justify-center">
//               <video
//                 className="w-full h-full object-cover rounded-lg"
//                 controls
//                 src="your-video-url.mp4" // Replace with your video URL
//               />
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-md h-[400px] relative">
//             <h2 className="text-xl font-semibold mb-4 text-center">
//               What Our Clients Say
//             </h2>
//             <div className="relative items-center justify-center flex">
//               {["Ubaid Syed", "John Doe", "Jane Smith"].map((name, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (testimonialsRef.current[index] = el)}
//                   onClick={() => handleTestimonialClick(index)}
//                   className={`flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-lg border border-black w-72 h-40 shadow-xl absolute ${
//                     index === 0
//                       ? "top-36 left-52"
//                       : index === 1
//                       ? "top-28 left-7"
//                       : "top-4 right-18"
//                   }`}
//                   style={{
//                     filter:
//                       activeIndex !== null && activeIndex !== index
//                         ? "blur(2px)"
//                         : "none",
//                   }}
//                 >
//                   <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
//                     <img
//                       className="w-full h-full object-cover"
//                       src=""
//                       alt={name}
//                     />
//                   </div>
//                   <div className="ml-4 flex-1">
//                     <blockquote className="mb-2 text-sm text-gray-900">
//                       "We recently worked with Perfect Web Solutions to
//                       completely overhaul our current website design and
//                       integrate woocommerce into it."
//                     </blockquote>
//                     <p className="text-sm font-bold text-gray-900">{name}</p>
//                     <p className="text-xs text-gray-600">React Developer</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialWithVideo;

// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";

// const TestimonialWithVideo = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [videoSrc, setVideoSrc] = useState(""); // State to hold the video URL
//   const testimonialsRef = useRef([]);
//   const videoRef = useRef(null); // Ref for the video iframe
//   const intervalRef = useRef(null); // Ref to store the interval ID

//   // YouTube Video IDs for each testimonial
//   const videoIds = [
//     "dQw4w9WgXcQ", // Replace with your YouTube video IDs
//     "tVj0q6Kf6Jk",
//     "9bZkp7q19f0",
//     "M7lc1UVf-VE", // Add additional video IDs
//     "s6N9F2V8j_w",
//   ];

//   // Avatar images for each testimonial
//   const avatarUrls = [
//     "https://via.placeholder.com/64?text=U", // Replace with actual avatar URLs
//     "https://via.placeholder.com/64?text=J",
//     "https://via.placeholder.com/64?text=J",
//     "https://via.placeholder.com/64?text=A", // Add additional avatars
//     "https://via.placeholder.com/64?text=B",
//   ];

//   const handleTestimonialClick = (index) => {
//     setActiveIndex(index);
//     setVideoSrc(`https://www.youtube.com/embed/${videoIds[index]}`); // Set the video URL based on the clicked testimonial

//     // Play the video
//     if (videoRef.current) {
//       videoRef.current.contentWindow.postMessage(
//         '{"event":"command","func":"playVideo","args":""}',
//         "*"
//       );
//     }

//     // Animate the clicked testimonial to the front
//     gsap.to(testimonialsRef.current[index], {
//       zIndex: 10,
//       scale: 1.1,
//       duration: 0.5,
//     });

//     // Animate the other testimonials to the back and apply blur
//     testimonialsRef.current.forEach((testimonial, i) => {
//       if (i !== index) {
//         gsap.to(testimonial, {
//           zIndex: 1,
//           scale: 0.95,
//           duration: 0.5,
//         });
//       }
//     });
//   };

//   const moveToNextTestimonial = () => {
//     const nextIndex = (activeIndex + 1) % testimonialsRef.current.length;
//     handleTestimonialClick(nextIndex);
//   };

//   useEffect(() => {
//     testimonialsRef.current = testimonialsRef.current.slice(0, 5);

//     // Set up automatic movement
//     intervalRef.current = setInterval(moveToNextTestimonial, 5000); // Change testimonial every 5 seconds

//     return () => {
//       // Clean up interval on unmount
//       clearInterval(intervalRef.current);
//     };
//   }, [activeIndex]);

//   const handleMouseEnter = () => {
//     clearInterval(intervalRef.current); // Pause animation on hover
//   };

//   const handleMouseLeave = () => {
//     intervalRef.current = setInterval(moveToNextTestimonial, 5000); // Resume animation after hover
//   };

//   return (
//     <section className="py-8 bg-gray-50 relative">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-lg font-medium text-gray-600">
//             Over 850+ Happy Clients and Growing
//           </p>
//           <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
//             Our Happy Clients Say About Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
//           <div className="bg-white p-4 rounded-lg shadow-md w-[35vw]">
//             <div className="bg-gray-300 mt-28 h-36 rounded-lg flex items-center justify-center">
//               <iframe
//                 ref={videoRef} // Assign the ref to the video iframe
//                 className="w-full h-80 rounded-lg"
//                 src={videoSrc} // Set the video URL based on the state
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>

//           <div
//             className="bg-white p-4 rounded-lg shadow-md h-[400px] relative w-[46vw] right-16"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <div className="relative items-center justify-center flex">
//               {[
//                 "Ubaid Syed",
//                 "John Doe",
//                 "Jane Smith",
//                 "Alice Johnson",
//                 "Bob Brown",
//               ].map((name, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (testimonialsRef.current[index] = el)}
//                   onClick={() => handleTestimonialClick(index)}
//                   className={`flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-lg border border-black w-72 h-40 shadow-xl absolute ${
//                     index === 0
//                       ? "top-36 left-52"
//                       : index === 1
//                       ? "top-28 left-7"
//                       : index === 2
//                       ? "top-4 right-18"
//                       : index === 3
//                       ? "top-20 left-16"
//                       : "top-16 right-12"
//                   }`}
//                   style={{
//                     filter:
//                       activeIndex !== null && activeIndex !== index
//                         ? "blur(2px)"
//                         : "none",
//                   }}
//                 >
//                   <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={avatarUrls[index]} // Set the avatar image URL based on the index
//                       alt={name}
//                     />
//                   </div>
//                   <div className="ml-4 flex-1">
//                     <blockquote className="mb-2 text-sm text-gray-900">
//                       "We recently worked with Perfect Web Solutions to
//                       completely overhaul our current website design and
//                       integrate woocommerce into it."
//                     </blockquote>
//                     <p className="text-sm font-bold text-gray-900">{name}</p>
//                     <p className="text-xs text-gray-600">React Developer</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialWithVideo;
// /last

// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";

// const TestimonialWithVideo = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [videoSrc, setVideoSrc] = useState(""); // State to hold the video URL
//   const testimonialsRef = useRef([]);
//   const videoRef = useRef(null); // Ref for the video iframe
//   const intervalRef = useRef(null); // Ref to store the interval ID

//   // YouTube Video IDs for each testimonial
//   const videoIds = [
//     "dQw4w9WgXcQ", // Replace with your YouTube video IDs
//     "tVj0q6Kf6Jk",
//     "9bZkp7q19f0",
//     "M7lc1UVf-VE", // Add additional video IDs
//     "s6N9F2V8j_w",
//   ];

//   // Avatar images for each testimonial
//   const avatarUrls = [
//     "https://via.placeholder.com/64?text=U", // Replace with actual avatar URLs
//     "https://via.placeholder.com/64?text=J",
//     "https://via.placeholder.com/64?text=J",
//     "https://via.placeholder.com/64?text=A", // Add additional avatars
//     "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
//   ];

//   const handleTestimonialClick = (index) => {
//     setActiveIndex(index);
//     setVideoSrc(`https://www.youtube.com/embed/${videoIds[index]}`); // Set the video URL based on the clicked testimonial

//     // Play the video
//     if (videoRef.current) {
//       videoRef.current.contentWindow.postMessage(
//         '{"event":"command","func":"playVideo","args":""}',
//         "*"
//       );
//     }

//     // Animate the clicked testimonial to the front with rotation
//     gsap.to(testimonialsRef.current[index], {
//       zIndex: 10,
//       scale: 1.1,
//       duration: 0,
//       ease: "power2.out",
//       y: -20,
//     });

//     // Animate the other testimonials to the back and apply blur
//     testimonialsRef.current.forEach((testimonial, i) => {
//       if (i !== index) {
//         gsap.to(testimonial, {
//           zIndex: 1,
//           scale: 1.0,

//           duration: 0,
//           ease: "power2.out",
//           y: 20,
//           boxShadow: 20,
//         });
//       }
//     });
//   };

//   // useEffect(() => {
//   //   testimonialsRef.current = testimonialsRef.current.slice(0, 5);

//   //   return () => {
//   //     // Clean up interval on unmount
//   //     clearInterval(intervalRef.current);
//   //   };
//   // }, [activeIndex]);

//   const handleMouseEnter = (index) => {
//     if (index === activeIndex) {
//       clearInterval(intervalRef.current); // Pause animation on hover over active testimonial
//     }
//   };

//   const handleMouseLeave = (index) => {
//     if (index === activeIndex) {
//       intervalRef.current = setInterval(moveToNextTestimonial, 7000); // Resume animation after hover
//     }
//   };

//   return (
//     <section
//       className="py-8 h-screen  relative"
//       style={{
//         background: "linear-gradient(to bottom, #191A1C, #1A1B1D, #1A1B1D)",
//       }}
//     >
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
//             Our Happy Clients Say About Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
//           <div className="p-4 rounded-lg  w-[35vw]">
//             <div className="bg-gray-300 mt-36 h-36 rounded-lg flex items-center justify-center">
//               <iframe
//                 ref={videoRef} // Assign the ref to the video iframe
//                 className="w-full h-80 rounded-lg"
//                 src={videoSrc} // Set the video URL based on the state
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>

//           <div className="p-4 rounded-lg  h-[400px] relative w-[46vw] right-16">
//             <div className="relative items-center justify-center flex">
//               {[
//                 "Ubaid Syed",
//                 "John Doe",
//                 "Jane Smith",
//                 "Alice Johnson",
//                 "Bob Brown",
//               ].map((name, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => (testimonialsRef.current[index] = el)}
//                   onClick={() => handleTestimonialClick(index)}
//                   onMouseEnter={() => handleMouseEnter(index)}
//                   onMouseLeave={() => handleMouseLeave(index)}
//                   className={`flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-2xl border border-black w-[32vw] h-40 shadow-2xl absolute ${
//                     index === 0
//                       ? "top-52 -left-3"
//                       : index === 1
//                       ? "top-[250px] left-28"
//                       : index === 2
//                       ? "top-16 -left-14"
//                       : index === 3
//                       ? "top-1 left-40"
//                       : "top-36 left-52"
//                   }`}
//                   style={{
//                     filter:
//                       activeIndex !== null && activeIndex !== index
//                         ? "blur(0.7px)"
//                         : "none",
//                     transition: "transform 0.5s ease-out, filter 0.5s ease-out",
//                   }}
//                 >
//                   <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full overflow-hidden mt-4 ml-6">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={avatarUrls[index]} // Set the avatar image URL based on the index
//                       alt={name}
//                     />
//                   </div>
//                   <div className="ml-3 mt-5 flex-1 ">
//                     <p className="text-sm font-bold text-gray-900">{name}</p>
//                     <p className="text-xs text-gray-600">React Developer</p>
//                     <blockquote className="mb-2 text-sm text-gray-900">
//                       "We recently worked with Perfect Web Solutions to
//                       completely overhaul our current website design and
//                       integrate woocommerce into it."
//                     </blockquote>
//                     <p className="text-xs -mt-2 font-bold">
//                       MAHTAB-TECH{" "}
//                       <span className="font-light ml-1">12/23/2024</span>
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialWithVideo;

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Testimonials.css";

const TestimonialWithVideo = () => {
  // YouTube Video IDs for each testimonial
  const videoIds = [
    "dQw4w9WgXcQ", // Replace with your YouTube video IDs
    "tVj0q6Kf6Jk",
    "9bZkp7q19f0",
    "M7lc1UVf-VE", // Add additional video IDs
    "s6N9F2V8j_w",
  ];

  // Avatar images for each testimonial
  const avatarUrls = [
    "https://via.placeholder.com/64?text=U", // Replace with actual avatar URLs
    "https://via.placeholder.com/64?text=J",
    "https://via.placeholder.com/64?text=J",
    "https://via.placeholder.com/64?text=A", // Add additional avatars
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722816000&semt=sph",
  ];

  const [activeIndex, setActiveIndex] = useState(4);
  const [videoSrc, setVideoSrc] = useState(
    `https://www.youtube.com/embed/${videoIds[0]}`
  ); // Set initial video URL

  const testimonialsRef = useRef([]);
  const videoRef = useRef(null); // Ref for the video iframe
  const intervalRef = useRef(null); // Ref to store the interval ID

  useEffect(() => {
    setVideoSrc(`https://www.youtube.com/embed/${videoIds[activeIndex]}`);
  }, [activeIndex, videoIds]);

  const handleTestimonialClick = (index) => {
    setActiveIndex(index);
    setVideoSrc(`https://www.youtube.com/embed/${videoIds[index]}`); // Set the video URL based on the clicked testimonial

    // Play the video
    if (videoRef.current) {
      videoRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }

    // Animate the clicked testimonial to the front with rotation
    gsap.to(testimonialsRef.current[index], {
      zIndex: 10,
      scale: 1.1,
      duration: 0,
      ease: "power2.out",
      y: -20,
    });

    // Animate the other testimonials to the back and apply blur
    testimonialsRef.current.forEach((testimonial, i) => {
      if (i !== index) {
        gsap.to(testimonial, {
          zIndex: 1,
          scale: 1.0,
          duration: 0,
          ease: "power2.out",
          y: 20,
          boxShadow: 20,
        });
      }
    });
  };

  const handleMouseEnter = (index) => {
    if (index === activeIndex) {
      clearInterval(intervalRef.current); // Pause animation on hover over active testimonial
    }
  };

  const handleMouseLeave = (index) => {
    if (index === activeIndex) {
      intervalRef.current = setInterval(moveToNextTestimonial, 7000); // Resume animation after hover
    }
  };

  // Placeholder for the moveToNextTestimonial function
  const moveToNextTestimonial = () => {
    // Implement the logic for moving to the next testimonial
  };
  const handleMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--fill-x", `${x}px`);
    button.style.setProperty("--fill-y", `${y}px`);
  };
  return (
    <section
      className="py-8 h-screen relative"
      style={{
        background: "linear-gradient(to bottom, #191A1C, #1A1B1D, #1A1B1D)",
      }}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
            Our Happy Clients Say About Us
          </h2>
        </div>

        <div className="flex items-center justify-end mr-20 gap-5 ">
          <button
            className="animated-button z-40"
            onMouseMove={handleMouseMove}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            <FaArrowLeft />
          </button>
          <button
            className="animated-button z-40"
            onMouseMove={handleMouseMove}
            onClick={() => setActiveIndex(activeIndex + 1)}
          >
            <FaArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
          <div className="p-4 rounded-lg w-[35vw]">
            <div className="bg-gray-300 mt-36 h-36 rounded-lg flex items-center justify-center">
              <iframe
                ref={videoRef} // Assign the ref to the video iframe
                className="w-full h-80 rounded-lg"
                src={videoSrc} // Set the video URL based on the state
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="p-4 rounded-lg h-[400px] relative w-[46vw] right-16">
            <div className="relative items-center justify-center flex">
              {[
                "John Doe",
                "Jane Smith",
                "Alice Johnson",
                "Bob Brown",
                "Ubaid Syed",
              ].map((name, index) => (
                <div
                  key={index}
                  ref={(el) => (testimonialsRef.current[index] = el)}
                  onClick={() => handleTestimonialClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className={`flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-2xl border border-black w-[32vw] h-40 shadow-2xl absolute ${
                    index === 0
                      ? "top-52 -left-3"
                      : index === 1
                      ? "top-[250px] left-28"
                      : index === 2
                      ? "top-16 -left-14"
                      : index === 3
                      ? "top-1 left-40"
                      : "top-36 left-52"
                  } ${
                    index === activeIndex
                      ? "z-10 scale-110" // Add styles for active testimonial
                      : "filter-blur"
                  }`}
                  style={{
                    filter:
                      activeIndex !== null && activeIndex !== index
                        ? "blur(0.7px)"
                        : "none",
                    transition: "transform 0.5s ease-out, filter 0.5s ease-out",
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-300 rounded-full overflow-hidden mt-4 ml-6">
                    <img
                      className="w-full h-full object-cover"
                      src={avatarUrls[index]} // Set the avatar image URL based on the index
                      alt={name}
                    />
                  </div>
                  <div className="ml-3 mt-5 flex-1">
                    <p className="text-sm font-bold text-gray-900">{name}</p>
                    <p className="text-xs text-gray-600">React Developer</p>
                    <blockquote className="mb-2 text-sm text-gray-900">
                      "We recently worked with Perfect Web Solutions to
                      completely overhaul our current website design and
                      integrate woocommerce into it."
                    </blockquote>
                    <p className="text-xs -mt-2 font-bold">
                      MAHTAB-TECH{" "}
                      <span className="font-light ml-1">12/23/2024</span>
                    </p>
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

export default TestimonialWithVideo;

//last

// import React, { useState } from "react";

// const TestimonialWithVideo = () => {
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   const testimonials = [
//     {
//       quote:
//         "“You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.”",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
//       name: "Leslie Alexander",
//       title: "Freelance React Developer",
//       videoId: "PMW8VY6gpC4", // Replace with actual YouTube video ID
//     },
//     {
//       quote:
//         "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
//       name: "Jacob Jones",
//       title: "Digital Marketer",
//       videoId: "CogZL5HBJgg", // Replace with actual YouTube video ID
//     },
//     {
//       quote:
//         "“I have been using this product for a year now and it has completely transformed my business. The customer support is top-notch.”",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png",
//       name: "John Doe",
//       title: "Entrepreneur",
//       videoId: "tOwjEOt1zYU", // Replace with actual YouTube video ID
//     },
//     {
//       quote:
//         "“I have been using this product for a year now and it has completely transformed my business. The customer support is top-notch.”",
//       image:
//         "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-3.png",
//       name: "John Doe",
//       title: "Entrepreneur",
//       videoId: "rJORiMZe2hA", // Replace with actual YouTube video ID
//     },
//   ];

//   const handleTestimonialClick = (index) => {
//     setSelectedTestimonial(index);
//   };

//   return (
//     <section className="py-8 bg-gray-50 relative">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="text-center">
//           <p className="text-lg font-medium text-gray-600">
//             Over 850+ Happy Clients and Growing
//           </p>
//           <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
//             Our Happy Clients Say About Us
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-12">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-3">Watch Our Video</h2>
//             <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
//               <iframe
//                 className="w-full h-full object-cover rounded-lg"
//                 src={
//                   selectedTestimonial !== null
//                     ? `https://www.youtube.com/embed/${testimonials[selectedTestimonial].videoId}`
//                     : "https://www.youtube.com/embed/Jw7s42Op2ao"
//                 } // Use the embedded URL format for the default video
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               />
//             </div>
//           </div>

//           <div className="bg-white p-4 rounded-lg shadow-md h-[500px] w-[630px]">
//             <h2 className="text-xl font-semibold mb-4 text-center">
//               What Our Clients Say
//             </h2>
//             <div className="relative grid grid-cols-2 gap-6 ">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`flex items-start cursor-pointer transition-transform duration-300 bg-gray-100 rounded-lg border border-black w-72 h-40 hover:shadow-xl hover:scale-105 transform p-2 ${
//                     selectedTestimonial === index ? "scale-105" : ""
//                   }`}
//                   onClick={() => handleTestimonialClick(index)}
//                 >
//                   <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full overflow-hidden ml-1">
//                     <img
//                       className="w-full h-full object-cover "
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                     />
//                   </div>
//                   <div className="ml-4 flex-1">
//                     <blockquote className="mb-2 text-sm text-gray-900">
//                       {testimonial.quote}
//                     </blockquote>
//                     <p className="text-sm font-bold text-gray-900">
//                       {testimonial.name}
//                     </p>
//                     <p className="text-xs text-gray-600">{testimonial.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialWithVideo;
