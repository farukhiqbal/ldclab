import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Layout from '../Layout/Layout'
import { useMediaQuery } from 'react-responsive';

const FrenchiseForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    city: '',
    cnic: '',
    franchiseLocation: '',
    franchiseCity: '',
    franchiseArea: '',
    expectedRent: '',
    logo: null,
    franchiseImage: null,
  });
  
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit the form data
    // Handle file uploads as needed
  };


  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' }); 
  const qrCodeSize = isLargeScreen ? 100 : 50;

  return (
    <Layout>

  <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <div className="flex gap-[3rem]  mb-[3rem] items-center">
        <QRCode value="https://ldclab.vercel.app/frenchisefrom" className="mb-4" size={qrCodeSize} />

          <h2 className="       text-[1.5rem]     md:text-[2rem]     lg:text-[3rem] font-bold mb-6 text-center">Franchise Information</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Address', name: 'address', type: 'text' },
              { label: 'Phone', name: 'phone', type: 'number', maxLength: 11  },
              { label: 'City', name: 'city', type: 'text' },
              { label: 'CNIC Number', name: 'cnic', type: 'number', maxLength: 13  },
              { label: 'Location of Franchise', name: 'franchiseLocation', type: 'text' },
              { label: 'City of Franchise', name: 'franchiseCity', type: 'text' },
              { label: 'Area of Franchise', name: 'franchiseArea', type: 'text' },
              { label: 'Expected Rent of Franchise', name: 'expectedRent', type: 'number' },
              { label: 'Franchisee Image', name: 'franchiseImage', type: 'file' }
            ].map((field, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={field.name} className="block text-gray-700 font-bold mb-2">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  maxLength={field.maxLength}
                  name={field.name}
                  type={field.type}
                  value={field.type !== 'file' ? formData[field.name] : undefined}
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
            className="w-full  lg:w-[50%] bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition duration-200 mt-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>







    </Layout>
  )
}

export default FrenchiseForm