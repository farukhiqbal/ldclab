import React from "react";
import Layout from "../Layout/Layout";
import chemical from "../../images/chemical.webp";
import chemical1 from "../../images/Chemical1.webp";

const Chemicalpathology = () => {
  return (
    <Layout>
      <div className="   w-full  ">
        <img
          src={chemical}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />
      </div>

      {/* =================part 2 ============================== */}

      <div className=" w-full bg-gray-100  py-[5rem]  ">
        <div className="w-[85vw]  mx-auto ">
          <div className="grid    grid-cols-1  lg:grid-cols-2 ">
            <div className=" pr-[3rem]">
              <h1 className="text-3xl  text-[#2e3092]  font-bold ">
                CLINICAL CHEMISTRY & IMMUNOLOGY
              </h1>

              <h3 className="mt-5  text-lg  font-bold ">
                The Clinical Chemistry and Immunology Department is the backbone
                of any modern diagnostic lab.
              </h3>

              <p className="text-[16px] mt-5 ">
                LDC Lab uses top-tier automated analyzers from manufacturers of
                international repute. The Central Lab in Lahore is equipped with
                Total Lab Automation (Accelerator A3600, Impeco), which includes
                pre-analytical, analytical, and post-analytical modules.
                Moreover, three Abbott Alinity Ci systems are attached to TLA,
                which serves as a backup for each other.
              </p>
              <br />

              <b className="mt-[10px] text-md">
                Apart from Total Lab Automation, a diverse variety of analyzers
                are available to cover different diagnostic tests. The details
                are as follows:
              </b>
              <ul className="list-decimal mb-5  mt-2 px-2">
                <li>Chemistry Immunoassay Analyzer (Cobas 6000 – Roche)</li>
                <li>Immunoassay Analyzer (Liaison XL)</li>
                <li>Immunoassay Analyzer (Liaison Diaisorin)</li>
                <li>Immunoassay Analyzer (ids isys)</li>
                <li>Immunofluorescence Autoimmune Analyzers (Helios – Aesku)</li>
                <li>Autoimmune Analyzers (Blue Dot Diver – D-tek)</li>
                <li>LabScan3D (for HLA Screening & DSA)</li>
                <li>Automated Electrophoresis System (Interlab26)</li>
                <li>ABGs Analyzer (OPTI-CCA-TS2)</li>
                <li>Osmometer (Osmo1-Advanced Instruments)</li>
                <li>Automated ELISA (Alegria – Orgentec)</li>
                <li>Immunoassay Analyzer (Maglumi 800 – Snibe)</li>
                <li>Stone Analyzer – (PerkinElmer & Thermofisher)</li>
              </ul>
            </div>

            <div className="  w-[90%] text-right   justify-end  h-auto ">
              <img src={chemical1} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chemicalpathology;
