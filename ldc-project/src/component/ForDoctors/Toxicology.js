import React from "react";
import Layout from "../Layout/Layout";
import toxicology from "../../images/toxilogoy.webp";
import Whatsapp from "../pages/Whatsapp";

const Toxicology = () => {
  return (
    <Layout>
      <div className="   w-full  ">
        <img
          src={toxicology}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />
      </div>

      {/* =================part 2 ============================== */}

      <div className=" w-full bg-gray-100  py-[5rem]  ">
        <div className="w-[85vw]  mx-auto ">
          <div className="grid    grid-cols-2 ">
            <div className=" pr-[3rem]">
              <h1 className="text-3xl  text-[#2e3092]  font-bold ">
                CLINICAL AND FORENSIC TOXICOLOGY DEPARTMENT
              </h1>

              <p className="text-[16px] mt-5 ">
                The Clinical and Forensic Toxicology Department has been
                established under the umbrella of Chughtai Healthcare to provide
                credible and reliable services to the nation of Pakistan. This
                laboratory’s work is based on international toxicology
                guidelines and standard operating procedures and has secured
                accreditation from two international accreditation bodies:
                <b className="text-[#0000007e]  text-lg">
                  The College of American Pathologists (CAP) and ISO-15189.
                </b>
                This is the only CAP-Accredited Toxicology laboratory in
                Pakistan.
              </p>
              <br />

              <b className="mt-[10px] text-lg">
                The international standards we have adopted include:
              </b>
              <ul className="list-disc  mt-2 px-2">
                <li>
                  Witnessed specimen collection procedure (to ensure donor
                  specimen identity)
                </li>
                <li>
                  Consent declaration and chain of custody documentation (to
                  ensure specimen integrity)
                </li>
                <li>State-of-the-art testing facility equipped with the latest technology like UHPLC-MS/MS, Tox-Analyzer GC-MS, Headspace GC-FID, Atomic Absorption Spectroscopy, etc.</li>
                <li>Specimen validity test (to discourage drug test beating by the donor and rule out specimen substitution and/or adulteration)</li>
                <li>Rapid urine drug screening based on the Substance Abuse and Mental Health Services Administration (SAMHSA) cut-off values</li>
                <li>Confirmatory tests for positive-screened samples</li>
                <li>Technical & Administrative review and reporting</li>
                <li>Interpretation of results & court testimony, on request</li>
              </ul>
            </div>

            <div className="  w-[90%] text-right   justify-end  h-auto ">
              <img src="https://chughtailab.com/wp-content/uploads/2021/07/Toxicology-1024x683.jpg" />
            </div>
          </div>
        </div>
      </div>




{/* =========================part 3 ================================== */}

   <div className="mt-[5rem]">




   </div>




<Whatsapp/>














    </Layout>
  );
};

export default Toxicology;
