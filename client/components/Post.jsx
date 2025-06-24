import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const getFirst30WordsContent = (text) => {
  if (!text) return "";
  const words = text.split(/\s+/);
  return words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
};

const getFirst10WordsSummary = (text) => {
  if (!text) return "";
  const words = text.split(/\s+/);
  return words.slice(0, 10).join(" ") + (words.length > 10 ?"." : "");
};

const Post = ({ _id, title, summary, content, cover, createdAt, author }) => {
  return (
    <div className="w-[100%] relative">
      <time className="text-zinc-600 font-medium text-[12px] absolute top-4 right-16">
        {format(new Date(createdAt), "MMM d yyyy HH:mm a")}
      </time>
      <div className=" mx-14 flex p-4 items-center gap-4">
        <div>
          <Link to={`/post/${_id}`}>
            <img
              className="w-[200px] h-[120px] object-cover"
              src={"http://localhost:5000/" + cover}
              alt="Post Cover"
            />
          </Link>
        </div>
        <div className="grid items-center w-[100%]">
          <Link to={`/post/${_id}`}>
            <h2 className="text-red-950">{title}</h2>
          </Link>
          <div className="flex gap-3">
            <span className="text-green-950 font-semibold inline-flex gap-2">
              Created By:
              <p className="text-gray-500 font-medium">{author?.firstname}</p>
            </span>
          </div>
          <p>{getFirst10WordsSummary(summary)}</p>
          <p className="text-gray-600">{getFirst30WordsContent(content)}</p>
        </div>
      </div>
      <Link to = {`/post/${_id}`}>
          <button className="bg-[#b9925e] text-white px-2 py-1 rounded-md hover:bg-[#a57b4c] transition-all duration-300 absolute bottom-2 right-16">
            Read More
          </button>
        </Link>
      <div className="bg-[#b9925e] w-inherit h-[1px] mx-16"></div>
    </div>
  );
};

export default Post;
