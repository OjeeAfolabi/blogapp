import React, { useState } from "react";
// import {toast} from "react-toastify";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [files, setFiles] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  
   const createNewPost = async (e)=>{
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("file", files[0]);
    data.set("date", date);
    data.set("content", content);
    data.set("author", author); 
    
      e.preventDefault();  
   const response = await   fetch("http://localhost:5000/createpost", {
        method: "POST",
        body: data,
      })
      console.log(await response.json)
  }

  return (
    <form onSubmit={createNewPost}>
      <input type="text" value={title} placeholder={"Title"} onChange={(e)=>setTitle(e.target.value)} />
      <input type="summary" value={summary} placeholder={"Summary"} onChange={(e) => setSummary(e.target.value)} />
      <input type="file" onChange={e=>setFiles(e.target.files)} />
      <textarea value={content} cols={30} rows={10} onChange={(e)=>setContent(e.target.value)}></textarea>
      <input type="text" placeholder={"Author"} value={author} onChange={(e)=> setAuthor(e.target.value)} />
      <input type="date" value={date} placeholder={"Date"} onChange={(e)=> setDate(e.target.value)} />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
