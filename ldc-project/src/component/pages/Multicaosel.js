import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import microbiology from '../../images/microcarosel.jpeg'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import virology from '../../images/biology.jpeg';
import biochemistry   from '../../images/biochemistry.jpeg'

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

const MultiCarousel = ({ deviceType }) => {
  
    const Healthimage = [
      

        {
          title: 'Microbiology',
          imagesrc: microbiology,
          link: '#',
          
        },
        {
          title: 'Virology',
          imagesrc:  virology ,
          link: '#',
        },
      
        // {
        //     title: 'Histopathology',
        //     imagesrc: 'https://chughtailab.com/wp-content/uploads/2021/01/Histopathology-1-300x187.jpg',
        //     link: 'https://chughtailab.com/departments/virology/',
        //   },
         
          {
            title: 'Hematopathology',
            imagesrc: 'https://chughtailab.com/wp-content/uploads/2021/01/Hematology-1-300x187.jpg',
            link: '#',
          },
       
          
          {
            title: 'Chemical pathology',
            imagesrc: biochemistry,
            link: '#',
          },
         
          {
            title: 'Molecular Pathology',
            imagesrc: 'https://chughtailab.com/wp-content/uploads/2021/01/Virology-1-300x187.jpg',
            link: '#',
          },
         
    
    
    
      ];
    
    
  return (
    <div className="w-full py-2 md:py-[3rem]">
      <div className="w-full mx-auto md:w-[85vw] lg:w-[85vw] xl:w-[85vw] 2xl:w-[85vw] md:mx-auto">
        <h2 className="text-center font-bold    text-3xl  lg:text-5xl mb-[2rem]">
          LDC Healthcare Services
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
            <div className="absolute  transform -translate-y-1/2 left-[-7px]">
              <button className="bg-gray-300 text-black  p-3   hover:bg-[#2e3092] hover:text-white rounded-md ml-2">
                <FaChevronLeft />
              </button>
            </div>
          } // Custom left arrow
          customRightArrow={
            <div className="absolute  transform -translate-y-1/2 right-0">
              <button className="bg-gray-300 text-black  p-3   hover:bg-[#2e3092] hover:text-white rounded-md ml-2">
                <FaChevronRight />
              </button>
            </div>
          } // Custom right arrow
        >
          {Healthimage.map((image) => (
            <div
              key={image.id}
              className="border-black relative w-[300px] mx-auto md:w-[250px] h-[50vh]"
            >
              <div className="w-full md:w-[245px] h-[200px]">
                <img
                  src={image.imagesrc}
                  className="mx-auto w-full h-full rounded-md"
                  alt=""
                />
              </div>

              <div className="border-2 border-white hover:bg-[#2e3092] bg-[#06087c] mt-1  py-2 rounded-md">
                <p className="text-center text-lg py-2 text-white font-semibold">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MultiCarousel;
