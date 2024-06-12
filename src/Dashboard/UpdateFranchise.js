import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { toast } from "react-toastify";

const UpdateFranchise = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    city: '',
    CNic: '',
    franchiseLocation: '',
    franchiseCity: '',
    franchiseArea: '',
    expectedRent: '',
    image: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  useEffect(() => {
    const fetchFranchise = async () => {
      try {
        const response = await axios.get(`http://localhost:4444/api/franchises/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching franchise data:', error);
      }
    };

    fetchFranchise();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== 'image') {
        errors[key] = 'This field is required';
      }
    });
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Create form data object
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.put(`http://localhost:4444/api/franchise/${id}`, data);
      setSubmissionStatus('Franchise updated successfully');
      console.log(response.data);
      toast.success('Franchise updated successfully');

      navigate('/'); // Redirect to the main page after successful update

    } catch (error) {
      console.error('Error updating franchise:', error);
      if (error.response && error.response.data && error.response.data.error) {
        setSubmissionStatus(error.response.data.error);
      } else {
        setSubmissionStatus('Error updating franchise');
        toast.error('Error updating franchise');
      }
    }
  };

  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const qrCodeSize = isLargeScreen ? 100 : 50;

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <div className="flex gap-[3rem] mb-[3rem] items-center">
            <QRCode value={`https://ldclab.vercel.app/franchiseform/${id}`} className="mb-4" size={qrCodeSize} />
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold mb-6 text-center">Edit Franchise Information</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { label: 'Name', name: 'name', type: 'text' },
                { label: 'Address', name: 'address', type: 'text' },
                { label: 'Email', name: 'email', type: 'email' },
                { label: 'Phone', name: 'phone', type: 'number', maxLength: 11 },
                { label: 'City', name: 'city', type: 'text' },
                { label: 'CNIC Number', name: 'CNic', type: 'number', maxLength: 13 },
                { label: 'Location of Franchise', name: 'franchiseLocation', type: 'text' },
                { label: 'City of Franchise', name: 'franchiseCity', type: 'text' },
                { label: 'Area of Franchise', name: 'franchiseArea', type: 'text' },
                { label: 'Expected Rent of Franchise', name: 'expectedRent', type: 'number' },
                { label: 'Franchisee Image', name: 'image', type: 'file' },
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
                    aria-describedby={field.name + 'Help'}
                  />
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
              Update
            </button>
            {submissionStatus && (
              <p className="mt-4 text-center text-lg font-semibold text-green-600">{submissionStatus}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateFranchise;
