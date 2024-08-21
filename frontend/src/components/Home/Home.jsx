// import React from "react";
// import Services from "../Services/Services";
// import Carsel from "../carousel/Carsel";
// import { MdArrowOutward } from "react-icons/md";
// import OurProcess from "../OurProcess/OurProcess";
// import Testimonial from "../Testimonials/Testimonial";
// import HowItWorks from "../sec/HowItWorks";
// import Testimon from "../sec/Testimon";
// import Footer from "../Footer/Footer";
// import Work from "../Work/Work";

// const Home = () => {
//   return (
//     <>
//       <div className="text-center flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 bg-black text-white min-h-[500px] rounded-3xl mt-24 w-[1200px] ml-[80px] ">
//         <h1 className="text-4xl md:text-5xl -mt-18 lg:text-6xl font-sans font-normal leading-tight">
//           Unleashing your brand’s potential
//           <br />
//           with{" "}
//           <span className="font-serif italic mt-4 md:mt-6 lg:mt-8 inline-block">
//             bespoke design.
//           </span>
//         </h1>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:gap-6 lg:gap-8">
//           <button className="relative bg-transparent text-white border-2 border-black rounded-full w-40 h-10  font-light text-base md:text-lg transition-all duration-300 hover:bg-slate-100 hover:border-transparent hover:w-44 hover:after:content-[ '>'] hover:after:absolute hover:after:right-4 hover:text-black hover:after:text-black hover:after:font-bold hover:after:text-xl border-white">
//             SEE OUR WORK
//           </button>

//           <button className="relative bg-black border-2  rounded-full w-36 h-10 text-white font-light text-base md:text-lg transition-all duration-300 hover:border-transparent hover:w-40 group overflow-hidden hover:text-black border-white">
//             <span className="relative z-10 flex items-center justify-center gap-1">
//               LET'S TALK
//               <MdArrowOutward />
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-pink-300 via-blue-100 to-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//           </button>
//         </div>
//         <Carsel />
//       </div>

//       <Services />
//       <Work />
//       <HowItWorks />
//       <OurProcess />
//       <Testimonial />
//       <Testimon />
//       <Footer />
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import Services from "../Services/Services";
// import Carsel from "../carousel/Carsel";
// import { MdArrowOutward } from "react-icons/md";
// import OurProcess from "../OurProcess/OurProcess";
// import Testimonial from "../Testimonials/Testimonial";
// import HowItWorks from "../sec/HowItWorks";
// import Testimon from "../sec/Testimon";
// import Footer from "../Footer/Footer";
// import Work from "../Work/Work";

// const Home = () => {
//   return (
//     <>
//       <div className="text-center h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16 text-white min-h-[500px] rounded-3xl mt-24 w-[1200px] ml-[80px] ">
//         <h1 className="text-4xl md:text-5xl -mt-18 lg:text-6xl font-sans font-normal leading-tight">
//           Unleashing your brand’s potential
//           <br />
//           with{" "}
//           <span className="font-serif italic mt-4 md:mt-6 lg:mt-8 inline-block">
//             bespoke design.
//           </span>
//         </h1>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:gap-6 lg:gap-8">
//           <button className="relative bg-transparent text-white border-2 border-black rounded-full w-40 h-10  font-light text-base md:text-lg transition-all duration-300 hover:bg-slate-100 hover:border-transparent hover:w-44 hover:after:content-[ '>'] hover:after:absolute hover:after:right-4 hover:text-black hover:after:text-black hover:after:font-bold hover:after:text-xl border-white">
//             SEE OUR WORK
//           </button>

//           <button className="relative bg-transparent border-2  rounded-full w-36 h-10 text-white font-light text-base md:text-lg transition-all duration-300 hover:border-transparent hover:w-40 group overflow-hidden hover:text-black border-white">
//             <span className="relative z-10 flex items-center justify-center gap-1">
//               LET'S TALK
//               <MdArrowOutward />
//             </span>
//             <span className="absolute inset-0 bg-gradient-to-r from-pink-300 via-blue-100 to-purple-300 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
//           </button>
//         </div>
//         <Carsel />
//       </div>

//       <Services />
//       <Work />
//       <HowItWorks />
//       <OurProcess />
//       <Testimonial />
//       <Testimon />
//       <Footer />
//     </>
//   );
// };

// export default Home;

// import React, { useEffect, useRef } from "react";
// import Services from "../Services/Services";
// import "../../loco.css";

// import Testimon from "../sec/Testimon";
// import Footer from "../Footer/Footer";
// import Work from "../Work/Work";
// import Homes from "../Home";

// import Portfolio from "../Portfolio/Portfolio";
// import LocomotiveScroll from "locomotive-scroll";

// const Home = () => {
//   const scrollRef = useRef(null);
//   useEffect(() => {
//     const scroll = new LocomotiveScroll({
//       el: scrollRef.current,
//       smooth: true,
//     });
//     return scroll.destroy();
//   }, []);
//   return (
//     <div ref={scrollRef} className="scroll-container">
//       <Homes />

//       <Services />
//       <Work />
//       <Portfolio />

//       <Testimon />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

import React from "react";
import Services from "../Services/Services";

import Testimon from "../sec/Testimon";
import Footer from "../Footer/Footer";
import Work from "../Work/Work";
import Homes from "../Home";

import Portfolio from "../Portfolio/Portfolio";
import ContactMove from "../Contact/ContactMove";
import Animation1 from "../Animation/Animation1.jsx";
import Card from "../Card/Card.jsx";

const Home = () => {
  return (
    <div>
      <Homes />
      {/* <Card /> */}

      {/* <Animation1 /> */}
      <Services />
      <Work />
      <Portfolio />

      <Testimon />
      <ContactMove />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
