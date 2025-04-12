import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '@mui/material';

const MainDashboard = () => {
  // Sample statistics data (replace with actual data)
  const totalTests = 100;
  const totalRegisteredPatients = 500;
  const totalFranchises = 10;

  // Franchises state
  const [franchises, setFranchises] = useState([]);
  const [franchiseLoading, setFranchiseLoading] = useState(true);
  const [franchiseError, setFranchiseError] = useState(null);
  const [franchisePage, setFranchisePage] = useState(1);
  const franchiseRecordsPerPage = 5;

  useEffect(() => {
    const fetchFranchises = async () => {
      try {
        const response = await axios.get('http://localhost:4444/api/franchises');
        setFranchises(response.data);
        setFranchiseLoading(false);
      } catch (error) {
        setFranchiseError('Error fetching franchise data');
        setFranchiseLoading(false);
      }
    };

    fetchFranchises();
  }, []);

  const handleFranchisePageChange = (event, value) => {
    setFranchisePage(value);
  };

  const currentFranchiseData = franchises.slice((franchisePage - 1) * franchiseRecordsPerPage, franchisePage * franchiseRecordsPerPage);

  // Users state
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(true);
  const [userError, setUserError] = useState(null);
  const [userPage, setUserPage] = useState(1);
  const userRecordsPerPage = 5;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/getUsers`);
        setUsers(response.data.users);
        setUserLoading(false);
      } catch (error) {
        setUserError('Error fetching users data');
        setUserLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleUserPageChange = (event, value) => {
    setUserPage(value);
  };

  const currentUserData = users.slice((userPage - 1) * userRecordsPerPage, userPage * userRecordsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Total Tests</h2>
          <div className="text-3xl font-bold text-center text-blue-500">{totalTests}</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Total Registered Patients</h2>
          <div className="text-3xl font-bold text-center text-green-500">{totalRegisteredPatients}</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Total Franchises</h2>
          <div className="text-3xl font-bold text-center text-yellow-500">{totalFranchises}</div>
        </div>
      </div>




      <div className="grid w-full grid-cols-1 lg:grid-cols-3 mt-5">

<div className="col-span-2">
  {franchiseLoading ? (
    <div>Loading...</div>
  ) : franchiseError ? (
    <div>{franchiseError}</div>
  ) : (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-0 md:p-4">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Franchise List</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-2 border-black">Name</th>
                <th className="py-2 px-4 border-2 border-black">Address</th>
                <th className="py-2 px-4 border-2 border-black">Email</th>
                <th className="py-2 px-4 border-2 border-black">Phone</th>
                <th className="py-2 px-4 border-2 border-black">City</th>
              </tr>
            </thead>
            <tbody>
              {currentFranchiseData
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((franchise) => (
                  <tr key={franchise._id}>
                    <td className="py-2 px-4 border-2 border-black">{franchise.name}</td>
                    <td className="py-2 px-4 border-2 border-black">{franchise.address}</td>
                    <td className="py-2 px-4 border-2 border-black">{franchise.email}</td>
                    <td className="py-2 px-4 border-2 border-black">{franchise.phone}</td>
                    <td className="py-2 px-4 border-2 border-black">{franchise.city}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            count={Math.ceil(franchises.length / franchiseRecordsPerPage)}
            page={franchisePage}
            onChange={handleFranchisePageChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  )}
</div>

<div className="col-span-1">
  {userLoading ? (
    <div>Loading...</div>
  ) : userError ? (
    <div>{userError}</div>
  ) : (
    <div className="flex flex-col items-center justify-center bg-gray-100 mt-4">
      <div className="bg-white p-8 rounded shadow-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">User List</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-2 border-black">Name</th>
                <th className="py-2 px-4 border-2 border-black">Email</th>
                <th className="py-2 px-4 border-2 border-black">Phone</th>
                {/* <th className="py-2 px-4 border-2 border-black">Address</th> */}
              </tr>
            </thead>
            <tbody>
              {currentUserData.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-2 border-black">{user.name}</td>
                  <td className="py-2 px-4 border-2 border-black">{user.email}</td>
                  <td className="py-2 px-4 border-2 border-black">{user.phone}</td>
                  {/* <td className="py-2 px-4 border-2 border-black">{user.address}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <Pagination
            count={Math.ceil(users.length / userRecordsPerPage)}
            page={userPage}
            onChange={handleUserPageChange}
            color="primary"
          />
        </div>
      </div>
    </div>
  )}
</div>
</div>








    </>
  );
};

export default MainDashboard;
