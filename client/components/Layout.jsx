import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <NavBar />
        <main className="pt-16"> 
      <Outlet />
    </main>
    </div>
  );
};

export default Layout;
