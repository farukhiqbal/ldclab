import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import { useMediaQuery } from 'react-responsive';

const JobsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    city: '',
    cnic: '',
    appliedPosition: '',
    academicRecord: [''], // Start with one empty row
    experience: '',
    relevantExperience: '',
    profileImage: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files, dataset } = e.target;
    if (name === 'academicRecord') {
      const newAcademicRecord = [...formData.academicRecord];
      newAcademicRecord[dataset.index] = value;
      setFormData({ ...formData, academicRecord: newAcademicRecord });
    } else {
      setFormData({
        ...formData,
        [name]: type === 'file' ? files[0] : value,
      });
    }
  };

  const handleAddAcademicRecordRow = () => {
    setFormData({
      ...formData,
      academicRecord: [...formData.academicRecord, ''], // Add an empty string for a new row
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <div className="flex gap-[3rem] mb-[3rem] items-center">
          <QRCode value="https://ldclab.vercel.app/frenchisefrom" className="mb-4" size={qrCodeSize} />
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-bold mb-6 text-center">Job Application Form</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { label: 'Name', name: 'name', type: 'text' },
              { label: 'Address', name: 'address', type: 'text' },
              { label: 'Phone', name: 'phone', type: 'number', maxLength: 11 },
              { label: 'Email', name: 'email', type: 'email' },
              { label: 'City', name: 'city', type: 'text' },
              { label: 'CNIC', name: 'cnic', type: 'number', maxLength: 13 },
              { label: 'Applied Position', name: 'appliedPosition', type: 'text' },
              ...formData.academicRecord.map((record, index) => ({
                label: `Academic Record ${index + 1}`, // Dynamic label
                name: 'academicRecord', // All rows have the same name
                type: 'text',
                index, // Index to identify the row
              })),
              { label: 'Experience', name: 'experience', type: 'text' },
              { label: 'Relevant Experience', name: 'relevantExperience', type: 'text' },
              { label: 'Uploads Image', name: 'profileImage', type: 'file' }
            ].map((field, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={field.name + (field.index !== undefined ? `_${field.index}` : '')} className="block text-gray-700 font-bold mb-2">
                  {field.label}
                </label>
                <input
                  required
                  id={field.name + (field.index !== undefined ? `_${field.index}` : '')}
                  name={field.name}
                  type={field.type}
                  maxLength={field.maxLength}
                  value={field.name === 'academicRecord' ? formData.academicRecord[field.index] : formData[field.name]}
                  onChange={handleChange}
                  data-index={field.index !== undefined ? field.index : ''}
                  className={`w-full px-3 py-2 border ${formErrors[field.name] ? 'border-red-500' : 'border-gray-300'} rounded`}
                  aria-describedby={field.name + "Help"}
                />
                {formErrors[field.name] && (
                  <p className="text-red-500 text-xs italic" id={field.name + "Help"}>
                    {formErrors[field.name]}
                  </p>
                )}
                {field.name === 'academicRecord' && index === formData.academicRecord.length - 1 && (
                  <button type="button" onClick={handleAddAcademicRecordRow} className="mt-2 text-blue-500 hover:underline focus:outline-none">
                    Add Academic Record
                  </button>
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
      </div>
    </div>
  );
};

export default JobsForm;
