import React from "react";
import Layout from "../Layout/Layout";
import { MdEmail } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  FaEnvelope,
  FaGlobeEurope,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import Whatsapp from "./Whatsapp";

const Contactus = () => {
  return (
    <Layout title={"contact us"}>
      <div
        className="title-area h-[50vh]"
        style={{
          backgroundSize: "cover",
          //   backgroundColor: "#1d1d1d", // Corrected typo in backgroundColor
          backgroundPosition: "50% 50%",
          backgroundImage:
            'url("https://alphaenterprises.com.pk/assets/img/support/support.jpg")',
        }}
      >
        <div className="container  w-[80vw]  mx-auto">
          <div className="content  py-[120px] ">
            <h1 className="text-white ml-[rem]  text-[45px]   text-center md:text-left lg:text-left  uppercase  lg:text-[70px] md:text-[70px]  font-bold   text-shadow: 2px 2px #171717">
              CONTACT US
            </h1>
          </div>
        </div>
      </div>

      {/* ================================part2 =================================== */}
      <div className="  w-full   py-[3rem] mt-[px]">
        <div className="row   mx-auto w-[80vw] text-black pb-[3rem]">
          <div className="pt-[3rem]">
            <div className="theme-section-module text-center">
              <h2 className="uppercase text-[3rem] font-[400]  text-black">
                Get In Touch
              </h2>
              <div
                className="w-full md:w-[30rem] mx-auto mt-7 border-b-[2px] border-black relative"
                data-wow-delay=".3s"
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="text-[#2e3092] w-[4rem] h-[4rem] text-center"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <p className=" text-center text-[16px]  px-[3rem] mt-8  md:text-center">
            We always feel delighted when anyone wants to talk to us. Feel free
            to call us or email us with any inquires you may have regarding our
            laboratory  services. Please allow up to 24 hours for a
            response. Your patience is greatly appreciated.
          </p>
        </div>

        <div className="container     w-[92vw]  md:w-[85vw]  bg-gray-200  mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-md-6  px-5">
              <div className="content-area py-8 px-6">
                <h2 className="mb-[20px]   text-[#000] font-bold   text-[46px]">
                  {" "}
                  Contact Us
                </h2>

                <ul className="text-left ml-    leading-[2rem]">
                  {/* <li className="flex text-[1rem]">
                    <FaLocationDot className="mr-2   text-red-700 mt-2" /> Alpha
                    Enterprises(Pvt) Ltd
                  </li> */}
                  <li className="flex text-[1rem] mr">
                    <FaLocationDot className="mr-3  text-[1.5rem] text-[#2e3092] mt-2" />{" "}
                    117 G, 1, near doctors hospital, Block G1 Block G 1 Phase 1 Johar Town, Lahore, Punjab 54742, Pakistan
                  </li>
                  <li className="flex text-[1.1rem]">
                    <FaPhoneAlt className="mr-2 text-[#2e3092] mt-2" />{" "}
                    +92301-6888226
                  </li>
                  {/* <li className="flex text-[1.1rem]">
                    <FaPhoneAlt className="mr-2 text-red-700 mt-2" />
                    +92-51-2758667
                  </li> */}
                  <li className="flex text-[1.1rem]">
                    <FaEnvelope className="mr-2 text-[#2e3092] mt-2" />{" "}
                    lahorediagnosticcenter.labs@gmail.com
                  </li>
               
                  {/* <li className="flex text-[1.1rem]">
                    <FaGlobeEurope className="mr-2 text-red-700 mt-2" />{" "}
                   
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-md-6  p-[20px]  md:p-[20px]   lg:p-[40px]">
              <div classname="w-full mt-32">
                <div classname="w-full h-full">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435546.708766941!2d73.67098428906252!3d31.477199500000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903a5db929377%3A0xe7046db96a03c572!2sLAHORE%20DIAGNOSTIC%20CENTER!5e0!3m2!1sen!2s!4v1709809920815!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================part3 ================================== */}

  <Whatsapp />



    </Layout>
  );
};

export default Contactus;
