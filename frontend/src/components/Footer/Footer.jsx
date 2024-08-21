import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "./Logo";
import Button from "./Button.jsx";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "footer",
            start: "top top",
            end: "top 40%",
            scrub: 2,
            // markers: true,
            onEnter: () => {
              document.body.setAttribute("theme", "black");
            },
            onEnterBack: () => {
              document.body.setAttribute("theme", "black");
            },
          },
        })
        .to(logoRef.current, {
          delay: -1,
          rotate: 0,
          bottom: window.innerWidth > 640 ? "-2rem" : "17.5rem",
          duration: 1,
          ease: "sine.inOut",
        })
        .from(".copyright_text", {
          delay: -1,
          opacity: 0,
          bottom: "-5rem",
          duration: 1,
          ease: "elastic.inOut",
        });
    });

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  return (
    <>
      <footer className="footer w-full h-[130vh] sm:h-[105vh] relative px-14 pt-10 bg-black overflow-hidden">
        <div className="flex items-start justify-between w-full capitalize pt-10">
          <ul className="space-y-3">
            {["home", "about", "solutions", "team"].map((item, index) => (
              <li
                key={index}
                className="text-xl text-white cursor-pointer hover:text-[#F5F19C]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <p className="text-2xl pb-8 text-white font_neuemachina">
              Join our mailing list for <br />
              the latest updates.
            </p>
            <div className="flex items-center gap-6">
              <input
                className="py-4 px-4 text-black placeholder:text-black w-64 outline-none"
                type="text"
                placeholder="Enter your email address..."
              />
              <Button
                btnLayout={{ background: "#F5F19C" }}
                title="subscribe"
                borderColor="border-black"
              />
            </div>
          </div>

          <ul className="space-y-3">
            {[
              "WP To PSD",
              "WP To PSD",
              "WP To PSD",
              "WP To PSD",
              "PSD To WP",
            ].map((item, index) => (
              <li
                key={index}
                className="text-xl text-white cursor-pointer hover:text-[#F5F19C]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:hidden block mt-14">
          <p className="text-xl pb-8 text-white font_neuemachina text-center">
            Join Us <br />
            the latest updates.
          </p>
          <div className="flex flex-col items-center gap-6">
            <input
              className="py-4 px-4 text-black placeholder:text-black w-64 outline-none"
              type="text"
              placeholder="Enter your email address..."
            />
            <Button
              btnLayout={{ background: "#F5F19C" }}
              title="subscribe"
              borderColor="border-black"
            />
          </div>
        </div>

        <div
          ref={logoRef}
          className="absolute -bottom-20 sm:-bottom-full rotate-45 w-full left-0 px-14"
        >
          <Logo width="100%" height="100%" />
        </div>

        <div className="absolute left-0 bottom-0 w-full px-14 bg-black">
          <div className="flex flex-col sm:flex-row sm:justify-between justify-start sm:items-center border-t-2 py-10">
            <ul className="flex flex-col sm:flex-row sm:items-center justify-start gap-5 capitalize">
              {["privacy policy", "terms of use", "trust"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-sm text-white hover:text-[#F5F19C] underline underline-offset-4 hover:no-underline"
                  >
                    <span className="link link--metis">{item}</span>
                  </li>
                )
              )}
            </ul>
            <p className="copyright_text text-white text-sm cursor-pointer sm:my-0 my-10 hover:text-[#F5F19C]">
              © {new Date().getFullYear()} MAHTAB-TECH. All rights reserved.
            </p>
            <ul className="flex items-center gap-5">
              <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
                <i class="text-xl ri-facebook-circle-fill"></i>
              </li>
              <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
                <i class="text-xl ri-instagram-line"></i>
              </li>
              <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
                <i class="text-xl ri-twitter-x-line"></i>
              </li>
              <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
                <i class="text-xl ri-github-fill"></i>
              </li>
              <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
                <i class="text-xl ri-linkedin-box-fill"></i>
              </li>
              <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
                <i class="text-xl ri-youtube-fill"></i>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Logo from "../components/Nav/Logo";
// import Logo from "./Logo.jsx";

// const Footer = () => {
//   const logoRef = useRef(null);

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: "footer",
//             start: "top top",
//             end: "top 40%",
//             scrub: 2,
//             // markers: true,
//             onEnter: () => {
//               document.body.setAttribute("theme", "black");
//             },
//             onEnterBack: () => {
//               document.body.setAttribute("theme", "black");
//             },
//           },
//         })
//         .to(logoRef.current, {
//           delay: -1,
//           rotate: 0,
//           bottom: window.innerWidth > 640 ? "-2rem" : "17.5rem",
//           duration: 1,
//           ease: "sine.inOut",
//         })
//         .from(".copyright_text", {
//           delay: -1,
//           opacity: 0,
//           bottom: "-5rem",
//           duration: 1,
//           ease: "elastic.inOut",
//         });
//     });

//     ScrollTrigger.refresh();

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       <footer className="footer w-full h-[130vh] sm:h-[105vh] relative px-14 pt-10 bg-black overflow-hidden">
//         <div className="flex items-start justify-between w-full capitalize pt-10">
//           <ul className="space-y-3">
//             {["home", "about", "solutions", "team"].map((item, index) => (
//               <li
//                 key={index}
//                 className="text-xl text-white cursor-pointer hover:text-[#F5F19C]"
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div
//           ref={logoRef}
//           className="absolute -bottom-20 sm:-bottom-full rotate-45 w-full left-0 px-14"
//         >
//           <Logo width="100%" height="100%" />
//         </div>

//         <div className="absolute left-0 bottom-0 w-full px-14 bg-black">
//           <div className="flex flex-col sm:flex-row sm:justify-between justify-start sm:items-center border-t-2 py-10">
//             <ul className="flex flex-col sm:flex-row sm:items-center justify-start gap-5 capitalize">
//               {["privacy policy", "terms of use", "trust"].map(
//                 (item, index) => (
//                   <li
//                     key={index}
//                     className="text-sm text-white hover:text-[#F5F19C] underline underline-offset-4 hover:no-underline"
//                   >
//                     <span className="link link--metis">{item}</span>
//                   </li>
//                 )
//               )}
//             </ul>
//             <p className="copyright_text text-white text-sm cursor-pointer sm:my-0 my-10 hover:text-[#F5F19C]">
//               © {new Date().getFullYear()} Significo. All rights reserved.
//             </p>
//             <ul className="flex items-center gap-5">
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-facebook-circle-fill"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-instagram-line"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-twitter-x-line"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-github-fill"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-linkedin-box-fill"></i>
//               </li>
//               <li className="text-lg text-white cursor-pointer hover:text-[#F5F19C]">
//                 <i class="text-xl ri-youtube-fill"></i>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

// // // import React from "react";
// // // import {
// // //   FaDribbbleSquare,
// // //   FaFacebookSquare,
// // //   FaGithubSquare,
// // //   FaInstagram,
// // //   FaTwitterSquare,
// // // } from "react-icons/fa";
// // // // Reusable SocialIcon component with hover effect
// // // const SocialIcon = ({ icon: Icon }) => (
// // //   <Icon className="social-icon hover:text-[#00df9a]" size={30} />
// // // );
// // // // Footer component
// // // const Footer = () => {
// // //   // Array defining the content and structure of the footer
// // //   const items = [
// // //     // Social media icons
// // //     { type: "icon", icon: FaFacebookSquare },
// // //     { type: "icon", icon: FaInstagram },
// // //     { type: "icon", icon: FaTwitterSquare },
// // //     { type: "icon", icon: FaGithubSquare },
// // //     { type: "icon", icon: FaDribbbleSquare },
// // //     // Footer sections
// // //     {
// // //       type: "section",
// // //       title: "Solutions",
// // //       items: ["Analytics", "Marketing", "Commerce", "Insights"],
// // //     },
// // //     {
// // //       type: "section",
// // //       title: "Support",
// // //       items: ["Pricing", "Documentation", "Guides", "API Status"],
// // //     },
// // //     {
// // //       type: "section",
// // //       title: "Company",
// // //       items: ["About", "Blog", "Jobs", "Press", "Careers"],
// // //     },
// // //     { type: "section", title: "Legal", items: ["Claim", "Policy", "Terms"] },
// // //   ];
// // //   // JSX structure of the footer
// // //   return (
// // //     <div className="bg-white mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-slate-800">
// // //       {/* Left section with brand and social icons */}
// // //       <div>
// // //         <h1 className="w-full text-3xl lg:text-4xl xl:text-5xl font-bold text-[#00df9a]">
// // //           MAHTAB-TECH
// // //         </h1>
// // //         <p className="py-4">
// // //           Over the years, our WordPress developers have been fortunate enough to
// // //           work on all kinds of projects ranging from easier to extra difficult.
// // //         </p>
// // //         <div className="flex justify-between md:w-[75%] my-6">
// // //           {/* Mapping over social icons and rendering the SocialIcon component */}
// // //           {items.map((item, index) =>
// // //             item.type === "icon" ? (
// // //               <SocialIcon key={index} icon={item.icon} />
// // //             ) : null
// // //           )}
// // //         </div>
// // //       </div>
// // //       {/* Right section with footer content organized in sections */}
// // //       <div className="lg:col-span-2 flex justify-evenly mt-6">
// // //         {/* Mapping over sections and rendering content */}
// // //         {items.map((item, index) =>
// // //           item.type === "section" ? (
// // //             <div key={index}>
// // //               <h6 className="font-medium text-black text-xl">{item.title}</h6>
// // //               <ul>
// // //                 {/* Mapping over items in each section */}
// // //                 {item.items.map((subItem, subIndex) => (
// // //                   <li key={subIndex} className="py-2 text-sm">
// // //                     {subItem}
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           ) : null
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // export default Footer;

// // import React from "react";
// // import "./Footer.css";
// // import { FaEnvelope } from "react-icons/fa";
// // import {
// //   FaDribbbleSquare,
// //   FaFacebookSquare,
// //   FaGithubSquare,
// //   FaInstagram,
// //   FaTwitterSquare,
// // } from "react-icons/fa";
// // import { MdArrowForward } from "react-icons/md";
// // const Footer = () => {
// //   return (
// //     <div className="footer">
// //       <div className="row">
// //         <div className="col">
// //           <h1 className="text-3xl mb-[30px]">MAHTAB-TECH</h1>
// //           <p>
// //             Over the years, our WordPress developers have been fortunate enough
// //             to work on all kinds of projects ranging from easier to extra
// //             difficult.
// //           </p>
// //         </div>
// //         <div className="col">
// //           <h3>Office</h3>
// //           <p>Hafeez center Road</p>
// //           <p>Pakistan, Lahore</p>
// //           <p>hafeez,PIN 329822, Pakistan</p>
// //           <p className="email-id">ubaidsyed@gmail.com</p>
// //           <h4>+92 - 03234607770</h4>
// //         </div>
// //         <div className="col">
// //           <h3>Links</h3>
// //           <ul>
// //             <li>
// //               <a href="">Home</a>
// //             </li>
// //             <li>
// //               <a href="">Home</a>
// //             </li>
// //             <li>
// //               <a href="">Home</a>
// //             </li>
// //             <li>
// //               <a href="">Home</a>
// //             </li>
// //             <li>
// //               <a href="">Home</a>
// //             </li>
// //           </ul>
// //         </div>
// //         <div className="col">
// //           <h3>Newsletter</h3>
// //           <form>
// //             <FaEnvelope className="far" />
// //             <input
// //               type="center"
// //               placeholder="Enter your email Id"
// //               required
// //             ></input>
// //             <button type="submit">
// //               <MdArrowForward className="fer" />
// //             </button>
// //           </form>
// //           <div className="social-icons">
// //             <FaDribbbleSquare className="fab" />
// //             <FaFacebookSquare className="fab" />
// //             <FaGithubSquare className="fab" />
// //             <FaTwitterSquare className="fab" />
// //             <FaInstagram className="fab" />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Footer;
