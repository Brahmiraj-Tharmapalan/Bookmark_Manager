import React from "react";
import { useState } from "react";
import facebook from "../../public/facebook.svg";
import google from "../../public/google.svg";
import linkedIn from "../../public/linkedin.svg";
import apple from "../../public/apple.svg";
import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const response = await axios.post(
        "https://avantrio-frontend-training.herokuapp.com/api/auth/register/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);

      setLoading(false);

      if (response.data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  console.log(formData);
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
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
          <p className="text-red-700 mt-5">
            {error && "Something went wrong!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
