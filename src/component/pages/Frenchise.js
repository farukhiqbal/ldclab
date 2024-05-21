import React,{useState} from "react";
import Layout from "../Layout/Layout";
import banner from "../../images/department.webp";
import { HiCurrencyPound } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";


const Frenchise = () => {





  const [activeTab, setActiveTab] = useState('investment');

  const showTab = (tab) => {
    setActiveTab(tab);
  };



  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    city: '',
    cnic: '',
    franchiseLocation: '',
    franchiseCity: '',
    franchiseArea: '',
    expectedRent: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let errors = { ...formErrors };

    // Check for phone and CNIC length and numeric value
    if (name === 'phone' || name === 'cnic') {
      if (value.length !== 11 || !/^\d+$/.test(value)) {
        errors[name] = 'Must be exactly 11 digits';
      } else {
        delete errors[name];
      }
    }

    setFormData({ ...formData, [name]: value });
    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make sure there are no errors before submitting
    if (Object.keys(formErrors).length === 11 && formData.phone.length === 11 && formData.cnic.length === 11) {
      console.log(formData);
      alert('Form submitted successfully!');
    } else {
      alert('Please fix the errors before submitting.');
    }
  };


  return (
    <Layout>
      <div className="relative   w-full  ">
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
            align="center"
            border={2}
            bordercolor="#7dcdf4"
            cellPadding={3}
            cellSpacing={3}
          >
            <tbody>
              <tr    className="px-[15px]"  >
                <td>
                  <h3 style={{ marginLeft: 15, marginRight: 15 }}   className=" font-[400]   text-[30px]     "   >
                    What does it mean to be a Kumon franchisee?
                  </h3>
                  <p style={{ marginLeft: 15, marginRight: 15 }}>
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
          <h2 className="text-center font-bold  text-2xl">How much will it cost?</h2>
          <p className="text-center text-[#666]   text-[22px]   mt-5 ">Explore the content below to learn more about the costs and rewards of owning your own Kumon centre.</p>
        </div>                              </div>
    </div>
  </div>
</div>






<div className="row-wrapper page-builder-bg-grey">
      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-12">
            <div className="widget_cost_and_profit">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-offset-2 top-buffer border-2 border-black">
                    <ul className="list-none flex justify-center">
                      <li
                        className={`border-2 border-black ${activeTab === 'investment' ? 'active' : ''}`}
                        onClick={() => showTab('investment')}
                      >
                        <a href="#kumon_centre_cost_1">
                          <span className="currency-wrapper">
                            <HiCurrencyPound />
                          </span>
                          <div>My investment</div>
                        </a>
                      </li>
                      <li
                        className={`${activeTab === 'earnings' ? 'active' : ''}`}
                        onClick={() => showTab('earnings')}
                      >
                        <a href="#kumon_centre_profit_1">
                          <span className="fa-stack fa-lg">
                            <BsGraphUpArrow />
                          </span>
                          <div>My earnings</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="row tab-content top-buffer">
                  <div
                    className={`tab-pane fade ${activeTab === 'investment' ? 'show active' : ''}`}
                    id="kumon_centre_cost_1"
                  >
                    <div className="col col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 top-buffer">
                      {/* <img src="" /> */}
                    </div>
                    <div className="col col-xs-12 col-sm-8 top-buffer">
                      <ul>
                        <br />
                        <li>An initial investment of £3,000 towards your licence fee (representing £1,500 per subject for maths and English)</li>
                        <br />
                        <li>You need to budget an additional £1,500 - £2,000 for marketing activity across your first 12 months of business</li>
                        <br />
                        <li>You need to allow for rent or hire of premises, as well as other minimal running costs</li>
                        <br />
                        <li>In the case of franchise re-sales, a fee is paid to the outgoing Instructor for taking over their business</li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'earnings' ? 'show active' : ''}`}
                    id="kumon_centre_profit_1"
                  >
                    <div className="col col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 top-buffer">
                      {/* <img src="https://www.kumon.co.uk/files/cost_and_profit_profit_images/4132/profit+transparent.png" /> */}
                    </div>
                    <div className="col col-xs-12 col-sm-8 top-buffer">
                      <ul>
                        <br />
                        <li>You’ll set your own fees, typically in the region of £65 per subject, per month, which parents pay to you directly</li>
                        <br />
                        <li>You’ll be aiming to have average subject numbers of 150-200 subjects in your centre</li>
                        <br />
                        <li>You’ll pay Kumon a fixed cost royalty fee for each student/subject, so it’s easy to project your income</li>
                        <br />
                        <li>The Kumon royalty fee covers the Kumon learning materials, your ongoing training and support and much more!</li>
                        <br />
                        <li>You’ll benefit from generous rent and fit-out subsidies towards starting up in a dedicated venue</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


 















    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Franchise Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Address', name: 'address', type: 'text' },
              { label: 'Phone', name: 'phone', type: 'tel' },
              { label: 'City', name: 'city', type: 'text' },
              { label: 'CNIC', name: 'cnic', type: 'text' },
              { label: 'Location of Franchise', name: 'franchiseLocation', type: 'text' },
              { label: 'City of Franchise', name: 'franchiseCity', type: 'text' },
              { label: 'Area of Franchise', name: 'franchiseArea', type: 'text' },
              { label: 'Expected Rent of Franchise', name: 'expectedRent', type: 'number' }
            ].map((field, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={field.name} className="block text-gray-700 font-bold mb-2">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border ${formErrors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded`}
                  aria-describedby={field.name + "Help"}
                />
                {formErrors[field.name] && (
                  <p className="text-red-500 text-xs italic" id={field.name + "Help"}>
                    {formErrors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-200 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>







    </Layout>
  );
};

export default Frenchise;
