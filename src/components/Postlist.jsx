import Post from "./Post";
import { useContext } from "react";
import { PostList as postListData } from "../store/postliststore";
import WelcomeMessage from "./WelcomeMessage";

const Postlist = () => {
  const { postList, addInitalPost } = useContext(postListData);
  const postArray = Array.isArray(postList)
    ? postList
    : Object.values(postList);
  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
      });
  };

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostClick} />
      )}

      {postArray.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default Postlist;
