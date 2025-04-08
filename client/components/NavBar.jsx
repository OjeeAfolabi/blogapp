import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#829079] flex justify-between items-center px-4 mb-10 ">
      <div>
        <Link to="/">
          <img className="w-10 py-2" src={logo} alt="" />
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to="/login">Log In</Link>
        <div className="bg-[#b9925e] w-[2px]"></div>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
};

export default NavBar;
