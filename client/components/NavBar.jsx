//import { useEffect } from "react";
import React from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../src/UserContext";
// import logo from "/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  const logout = () => {
    fetch("http://localhost:5000/logout", {
      credentials: "include",
      method: "POST",
    }).then(() => {
      setUserInfo(null);
    });
  };
  const email = userInfo?.email;
  const firstname = userInfo?.firstname;
  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-4 -z-[-1000]  bg-orange-500">
        <div className="flex items-center gap-4">
          {email ? (
            <>
              <Link to="/createpost">Create New Post</Link>
              <div className="bg-[#b9925e] w-[2px] h-6"></div>
              <a href="/login" onClick={logout}>
                Log Out
              </a>
              <div>({firstname})</div>
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
