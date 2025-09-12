import React, { useEffect, useContext } from "react";
import Post from "../../components/Post";
import { UserContext } from "../UserContext";

const IndexPage = () => {
  const [posts, setPosts] = React.useState([]);
  const { userInfo } = useContext(UserContext);

  console.log("User Info in IndexPage:", userInfo);

  useEffect(() => {
    if (userInfo) {
      fetch("http://localhost:5000/post").then((response) => {
        response.json().then((posts) => {
          setPosts(posts);
        });
      });
    }
  }, [userInfo]);

  if (!userInfo) {
    return <div>null</div>;
  } else {
    return (
      <>
        {posts.length > 0 &&
          posts.map((post) => <Post {...post} key={post._id} />)}
      </>
    );
  }
};

export default IndexPage;
