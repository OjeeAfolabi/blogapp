import React from "react";
import { Link } from "react-router-dom";

const SignLog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darkblue to-lightblue flex flex-col items-center justify-center p-6">
      <div className="rounded-[30px] bg-slate-100 relative w-[750px] h-[400px] shadow-[0_0_30px_rgba(0,0,0,0.2)] ">
        <form className="absolute right-0 w-1/2 h-[100%] bg-slate-100 flex flex-col items-center justify-center z-[1] ">
          <h1 className="text-darkcharcoal text-2xl font-semibold mb-4">
            Login
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <input
                className="relative w-[20rem] text-darkcharcoal border-none border-0 outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="text"
                placeholder="Email"
                required
              />
              <i class="bx  bxs-at"></i>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="relative w-[20rem] text-darkcharcoal border-none border-0 outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="password"
                placeholder="Password"
                required
              />
              <i class="bx bxs-lock"></i>
            </div>
            <div className="mt-4">
              <button className="py-2 px-8 text-[20px] text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full">
                Login
              </button>
            </div>
            <div className="w-full flex  justify-center">
              <p className="text-xl">
                Don't have an account?
                <Link className="text-blue-600 text-xl ml-1" to="/signup">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </form>

        {/* Register page */}

        <form className="absolute right-0 w-1/2 h-[100%] bg-gray-300  flex flex-col items-center justify-center invisible">
          <h1 className="text-darkcharcoal text-2xl font-semibold mb-4">
            Sign Up
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1">
              <input
                className="relative w-[20rem] text-darkcharcoal border-none border-0 outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="text"
                placeholder="firstname"
                required
              />
              <i class="bx  bxs-user"></i>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="relative w-[20rem] text-darkcharcoal border-none border-0 outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="text"
                placeholder="Lastname"
                required
              />
              <i class="bx  bxs-user"></i>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="relative w-[20rem] text-darkcharcoal border-none border-0 outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="email"
                placeholder="Email"
                required
              />
              <i class="bx  bxs-envelope"></i>
            </div>
            <div className="flex items-center gap-1">
              <input
                className="relative w-[20rem] text-darkcharcoal border-none border-0 outline-none rounded-tl-[10px] rounded-br-[10px] p-3 text-lg"
                type="password"
                placeholder="Password"
                required
              />
              <i class="bx bxs-lock"></i>
            </div>
            <div className="mt-4">
              <button className="py-2 px-8 text-[20px] text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full">
                Sign Up
              </button>
            </div>
            <div className="w-full flex justify-center">
              <p className="text-xl">
                Already have an account?
                <Link className="text-blue-600 text-xl" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>

        <div
          className="absolute inset-0 z-0
             before:content-[''] before:absolute before:top-0 before:left-[-250%]
             before:w-[300%] before:h-full before:bg-blue-500 before:rounded-[150px]
             before:z-0"
        >
          <div className="absolute left-0 top-0 w-1/2 h-full flex flex-col justify-center items-center text-white  z-10 ">
            <h1 className="text-3xl font-bold">Hello, Welcome!</h1>
            <p>Don't have an account?</p>
            <button className="bg-transparent border-2 px-6 py-1 mt-4 rounded-md">
              Sign Up
            </button>
          </div>
          <div className="absolute right-[-50%] top-0 w-1/2 h-full flex flex-col justify-center items-center text-white  z-10">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p>Already have an account?</p>
            <button className="bg-transparent border-2 px-6 py-1 mt-4 rounded-md">
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLog;
