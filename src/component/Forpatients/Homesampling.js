import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Layout from "../Layout/Layout";

function Homesampling() {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!isExpanded);
  };

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    Email: yup.string().required(),
    city: yup.string().required(),
    Number: yup
    .string()
    .required()
    .matches(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  });

  return (
    <Layout  className='bg-gray-300'>
      <div >
        <div className="object-cover">
          <img
            src="https://chughtailab.com/wp-content/uploads/2023/09/1350-x-280-15.jpg"
            width="100%"
            alt=""
          />
        </div>
      </div>

      <div className="container mx-auto    w-full  mdw-[85vw]">
        <div className="grid    gridgrid-cols-2 gap-4">
          <div>
            <Formik
              validationSchema={schema}
              onSubmit={console.log}
              initialValues={{
                firstName: "",
                Number: "",
                city: "",
                file: null,
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <form
                  className="px-4 py-8 "
                  noValidate
                  onSubmit={handleSubmit}
                >
                  <div className="main-home">
                    <div className="left-sample">
                      <div className="left-form">
                        <h2 className="pt-5 text-blue-800 w-full pr-8 mb-4 text-2xl font-semibold">
                          BOOK HOME SAMPLING
                        </h2>

                        <div className="mb-4">
                          <label className="text-input">
                            <span className="text-[#2e3092] line-clamp-.5">
                              Enter Your Name
                            </span>
                            <input
                              type="text"
                              name="firstName"
                              value={values.firstName}
                              onChange={handleChange}
                              className={`form-input mt-1 block w-[60%]  py-2 border border-gray-300 ${
                                touched.firstName && !errors.firstName
                                  ? "border-green-500"
                                  : "border-red-500"
                              }`}
                            />
                            {touched.firstName && errors.firstName && (
                              <span className="text-red-500">Required</span>
                            )}
                          </label>
                        </div>

                        <div className="mb-4">
                          <label className="text-input">
                            <span className="text-[#2e3092] line-clamp-.5">
                              Enter Your Number
                            </span>
                            <div className="flex">
                              <span className="border border-gray-300 p-1">
                                +92
                              </span>
                              <input
                                type="number"
                                placeholder="___ _________"
                                name="Number"
                                value={values.Number}
                                onChange={handleChange}
                                className={`form-input   w-[55%] border border-gray-300 ${
                                  touched.Number && !errors.Number
                                    ? "border-green-500"
                                    : "border-red-500"
                                }`}
                              />
                            </div>
                            {touched.Number && errors.Number && (
                              <span className="text-red-500">Required</span>
                            )}
                          </label>
                        </div>

                        <div className="mb-4">
                          <label className="text-input">
                            <span className="text-[#2e3092] line-clamp-.5">
                              Address
                            </span>
                            <textarea
                              rows={3}
                              className="form-textarea mt-1 block  w-[60%] border border-gray-300"
                            />
                          </label>
                        </div>

                        <div className="mb-4">
                          <span className="text-[#2e3092] line-clamp-.5">
                            Select the City
                          </span>
                          <select
                            className="form-select mt-1 block w-[60%] border py-2 border-gray-300"
                            name="city"
                            value={values.city}
                            onChange={handleChange}
                          >
                            <option>Select the City</option>
                            <option value="1">Lahore</option>
                            <option value="2">Karachi</option>
                            <option value="3">Islamabad</option>
                            <option value="4">Multan</option>
                            <option value="5">Faisalabad</option>
                          </select>
                          {touched.city && errors.city && (
                            <span className="text-red-500">Required</span>
                          )}
                        </div>

                        {isExpanded ? (
                          <div className="d-block">
                            {/* Additional fields for expanded view */}
                            <div className="mb-4">
                              <label className="text-input">
                                <span className="text-[#2e3092]">
                                  Email address (optional)
                                </span>
                                <input
                                  type="email"
                                  className="form-input mt-1 block py-2  w-[60%] border border-gray-300"
                                />
                              </label>
                            </div>
                            <div className="mb-4">
                              <label className="text-input">
                                <span className="text-[#2e3092]">
                                  Enter Your Test Name (optional)
                                </span>
                                <input
                                  type="email"
                                  className="form-input mt-1 block w-[60%] border border-gray-300 py-2"
                                />
                              </label>
                            </div>
                            <div className="mb-4">
                              <label className="text-input">
                                <span className="text-[#2e3092]">
                                  Upload Prescription (Optional)
                                </span>
                                <input
                                  type="file"
                                  required
                                  name="file"
                                  onChange={handleChange}
                                  className={`form-input mt-1 block w-[60%] border border-gray-300  py-2${
                                    touched.file && errors.file
                                      ? "border-red-500"
                                      : ""
                                  }`}
                                />
                                {touched.file && errors.file && (
                                  <span className="text-red-500">Required</span>
                                )}
                              </label>
                            </div>
                            <div className="mb-4">
                              <label className="text-input">
                                <span className="text-[#2e3092]">Date</span>
                                <input
                                  type="date"
                                  className="form-input mt-1 block w-[60%] border border-gray-300  py-2"
                                />
                              </label>
                            </div>
                            <div className="mb-4">
                              <label className="text-input">
                                <span className="text-[#2e3092]">Time</span>
                                <input
                                  type="time"
                                  className="form-input mt-1 block w-[60%] border border-gray-300  py-2"
                                />
                              </label>
                            </div>
                            <button
                              type="submit"
                              className="btn ml-6 px-6 py-3 bg-blue-700 text-white font-bold uppercase border-none cursor-pointer hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                            >
                              Submit
                            </button>{" "}
                            <br />
                            <br />
                            <button
                              onClick={toggleExpand}
                              className="read-less"
                            >
                              Read Less
                            </button>
                          </div>
                        ) : (
                          <button onClick={toggleExpand} className="read-more">
                            Read More...
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>

          <div className="right">
            <div className="  object-cover">
              <img
                src="https://chughtailab.com/wp-content/uploads/2023/07/book_home_sampling-1-1024x858.jpg"
                width="500px"
                height="300px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Homesampling;
