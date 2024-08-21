// import React from "react";
// import "./contact.css"; // Import the CSS file
// import { MdOutlineAttachEmail } from "react-icons/md";
// const ContactMove = () => {
//   return (
//     <div className="contact-move relative p-14">
//       <div className="scrolling-text">
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//         <h1> Let’s talk — Contact us —</h1>
//       </div>
//       <button className="w-40 h-40 bg-white border border-black text-black rounded-full absolute top-11 left-[45vw] justify-center items-center flex hover:bg-black hover:text-white ">
//         <MdOutlineAttachEmail size={40} />
//       </button>
//     </div>
//   );
// };

// export default ContactMove;

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { MdOutlineAttachEmail } from "react-icons/md";
// import "./contact.css";

// const ContactMove = () => {
//   const buttonRef = useRef(null);
//   const buttonRect = useRef(null);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const rect = button.getBoundingClientRect();
//     buttonRect.current = rect;

//     const handleMouseEnter = () => {
//       gsap.to(button, {
//         duration: 0.5,
//         scale: 1.2,
//         backgroundColor: "#fff", // Change to your desired color
//         color: "#000", // Change text color
//         ease: "power2.out",
//         transformOrigin: "center center",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(button, {
//         duration: 0.5,
//         scale: 1,
//         backgroundColor: "#000", // Original color
//         color: "#fff", // Original text color
//         ease: "power2.out",
//         transformOrigin: "center center",
//       });
//     };

//     const handleMouseMove = (e) => {
//       const buttonRect = button.getBoundingClientRect();
//       const buttonCenterX = buttonRect.left + buttonRect.width / 2;
//       const buttonCenterY = buttonRect.top + buttonRect.height / 2;
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       const deltaX = (mouseX - buttonCenterX) / 20; // Adjust sensitivity
//       const deltaY = (mouseY - buttonCenterY) / 20; // Adjust sensitivity

//       gsap.to(button, {
//         duration: 0.2,
//         x: deltaX,
//         y: deltaY,
//         ease: "power2.out",
//       });
//     };

//     button.addEventListener("mouseenter", handleMouseEnter);
//     button.addEventListener("mouseleave", handleMouseLeave);
//     document.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       button.removeEventListener("mouseenter", handleMouseEnter);
//       button.removeEventListener("mouseleave", handleMouseLeave);
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div className="contact-move relative p-14 bg-[#1A1B1D]">
//       <div className="scrolling-text text-white">
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//         <h1>Let’s talk — Contact us —</h1>
//       </div>
//       <button
//         ref={buttonRef}
//         className="w-40 h-40 bg-white border border-black text-black rounded-full absolute top-11 left-[42.5vw] flex justify-center items-center"
//       >
//         <MdOutlineAttachEmail size={40} />
//       </button>
//     </div>
//   );
// };

// export default ContactMove;
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { MdOutlineAttachEmail } from "react-icons/md";
import "./contact.css";

const ContactMove = () => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const button = buttonRef.current;

    const handleMouseEnter = () => {
      setIsHovered(true);
      gsap.to(button, {
        duration: 0.5,
        scale: 1.2,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      gsap.to(button, {
        duration: 0.5,
        scale: 1,
        x: 0, // Reset position when the mouse leaves
        y: 0,
        ease: "power2.out",
        transformOrigin: "center center",
      });
    };

    const handleMouseMove = (e) => {
      if (isHovered) {
        const buttonRect = button.getBoundingClientRect();
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const deltaX = (mouseX - buttonCenterX) / 30; // Adjust sensitivity
        const deltaY = (mouseY - buttonCenterY) / 30; // Adjust sensitivity

        gsap.to(button, {
          duration: 0.2,
          x: deltaX,
          y: deltaY,
          ease: "power2.out",
        });
      }
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isHovered]);

  return (
    <div className="contact-move relative p-14 bg-[#1A1B1D]">
      <div className="scrolling-text text-white">
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
        <h1>Let’s talk — Contact us —</h1>
      </div>
      <button
        ref={buttonRef}
        className="w-32 h-32 bg-white border border-black text-black rounded-full absolute top-11 left-[42.5vw] flex justify-center items-center"
      >
        <MdOutlineAttachEmail size={40} />
      </button>
    </div>
  );
};

export default ContactMove;
