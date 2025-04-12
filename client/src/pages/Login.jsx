import { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [logDetails, setLogDetails] = useState({
    email: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogDetails({ ...logDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!logDetails.email || !logDetails.password) {
      toast.error("Please fill in all fields!", {
        autoClose: 1500,
        position: "top-right",
      });
      return;
    }

    try {
      // Send data to backend using fetch
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: logDetails.email,
          password: logDetails.password,
        }),
      });
      // const data = await response.json();

      if (response.ok) {
        toast.success("Login successful!", {
          autoClose: 1500,
          position: "top-right",
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
        setRedirect(true);
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
    } catch {
      // Handle network errors
      toast.error("Network error. Please try again!", {
        autoClose: 1500,
        position: "top-right",
      });
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={logDetails.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          value={logDetails.password}
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </>
  );
};

export default Login;
