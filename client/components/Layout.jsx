import React, { useContext } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { UserContext } from "../src/UserContext";

const Layout = () => {
  const { userInfo } = useContext(UserContext);
  console.log("User Info in Layout:", userInfo);
  return (
    <div>
      <NavBar />
      <main>
          <Outlet />
      </main>
    </div>
  );
};

export default Layout;
