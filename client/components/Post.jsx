import React from "react";
import { format } from "date-fns";
const Post = ({ title, summary, content, cover, createdAt }) => {
  return (
    <div className="w-[100%]">
      <div className=" mx-14 flex p-4 items-center gap-4">
        <div>
          <img className="w-[250px]" src={cover} alt="Post Cover" />
        </div>
        <div className="grid items-center">
          <h2 className="text-red-950">{title}</h2>
          <p className="flex gap-3">
            <a className="text-green-950 font-semibold" href="">
              Ojay Sylvester
            </a>
          </p>
          <p>{summary}</p>
          <p className="text-gray-600">{content}</p>
        </div>
        <time className="text-zinc-600 font-medium text-[12px]">
              {format(new Date(createdAt), "MMM d yyyy HH:mm a")}
            </time>
      </div>
      <div className="bg-[#b9925e] w-inherit h-[1px] mx-16"></div>
    </div>
  );
};

export default Post;
