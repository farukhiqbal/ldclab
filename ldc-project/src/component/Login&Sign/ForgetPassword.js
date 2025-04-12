import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forget-password`,
        { email, newPassword, answer }
      );

      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div>
      <div className="login">
        <div className="form">
          <form noValidate onSubmit={handleSubmit}>
            <div className="signup-logo">
              <img
                src="https://upload.guanliyuan.top/static/index/default/images/logo.png"
                alt="Logo"
              />
            </div>
            <span>Reset Password</span>

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
              placeholder="Enter your secret key"
              onChange={(e) => setAnswer(e.target.value)}
              required
            />

            <input
              type="password"
              className="form-control"
              value={newPassword}
              placeholder="Enter Your New Password"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <br />
            <button type="submit">Reset Password</button>
          </form>
          <br />
          <Link to="/signup">
            <p className="text-black hover:underline">Create the account</p>
          </Link>
        </div>
      </div>
      {/* ToastContainer should be added to allow toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default ForgetPassword;
