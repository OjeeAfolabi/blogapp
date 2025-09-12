import { useState } from "react";
import { toast } from "react-toastify";

import React from "react";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function signup(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      body: JSON.stringify({ firstname, lastname, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      toast.success("Sign up successful!", {
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true,
        theme: "light",
        style: {
          backgroundColor: "green",
          color: "white",
        },
      });
      setRedirect(true);
    } else {
      toast.error("Sign up failed. Please try again.", {
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true,
        theme: "light",
        style: {
          backgroundColor: "white",
          color: "red",
        },
      });
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="bg-red-600 p-8 min-h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded shadow w-full max-w-md"
        onSubmit={signup}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border rounded"
        />
        <button className="w-full bg-red-600 text-white py-2 rounded font-semibold hover:bg-red-700 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
