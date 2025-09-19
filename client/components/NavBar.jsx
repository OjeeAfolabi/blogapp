import { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { UserContext } from "../src/UserContext";
import { Link, useNavigate } from "react-router-dom";
import SignOutModal from "../src/prompt/SignOutModal";

const NavBar = ({ setOverflow }) => {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const [logoutModal, setLogoutModal] = useState(false);
  const navigate = useNavigate();

  const signoutHandler = () => {
    setLogoutModal(true);
    setOverflow("hidden");
  };

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
      navigate("/signlog");
    });
  };
  const email = userInfo?.email;
  const firstname = userInfo?.firstname;
  return (
    <>
      {email ? (
        <>
          <nav className="fixed top-0 left-0 w-full flex items-center py-4 px-4 bg-orange-500 z-10">
            <div className="flex  w-full items-center justify-between">
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
                  <button onClick={signoutHandler}>Log Out</button>
                </div>
                <div>
                  <div>({firstname})</div>
                </div>
              </div>
            </div>
          </nav>

          {logoutModal &&
            ReactDOM.createPortal(
              <SignOutModal
                setLogoutModal={setLogoutModal}
                setOverflow={setOverflow}
                logout={logout}
              />,
              document.getElementById("portal")
            )}
        </>
      ) : null}
    </>
  );
};

export default NavBar;
