// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { gsap, CSSPlugin, Expo } from "gsap";
// import Nav from "./components/Nav/Nav";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home/Home";
// import Services from "./components/Services/Services";

// // Register GSAP plugins
// gsap.registerPlugin(CSSPlugin);

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [animationComplete, setAnimationComplete] = useState(false);

//   useEffect(() => {
//     // Set up interval to update counter
//     const countInterval = setInterval(() => {
//       setCounter((prevCounter) => {
//         if (prevCounter >= 100) {
//           clearInterval(countInterval);
//           reveal();
//           return 100;
//         }
//         return prevCounter + 1;
//       });
//     }, 25);

//     // Cleanup interval on unmount
//     return () => clearInterval(countInterval);
//   }, []);

//   const reveal = () => {
//     gsap
//       .timeline({
//         onComplete: () => {
//           setAnimationComplete(true);
//           console.log("Animation completed");
//         },
//       })
//       .to(".follow", {
//         width: "100%",
//         ease: Expo.easeInOut,
//         duration: 1.2,
//         delay: 0.5,
//       })
//       .to(".hide", {
//         opacity: 0,
//         duration: 0.5,
//         ease: Expo.easeInOut,
//       })
//       .to(".hide", {
//         display: "none",
//         duration: 0.5,
//         ease: Expo.easeInOut,
//       })
//       .to(".follow", {
//         height: "100%",
//         ease: Expo.easeInOut,
//         duration: 0.7,
//         delay: 0.3,
//       })
//       .to(".content", {
//         width: "100%",
//         ease: Expo.easeInOut,
//         duration: 0.1,
//       });
//   };

//   return (
//     <AppContainer>
//       {!animationComplete && (
//         <Loading>
//           <Follow className="follow" />
//           <ProgressBar
//             className="hide"
//             id="progress-bar"
//             style={{ width: `${counter}%` }}
//           />
//           <Count id="count" className="hide">
//             {counter}%
//           </Count>
//         </Loading>
//       )}
//       {animationComplete && (
//         <Content className="content">
//           <Router>
//             <Nav />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Services />
//             </Routes>
//           </Router>
//         </Content>
//       )}
//     </AppContainer>
//   );
// }

// export default App;

// // Styled Components
// const AppContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
//   color: #000;
//   position: relative;
// `;

// const Loading = styled.div`
//   height: 100%;
//   width: 100%;
//   background-color: #121212;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 1; // Ensure it's above the content
// `;

// const Follow = styled.div`
//   position: absolute;
//   background-color: #fff;
//   height: 2px;
//   width: 0;
//   left: 0;
//   z-index: 2;
// `;

// const ProgressBar = styled.div`
//   position: absolute;
//   left: 0;
//   background-color: #fff;
//   height: 2px;
//   width: 0;
//   transition: width 0.4s ease-out; // Animate width change
// `;

// const Count = styled.p`
//   position: absolute;
//   font-size: 130px;
//   color: #fff;
//   transform: translateY(-15px);
//   font-weight: 500;
//   z-index: 2; // Ensure it's above the loading content
// `;

// const Content = styled.div`
//   height: 100%;
//   width: 100%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: #f9f7f5;
//   z-index: 2; // Ensure it's above the loading content
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   overflow: hidden;
// `;

import React, { useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollProgressButton from "./components/ScrollToTopButton";
import OurProcess from "./components/OurProcess/OurProcess";
import Work from "./components/Work/Work";
import Preloader from "./components/PreLoader/Preloader";

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.type = "module";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
}

const App = () => {
  useEffect(() => {
    const scriptSrc = "./plugin.js"; // Ensure this path is correct

    setTimeout(() => {
      loadScript(scriptSrc)
        .then(() => {
          console.log("Plugin script loaded successfully.");
        })
        .catch((error) => {
          console.error("Error loading the plugin script:", error);
        });
    }, 5000);

    return () => {
      const script = document.querySelector(`script[src="${scriptSrc}"]`);
      if (script) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    // <div className="bg-white">
    <Router>
      {/* <Preloader /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/work" element={<Work />} /> */}
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/process" element={<OurProcess />} /> */}
      </Routes>
      <ScrollProgressButton />
    </Router>
    // </div>
  );
};

export default App;
