import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetFranchise = () => {
  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        const response = await axios.get('http://localhost:4444/api/franchises');
        setFranchises(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching franchise data');
        setLoading(false);
      }
    };

    fetchFranchises();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Franchise List</h2>
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Address</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Phone</th>
                <th className="py-2 px-4 border-b">City</th>
                <th className="py-2 px-4 border-b">Franchise Location</th>
                <th className="py-2 px-4 border-b">Franchise City</th>
                <th className="py-2 px-4 border-b">Franchise Area</th>
                <th className="py-2 px-4 border-b">Expected Rent</th>
              </tr>
            </thead>
            <tbody>
              {franchises.map((franchise) => (
                <tr key={franchise._id}>
                  <td className="py-2 px-4 border-b">{franchise.name}</td>
                  <td className="py-2 px-4 border-b">{franchise.address}</td>
                  <td className="py-2 px-4 border-b">{franchise.email}</td>
                  <td className="py-2 px-4 border-b">{franchise.phone}</td>
                  <td className="py-2 px-4 border-b">{franchise.city}</td>
                  <td className="py-2 px-4 border-b">{franchise.franchiseLocation}</td>
                  <td className="py-2 px-4 border-b">{franchise.franchiseCity}</td>
                  <td className="py-2 px-4 border-b">{franchise.franchiseArea}</td>
                  <td className="py-2 px-4 border-b">{franchise.expectedRent}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GetFranchise;
