import React from 'react'
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from '../context/auth';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
 
  const [email, setEmail] = useState();
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  ///from function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forget-password`,
        { email, newPassword, answer }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong ");
    }
  };

 
 
  return (
    <div>
      
      <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>



        
                <div class="signup-logo">
                <img src="https://upload.guanliyuan.top/static/index/default/images/logo.png" alt=""/>
                
            </div>
                <span>Reset Password</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
           
                <input
              type="email"
              className="form-control"
              value={email}
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
           
           <input
              type="text"
              className="form-control"
              value={answer}
              placeholder="Enter your secret key "
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
            
            <input
              type="password"
              className="form-control"
              value={newPassword}
              placeholder="Enter Your NewPassword "
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            




                
                    <br/>
                {/* Click on submit button to submit the form */}
                <button type="submit">Reset Password</button>
              </form>
              <br/>
              <Link exect to="/signup"><p className='text-black  hover:underline'>Create the account </p></Link>
            </div>
          </div>
    </div>
  )
}

export default ForgetPassword