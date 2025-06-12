import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";


function App() {
  return (
    <>
      <UserContextProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createpost" element={<CreatePost />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
