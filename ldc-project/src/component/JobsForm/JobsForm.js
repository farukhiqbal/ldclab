import React, { useState } from 'react';
import axios from 'axios';
import QRCode from 'qrcode.react';
import { useMediaQuery } from 'react-responsive';
import Layout from '../Layout/Layout';
import {toast} from 'react-toastify'


const JobsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    city: '',
    cnic: '',
    appliedPosition: '',
    academicRecord: '',
    experience: '',
    relevantExperience: '',
    profileImage: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [formVisible, setFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataObj = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const response = await axios.post(`${process.env.REACT_APP_API}/api/create-job`, formDataObj, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
        toast.success('success',response.data)
      setSubmitSuccess(true);

      setFormVisible(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Error    submitting form',  error )
      setSubmitSuccess(false);
    }
  };

  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const qrCodeSize = isLargeScreen ? 100 : 50;

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <div className="flex gap-[1rem] md:gap-[1.5rem] lg:gap-[2rem] xl:gap-[3rem] mb-[3rem] items-center">
            <QRCode value="https://ldclab.vercel.app/job-form" className="mb-4" size={qrCodeSize} />
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold mb-6 text-center">Job Application Form</h2>
          </div>
          {formVisible ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  { label: 'Name', name: 'name', type: 'text' },
                  { label: 'Address', name: 'address', type: 'text' },
                  { label: 'Phone', name: 'phone', type: 'number', maxLength: 11 },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'City', name: 'city', type: 'text' },
                  { label: 'CNIC', name: 'cnic', type: 'number', maxLength: 13 },
                  {
                    label: 'Applied Position',
                    name: 'appliedPosition',
                    type: 'select',
                    options: [
                      'Online collection center',
                      'Physical collection center',
                      'Marketing opportunities',
                      'Training centers',
                      'Entrepreneurship',
                      'Business partnership',
                      'Ldc Community Services',
                      'Ldc Collection center membership',
                      'Ldc representative',
                      'Ldc Volunteer',
                      'Ldc blood donor society',
                      'Ldc CME Society',
                      'Ldc Medical awareness society',
                    ],
                  },
                  {
                    label: 'Academic Record',
                    name: 'academicRecord',
                    type: 'select',
                    options: ['Matric', 'Inter', 'Graduation', 'Master'],
                  },
                  { label: 'Experience', name: 'experience', type: 'text' },
                  { label: 'Relevant Experience', name: 'relevantExperience', type: 'text' },
                  { label: 'Uploads Image', name: 'profileImage', type: 'file' },
                ].map((field, index) => (
                  <div key={index} className="mb-4">
                    <label htmlFor={field.name} className="block text-gray-700 font-bold mb-2">
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        required
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${formErrors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded`}
                      >
                        <option value="">Select</option>
                        {field.options.map((option, optIndex) => (
                          <option key={optIndex} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        required
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        maxLength={field.maxLength}
                        value={field.type === 'file' ? undefined : formData[field.name]}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border ${formErrors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded`}
                      />
                    )}
                    {formErrors[field.name] && (
                      <p className="text-red-500 text-xs italic" id={field.name + 'Help'}>
                        {formErrors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="submit"
                className="w-full lg:w-[50%] bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-200 mt-4"
              >
                Apply Now
              </button>
            </form>
          ) : (
            <div className="text-center">
              <p className="text-green-500 text-xl font-bold">Your application has been submitted successfully!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default JobsForm;
