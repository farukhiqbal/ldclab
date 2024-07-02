import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./healthPackages.css";
import { Pagination } from "@mui/material";
import Layout from "../Layout/Layout";
import { FaSearch } from "react-icons/fa";

const HealthPackages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [filterData, setFilterData] = useState([]);

  const productsPerPage = 12;

  const startIndex = (page - 1) * productsPerPage;
  const endIndex = page * productsPerPage;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://doctors-hub.com/ords/ldc/hr/empinfo/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setFilterData(data.items); // Assuming the response data is an array of items
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  // Filter the data based on the searchTerm
  const filteredData = filterData.filter((item) => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Layout>
      <section className="mt-[5rem] w-full">
        <div className="mx-auto my-[5rem] md:my-[3rem] w-[82vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="health-left">
              <div className="border-2 shadow-lg rounded-lg w-full md:w-[80%]">
                <form className="search-input ng-pristine ng-valid">
                  <div className="flex">
                    <input
                      type="text"
                      className="search cat-page-search outline-none rounded-md w-[80%] py-2 px-3"
                      placeholder="Search for test/profile"
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                    <span className="cat-search-go pt-1 w-[20%] rounded-md bg-blue-600 text-white">
                      <div className="text-center text-[1.1rem] md:text-[1.3rem]">
                        Search
                      </div>
                    </span>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex mt-3 md:mt-0 justify-between md:justify-end gap-2 md:gap-5">
              <div className="health-btn bg-blue-600 text-white hover:bg-blue-500 pt-1 font-bold px-1 md:px-3 rounded-md">
                <button className="btn flex gap-2 md:gap-3 p-2">
                  <img src="https://www.phadkelabs.com/public/Frontend/images//icons/filter-grey-home.svg" />
                  Home Visit
                </button>
              </div>

              <div className="health-btn bg-blue-600 text-white hover:bg-blue-500 pt-1 font-bold px-1 md:px-3 rounded-md">
                <button className="btn flex gap-2 md:gap-3 p-2">
                  <img src="https://www.phadkelabs.com/public/Frontend/images//icons/filter-grey-lab.svg" />
                  Lab Visit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card-container">
        <div className="main-card">
          {filteredData.slice(startIndex, endIndex).map((item) => (
            <div className="health-card" key={item.id}>
              <div className="health-card-title">
                <Link to="#">
                  <h2 className="title-2">{item.title}</h2>
                </Link>
              </div>
              <br />
              <br />
              <div className="include-component">
                <span className="card-text">{item.component}</span>
              </div>
              <br />
              <br />
              <div className="visit-box">
                <div className="visit">
                  <img
                    src="https://www.phadkelabs.com/public/Frontend/images//icons/home-visit.png"
                    alt="Home Visit"
                  />
                  <span>Home Visit</span>
                </div>
                <div className="visit">
                  <img
                    src="https://www.phadkelabs.com/public/Frontend/images//icons/lab-visit.png"
                    alt="Lab Visit"
                  />
                  <span>Lab Visit</span>
                </div>
              </div>
              <div className="price-cart-box">
                <Link to="#">
                  <div className="price">
                    <span>{item.price}</span>
                  </div>
                </Link>
                <div className="addto-cart">
                  <Link to="#" className="cart-image">
                    <img
                      src="https://www.phadkelabs.com/public/Frontend/images//icons/cart.svg"
                      alt="Add to Cart"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="w-[18rem] my-5 mx-auto text-center px-auto">
        <Pagination
          count={Math.ceil(filteredData.length / productsPerPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </Layout>
  );
};

export default HealthPackages;
