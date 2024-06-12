import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const GetFranchise = () => {
  const [franchises, setFranchises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const recordsPerPage = 5;
  const navigate = useNavigate();

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

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4444/api/franchise/${id}`);
      setFranchises(franchises.filter(franchise => franchise._id !== id));
        toast.success('franchise deleted successfully ')
    } catch (error) {
      console.error('Error deleting franchise:', error);
        toast.error('Error deleting franchise',error )
    }
  };

  const handleEdit = (id) => {
    navigate(`/dashboard/edit-frenchise/${id}`);
  };

  const currentData = franchises.slice((page - 1) * recordsPerPage, page * recordsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100  w-full p-0  lg:p-4">
        <div className="bg-white    p-2 lg:p-8 rounded shadow-md   w-full  overflow-x-auto   ">
          <h2 className="text-2xl font-bold my-6 text-center">Franchise List</h2>
          <table className="w-full bg-white border    overflow-x-hidden">
            <thead>
              <tr>
                <th className="py-2 px-4 border-2 border-black">Name</th>
                <th className="py-2 px-4 border-2 border-black">Address</th>
                <th className="py-2 px-4 border-2 border-black">Email</th>
                <th className="py-2 px-4 border-2 border-black">Phone</th>
                <th className="py-2 px-4 border-2 border-black">City</th>
                <th className="py-2 px-4 border-2 border-black">Franchise Location</th>
                <th className="py-2 px-4 border-2 border-black">Franchise City</th>
                <th className="py-2 px-4 border-2 border-black">Franchise Area</th>
                <th className="py-2 px-4 border-2 border-black">Expected Rent</th>
                <th className="py-2 px-4 border-2 border-black">Image</th>
                <th className="py-2 px-4 border-2 border-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((franchise) => (
                <tr key={franchise._id}>
                  <td className="py-2 px-4 border-2 border-black">{franchise.name}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.address}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.email}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.phone}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.city}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.franchiseLocation}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.franchiseCity}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.franchiseArea}</td>
                  <td className="py-2 px-4 border-2 border-black">{franchise.expectedRent}</td>
                  <td className="py-2 px-4 border-2 border-black">
                    <img src={`http://localhost:4444/${franchise.image}`} alt={franchise.name} className='h-[50px]' />
                  </td>
                  <td className="py-2 px-4 border-2 border-black">
                    <button 
                      onClick={() => handleEdit(franchise._id)} 
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(franchise._id)} 
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-4">
            <Pagination
              count={Math.ceil(franchises.length / recordsPerPage)}
              page={page}
              onChange={handleChangePage}
              color="primary"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GetFranchise;
