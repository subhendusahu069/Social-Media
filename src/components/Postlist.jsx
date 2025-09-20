import Post from "./Post";
// import { useContext, useState } from "react";
import { useContext } from "react";
import { PostList as postListData } from "../store/postliststore";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const Postlist = () => {
  const { postList, fatch } = useContext(postListData);
  // const [dataFatch, setDataFatch] = useState(false);
  //const [fatch, setFatch] = useState(false);
  const postArray = Array.isArray(postList)
    ? postList
    : Object.values(postList);

  //const controller = new AbortController();

  // const signal = controller.signal;

  // useEffect(() => {
  //   setFatch(true);
  //   fetch("https://dummyjson.com/posts",{ signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitalPost(data.posts);
  //       setFatch(false);
  //     });
  //   return () => controller.abort();

  // }, []);

  // useEffect(() => {
  //   setFatch(true);
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitalPost(data.posts);
  //       setFatch(false);
  //     });
  // }, []);

  // if (!dataFatch) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitalPost(data.posts);
  //     });
  //   setDataFatch(true);
  // }

  // const handleGetPostClick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitalPost(data.posts);
  //     });
  // };

  return (
    <>
      {fatch && <LoadingSpinner />}
      {!fatch && postList.length === 0 && <WelcomeMessage />}

      {!fatch && postArray.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default Postlist;
