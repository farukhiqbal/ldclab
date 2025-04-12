import React, { useEffect, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import { FiAlignJustify } from "react-icons/fi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaSearch, FaTwitter } from "react-icons/fa";
import logo from "../../images/ldc.png";
import { IoCartOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import instagram from '../../images/instagram.png'
import { HiOutlineMail } from "react-icons/hi";
import CartPage from "../pages/CartPage";
import { TiSocialGooglePlus } from "react-icons/ti";
import facebook from '../../images/facebook.png';
import linkedin from '../../images/linkedin.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/social.png'

const Header = () => {
  const [nav, setNav] = useState(false);
  const [heading, setHeading] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [submenuStates, setSubmenuStates] = useState({});
  const [cartItems, setCartItems] = useState(0); // State to keep track of cart items count

  const handleAddToCart = () => {
    // Implement the logic for adding to cart
    setCartItems(cartItems + 1); // Increment cart items count when adding to cart
  };

  const handleSubmenuToggle = (submenuKey) => {
    // Toggle the state of the specified submenu
    setSubmenuStates((prevState) => ({
      ...prevState,
      [submenuKey]: !prevState[submenuKey],
    }));
  };

  const handleNav = () => {
    setNav(!nav);
  };
  const handleLinkClick = () => {
    scroll.scrollToTop();
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     setShowShadow(scrollPosition > 0); // Adjust the value as needed
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // Define your navigation links as an array of objects
  const navLinks = [
    {
      text: "Home",
      url: "/home",
    },
    // { text: "ToolKits", url: "/toolkits" },
    // { text: "Jobs", url: "/jobs" },
    // { text: "Blogs", url: "/blog" },
    // { text: "Tracking", url: "/tracking" },

    {
      text: "About Us",
      url: "#",
      submenu: true,
      dropdown: [
        { name: "LDC ", link: "/ldc" },
        { name: " WHY  LDC ", link: "/whyldc" },
        { name: " LDC   MISSION & VISION  ", link: "/mission-vision " },
        { name: " LDC  CERTIFICATION & ACCREDITATION ", link: "/department " },
        { name: " LDC  TEAM  ", link: "/department " },
      
              ],
    },








    {
      text: "Services",
      url: "#",
      submenu: true,
      dropdown: [
        { name: "MOLECULAR PATHOLOGY", link: "/molecular " },
        { name: "MICROBIOLOGY", link: "/Microbiology " },
        { name: "SPECIAL CHEMISTRY", link: "/department " },
        { name: "HEMATOLOGY", link: "/Hematopathology" },
        { name: "CHEMICAL PATHOLOGY", link: "/ChemicalPathology " },
        { name: "HISTOPATHOLOGY", link: "/Histopathology " },
        { name: "IMMUNOLOGY & SEROLOGY", link: "/department " },
        { name: "ENDOCRINOLOGY", link: "/department " },
            ],
    },



  



    {
      text: " For Patients  ",
      submenu: true,
      dropdown: [
        { name: "  View report  ", link: "/viewreport" },
        { name: "  Book HomeSampling  ", link: "/homesampling" },
             ],
    },

    {
      text: "For Doctor ",
      submenu: true,
      dropdown: [
        { name: " LOGIN  ", link: "/Toxicology" },
        { name: " VIEW REPORT   ", link: "/Toxicology" },
        { name: " SUGGESTION  ", link: "/Toxicology" },
        
      ],
    },


        //  { text: "Opportunities", url: "#" },



         {
          text: "Opportunities ",
          submenu: true,
          dropdown: [
            { name: " Entrepreneurship", link: "/" },
            { name: "Franchise   Offer", link: "/" },
            { name: "Marketing", link: "/" },
            { name: "Community services membership", link: "/" },
            { name: "LDC representative", link: "/" },
            { name: "LDC  volunteer", link: "/" },
            { name: "LDC  Blood donner  society", link: "/" },
            { name: "LDC  CME society", link: "/" },
            { name: "LDC  Medical awareness society ", link: "/" },
            { name: "LDC  Brand Ambassador ", link: "/" },

            
          ],
        },


        {
          text: "Complaint ",
          submenu: true,
          dropdown: [
            { name: "Lodge complain", link: "/" },
            { name: "Track complain", link: "/" },
          

            
          ],
        },

        //  { text: "Complaint", url: "#" },


    { text: "Contact Us", url: "/contact" },
    { text: "Login ", url: "/Login" },
  ];

  return (
    <>
      <div className="  flex   justify-center   lg:justify-between   xl:justify-between  bg-[#75a137e4]">
        <div className=" hidden           lg:flex pt-[5px] text-md font-[500]    md:ml-0   md:pr-[1rem]      xl:ml-4      lg:pr-[2rem] h-[40px] text-white   md:gap-x-[10px]  lg:gap-x-[20px]">
          <Link
            to="#"
            className=" no-underline   ml-[6rem]     md:ml-[1rem]     lg:ml-[4.2rem] flex text-white cursor-pointer hover:text-[#2e3092] hover:text-underline"
          >
            <HiOutlineMail className=" mr-2 text-[#2e3092]   text-[1.3rem]  mt-[5px]" />
            lahorediagnosticcenter.labs@gmail.com
          </Link>

          <Link
            to="#"
            className=" no-underline     md:ml-0    lg:ml-[0.5rem] flex text-white cursor-pointer hover:text-[#2e3092] hover:text-underline"
          >
            <FaPhoneAlt className="   mr-2  text-[#2e3092]   mt-[5px]" />
            +9234 123 123 25
          </Link>
          <Link
            to="#"
            className=" no-underline  flex text-white cursor-pointer hover:text-[#2e3092]  "
          >
            <FaPhoneAlt className=" mr-2  text-[#2e3092]  mt-[5px]" />
            +92301-6888226
          </Link>
        </div>

        <div className="flex       md:flex  text-[17px] font-[600] py-2 pr-1  md:pr-[1rem]   lg:mr-[5rem] xl:mr-[9rem]
        bg-[#75a137e4] h-[40px] text-white justify-center md:justify-end    lg:justify-end   xl:justify-end sm:gap-x-[10px] gap-x-[10px]  md:gap-x-[10px]">
          <Link
            to="/login"
            className=" no-underline text-white cursor-pointer hover:text-[#2e3092] hover:text-underline"
          >
            LogIn
          </Link>
          <Link
            to="/register"
            className=" no-underline text-white cursor-pointer hover:text-[#2e3092]  "
          >
            | &nbsp;Book HomeSampling
          </Link>
        </div>
      </div>

      {/* navbar  */}

      <div
        className={`sticky top-0 z-[1100] text-black Georgian bg-[#f7f7f7] px-4 md:px-6 w-full border-b-2 border-[#2e3092]   shadow-lg `}
      >
        <div className="flex flex-col lg:flex-row justify-between ">
          <div className="flex flex-col lg:flex-row gap-x-4">
            <div className=" hover:text-orange-500 ml-8 lg:ml-0  ">
              {/* bars  */}
              <button
                onClick={handleNav}
                className=" absolute   top-[.8rem]     lg:hidden   md:top-[1.8rem]      lg:top-[2.2rem] flex    right-4  md:right-[8em]  justify-right   px-2 p-2 text-xl font-medium text-black"
              >
                <FaBarsStaggered className="text-[1.6rem]" />
              </button>





            <div className="              hidden    lg:flex      lg:right-[9.5rem] absolute    ">
                       
            <ul className=" gap-4  flex  mt-9 social-network">
                <li className="icoFacebook  shadow-lg  h-[2.5rem]  w-[2.5rem]">
                  <Link to="https://www.facebook.com/LdcLaboratories?mibextid=ZbWKwL">
                    {/* <FaFacebookF className="text-center  text-lg ml-2 mt-2" /> */}
                      <img src={facebook}  alt="facebook logo icons "    className="pointer    hover:scale-[1.1]"/>
                  </Link>
                </li>
                <li className="  rounded-[40px]    pointer shadow-lg h-[2.5rem]  w-[2.5rem]">
                  {/* <FaTwitter className="text-center  text-lg ml-2 mt-2" /> */}
                    <img src={twitter}  alt="twitter logo icon"  className="pointer   hover:scale-[1.1]"  />
                </li>
                <li className="rounded-[40px]  shadow-lg    cursor-pointer hover:bg-red-700 hover:text-white h-[2.5rem]  w-[2.5rem]">
                  {/* <FaInstagram className="text-center  text-lg ml-2 mt-2" /> */}
                     <img src={instagram}    className="hover:scale-[1.1]   cursor-pointer" alt="instagram logo icon" />
                </li>
                <li className="  rounded-[40px]    shadow-lg h-[2.5rem] w-[2.5rem]">
                  {/* <FaLinkedin className="text-center  text-lg ml-2 mt-2" /> */}
                    <img src={linkedin}  alt="linkedin logo"   className="hover:scale-[1.1]   cursor-pointer" />
                </li>


                <li className="  rounded-[40px]    shadow-lg h-[2.5rem] w-[2.5rem]">
                  {/* <FaLinkedin className="text-center  text-lg ml-2 mt-2" /> */}
                    <img src={youtube}  alt="linkedin logo"   className="hover:scale-[1.1]   cursor-pointer" />
                </li>


              </ul>     
                     
            </div>






              {/* <div className="absolute  hidden        xl:flex    w-[28rem] shadow-lg   justify-between border-2 rounded-lg mt-8    md:ml-[10rem]  lg:ml-[35rem]"> */}
                {/* <div className=""> */}

                {/* <div className="  w-[23rem] ">
                  <input
                    type="search"
                    placeholder="Search test"
                    className="py-2 px-2 rounded outline-none text-blue-600 w-full"
                  />
                </div> */}

                {/* <div className="absolute right-0 top-0 ml-2 bg-blue-600 rounded-lg h-full w-[4.6rem] flex items-center justify-center">
                  <FaSearch className="text-white" />
                </div> */}
              {/* </div> */}
            </div>


            {/* <div className="      justify-right       right-[5rem]   md:right-[18rem]   mt-1   md:mt-5 ">
              <CartPage />
            </div> */}

            <div className="flex  items-center h-full w-full ml-0  md:ml-[0.8rem]  lg:ml-[1.6rem]  xl:ml-[3rem]">
              <Link to="/" onClick={handleLinkClick}>
                <img
                  className="        h-[60px]  md:h-[100px]   w-[170px]   md:w-[250px]   lg:w-[250px] "
                  src={logo}
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* <div
            className={`h-1 flex flex-col  md:flex-row justify-between  md:text-[17px]   md:pt-[30px] md:mt-4 items-center font-[600] md:px-7 text-sm ${
              showShadow ? "shadow-2xl" : ""
            }`}
          >
            <div className="   mr-[2rem]  lg:mr-[5rem]">
              <div className="hidden lg:inline Georgian">
                <ul className="flex  justify-center  hover:cursor-pointer ">
                  {navLinks.map((li, index) => (
                    <li
                      key={index}
                      className="py-1 px-5 hover:rounded duration-400 hover:bg-black/5 hover:text-red-700 drop-shadow-xl relative group"
                    >
                      <Link
                        to={li.url}
                        className="flex text-black no-underline  font-[640] text-[1.3rem]"
                      >
                        {li.text}
                        {li.submenu ? (
                          <span className="text-md    md:ml-2  inline ">
                            <BsChevronDown />
                          </span>
                        ) : null}
                      </Link>

                      {li.submenu && (
                        <div className="absolute top-7 left-1 w-[250px]   hidden group-hover:block shadow-lg z-[999] bg-white">
                          <div className="pt-2 py-1">
                            <div className="w-3 h-4 absolute mt-5 rotate-45"></div>

                            <div className="py-2 px-3 flex flex-col">
                              {li.dropdown.map((mysublinks, subIndex) => (
                                <div
                                  className="text-black/80 py-[0.5rem]   hover:text-red-500"
                                  key={subIndex}
                                >
                                  <Link
                                    to={mysublinks.link}
                                    className="text-black no-underline text-[17px]"
                                  >
                                    <p className="text-md font-light hover:ml-2 hover:text-red-600 ease-out  duration-100 border-b border-black">
                                      {mysublinks.name}
                                    </p>
                                    <p className=""></p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div> */}
        </div>

                       









        <div
          className={
            nav
              ? "Georgian bg-white absolute right-0  top-0 w-80  duration-50  z-1000 rounded-sm shadow-md overflow-y-hidden text-black "
              : "fixed right-[-100%] "
          }
        >
          <div className="sticky min-h-full h-[100vh] bg-white overflow-y-auto">
            <ul className="pt-4 px-6 bg-white f-h pb-3">
              <div className="flex justify-end md:pr-8 pt-4 ">
                <TfiClose
                  onClick={handleNav}
                  className="rounded p-1 font-bold hover:bg-black/5"
                  size={24}
                />
              </div>
              <div className="mt-6 text-[18px] ">
                {navLinks.map((li, index) => (
                  <>
                    <Link to={li.url} className="text-black no-underline">
                      <li
                        key={index}
                        className="cursor-pointer Georgian py-2 pl-3 font-medium   hover:rounded hover:bg-black/5 hover:text-[#2e3092] "
                      >
                        <span className="" onClick={handleNav}>
                          {" "}
                          {li.text}
                        </span>
                      </li>
                    </Link>
                    {li.submenu && (
                      <BsChevronDown
                        className={`${
                          submenuStates[index] && "rotate-180"
                        } absolute  mt-[-39px] right-8 `}
                        onClick={() => handleSubmenuToggle(index)}
                      />
                    )}

                    <div className=" ml- mt-2  flex flex-col justify-center border-b-2 border-black items-center max-h-[40vh] overflow-y-auto">
                      {li.submenu && submenuStates[index] && nav && (
                        <ul className="pt-0">
                          {li.dropdown.map((submenuItem, subIndex) => (
                            <Link
                              to={submenuItem.link}
                              className="text-black no-underline"
                            >
                              <li
                                key={subIndex}
                                className=" text-black/70 text-md ease-out   transition-all duration-200  gap-x-4 cursor-pointer    rounded-md py-2   hover:rounded hover:bg-black/5 hover:text-[#2e3092]"
                                onClick={() => {
                                  setNav(!nav);
                                }}
                              >
                                {submenuItem.name}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      )}
                    </div>
                  </>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
















{/* navbar ============================== */}










      <div className=" bg-[#2e3092]    w-full">
                                <div
            className={`  md:text-[17px]   sticky   top-[10rem] z-[1100]  items-center font-[600] md:px- text-sm ${
              showShadow ? "" : ""
            }`}
          >
            <div className="   mr-[2rem]  md:mr-0  lg:mr-[rem]">
              <div className="hidden lg:inline Georgian">
                <ul className="flex  justify-center  hover:cursor-pointer ">
                  {navLinks.map((li, index) => (
                    <li
                      key={index}
                      className="py-[2rem] px-5 hover:rounded duration-400 hover:bg-black/5 hover:text-red-700 drop-shadow-xl relative group"
                    >
                      <Link
                        to={li.url}
                        className="flex text-white no-underline  font-[640] text-[1.3rem]"
                      >
                        {li.text}
                        {li.submenu ? (
                          <span className="text-md    md:ml-2  inline ">
                            <BsChevronDown />
                          </span>
                        ) : null}
                      </Link>

                      {li.submenu && (
                        <div className="absolute top-[5.4rem] left-1 w-[250px]  hidden group-hover:block shadow-lg z-[999] bg-white">
                          <div className="pt-2 py-1">
                            <div className="w-3 h-4 absolute mt-5 rotate-45"></div>

                            <div className="py-2 px-3 flex flex-col">
                              {li.dropdown.map((mysublinks, subIndex) => (
                                <div
                                  className="text-black/80 py-[0.5rem]    hover:text-red-500"
                                  key={subIndex}
                                >
                                  <Link
                                    to={mysublinks.link}
                                    className="text-black no-underline text-[17px]   "
                                  >
                                    <p className="text-md font-bold hover:ml-2 hover:text-red-600 ease-out  duration-100 border-b border-black">
                                      {mysublinks.name}
                                    </p>
                                    <p className=""></p>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
                            </div>
















    </>
  );
};

export default Header;
