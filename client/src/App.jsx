import "./App.css";
import Post from "../components/Post";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
