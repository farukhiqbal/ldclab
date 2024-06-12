import React from "react";
import Layout from "../Layout/Layout";
import banner from "../../images/department.webp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Whatsapp from "./Whatsapp";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
const Departments = ({ deviceType }) => {
  const Healthimage = [
    {
      title: "Microbiology",
      imagesrc:
        "https://chughtailab.com/wp-content/uploads/2021/01/Microbiology-1-300x187.jpg",
      link: "https://chughtailab.com/departments/microbiology/",
    },
    {
      title: "Virology",
      imagesrc:
        "https://chughtailab.com/wp-content/uploads/2021/01/Virology-1-300x187.jpg",
      link: "https://chughtailab.com/departments/virology/",
    },

    {
      title: "Histopathology",
      imagesrc:
        "https://chughtailab.com/wp-content/uploads/2021/01/Histopathology-1-300x187.jpg",
      link: "https://chughtailab.com/departments/virology/",
    },

    {
      title: "Hematopathology",
      imagesrc:
        "https://chughtailab.com/wp-content/uploads/2021/01/Hematology-1-300x187.jpg",
      link: "https://chughtailab.com/departments/virology/",
    },

    {
      title: "Toxicology",
      imagesrc:
        "https://chughtailab.com/wp-content/uploads/2023/03/toxicology_th.jpg",
      link: "https://chughtailab.com/departments/virology/",
    },

    {
      title: "Virology",
      imagesrc:
        "https://chughtailab.com/wp-content/uploads/2021/01/Virology-1-300x187.jpg",
      link: "https://chughtailab.com/departments/virology/",
    },
    {
      title: "MOLECULAR GENETICS",
      imagesrc:
        "https://chughtailab.com/wp-content/uploads/2023/10/molecular_genetics.jpg",
      link: "https://chughtailab.com/departments/virology/",
    },
  ];

  return (
    <Layout>
      <div className="w-full  ">
        <img
          src={banner}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />
      </div>

      {/* ====================part 2 ================================== */}

      <div className="w-full py-2 md:py-[3rem]">
        <div className="w-full mx-auto md:w-[95vw] lg:w-[94vw]  md:mx-auto">
          <h2 className="text-center font-bold text-5xl mb-[2rem]">
            DEPARTMENTS
          </h2>

          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            removeArrowOnDeviceType={[""]} // Remove arrow buttons on all device types
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            renderButtonGroupOutside={true} // Render button group outside of carousel
            customLeftArrow={
              <div className="absolute top-1/2 transform -translate-y-1/2 left-[-7px]">
                <button className="bg-gray-300 text-black  p-3   hover:bg-[#2e3092] hover:text-white rounded-md ml-2">
                  <FaChevronLeft />
                </button>
              </div>
            } // Custom left arrow
            customRightArrow={
              <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
                <button className="bg-gray-300 text-black  p-3   hover:bg-[#2e3092] hover:text-white rounded-md ml-2">
                  <FaChevronRight />
                </button>
              </div>
            } // Custom right arrow
          >
            {Healthimage.map((image) => (
              <div
                key={image.id}
                className="border-black     mx-auto w-[300px]   lg:w-[300px]    h-[40vh]"
              >
                <div className="w-full md:w-[300px] md:px-2  relative h-[200px]">
                  <img
                    src={image.imagesrc}
                    className=" w-full h-full rounded-md"
                    alt=""
                  />
                </div>

                <div className="border-2      lg:mx-2   border-white hover:bg-[#2e3092] bg-[#06087c] mt-1  py-2 rounded-md">
                  <p className="text-center  text-lg py-2 text-white font-semibold">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>








<div className="mt-[3rem]"></div>



  <Whatsapp/>






    </Layout>
  );
};

export default Departments;
