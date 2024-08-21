// // import React, { useEffect, useRef } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const Card = () => {
// //   const mainRef = useRef(null);
// //   const textRef = useRef(null);
// //   const cardOneRef = useRef(null);
// //   const cardTwoRef = useRef(null);
// //   const cardThreeRef = useRef(null);

// //   useEffect(() => {
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: mainRef.current,
// //         start: "top top",
// //         end: "bottom top",
// //         scrub: 2,
// //         pin: true,
// //       },
// //     });

// //     tl.to(textRef.current, { top: "-7%" }, "start")
// //       .to(cardOneRef.current, { top: "35%" }, "start")
// //       .to(cardTwoRef.current, { top: "130%" }, "start")
// //       .to(cardTwoRef.current, { top: "42%" }, "middle")
// //       .to(cardOneRef.current, { width: "65%", height: "65vh" }, "middle")
// //       .to(cardThreeRef.current, { top: "130%" }, "middle")
// //       .to(cardThreeRef.current, { top: "50%" }, "end")
// //       .to(cardTwoRef.current, { width: "70%", height: "70vh" }, "end");
// //   }, []);

// //   return (
// //     <div
// //       ref={mainRef}
// //       classNameName="relative flex flex-col items-center justify-center w-full h-screen w-full gap-[10vh] bg-[#202020]"
// //     >
// //       <div
// //         ref={textRef}
// //         classNameName="text absolute flex flex-col items-center justify-center w-full top-[25%] h-screen"
// //       >
// //         <div
// //           classNameName="w-[5vw] h-[5vw] bg-center bg-cover"
// //           style={{
// //             backgroundImage:
// //               'url("https://github.com/thesiyhbrand/scrolling-effect/blob/main/ONE.png?raw=true")',
// //           }}
// //         ></div>
// //         <h1 classNameName="text-white text-center text-[3vw]">
// //           Create new feature at <br />
// //           Gravity Coding
// //         </h1>
// //         <p classNameName="text-center text-[1vw] text-[#7e7e7e]">
// //           Subscribe our channel for latest features of awwwards website. Check
// //           out other videos <br />
// //           for learning web development with great UI design and animation based.
// //         </p>
// //       </div>
// //       <div
// //         ref={cardOneRef}
// //         classNameName="cards absolute top-[130%] left-1/2 transform -translate-x-1/2 w-[80%] h-[80vh] bg-center bg-cover"
// //         style={{
// //           backgroundImage:
// //             'url("https://github.com/thesiyhbrand/scrolling-effect/blob/main/ONE.png?raw=true")',
// //         }}
// //       ></div>
// //       <div
// //         ref={cardTwoRef}
// //         classNameName="cards absolute top-[230%] left-1/2 transform -translate-x-1/2 w-[80%] h-[80vh] bg-center bg-cover"
// //         style={{
// //           backgroundImage:
// //             'url("https://github.com/thesiyhbrand/scrolling-effect/blob/main/ONE.png?raw=true")',
// //         }}
// //       ></div>
// //       <div
// //         ref={cardThreeRef}
// //         classNameName="cards absolute top-[250%] left-1/2 transform -translate-x-1/2 w-[80%] h-[80vh] bg-center bg-cover"
// //         style={{
// //           backgroundImage:
// //             'url("https://github.com/thesiyhbrand/scrolling-effect/blob/main/ONE.png?raw=true")',
// //         }}
// //       ></div>
// //     </div>
// //   );
// // };

// // export default Card;

// import React from "react";
// import "./Card.css";

// const Card = () => {
//   return (
//     <div className="w-full h-screen ">
//       <div className="main">
//         <div className="text">
//           <div className="text-img"></div>
//           <h1>
//             Create new feature at <br />
//             Gravity Coding
//           </h1>
//           <p>
//             Subscribe our channel for latest features of awwwards website. Check
//             out other videos <br />
//             for learning web development with great UI design and animation
//             based.
//           </p>
//         </div>
//         <div className="cards card-one"></div>
//         <div className="cards card-two"></div>
//         <div className="cards card-three"></div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = () => {
  const mainRef = useRef(null);
  const textRef = useRef(null);
  const cardOneRef = useRef(null);
  const cardTwoRef = useRef(null);
  const cardThreeRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(
      textRef.current,
      {
        top: "-7%",
      },
      "a"
    )
      .to(
        cardOneRef.current,
        {
          top: "35%",
        },
        "a"
      )
      .to(
        cardTwoRef.current,
        {
          top: "130%",
        },
        "a"
      )
      .to(
        cardTwoRef.current,
        {
          top: "42%",
        },
        "b"
      )
      .to(
        cardOneRef.current,
        {
          width: "65%",
          height: "65vh",
        },
        "b"
      )
      .to(
        cardThreeRef.current,
        {
          top: "130%",
        },
        "b"
      )
      .to(
        cardThreeRef.current,
        {
          top: "50%",
        },
        "c"
      )
      .to(
        cardTwoRef.current,
        {
          width: "70%",
          height: "70vh",
        },
        "c"
      );
  }, []);

  return (
    <div id="main" ref={mainRef}>
      <div className="text" ref={textRef}>
        Your Text Here
      </div>
      <div id="card-one" ref={cardOneRef}>
        Card One
      </div>
      <div id="card-two" ref={cardTwoRef}>
        Card Two
      </div>
      <div id="card-three" ref={cardThreeRef}>
        Card Three
      </div>
    </div>
  );
};

export default Card;
