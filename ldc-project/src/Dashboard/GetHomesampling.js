import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';

const GetHomesampling = () => {
  const [homeSamplingList, setHomeSamplingList] = useState([]);

  useEffect(() => {
    const fetchHomeSampling = async () => {
      try {
        const response = await axios.get('http://localhost:4444/api/get-sample');
        setHomeSamplingList(response.data);
      } catch (error) {
        console.error('Error fetching home sampling data:', error);
      }
    };

    fetchHomeSampling();
  }, []);

  const handleEdit = (id) => {
    console.log('Edit clicked for sample with id:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete clicked for sample with id:', id);
  };

  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Intl.DateTimeFormat('en-GB', options).format(new Date(dateString));
  };

  const formatTime = (timeString) => {
    const [hour, minute] = timeString.split(':');
    const date = new Date();
    date.setHours(hour, minute);
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Home Sampling List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Test Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Prescription
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {homeSamplingList.map((sample) => (
              <tr key={sample._id}>
                <td className="px-6 py-4 whitespace-nowrap">{sample.firstName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sample.Email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sample.city}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sample.Number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sample.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{sample.testName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {/* <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js`}>
                    <div style={{ height: '500px' }}>
                      <Viewer fileUrl={`http://localhost:4444/${encodeURIComponent(sample.prescription)}`} />
                    </div>
                  </Worker> */}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{formatDate(sample.date)}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formatTime(sample.time)}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button onClick={() => handleEdit(sample._id)} className="mr-2 text-indigo-600 hover:text-indigo-900">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(sample._id)} className="text-red-600 hover:text-red-900">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetHomesampling;
