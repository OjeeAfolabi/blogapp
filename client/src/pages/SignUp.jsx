import { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstname ||
      !formData.lastname ||
      !formData.email ||
      !formData.password
    ) {
      toast.error("Please fill in all fields!", {
        autoClose: 1500,
        position: "top-center",
      });
      return;
    }

    try {
      // Send data to backend using fetch
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        toast.success("Signup successful!", {
          autoClose: 1500,
          position: "top-center",
          style: {
            backgroundColor: "green",
            color: "white",
          },
        });
      } else {
        toast.error("Signup failed, try again", {
          autoClose: 1500,
          position: "top-right",
        });
      }
    } catch {
      // Handle network errors
      toast.error("Network error. Please try again!", {
        autoClose: 1500,
        position: "top-right",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};
export default SignUp;
