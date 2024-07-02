import React from "react";
import Layout from "../Layout/Layout";
import virology from "../../images/virology.webp";
import virology1 from "../../images/Virology1.webp";
import Whatsapp from "../pages/Whatsapp";

const Virology = () => {
  return (
    <Layout>
      <div className="  w-full  ">
        <img
          src={virology}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />
      </div>

      {/* =================part 2 ============================== */}

      <div className=" w-full bg-gray-100  py-[5rem]  ">
        <div className="w-[85vw]  mx-auto ">
          <div className="grid  grid-cols-1  md:grid-cols-2 ">
            <div className=" pr-[3rem]">
              <h1 className="text-3xl py-3 text-[#2e3092]  font-bold ">
                DEPARTMENT OF VIROLOGY
              </h1>

              <p className="text-[16px] mt-5 ">
                The Virology department at Chughtai Lab is a full-service
                virology laboratory that performs highly sensitive tests
                including Hepatitis B and C, Human Immunodeficiency virus,
                Cytomegalovirus, Epstein Barr Virus, Dengue Virus, SARS-CoV-2,
                Herpes Simplex Virus, and many more. This includes serology and
                polymerase chain reaction (PCR) testing.
              </p>
              <br />

              <p className="mt-[10px] text-3xl">Automated PCR Testing</p>

              <p className="py-4">
                Chughtai Lab is one of the few labs in the country where PCR
                testing is performed on fully automated systems. We have
                state-of-the-art equipment like Cobas 6800, Hologic Panther,
                QIASymphony/ Rotor Gene Q, GeneXpert system for PCR testing
                operated by highly trained and professional staff to surpass
                patient expectations and consultant satisfaction.
              </p>

              <p className="mt-[10px] text-3xl">Serology Testing</p>

              <p className="py-5">
                Our advanced laboratory facilities and stringent quality control
                measures ensure accurate and reliable test results. Our skilled
                team of medical professionals are dedicated to providing precise
                and comprehensive serological testing services. We understand
                the importance of timely results. Our efficient processes enable
                quick turnaround times without compromising accuracy. We employ
                state-of-the-art equipment like Alinity i, LIAISON XL, Orgentec
                Alegria and methodologies to ensure the highest standards of
                testing and analysis. We prioritize the confidentiality of your
                personal information and adhere to strict privacy protocols to
                safeguard your data.
              </p>
            </div>

            <div className="  w-[90%] text-right   justify-end  h-auto ">
              <img src={virology1} />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Whatsapp />
      </div>
    </Layout>
  );
};

export default Virology;
