import { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    });

    if (response.ok) {
      toast.success("Login successful!", {
        autoClose: 1000,
        position: "top-right",
        style: {
          background: "#003200",
          color: "#ede6b9",
        },
      });
      setRedirect(true);
    } else {
      toast.error("Login failed! Please check your credentials.",{
        autoclose: 10,
        position: "top-right",
        style: {
          background: "#3c0000",
          color: "#ede6b9",
        },
      });
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
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
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
