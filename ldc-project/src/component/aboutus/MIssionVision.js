import React from "react";
import Layout from "../Layout/Layout";

const MIssionVision = () => {
  return (
    <Layout>
      <div className="   w-full      lg:w-[85vw]    mx-auto      ">
        <h1 className="text-[2.5rem]  text-center   font-[700]  py-[2rem]">
          {" "}
        OUR    MISSION 
        </h1>








        <div className="  flex flex-col     lg:flex-row     my-[3rem]">
          <div className="    w-full   px-[2rem] lg:px-[1rem] lg:w-[50%]  ">
               <div className="w-[33rem]   h-[15rem]">

                <img className="w-full h-full"  src="https://t3.ftcdn.net/jpg/08/50/22/40/240_F_850224089_kxyAyNjkPGCJbCUNkMK1tVy1sNqw3ynS.jpg"  alt=""/>
               </div>
          </div>

          <div className="w-full    px-[2rem] lg:px-[1rem]  lg:w-[50%]">
             <h3   className='text-xl  pb-[1.5rem]    font-bold '>

            Mission Statement: 
             </h3>
            
            <p  className="text-lg  " >

            At Lahore Diagnostic Center, our mission is to
            provide cutting-edge diagnostic services, characterized by accuracy,
            efficiency, and compassion. We are committed to utilizing the latest
            technology and expertise to deliver timely and reliable results,
            ensuring the well-being and satisfaction of our patients and
            healthcare partners. Through continuous innovation and dedication,
            we aim to become the trusted cornerstone of healthcare in our
            community, promoting wellness and transforming lives.
            </p>
          </div>
        </div>




        <h1 className="text-[2.5rem]  text-center   font-[700]  py-[2rem]">
          {" "}
              OUR VISION
        </h1>


        <div className="  flex flex-col     lg:flex-row     my-[3rem]">
          <div className="    w-full   px-[2rem] lg:px-[1rem] lg:w-[50%]  ">
          <img src='https://t3.ftcdn.net/jpg/04/25/81/86/240_F_425818634_H7keMbKKdlmVJo8WIk5cvsjOTOkfJa2Q.jpg'  alt=""/>

          </div>

          <div className="w-full    px-[2rem] lg:px-[1rem]  lg:w-[50%]">
          <h3   className='text-xl   pb-[1.5rem]   font-bold '>Vision Statement:</h3>
            <p  className='text-lg '>
              To pioneer innovative diagnostic solutions, setting benchmarks of
              excellence in healthcare, and empowering individuals with precise
              diagnoses for healthier lives.
            </p>  
          </div>
        </div>







      </div>
    </Layout>
  );
};

export default MIssionVision;
