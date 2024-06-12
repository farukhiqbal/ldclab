import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import Layout from "../Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

function Homesampling() {
  const [isExpanded, setExpanded] = useState(false);
   
  const navigate = useNavigate();


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
    address: yup.string().required(),
    testName: yup.string(),
    file: yup.mixed(),
    date: yup.date(),
    time: yup.string(),
  });

  const handleFormSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:4444/api/home-sampling', values);
      console.log('Form submitted successfully:', response.data);
      toast.success('Request submitted successfully');
      navigate('/')
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error submitting form:', error)
    }
  };

  return (
    <Layout className="bg-gray-300">
      <div>
        <div className="object-cover">
          <img
            src="https://chughtailab.com/wp-content/uploads/2023/09/1350-x-280-15.jpg"
            width="100%"
            alt=""
          />
        </div>
      </div>

      <div className="container mx-auto w-full mdw-[85vw]">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Formik
              validationSchema={schema}
              onSubmit={handleFormSubmit}
              initialValues={{
                firstName: "",
                Email: "",
                Number: "",
                city: "",
                address: "",
                testName: "",
                file: null,
                date: "",
                time: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <form className="px-4 py-8" noValidate onSubmit={handleSubmit}>
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
                              className={`form-input mt-1 block w-[60%] py-2 border ${
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
                                type="text"
                                placeholder="___ _________"
                                name="Number"
                                value={values.Number}
                                onChange={handleChange}
                                className={`form-input w-[55%] border ${
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
                              name="address"
                              value={values.address}
                              onChange={handleChange}
                              rows={3}
                              className="form-textarea mt-1 block w-[60%] border border-gray-300"
                            />
                            {touched.address && errors.address && (
                              <span className="text-red-500">Required</span>
                            )}
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
                            <option value="">Select the City</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Multan">Multan</option>
                            <option value="Faisalabad">Faisalabad</option>
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
                                  name="Email"
                                  value={values.Email}
                                  onChange={handleChange}
                                  className="form-input mt-1 block py-2 w-[60%] border border-gray-300"
                                />
                              </label>
                            </div>
                            <div className="mb-4">
                              <label className="text-input">
                                <span className="text-[#2e3092]">
                                  Enter Your Test Name (optional)
                                </span>
                                <input
                                  type="text"
                                  name="testName"
                                  value={values.testName}
                                  onChange={handleChange}
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
                                  name="file"
                                  onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    handleChange({ target: { name: 'file', value: file } });
                                  }}
                                  className={`form-input mt-1 block w-[60%] border border-gray-300 py-2${
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
                                  name="date"
                                  value={values.date}
                                  onChange={handleChange}
                                  className="form-input mt-1 block w-[60%] border border-gray-300 py-2"
                                />
                              </label>
                            </div>
                            <div className="mb-4">
                              <label className="text-input">
                                <span className="text-[#2e3092]">Time</span>
                                <input
                                  type="time"
                                  name="time"
                                  value={values.time}
                                  onChange={handleChange}
                                  className="form-input mt-1 block w-[60%] border border-gray-300 py-2"
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
                              type="button"
                              onClick={toggleExpand}
                              className="read-less"
                            >
                              Read Less
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={toggleExpand}
                            className="read-more"
                          >
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
            <div className="object-cover">
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
