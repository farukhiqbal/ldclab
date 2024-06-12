import React from "react";
import Layout from "../Layout/Layout";
import microbiology from "../../images/microbiology.webp";
import microbiology1 from "../../images/Microbiology1.webp";
import Whatsapp from "../pages/Whatsapp";

const Microbiology = () => {
  return (
    <Layout>
      <div className="   w-full  ">
        <img
          src={microbiology}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />
      </div>

      {/* =================part 2 ============================== */}

      <div className=" w-full bg-gray-100  py-[5rem]  ">
        <div className="w-[85vw]  mx-auto ">
          <div className="grid  grid-cols-1  md:grid-cols-2 ">
            <div className=" pr-[3rem]">
              <h1 className="   text-2xl  md:text-3xl  text-[#2e3092]  font-bold ">
                MICROBIOLOGY DEPARTMENT
              </h1>

              <br />

              <p className="mt-[10px] text-lg">
                At the Department of Microbiology different types of clinical
                specimens are analyzed, microbes are diagnosed, and different
                types of antibiotics are tested against them.
              </p>
              <ul className="list-disc mb-5 mt-2 px-2">
                <li>
                  The latest technology (BacT ALERT Virtuo) is being used to
                  detect the presence of bacteria and/or fungi in the blood.
                </li>
                <li>
                  For identification of microbes isolated from clinical
                  specimens, state-of-the-art Instrument VITEK MS (MALDI-TOF) is
                  being used. In a very short time, the system uses its
                  automated platform and extensive database to identify these
                  microbes based on mass spectrometry analysis.
                </li>
                <li>
                  BACTRON 300 anaerobic chamber is being used for detection of
                  anaerobic bacteria in clinical samples.
                </li>
                <li>
                  To address Antibiotic Resistance challenges, Minimum
                  Inhibitory Concentration (MIC) of antibiotics is being tested
                  and reported depending on the type of microbes.
                </li>
                <li>
                  Urine analysis is being performed on a fully automated
                  instrument DIRUI FUS2000 / AVE-772 which is capable of
                  reporting 120 tests in an hour. It provides precise and
                  accurate results with the help of technologies such as
                  reflectance photometry, flat flow cytometry, digital imaging
                  technology and artificial intelligence identification
                  technique.
                </li>
                <li>
                  Microbiology department test and report more than 100,000
                  culture sensitivity tests per annum.
                </li>
              </ul>
            </div>

            <div className="  w-[90%] text-right   justify-end  h-auto ">
              <img src={microbiology1} />
            </div>
          </div>
        </div>
      </div>

      {/* =========================part 3 ================================== */}

      <div className="mt-[5rem]">
        <Whatsapp />
      </div>
    </Layout>
  );
};

export default Microbiology;
