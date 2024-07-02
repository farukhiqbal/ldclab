import React from "react";
import Layout from "../Layout/Layout";
import microbiology from "../../images/microbiology.webp";
import microbiology1 from "../../images/Microbiology1.jpg";
import Whatsapp from "../pages/Whatsapp";
import microimg1 from '../../images/micoimg1.jpg'
import microcarosel from '../../images/micoimg2.png'


const Microbiology = () => (
  <Layout>
    <div className="   w-full  ">
      <img
        src={microbiology}
        alt=""
        className="w-full    h-[30vh]   lg:h-full  md:w-full" />
    </div>

    {/* =================part 2 ============================== */}

    <div className=" w-full bg-gray-100  py-[5rem]  ">
      <div className="w-[85vw]  mx-auto ">


        <h1 className="   text-2xl   lg:text-4xl  text-[#2e3092]  font-bold ">
          {/* MICROBIOLOGY DEPARTMENT */}
          Microbiology Services
        </h1>

        <br />

        <p className="mt-[10px] text-lg   mb-[2rem] w-full px-0     lg:px-0  md:w-[80vw]   lg:w-[70vw]  ">

          Lahore Diagnostic Center (LDC) offers comprehensive microbiology services to diagnose and manage infectious diseases. Our state-of-the-art microbiology lab is equipped with advanced technology to ensure accurate identification and analysis of microorganisms, guiding effective treatment plans.

        </p>



        <div className="grid  grid-cols-1  md:grid-cols-2 ">
          <div className=" pr-[3rem]">
            <h3 className="font-bold my-[1rem] text-[1.5rem] ">Bacterial Cultures               </h3>

            <ul className="list-disc mb-5 mt-2 px-2">
              <li>
                <b>

                  Blood Culture:
                </b> <br />

                Detects bacterial infections in the bloodstream, helping diagnose conditions such as septicemia.
              </li>
              <li>
                <b>

                  Urine Culture:
                </b> <br />
                Identifies bacteria causing urinary tract infections and determines antibiotic sensitivity.

              </li>
              <li>
                <b>

                  Throat Swab Culture:
                </b> <br />

                Diagnoses bacterial infections like strep throat by identifying pathogens in throat swabs.

              </li>
              <li>
                <b>

                  Sputum Culture:
                </b> <br />

                Analyzes sputum samples to detect respiratory infections, including pneumonia and tuberculosis.

              </li>
              <li>
                <b>

                  Sputum Culture:
                </b> <br />
                Analyzes sputum samples to detect respiratory infections, including pneumonia and tuberculosis.

              </li>
              <li>
                <b>

                  Wound Culture:
                </b> <br />
                Identifies bacterial infections in wounds, guiding appropriate antibiotic treatment.


              </li>
              <li>
                <b>

                  Wound Culture:
                </b> <br />
                Identifies bacterial infections in wounds, guiding appropriate antibiotic treatment.

              </li>
              <li>
                <b>

                  Stool Culture:
                </b> <br />
                Detects pathogenic bacteria in the gastrointestinal tract causing conditions like food poisoning and gastroenteritis.

              </li>
            </ul>
          </div>

          <div className="  w-[100%]     ">
            
          <div className="             w-[90%] h-[20rem]    xl:w-[70%]     xl:h-[30rem]  xl:ml-auto my-[5rem] ">
               
            
            <img src={microimg1} className="h-full w-full  shadow-lg " />
</div>

          </div>
        </div>

{/* =============================================row 2 ========================== */}

        <div className="grid  grid-cols-1  md:grid-cols-2    mb-[0rem]  xl:mb-[3rem]">
          <div className=" pr-[3rem]">

            <h3 className="font-bold my-[1rem] text-[1.5rem] ">Fungal Cultures    </h3>


            <ul>
              <li>
                <b>

                  Skin and Nail Cultures:
                </b> <br />
                Identifies fungal infections of the skin and nails, such as dermatophytosis.

              </li>

              <li>
                <b>

                  Respiratory Cultures:
                </b> <br />
                Detects fungal pathogens in respiratory samples, aiding in the diagnosis of conditions like aspergillosis.

              </li>
              <li>
                <b>

                  Blood Cultures:
                </b> <br />
                Identifies fungal infections in the bloodstream, crucial for diagnosing systemic fungal infections.

              </li>

            </ul>


          </div>

          <div className="  w-full  h-[30rem] ">

          <div className="   mt-[2rem]  w-[90%] h-[23rem]  xl:w-[70%]     xl:h-[30rem]  xl:ml-auto  ">

            <img src={microcarosel} className="h-full w-full  shadow-lg" />
            </div>
          </div>


        </div>





        <div className="grid  grid-cols-1  md:grid-cols-2 ">
          <div className=" pr-[3rem]">

            <h3 className="font-bold mb-[1rem] text-[1.5rem] ">Parasitology</h3>

            <ul>
              <li>
                <b>
                  Stool Examination:
                </b> <br />
                Detects parasites in stool samples, helping diagnose conditions like giardiasis and amoebiasis.

              </li>
              <li>
                <b>

                  Blood Smears:
                </b> <br />
                Identifies blood-borne parasites, such as those causing malaria.
              </li>
              <li></li>
              <li></li>
            </ul>


            <h3 className="font-bold my-[1rem] text-[1.5rem] ">Mycobacteriology</h3>
            <p>
              <b>
                TB Testing (AFB Smear and Culture):
              </b> <br />
              Detects Mycobacterium tuberculosis in respiratory samples, essential for diagnosing tuberculosis.
            </p>




            <h3 className="font-bold my-[1rem] text-[1.5rem] ">
              Antimicrobial Sensitivity Testing
            </h3>

            <p>
              <b>

                Antibiotic Sensitivity Testing:
              </b> <br />
              Determines the most effective antibiotics for treating bacterial infections by testing the susceptibility of bacteria to various antibiotics.
            </p>



            <h3 className="font-bold my-[1rem] text-[1.5rem] ">Infection Control and Prevention
            </h3>

            <ul>
              <li>
                <b>

                  Environmental Monitoring:
                </b> <br />
                Tests for microbial contamination in healthcare settings to prevent hospital-acquired infections.


              </li>
              <li>
                <b>

                  Sterility Testing:
                </b> <br />
                Ensures medical instruments and environments are free from microbial contamination.

              </li>
              <li></li>
            </ul>



          </div>

          <div className=" w-[100%]   mt-[2rem] xl:mt-[5rem]    ">
            <div className="  w-[90%]  xl:w-[70%]     xl:h-[30rem]  xl:ml-auto  ">

            <img src={microbiology1} className="w-full h-full shadow-lg " />
            </div>
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

export default Microbiology;
