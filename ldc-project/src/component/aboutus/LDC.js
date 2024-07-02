import React from "react";
import Layout from "../Layout/Layout";

const LDC = () => {
  return (
    <Layout>
      <div className="  w-full px-[2rem]   lg:px-0  lg:w-[85vw]    mx-auto   my-[5rem]">
        <h1 className="text-[2rem]   font-[700]  py-[2rem]">
          {" "}
          Lahore Diagnostic Center (LDC)
        </h1>
        <p className="text-lg     w-[70vw]  ">
          Lahore Diagnostic Center (LDC) was founded with the vision to provide
          state of the art diagnostic services, LDC has been a cornerstone of
          excellence in healthcare since its foundation. Our mission is to offer
          accurate, reliable, cost effective and timely diagnostic services to
          make sure the effectiveness of treatment and improve patient outcomes.
          At LDC, we are committed to maintaining the highest standards of
          quality, integrity, and compassion in every aspect of our service.
        </p>
        <h2 className="font-bold  text-2xl   py-[2rem]">Team Profiles</h2>
        <h4 className="text-lg ">
          At LDC, our team is highly qualified and well experienced medical
          professionals dedicated to providing the best diagnostic care. Our
          doctors, specialists, and support staff are expert in their respective
          fields, continually updating their skills and knowledge to stay at the
          forefront of medical advancements.
        </h4>
        <ul className="list-disc   py-[1rem]   text-lg  px-[1rem]">
          <li>
            {" "}
            <b>Dr. Aafrinish Amanat - Histopathologist:</b>
            &nbsp; With over 10 years of experience in Histopathology{" "}
          </li>

          <li>
            <b>Dr. Usman Nasir - Hematologist:</b>
            &nbsp; Brings a wealth of knowledge in Haematology over 13 years,
            ensuring accurate and through analysis of all test samples.
          </li>
          <li>
            <b>Dr. Ata Ul Mustafa - Microbiology Scientist:</b>
            &nbsp; With over 07 years of experience in Medical Laboratory
            Sciences{" "}
          </li>
          <li>
            <b>Miss Anam Hammad - Immuno-Molecular Technologist</b>
          </li>

          <li>
            <b>Mis Aqsa Hayyat - Biochemist:</b>
            &nbsp; is dedicated to providing biochemical analysis of the sample.
          </li>
        </ul>
        <h2 className="font-bold  text-2xl   py-[2rem]">Accreditations</h2>
        <p className="text-lg">
          LDC is proud to be accredited by national and international bodies,
          reflecting our commitment to quality and excellence.
        </p>
        <h4 className="text-xl  pt-[1rem]   font-semibold">
          Our certifications include:
        </h4>
        <ul className="list-disc text-lg  pt-[1rem]  ">
          <li>Punjab Healthcare Commission</li>
          <li>ISO 9001:2015: Certified for quality management systems</li>
          <li>NHS-NEQAS External Quality Control </li>
          <li>AT WASTE Management </li>
          <li>PHA, Punjab</li>
        </ul>
        {/* ===================faculity================ */}
        <h3 className="text-xl   mt-[1rem] py-[2rem] font-bold">Facilities</h3>
        <p className="w-[60vw]">
          LDC boasts state-of-the-art facilities designed to provide a
          comfortable and efficient environment for our patients. Our diagnostic
          center is fitted with cutting-edge equipment for precise and swift
          test results to ensure accurate diagnostics and a pleasant experience.
          Key features include:
        </p>
        <ul className="list-disc text-lg  pt-[1rem]  ">
          <li>Advanced Molecular Virology</li>
          <li>Microbiology</li>
          <li>Special Biochemistry </li>
          <li>Biochemical Analysis </li>
          <li>Biochemical Analysis </li>
          <li>Hormone Estimation</li>
          <li>Immuno-Assay</li>
          <li>Clinical Pathology</li>
          <li>Histopathology</li>
          <li>Hematology and Coagulation Profile</li>
        </ul>
        <h3 className="text-xl  pt-[1rem] mt-[2rem]  font-semibold">
          Patient-Friendly Environment:
        </h3>
        Spacious waiting areas, comfortable examination rooms, and a welcoming
        ambiance ensure a stress-free visit for our patients.
        <h3 className="text-xl  pt-[1rem]   font-semibold">Accessibility:</h3>
     <p>
        
         Convenient location with ample parking and
        wheelchair-accessible facilities.
        </p>  
      </div>
    </Layout>
  );
};

export default LDC;
