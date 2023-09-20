import React from "react";
import { useState } from "react";
import facebook from "../../public/facebook.svg";
import google from "../../public/google.svg";
import linkedIn from "../../public/linkedin.svg";
import apple from "../../public/apple.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({});
  const { loading } = useSelector((state) => state.user);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    const updatedFormData = { ...formData };
    if (id === "first_name") {
      updatedFormData["last_name"] = value;
    } else if (id === "password") {
      updatedFormData["confirm_password"] = value;
    }
    updatedFormData[id] = value;
    setFormData(updatedFormData);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        username: formData.email,
        password: formData.password,
      };

      const config = {
        method: "post",
        url: "https://avantrio-frontend-training.herokuapp.com/api/auth/token/",
        headers: {
          "Content-Type": "application/json",
        },
        data: loginData,
      };

      dispatch(signInStart());

      const response = await axios(config);

      notify("Login successful", "success");
      dispatch(signInSuccess(response.data));

      if (response.data.success === false) {
        dispatch(signInFailure());
        return;
      }

      navigate("/dashboard");
    } catch (error) {
      dispatch(signInFailure(error));
      notify("Login failed", "error");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());

      const config = {
        method: "post",
        url: "https://avantrio-frontend-training.herokuapp.com/api/auth/register/",
        headers: {
          "Content-Type": "application/json",
        },
        data: formData,
      };

      const response = await axios(config);

      notify("Registration successful", "success");
      setIsLogin(true);
      dispatch(signInSuccess(response.data));

      if (response.data.success === false) {
        return;
      }
    } catch (error) {
      dispatch(signInFailure(error));
      notify("Registration failed", "error");
    }
  };

  const handleSubmit = isLogin ? handleLogin : handleSignUp;

  const notify = (message, type) => {
    const options = {
      position: "top-left",
    };
    if (type === "success") {
      toast.success(message, options);
    } else if (type === "error") {
      toast.error(message, options);
    }
  };
  return (
    <div className="flex justify-between items-center px-10 max-sm:pl-0 max-sm:px-1 max-sm:mx-3 pl-40 h-screen">
      <div className="flex flex-1 justify-center max-sm:hidden">
        <p className="text-6xl font-bold gradient poppins">
          Manage your Links Collection
        </p>
      </div>
      <div className="flex flex-1 justify-center items-center py-10 bg-white shadow-lg rounded-lg max-sm:mx-0 mx-28">
        <div className="w-full max-sm:px-6 px-16">
          <h1 className="text-3xl font-semibold text-[#30387D] gilroy">
            {isLogin ? "Login" : "Sign Up"}
          </h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 pt-5">
            {isLogin === false && (
              <>
                <label
                  htmlFor="name"
                  className="block text-sm text-[#30387D] poppins"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name here"
                  id="first_name"
                  className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder:italic"
                  onChange={handleChange}
                />
              </>
            )}
            <label
              htmlFor="email"
              className="block text-sm text-[#30387D] poppins"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email address here"
              id="email"
              className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D] placeholder:italic"
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="block text-sm text-[#30387D] poppins "
            >
              Password
            </label>
            <input
              type="password"
              placeholder="************"
              id="password"
              className="bg-slate-100 p-3 rounded-lg ring-1 ring-gray-500 hover:placeholder:text-[#30387D]"
              onChange={handleChange}
            />
            <div className="underline text-base font-semibold cursor-pointer text-[#6A82FF]">
              Forgot Password?
            </div>
            {isLogin ? (
              <button
                disabled={loading}
                className="bg-[#6A82FF] text-lg font-bold gilroy text-white p-3 rounded-lg hover:bg-[#536CF0] focus:bg-[#3E51B4]"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            ) : (
              <button
                disabled={loading}
                className="bg-[#6A82FF] text-lg font-bold gilroy text-white p-3 rounded-lg hover:bg-[#536CF0] focus:bg-[#3E51B4]"
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            )}
          </form>
          <span className="flex justify-center py-2 bg-white text-gray-500">
            <h2 className="">Or Login with</h2>
          </span>
          <div className="flex justify-center gap-5 px-20">
            <img src={facebook} alt="facebook" />
            <img src={google} alt="google" />
            <img
              src={linkedIn}
              alt="linkedIn"
              className="border-[#DADADA] border-[1px] rounded-[20px] px-5"
            />
            <img src={apple} alt="apple" />
          </div>
          <div className="flex gap-2 mt-5">
            <p>Don't have an account?</p>
            <div
              onClick={toggleForm}
              className="underline cursor-pointer text-[#4D74F9] gilroy font-bold"
            >
              {isLogin ? "Sign Up" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
