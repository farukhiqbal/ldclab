import React from "react";
import pathology from "../../images/histopathology.webp";
import Layout from "../Layout/Layout";
import Whatsapp from "../pages/Whatsapp";

const Histopathology = () => {
  return (
    <Layout>
      <div className="   w-full  ">
        <img
          src={pathology}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />
      </div>

      {/* =================part 2 ============================== */}

      <div className=" w-full bg-gray-100  py-[5rem]  ">
        <div className="w-[85vw]  mx-auto ">
          <div className="grid    grid-cols-1   lg:grid-cols-2 ">
            <div className=" pr-[3rem]">
              <h1 className="text-3xl  text-[#2e3092]  font-bold ">
                EXCELLENCE IN HISTOPATHOLOGY
              </h1>

              <p className="text-[16px]   mb-5 mt-5 ">
                LDC Lab  has a long history of excellence in Histopathology.
                The department is staffed by 17 consultants, 3 fellows, and 13
                resident pathologists. It is one of the busiest histopathology
                departments in the country, dealing with more than 75,600
                biopsies per year. Chughtai Lab receives biopsy specimens from
                all over Pakistan. Specimens are transported to Lahore in sealed
                containers with 10% buffered formalin. Accurate reporting in
                time is the cornerstone of the department philosophy, with 95%
                of the biopsies reported within 5 days of registration. Unusual
                and challenging cases are signed out after discussion on a
                multi-head microscope. Unexpected or urgent reports are
                communicated to the referring physician directly by the
                pathologists. The education of next-generation pathologists is
                also a very integral component of the department. 18
                pathologists have cleared their specialist board examinations
                after completing their specialty training in the Histopathology
                department. The histopathology department also shares important
                teaching material online (patient identities are kept
                confidential) and runs a Twitter page with the name of
                ‘ChughtaiPathRes’.
              </p>
            </div>

            <div className="  w-[90%] text-right   justify-end  h-auto ">
              <img src="https://chughtailab.com/wp-content/uploads/2021/01/Histopathology.jpg" />
            </div>
          </div>
        </div>
      </div>


      <br/>
      <br/>
      <br/>




<Whatsapp/>

















    </Layout>
  );
};

export default Histopathology;
