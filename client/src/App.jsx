import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "./pages/Login";
import IndexPage from "./pages/IndexPage";
import SignUp from "./pages/SignUp";
import { UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <>
      <UserContextProvider>
        <ToastContainer hideProgressBar={true} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />
          </Route>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
