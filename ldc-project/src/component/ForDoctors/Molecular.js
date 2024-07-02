import React from "react";
import Layout from "../Layout/Layout";
import molecular from "../../images/molecular.webp";
import molecular1 from "../../images/molecular1.webp";
import Whatsapp from "../pages/Whatsapp";

const Molecular = () => {
  return (
    <Layout>
      <div className="  w-full  ">
        <img
          src={molecular}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />
      </div>

      {/* =================part 2 ============================== */}

      <div className=" w-full bg-gray-100  py-[5rem]  ">
        <div className="w-[85vw]  mx-auto ">
          <div className="grid   grid-cols-1  md:grid-cols-2 ">
            <div className=" pr-[3rem]">
              <h1 className="text-3xl  text-[#2e3092]  font-bold ">
                MOLECULAR GENETICS / CYTOGENETICS DEPARTMENT
              </h1>

              <p className="text-[16px] mt-5 ">
                The department of Molecular Genetics has been established at
                Chughtai Lab for the prenatal screening and molecular diagnosis
                of genetic disorders in children and adults. This facility may
                also be used for screening healthy individuals as well as for
                training and research. The molecular genetics department will
                focus on the implementation of the latest molecular technologies
                for the following applications:
              </p>
              {/* <br /> */}

              <ul className="list-disc  mt-2 px-2">
                <li>Testing for Chromosomal Aberrations</li>
                <li>
                  Detection of pathogenic mutations in single-gene disorders
                </li>
                <li>
                  Prenatal screening and detection of disease-related mutations
                  in targeted gene panels and across the entire genome using
                  Next Generation Sequencing (NGS) technology
                </li>
              </ul>

              <p className="text-4xl   my-5 ">Technologies Used</p>
              <ul className="list-disc mb-5 mt-2 px-2">
                <li>Next Generation Sequencing (NGS)</li>
                <li>Sangers DNA Sequencing</li>
                <li>Real Time PCR (RT-PCR)</li>
                <li>End Point Polymerase Chain Reaction (PCR)</li>
                <li>Karyotyping and Cytogenetic Analysis</li>
                <li>Fluorescent In-situ Hybridization (FISH)</li>
                <li>
                  Reverse Sequence Specific Oligonucleotide Polymerase Chain
                  Reaction (RSSO PCR)
                </li>
              </ul>
            </div>

            <div className="  w-[90%] text-right   justify-end  h-auto ">
              <img src={molecular1} />
            </div>
          </div>
        </div>
      </div>









      <Whatsapp/>
    </Layout>
  );
};

export default Molecular;
