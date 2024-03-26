import "./login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
// import { useAuth } from '../context/auth';
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Navbar from "../../Dashboard/Navbar";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const [auth, setAuth] = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  ///from function
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        'http://localhost:4444/api/v1/auth/login',
        { email, password }
      );

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        // setAuth({
        //   ...auth,
        //   user: res.data.user,
        //   token: res.data.token,
        // });

        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong ");
    }
  };

  return (
    <Layout>
      
      

    <div className="login">
      <div className="form">
        {/* Passing handleSubmit parameter tohtml form onSubmit property */}
        <form noValidate onSubmit={handleSubmit}>
          <div class="signup-logo">
            <img
              src="https://upload.guanliyuan.top/static/index/default/images/logo.png"
              alt=""
            />
          </div>
          <span>Login</span>
          {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Enter email id / username"
            className="form-control inp_text"
            id="email"
            required
          />

          <input
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="Enter password"
            className="form-control"
            required
          />

          <Link
            to="/forget-password"
            className="text-black  hover:underline"
            type="submit"
          >
            Forgot your password?
          </Link>
          <br />
          <br />
          {/* Click on submit button to submit the form */}
          <button type="submit">Login</button>
        </form>
        <br />
        <Link to="/register">
          <p className="text-black  hover:underline">Create the account </p>
        </Link>
      </div>
    </div>

    </Layout>
  );
}

export default Login;
