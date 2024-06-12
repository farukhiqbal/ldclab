import React,{useState} from "react";
import Layout from "../Layout/Layout";
import banner from "../../images/department.webp";
import { HiCurrencyPound } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPoundSign, FaChartLine } from 'react-icons/fa';
import investment from '../../images/cost-of-kumon-franchise.png'
import earnings from '../../images/profit+transparent.png'
import kumon from '../../images/kumon-instructors.jpg'
import QRCode from 'qrcode.react';
import FrenchiseForm from "../Frenchisefrom/FrenchiseForm";
import { Link } from "react-router-dom";
import JobsForm from "../JobsForm/JobsForm";


const Frenchise = () => {





  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };



  return (
    <Layout>


<Link
  to='/frenchisefrom'
  className="fixed top-[6.4rem] left-1/2 transform -translate-x-1/2 px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded shadow-xl transition duration-200 ease-in-out hover:scale-105 z-50"
>
  Register Now <i className="fa fa-chevron-right" />
</Link>














      <div className="   w-full  ">
        <img
          src={banner}
          alt=""
          className="w-full    h-[30vh]   lg:h-full  md:w-full"
        />

        <div className="  absolute   text-white  top-[40%]  left-[35%]  ">
          <h1 className="font-bold   text-4xl">Open a Diagnostic Center</h1>
        </div>
      </div>

      <div></div>

      {/* ========================part 2 ============================== */}

      <div class="w-full  mt-5 ">
        <div class="   w-[80vw]    mx-auto ">
          <h2 className="text-center  text-2xl font-bold   my-5">
            Becoming a franchisee
          </h2>

          <p className="text-lg  text-[#0000006e] font-[500]    font-Quicksand-Helvetica-Neue-Helvetica-Arial-sans-serif">
            Kumon is looking for driven professionals who are passionate about
            education, children and helping them build a brighter future.
            Together with over 11.5 million potential Kumon students across the
            UK, you can turn that passion into a reality by running your own
            Kumon study centre where one doesn't already exist or is available
            because an existing Instructor is retiring.
          </p>
        </div>{" "}
      </div>

      <div className="   my-5  w-[80vw]   mx-auto     grid  grid-cols-1   md:grid-cols-2   ">
        <div className=" p-5 text-[16px] "> 
          <ul   className="   text-[17px]   list-disc">
            <li>
              You don’t need a background in education to become a franchisee.
              Many of our Instructors have had careers in law, finance and
              business and have experienced the benefits of the Kumon programmes
              themselves through their own families
            </li>
            <br />
            <li>
              This is a full-time business opportunity where you will build and
              run your own business while also helping children fulfil their
              potential
            </li>
            <br />
            <li>
              You will become part of a network of Instructors that share best
              practice along with the satisfaction of making a difference to
              children in your local community
            </li>
            <br />
            <li>
              You’ll have an Area Manager to offer advice and support in
              launching, running and marketing your Kumon study centre
            </li>
            <br />
            <li>
              There is a minimal start-up fee and Kumon offers generous
              subsidies to centres opening in specific venues or areas
            </li>
            <br />
            <li>
              Through delivering both face to face and online classes, you’ll
              help many families benefit from learning with our method
            </li>
          </ul>
        </div>

        <div className="  p-5">
           
             <div className="border-2 border-blue-300  py-[2.5rem]   px-5  ">

             

          <table
            className=""
            // align="center"
            // border={2}
            // bordercolor="#7dcdf4"
            // cellPadding={3}
            // cellSpacing={3}
          >
            <tbody>
              <tr    className="px-[15px]"  >
                <td>
                  <h3   className=" font-[400]  text-[22px] lg:text-[30px]     "   >
                    What does it mean to be a Kumon franchisee?
                  </h3>
                  <p >
                    Becoming a Kumon franchisee provides a unique opportunity to
                    develop students through the Kumon programmes, as well as
                    building your own study centre and business.
                    <br />
                    <br />
                    When you join the Kumon network of Instructors, your local
                    Area Manager will work with you to get your study centre up
                    and running as you prepare to start your training. We want
                    to make sure you have what you need to succeed, so as well
                    as two week's initial training, we'll supply you with the
                    business model, the support of our Brand Marketing team,
                    plus we will invest in your professional development with
                    our ongoing instructional training.
                  </p>
                
                  <p className="ml-4 mr-4   mt-5 ">
  <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
    Visit our FAQs page&nbsp;
    <i className="fa fa-chevron-right" />
  </button>
</p>

                
                </td>
              </tr>
            </tbody>
          </table>

          </div>






        </div>
      </div>





      {/* ========================================== part 3 ============================================ */}




<div className="row-wrapper  bg-transparent bg-[#f8f8f8]   py-[15px]    ">
  <div className="row">
    <div className="col col-sm-12">
      <div className="h-[32px] mt-[-15px] mb-[-15px]" style={{backgroundPosition: '0 0', backgroundSize: '100% 32px', backgroundRepeat: 'no-repeat'}} />
    </div>
  </div>
</div>









     <div className="row-wrapper page-builder-bg-grey  py-[15px] bg-[#f8f8f8]  ">
  <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12">
        <div className="wysiwyg_widget    text-l   mt-5   ">
          <h2 className="text-center font-[400] text-[2rem] md:text-[3rem]">How much will it cost?</h2>
          <p className="text-center text-[#666]  text-[18px]  px-7 md:text-[22px]   mt-5 ">Explore the content below to learn more about the costs and rewards of owning your own Kumon centre.</p>
        </div>                              </div>
    </div>
  </div>
</div>






 










    <div className=" mx-auto p-4     bg-[#f8f8f8]">
        <div className="     w-full  lg:w-[80vw] py-[2rem] mx-auto">

       
      <div className="       w-[100%]   flex justify-center   ">
        <ul className="  block    space-y-10 md:flex   md:space-y-0    space-x-0 md:space-x-10">
          <li
            className={`cursor-pointer p-2    pt-[1.5rem]  border-2  ${activeTab === 'investment' ? 'text-white bg-[#8cc242]  px-[3.5rem] pt-[1.5rem]  pb-[1rem]  border-2 block  border-[#8cc242]' : ' hover:bg-[#8cc242] hover:text-white   text-[#8cc242]  px-[4rem] md:px-[3.5rem]  border-2  border-[#8cc242] pt-[1.5rem]   block '}`}
            onClick={() => handleTabClick('investment')}
          >
            <span className="mr-2  ">
              <FaPoundSign  className="text-center text-[1.8rem]  mx-auto    " />
            </span>
            <span  className="text-xl  ">My investment</span>

          </li>
          <li
            className={`cursor-pointer p-2      pt-[1.8rem] border-2  ${activeTab === 'earnings' ? ' text-white bg-[#8cc242]  px-[3.5rem] pt-[1.5rem]  pb-[1rem]  border-2 block  border-[#8cc242]' : '  hover:bg-[#8cc242] hover:text-white   text-[#8cc242]  px-[4rem] md:px-[3.5rem]  border-2  border-[#8cc242] pt-[1.5rem] pb-[1rem]  block '}`}
            onClick={() => handleTabClick('earnings')}
          >
            <span className="mr-2   ">
              <FaChartLine  className="text-center text-[1.8rem]  mx-auto  "  />
            </span>
            <span   className="text-xl  ">My earnings</span>
          </li>
        </ul>
      </div>

      <div className="mt-[3rem]     w-full  md:w-[75vw] ">
        {activeTab === 'investment' && (
          <div className="flex flex-col md:flex-row items-center">
            <div className="  w-full   md:w-1/3    mb-[2rem] lg:mb-0  ">
              <img
                src={investment}
                alt="Cost of Kumon Franchise"
                className="w-full h-auto     "
              />
            </div>
            <div className="md:w-2/3  md:mt-0 md:ml-4  px-1    md:px-3  ">
              <ul className="list-disc list-inside  mx-auto   px-[2rem] md:px-[3rem] text-xl space-y-8">
                <li>An initial investment of £3,000 towards your licence fee (representing £1,500 per subject for maths and English)</li>
                <li>You need to budget an additional £1,500 - £2,000 for marketing activity across your first 12 months of business</li>
                <li>You need to allow for rent or hire of premises, as well as other minimal running costs</li>
                <li>In the case of franchise re-sales, a fee is paid to the outgoing Instructor for taking over their business</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'earnings' && (
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3">
              <img
                src={earnings}
                alt="Kumon Profit"
                className="w-full h-auto"
              />
            </div>
            <div className="md:w-2/3 mt-4 md:mt-0   ml-0  md:ml-4">
              <ul className="list-disc list-inside px-[2rem] md:px-[4rem]  text-xl  space-y-2">
                <li>You’ll set your own fees, typically in the region of £65 per subject, per month, which parents pay to you directly</li>
                <li>You’ll be aiming to have average subject numbers of 150-200 subjects in your centre</li>
                <li>You’ll pay Kumon a fixed cost royalty fee for each student/subject, so it’s easy to project your income</li>
                <li>The Kumon royalty fee covers the Kumon learning materials, your ongoing training and support and much more!</li>
                <li>You’ll benefit from generous rent and fit-out subsidies towards starting up in a dedicated venue</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>

    </div>











{/* ======================part 4========================================== */}










<div className="row-wrapper page-builder-bg-grey mt-[8rem] py-[15px]   ">
  <div className="container-fluid">
    <div className="row">
      <div className="col col-sm-12">
        <div className="wysiwyg_widget    text-l   mt-5   ">
          <h2 className="text-center font-[400] text-[2rem] md:text-[3rem]">How much will it cost?</h2>
        </div>                         
             </div>
    </div>
  </div>
</div>




<div className="row-wrapper ">
  <div className="  w-[80vw] mx-auto   ">
    <div className=" grid  grid-cols-1   lg:grid-cols-3   ">
      <div className="lg:col-span-2">
        <div className="wysiwyg_widget    text-lg leading-9  px-1 lg:px-5">
          <p>The Kumon Institute of Education was founded in 1958 in Japan by Toru Kumon, both a parent and gifted maths teacher. He created what is now the Kumon Maths Programme for his son Takeshi to help him improve his ability in maths. Our programmes now develop English skills, as well as maths, and are constantly evolving, learning from students and Instructors, to make them as effective as possible. Kumon still stands firm to Toru Kumon’s founding principle: to help as many children as possible excel academically and realise their potential.<br />
            
            The Kumon Maths and English Programmes are complementary to work covered in school, building key skills and academic ability at the student’s own pace. Whilst Kumon does not follow any particular school curriculum, it does help students to build strong foundations that can help them to excel in all subjects at school.
            <br />
            &nbsp;
            
            
            <Link to='/frenchisefrom'     className="inline-block px-6 py-2 mt-4    my-[2rem] text-white bg-green-500 hover:bg-green-600 rounded">
                  Register Now <i className="fa fa-chevron-right" />
                </Link>
            
            </p>
        </div>                              </div>
      <div className="    w-full    h-auto md:w-[300px]  md:h-[300px]  lg:w-[420px]  lg:h-[400px] " >
        <img src={kumon} alt="What is Kumon?"className="w-full h-full     justify-center  "  />
      </div>
    </div>
  </div>
</div>




    





    </Layout>
  );
};

export default Frenchise;
