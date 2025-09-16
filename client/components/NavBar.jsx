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
      <nav className="fixed top-0 left-0 w-full flex items-center py-4 px-4 bg-orange-500 z-10">
        <div className="flex  w-full items-center justify-between">
          {email ? (
            <>
              <div>
                <Link
                  to="/index"
                  className="text-4xl font-elianto text-darkcharcoal"
                >
                  MAGZILOG
                </Link>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div className="ml-4 text-xl">
                  <Link to="/index" className="  text-darkcharcoal">
                    Home
                  </Link>
                </div>
                <div className="text-xl">
                  <Link to="/index" className="  text-darkcharcoal">
                    My Blogs
                  </Link>
                </div>

                <div className="text-xl">
                  <Link to="/index" className="  text-darkcharcoal">
                    All Blogs
                  </Link>
                </div>
                <div className="text-xl">
                  <Link to="/index" className="  text-darkcharcoal">
                    Latest Posts
                  </Link>
                </div>
              </div>
              <div className="flex text-xl gap-2  w-[30%]">
                <div>
                  <Link to="/createpost">Create New Post</Link>
                </div>
                <span>
                  <div className="bg-[#b9925e] w-[2px] h-6"></div>
                </span>
                <div>
                  <Link href="/login" onClick={logout}>
                    Log Out
                  </Link>
                </div>
                <div>
                  <div>({firstname})</div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
