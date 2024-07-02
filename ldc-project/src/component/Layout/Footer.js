import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaGlobeEurope,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../../images/ldc.png";

const Footer = () => {
  return (
    <div>
      <section className="bg-gray-300 text-black  border-t-2  border-[#2e3092]  ">
        <div className="w-full">
          <div className="  grid   grid-cols-1  mx-8     md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4  md:w-[85%]  md:mx-auto ">
            {/* Content Column */}
            <div className="mt-[4rem]   grid-cols-1  w-full  ">
              <div>
                <div className="address   ">
                  {/* <h3 className="text-left my-8 border-b-2  border-red-700 pb-2 w-[10.5rem]  sm:text-left text-2xl font-bold">
                    Office Address
                  </h3> */}

                  <ul className="text-left   leading-[2rem]">
                    <li className="flex text-[1rem]">
                      <img src={logo} alt="" className="w-[300px]  h-auto" />
                    </li>

                    <li className="flex text-[1rem]">
                      <b>Call us: </b> +92301-6888226
                    </li>
                    <li className="flex text-[.9rem]">
                      <b className="text-[1rem]">Lahore: </b>117 G-1, G1 block, near Doctor’s Hospital,
                      Opp. MCB Bank, Johar Town, Lahore
                    </li>
                    <li className="flex text-[1rem] ">
                      <b>Email:</b> lahorediagnosticcenter.labs@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="my-6    ml-0 md:ml-2 w-full  grid-cols-1">
              <aside>
                <div className="menu-our-services-container      md:pr-[1rem] ">
                  <aside className="my-6    font-bold ">
                    <h5 className="text-xl text-[#2e3092]  border-b-2  border-[#000] pb-2 w-[5rem]   ">
                      About
                    </h5>
                  </aside>
                  <ul className="text-lg  font-[600]  leading-[3rem]   ">
                    <li className="  ">
                      <Link
                        to="/home"
                        className="hover:text-[#2e3092] ease-out mt-5 duration-100"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="         ">
                      <Link
                        to="/product"
                        className="hover:text-[#2e3092]      ease-out mt-5 duration-100"
                      >
                        Departments
                      </Link>
                    </li>
                    <li className="  ">
                      <Link
                        to="/solution"
                        className="hover:text-[#2e3092] ease-out mt-5 duration-100"
                      >
                        Collection Center Locations
                      </Link>
                    </li>
                    <li className="  ">
                      <Link
                        to="/contact"
                        className="hover:text-[#2e3092] ease-out mt-5 duration-100"
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            <div className="my-6   ml-0  md:ml-2  pr-4 grid-cols-1">
              <aside>
                <div className="menu-our-services-container   ">
                  <aside className="my-6    font-bold ">
                    <h5 className="text-xl   border-b-2 text-[#2e3092] border-[#000] pb-2 w-[10rem]   ">
                      Blogs & Media
                    </h5>
                  </aside>
                  <ul className="text-lg   font-[600]  leading-[3rem]   ">
                    <li className=" ">
                      <Link
                        to="/home"
                        className="hover:text-[#2e3092] ease-out mt-5 duration-100"
                      >
                        LDC Lab Blogs Press Mentions
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        to="/home"
                        className="hover:text-[#2e3092] ease-out mt-5 duration-100"
                      >
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>

            <div className="  w-full    grid-cols-1   py-10">
              <h1 className="text-xl my-3 font-bold text-[#2e3092] border-b-2  border-[#000] pb-2 w-[5rem]">
                Search
              </h1>

              <div className="flex mt-12">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border-2 border-white   w-[14rem]  md:w-[18rem]  px-2  text-black py-2"
                />
                <button
                  class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 
                  disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6  bg-[#2e3092] text-white shadow-md hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Search
                </button>
              </div>

              <ul className="myFooterSocialIcons gap-4  flex  mt-9 social-network">
                <li className="icoFacebook  rounded-[40px] hover:bg-blue-600 hover:text-white h-[2.5rem] border-2 border-[#000] w-[2.5rem]">
                  <Link to="#">
                    <FaFacebookF className="text-center  text-lg ml-2 mt-2" />
                  </Link>
                </li>
                <li className="  rounded-[40px] hover:bg-blue-600 hover:text-white h-[2.5rem] border-2 border-[#000] w-[2.5rem]">
                  <FaTwitter className="text-center  text-lg ml-2 mt-2" />
                </li>
                <li className="  rounded-[40px] hover:bg-red-700 hover:text-white h-[2.5rem] border-2 border-[#000] w-[2.5rem]">
                  <FaInstagram className="text-center  text-lg ml-2 mt-2" />
                </li>
                <li className="  rounded-[40px] hover:bg-blue-600 hover:text-white h-[2.5rem] border-2 border-[#000] w-[2.5rem]">
                  <FaLinkedin className="text-center  text-lg ml-2 mt-2" />
                </li>
                <li className="  rounded-[40px] hover:bg-red-600 hover:text-white h-[2.5rem] border-2 border-[#000] w-[2.5rem]">
                  <TiSocialGooglePlus className="text-center  text-lg ml-2 mt-2" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-[3rem] ">
          <div className="  bg-[#2e3092] text-white pt-2  text-lg">
            <div className="py-3">
              <marquee>
                {/* <FaHeart /> */}
                All Rights Reserved. © 2024
                <b className="ml-1   text-black">
                  Lahore Diagnostic Center
                </b>{" "}
                &nbsp;
                {/* <FaHeart /> */}
                &nbsp; Developed By :{" "}
                <strong className="text-black">medcloud.com.pk</strong>
                &nbsp; Contact :<b className="text-black">+92323-6311542</b>
              </marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
