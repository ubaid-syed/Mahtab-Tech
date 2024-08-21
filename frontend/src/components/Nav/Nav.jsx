import React, { useEffect, useState } from "react";
import "./Nav.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setScrollingUp(true);
      } else {
        setScrollingUp(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className={`nav ${!scrollingUp ? "nav-hide" : "nav-show"}`}>
      <div className="nav-container">
        <div className="navbar -mt-7">
          <div
            className={`logo whitespace-nowrap ml-7 transition-opacity duration-300 ${
              navOpen ? "opacity-0" : "opacity-100 delay-700"
            }`}
          >
            {navOpen ? "" : "Mahtab-Tech"}
          </div>

          <span
            className={`text-[11px] -mt-1 ${
              navOpen ? "ml-[1170px]" : " ml-[1050px] "
            }`}
          >
            {navOpen ? "CLOSE" : "MENU"}
          </span>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}>
              <div className="hamburger-icon">
                <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
                <span
                  className={navOpen ? "lineBottom spin" : "lineBottom"}
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <div className="flex justify-between ">
            <div className="relative">
              <div className="logo whitespace-nowrap -ml-1 -mt-1   ">
                Mahtab-Tech
              </div>
              <ul className="top-14 left-7 absolute">
                <h1 className="text-[16px] text-[#3E3E3D] whitespace-nowrap -ml-2 font-bold">
                  OUR SERVICES
                </h1>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-2 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_01_f.svg"
                      className="w-14 -ml-5 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      PSD To WordPress
                    </Link>
                  </div>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-1 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_02_f.svg"
                      className="w-12 -ml-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      WordPress Design & Development
                    </Link>
                  </div>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-1 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_05_f.svg"
                      className="w-12 -ml-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      WP Theme & Plugin Customizations
                    </Link>
                  </div>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-1 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_04_f.svg"
                      className="w-12 -ml-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      WooCommerce Development
                    </Link>
                  </div>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-1 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_03_f.svg"
                      className="w-12 -ml-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      WP Troubleshooting & Fixation
                    </Link>
                  </div>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-1 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_06_f.svg"
                      className="w-12 -ml-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      WordPress Maintenance
                    </Link>
                  </div>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-1 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_07_f.svg"
                      className="w-12 -ml-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      Custom WordPress Development
                    </Link>
                  </div>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353] -ml-1 mt-2 ">
                  <div className="flex items-center gap-4 group">
                    <img
                      src="https://www.perfectwebsolutions.info/wp-content/themes/perfect-web-solutions/library/images/icons/icon_num_08_f.svg"
                      className="w-12 -ml-3 transition-transform duration-300 ease-in-out group-hover:scale-110"
                      alt="Icon"
                    />
                    <Link
                      to="/"
                      className="transition-transform duration-300 ease-in-out group-hover:scale-110"
                    >
                      WordPress Migration
                    </Link>
                  </div>
                </li>
              </ul>

              <div className="top-[430px] left-7 absolute">
                <h1 className="text-[16px] text-[#3E3E3D] whitespace-nowrap -ml-3 font-bold">
                  GET TO KNOW US
                </h1>
                <div className="grid grid-cols-2 gap-32">
                  <ul className="">
                    <li className="text-[20px] whitespace-nowrap hover:text-[#575353]">
                      <Link to="/">Our Work</Link>
                    </li>
                    <li className="text-[20px] whitespace-nowrap hover:text-[#575353]">
                      <Link to="/">Our Process</Link>
                    </li>
                  </ul>
                  <ul className="">
                    <li className="text-[20px] whitespace-nowrap hover:text-[#575353]">
                      <Link to="/">About Us</Link>
                    </li>
                    <li className="text-[20px] whitespace-nowrap hover:text-[#575353]">
                      <Link to="/">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <ul className="top-[530px] flex  gap-2 left-24 absolute">
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353]  ">
                  <Link to="/">
                    <FaLinkedinIn />
                  </Link>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353]  ">
                  <Link to="/">
                    <FaFacebookF />
                  </Link>
                </li>
                <li className="text-[20px] whitespace-nowrap hover:text-[#575353]  ">
                  <Link to="/">
                    {" "}
                    <FaInstagram />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[780px] mt-10">
              <Carousel
                showArrows={false}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={3000}
                transitionTime={500}
                emulateTouch={true}
                className="carousel-container"
              >
                <div className="carousel-item">
                  <img
                    src="https://envydesign.co/wp-content/uploads/2023/05/Mask-group-35-1.png"
                    className="carousel-image"
                    alt="Image 1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://envydesign.co/wp-content/uploads/2023/05/Mask-group-7-1.jpg"
                    className="carousel-image"
                    alt="Image 2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://envydesign.co/wp-content/uploads/2024/03/StallionCompareBanner-jpg.webp"
                    className="carousel-image"
                    alt="Image 3"
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
