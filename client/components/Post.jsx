import React from "react";
const Post = (title, summary, content) => {
  return (
    <div className="w-[100%]">
      <div className=" mx-14 flex p-4 items-center gap-4">
        <div>
          <img
            className="w-[500px]"
            src="https://techcrunch.com/wp-content/uploads/2022/09/amazon-logo.jpg?resize=1135,617"
            alt="amazon"
          />
        </div>
        <div className="grid items-center">
          <h2 className="text-red-950">
            {title}
          </h2>
          <p className="flex gap-3">
            <a className="text-green-950 font-semibold" href="">
              Ojay Sylvester
            </a>
            <time>2025-04-02 8:07</time>
          </p>
          <p>
            {summary}
          </p>
        </div>
      </div>
      <div className="bg-[#b9925e] w-inherit h-[1px] mx-16"></div>
    </div>
  );
};

export default Post;
