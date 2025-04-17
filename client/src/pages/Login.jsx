import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const {setUserInfo} = useContext(UserContext)

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include", 
    });
    if (response.ok) {
      response.json().then(userInfo =>{
        setUserInfo(userInfo)
        setRedirect(true);
      })
      toast.success("Login successful!", {
        autoClose: 1500,
        position: "top-right",
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });


      } else {
        const errorMessage = await response.json();
        if (errorMessage === "User not found") {
          toast.error("No user found with this email!", {
            autoClose: 1500,
            position: "top-right",
          });
        } else if (errorMessage === "Wrong credentials") {
          toast.error("Incorrect password or email. Please try again!!!", {
            autoClose: 1500,
            position: "top-right",
          });
        }
      }
    }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default Login;

