import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Layout from "../Layout/Layout";

function Signup() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'http://localhost:4444/api/v1/auth/register',
        { name, email, password, phone, address, answer }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="Signup p-[2rem] pb-[5rem] h-screen w-[100%] bg-gray-100">
        <div className="form bg-white rounded-lg   w-full mx-auto p-6 mt-16">
          <form onSubmit={handleSubmit}>
            <h1 className="text-4xl text-[#2e3092] mb-6">Signup</h1>

            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter Name"
              className="form-input  w-full"
              required
            />

            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              placeholder="Enter Address"
              className="form-input  w-full"
              required
            />

            <input
              type="tel"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              placeholder="Enter Phone Number"
              className="form-input  w-full"
              required
            />

            <input
              type="text"
              onChange={(e) => setAnswer(e.target.value)}
              value={answer}
              placeholder="Enter Secret Key"
              className="form-input  w-full"
              required
            />

            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter Email"
              className="form-input  w-full"
              required
            />

            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter Password"
              className="form-input  w-full"
              required
            />

            <button
              type="submit"
              className="bg-[#2e3092] text-white rounded-lg px-6 py-3 w-full mt-4"
            >
              Sign up
            </button>
          </form>
          <br />
          <Link to="/login">
            <p className="text-center text-black mr-[20px] hover:underline">
              Login
            </p>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
