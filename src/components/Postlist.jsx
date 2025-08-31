import Post from "./Post" 
import { useContext } from "react";
import { PostList as postListData } from "../store/postliststore";

const Postlist = () => {
 const {postList} =  useContext(postListData);
 console.log(postList);
  return(
    <>
    {postList.map((post) => (
    <Post key={post.id} post={post}/>
    ))}
    </>
  );
};
export default Postlist;