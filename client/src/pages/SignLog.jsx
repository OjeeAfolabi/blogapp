import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignLog = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [visible, setVisible] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-darkblue to-lightblue flex flex-col items-center justify-center p-6">
      <div
        id="container"
        className={`relative rounded-[30px] bg-slate-100 w-[750px] h-[450px] shadow-[0_0_30px_rgba(0,0,0,0.2)]
        transition-all duration-700 ease-in-out overflow-hidden`}
      >
        {visible && (
          <form
            className={`absolute right-0 w-1/2 h-full bg-slate-100 flex flex-col items-center justify-center z-[1]
          transition-all duration-700 ease-in-out
          ${
            isLogin
              ? "opacity-100 visible"
              : "opacity-0 invisible translate-x-full"
          }`}
          >
            <h1 className="text-darkcharcoal text-2xl font-semibold mb-4">
              Login
            </h1>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <input
                  className="w-[20rem] text-darkcharcoal border-none outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                  type="text"
                  placeholder="Email"
                  required
                />
                <i className="bx bxs-at"></i>
              </div>
              <div className="flex items-center gap-1">
                <input
                  className="w-[20rem] text-darkcharcoal border-none outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                  type="password"
                  placeholder="Password"
                  required
                />
                <i className="bx bxs-lock"></i>
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                  }}
                  className="py-2 px-8 text-[20px] text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full"
                >
                  Login
                </button>
              </div>
              <div className="w-full flex justify-center">
                <p className="text-xl">
                  Don't have an account?
                  <Link className="text-blue-600 text-xl ml-1" to="/signup">
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        )}
        {/* Login form */}

        {/* Signup form */}
        <form
          className={`absolute right-0 w-1/2 h-full flex flex-col items-center justify-center z-[1]
          transition-all duration-700 ease-in-out
          ${
            isLogin
              ? "opacity-0 invisible translate-x-full"
              : "opacity-100 visible translate-x-0"
          }`}
        >
          <h1 className="text-darkcharcoal text-2xl font-semibold mb-4">
            Sign Up
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <input
                className="w-[20rem] text-darkcharcoal border-none outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="text"
                placeholder="Firstname"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="w-[20rem] text-darkcharcoal border-none outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="text"
                placeholder="Lastname"
                required
              />
              <i className="bx bxs-user"></i>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="w-[20rem] text-darkcharcoal border-none outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="email"
                placeholder="Email"
                required
              />
              <i className="bx bxs-envelope"></i>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="w-[20rem] text-darkcharcoal border-none outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="password"
                placeholder="Password"
                required
              />
              <i className="bx bxs-lock"></i>
            </div>
            <div className="mt-4">
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className="py-2 px-8 text-[20px] text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full"
              >
                Sign Up
              </button>
            </div>
            <div className="w-full flex justify-center">
              <p className="text-xl">
                Already have an account?
                <Link className="text-blue-600 text-xl ml-1" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>

        {/* Toggle box */}
        {
          visible && (
                <div
          id="toggle-box"
          className={`absolute inset-0 z-0
            before:content-[''] before:absolute before:top-0 before:left-[-250%]
            before:w-[300%] before:h-full before:bg-blue-500 before:rounded-[150px] before:z-0
            transition-all duration-700 ease-in-out
            ${isLogin ? "translate-x-0" : "translate-x-1/2"}`}
        >
          <div
            id="left"
            className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center items-center text-white z-10"
          >
            <h1 className="text-3xl font-bold">Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button
              type="button"
              onClick={() => {
                setIsLogin(false);
                setVisible(false);
              }}
              className="bg-transparent border-2 px-6 py-1 mt-4 rounded-md"
            >
              Sign Up
            </button>
          </div>
          <div
            id="right"
            className="absolute right-[-50%] top-0 w-1/2 h-full flex flex-col justify-center items-center text-white z-10"
          >
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p>Already have an account?</p>
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className="bg-transparent border-2 px-6 py-1 mt-4 rounded-md"
            >
              Log In
            </button>
          </div>
        </div>
          )
        }
        
      </div>
    </div>
  );
};

export default SignLog;
