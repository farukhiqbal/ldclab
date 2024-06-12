import React from "react";
import Carousel from "react-material-ui-carousel";
import Layout from "../Layout/Layout";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MultiCarousel from "./Multicaosel";
import Whatsapp from "./Whatsapp";
import Ceo from "../../images/ceo.jpeg";
import banner1 from "../../images/ldc3.jpg";
// import banner2 from "../../images/dsk_ban_1.webp";
// import banner3 from "../../images/";
// import banner4 from "../../images/";
import banner5 from "../../images/dsk_ban_4.webp";
import banner6 from "../../images/ldc2.jpg";


import CartPage from "./CartPage";
import { Link } from "react-router-dom";
import Blog from "./Blog";

const Home = () => {
  const images = [
    {
      id: 1,
      img: banner1,
    },
    // {
    //   id: 2,
    //   // img: banner2,
    // },
    // {
    //   id: 3,
    //   // img: banner3,
    // },
    // {
    //   id: 4,
    //   // img: banner4,
    // },
    {
      id:2,
      img: banner5,
    },
    {
      id: 3,
      img: banner6,
    },
  ];

  return (
    <Layout>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps={{
          style: {
            background: "#fff",
            color: "#494949",
            borderRadius: 0,
            marginTop: 0,
            height: "104px",
            "@media (max-width: 768px)": {
              marginTop: -30,
              height: "50px",
            },
            "@media (max-width: 480px)": {
              marginTop: -8,
              height: "28px",
            },
          },
        }}
      >
        {images.map((image, i) => (
          
          <img
            src={image.img}
            alt={`img-${i}`}
            key={i}
            className="banner_img h-[40vh] md:h-[70vh]   "
          />

        ))}
      </Carousel>

      {/* ==================================part 2 -=============================== */}

      <div className="container h-auto    w-full mb-[4rem]">
        <div className="">
          <div className="w-[85vw]  top-[-50px] z-[1000] relative  mx-auto">
            <section className="w-full rounded-[20px]   bg-[#2e3092]">
              <div className="banner-bottom-section">
                <div className="page-width1">
                  <div className=" flex flex-wrap justify-between">
                    {/* first column */}

                    <div className="  w-[50%]  md:w-[50%]   flex flex-col  md:flex-row">
                      <div className="w-full md:w-1/2 px-4 py-5 ">
                        <Link to="#" className="block">
                          <div className="banner_bottom-item">
                            <div className="banner-icon flex mx-auto items-center justify-center bg-white rounded-full w-16 h-16">
                              <img
                                src="https://chughtailab.com/wp-content/themes/chughtai-lab/template/images/banner_bottom_img1.webp"
                                alt="Find Nearest Center"
                              />
                            </div>
                            <div className="  text-md lg:text-lg font-bold hover:text-[#454bff] text-white text-center mt-2">
                              Find Nearest Center
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* second column */}
                  




                      <div className="banner_bottom_col py-5 w-full md:w-1/2 px-4  border-t    md:border-t-0 md:border-l border-white">
                        <Link to="/homeSampling" className="block">
                          <div className="banner_bottom-item">
                            <div className="banner-icon mx-auto flex items-center justify-center bg-white rounded-full w-16 h-16">
                              <img
                                src="https://chughtailab.com/wp-content/themes/chughtai-lab/template/images/banner_bottom_img2.webp"
                                alt="Book Home Sampling"
                              />
                            </div>
                            <div className="   text-md lg:text-lg font-bold hover:text-[#454bff] text-white text-center mt-2">
                              Panel Registration
                            </div>
                          </div>
                        </Link>
                      </div>


                      <div className="banner_bottom_col py-5 w-full md:w-1/2 px-4  border-t    md:border-t-0 md:border-l border-white">
                        <Link to="/homeSampling" className="block">
                          <div className="banner_bottom-item">
                            <div className="banner-icon mx-auto flex items-center justify-center bg-white rounded-full w-16 h-16">
                              <img
                                src="https://chughtailab.com/wp-content/themes/chughtai-lab/template/images/banner_bottom_img2.webp"
                                alt="Book Home Sampling"
                              />
                            </div>
                            <div className="    text-md lg:text-lg font-bold hover:text-[#454bff] text-white text-center mt-2">
                              Book Home Sampling
                            </div>
                          </div>
                        </Link>
                      </div>








                    </div>






                    <div className="flex flex-col  md:flex-row  w-[50%]   md:w-[50%]">
                      {/* third column */}
                      <div className="banner_bottom_col py-5 w-full md:w-1/2 px-4    border-l border-white">
                        <Link to="/healthPackages" className="block">
                          <div className="banner_bottom-item">
                            <div className="banner-icon mx-auto flex items-center justify-center bg-white rounded-full w-16 h-16">
                              <img
                                src="https://chughtailab.com/wp-content/themes/chughtai-lab/template/images/banner_bottom_img3.webp"
                                alt="Get Teleconsultation"
                              />
                            </div>
                            <div className="   text-md  lg:text-lg font-bold hover:text-[#454bff] text-white text-center mt-2">
                              Health Packages
                            </div>
                          </div>
                        </Link>
                      </div>

                      {/* fourth column */}
                      <div className="py-5 border-t  border-l md:border-l md:border-t-0 w-full md:w-1/2 px-4 border-white">
                        <Link to="#" className="block">
                          <div className="banner_bottom-item">
                            <div className="banner-icon mx-auto flex items-center justify-center bg-white rounded-full w-16 h-16">
                              <img
                                src="https://chughtailab.com/wp-content/themes/chughtai-lab/template/images/banner_bottom_img4.webp"
                                alt="View Reports"
                              />
                            </div>
                            <div className="  text-md  lg:text-lg font-bold hover:text-[#454bff] text-white text-center mt-2">
                              View Reports
                            </div>
                          </div>
                        </Link>
                      </div>

                           {/* column number 5 */}

                      <div className="py-5 border-t border-l md:border-l md:border-t-0 w-full md:w-1/2 px-4 border-white">
                        <Link to="/frenchise" className="">
                          <div className="banner_bottom-item">
                            <div className="banner-icon mx-auto flex items-center justify-center bg-white rounded-full w-16 h-16">
                              <img
                                src="https://chughtailab.com/wp-content/themes/chughtai-lab/template/images/banner_bottom_img4.webp"
                                alt="View Reports"
                              />
                            </div>
                            <div className="   text-md   lg:text-lg font-bold hover:text-[#454bff] text-white text-center mt-2">
                              Frenchise Opportunities
                            </div>
                          </div>
                        </Link>
                      </div>






                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* =========================part 3 ================================= */}

      <div className="  w-[80vw]  mx-auto">
        <div className="   flex    flex-col    md:flex-row    w-[100%]">
          <div className="   w-full  md:w-[50%] ">
            <div className="title  ">
              {/* <h2 className="my-[15px]   text-center text-[2rem]">CEO Message</h2> */}
              <img
                src={Ceo}
                width="250px"
                height="250px"
                alt="/"
                className="mx-auto  shadow-lg  rounded-lg"
              />
              <br />
              <p className="text-xl font-bold   text-center    ">CEO</p>
              <p className="name-heading   text-center  font-semibold  text-lg">
                &nbsp;Dr. Ata Ul Mustafa
              </p>
            </div>
          </div>

          <div className="span-2  px-[0rem] w-full  mt-5 md:px-[4rem]  md:w-[80%] ">
            <p className="     text-md  lg:text-lg   leading-[2rem]    lg:leading-[3rem]  ">
              <span className="font-semibold">
                Welcome to Lahore Diagnostic Center!
              </span>
              <br /> At Lahore Diagnostic Center, your health is our priority.
              We're dedicated to providing top-quality diagnostic services with
              care and efficiency. Our team is committed to ensuring your
              well-being, offering personalized attention and convenient access
              to care. Thank you for choosing us as your trusted partner in
              health.
            </p>
          </div>
        </div>
      </div>

      {/* ===========================part 3 ============================ */}
      <br />
      <MultiCarousel />

      <div className="mb-[5rem]">{/* <Blog /> */}</div>

      {/* =====================part 4 ======================== */}
      {/* <Whatsapp /> */}
    </Layout>
  );
};

export default Home;
