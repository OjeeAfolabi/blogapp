import React, { useState } from "react";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);  

  const createNewPost = async (e) => {
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.append ("file", file);
    

    e.preventDefault();
    const response = await fetch("http://localhost:5000/createpost", {
      method: "POST",
      body: data,
    });
    if (!title || !summary || !content|| !file) {
      toast.error("All fields are required!", {
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true,
        theme: "light",
        style: {
          backgroundColor: "white",
          color: "red",
        },
      });
      return;
    }
    if (response.ok) {
      toast.success("Post created successfully!"),
        {
          position: "top-right",
          autoClose: 1000,
          closeOnClick: true,
          theme: "light",
          style: {
            backgroundColor: "green",
            color: "white",
          },
        };
      setRedirect(true);
    }
  };
 if (redirect) {
    return <Navigate to={"/"} />;
  }
  

  return (
    <form onSubmit={createNewPost}>
      <input
        type="text"
        value={title}
        placeholder={"Title"}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        value={summary}
        placeholder={"Summary"}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <textarea
        value={content}
        cols={30}
        rows={10}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
     
    
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
