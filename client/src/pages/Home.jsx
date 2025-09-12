import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darkblue to-lightblue flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-elianto font-bold text-gray-800 mb-2">
          Welcome to MAGZILOG
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Creating your own story.....
        </p>
      </div>
      <Link
        to={"/signlog"}
        className="inline-flex items-center justify-center bg-blue-600 text-slate-100 px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;
