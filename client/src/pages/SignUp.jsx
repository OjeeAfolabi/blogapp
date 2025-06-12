import { useState } from "react";
import { toast } from "react-toastify";

import React from "react";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    }
  }

 

  return (
    <div>
      <form onSubmit={signup}>
        <input
          type="text"
          placeholder="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
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
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
