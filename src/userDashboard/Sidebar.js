import React from "react";
import { Link } from "react-router-dom";
import { FaCog, FaHome ,FaPoll,FaRegEnvelope,FaRegFileAlt} from "react-icons/fa";

const Sidebar = ({SidebarToggle,setSelectedContent }) => {
  return (
    <div className={`${SidebarToggle ? " hidden "  : " block "}w-64 bg-gray-800  fixed  h-full  px-4 py-2 `}>
      <div className="py-2 mb-4">
        <h1 className="text-2xl   font-bold text-white ">Admin Dashboard</h1>
      </div>

      <hr />

      <ul className="text-white mt-3  font-bold">
        <li className="mb-2   rounded  hover:shadow  hover:bg-blue-500 py-2">
          <Link  to='/'   className="px-3">
            <FaHome className="inline-block  w-6 h-6 mr-2 -mt-2">
                 </FaHome>
              Home
          </Link>
        </li>



        <li className="mb-2   rounded  hover:shadow  hover:bg-blue-500 py-2">
          <Link to=""   className="px-3">
            <FaPoll className="inline-block  w-6 h-6 mr-2 -mt-2"/>
                
              Reports
          </Link>
        </li>

        <li className="mb-2   rounded  hover:shadow  hover:bg-blue-500 py-2">
          <Link to=""   className="px-3">
            <FaRegEnvelope className="inline-block  w-6 h-6 mr-2 -mt-2"/>
              
              Inbox
          </Link>
        </li>


        <li className="mb-2   rounded  hover:shadow  hover:bg-blue-500 py-2">
          <Link to=""   className="px-3">
            <FaCog className="inline-block  w-6 h-6 mr-2 -mt-2"/>
              
              Setting
          </Link>
        </li>













      </ul>
    </div>
  );
};

export default Sidebar;
