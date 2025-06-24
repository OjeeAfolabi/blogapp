import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/post/${id}`)
      .then((response) =>
        response.json().then((postInfo) => {
          setPostInfo(postInfo);
        })
      );
  }, [id]);

  if (!postInfo) return null;

  return (
    <div>
      <h1 className="text-3xl text-center font-semibold mt-4">
        {postInfo.title}
      </h1>
        <div className=" mx-auto">
          <img src={`http://localhost:5000/${postInfo.cover}`} className="w-[700px] h-[200px] object-cover rounded-md mx-auto"  alt="" />
        </div>
        <time className="text-zinc-600 font-medium text-[12px]">
        {postInfo.createdAt
          ? format(new Date(postInfo.createdAt), "MMM d yyyy HH:mm a")
          : ""}
      </time>
      <div>
        <span className="text-green-950 font-normal inline-flex gap-2">
          By:
          <p className="text-[15px]">@ {postInfo.author?.firstname}</p>
        </span>
        <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
      </div>
    </div>
  );
};

export default PostPage;