import React from "react";



const Post = () => {
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
            Amazon reportedly submits last-minute bid to acquire TikTok
          </h2>
          <p className="flex gap-3">
            <a className="text-green-950 font-semibold" href="">
              Ojay Sylvester
            </a>
            <time>2025-04-02 8:07</time>
          </p>
          <p>
            Amazon has submitted a bid to acquire all of TikTok, according to a
            new report from The New York Times. The last-minute bid comes as
            TikTok faces an April 5 deadline to shed its Chinese ownership or
            face a ban in the U.S. However, the parties involved in the deal
            talks do not appear to be taking Amazon’s bid seriously, according
            to The Times’ report.
          </p>
        </div>
      </div>
      <div className="bg-[#b9925e] w-inherit h-[1px] mx-16"></div>
    </div>
  );
};

export default Post;
