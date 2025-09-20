import { createContext, useReducer, useState, useEffect } from "react";
import Post from "../components/Post";

export const PostList = createContext({
  postList: [],
  fatch: false,
  addPost: () => {},  
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = Array.isArray(currPostList)
    ? currPostList
    : Object.values(currPostList);
  if (action.type === "DELETE_POST") {
    newPostList = newPostList.filter((post) => post.id !== action.payload);
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...newPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [fatch, setFatch] = useState(false);
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    //DEFAULT_POSTLIST,
    []
  );

  const addPost = (postData) => {
    console.log(postData)
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        //id: Math.random().toString(), // Generate a random ID for the new post
        ...postData,
      },
    });
  };

  const addInitalPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        ...posts,
      },
    });
  };

  const deletePost = (postid) => {
    dispatchPostList({ type: "DELETE_POST", payload: postid });
  }; 

  useEffect(() => {
    setFatch(true);
     const controller = new AbortController();
    const signal = controller.signal;
    
    fetch("https://dummyjson.com/posts",{ signal })
      .then((res) => res.json())
      .then((data) => {
        addInitalPost(data.posts);
        setFatch(false);
      });
    return () => controller.abort();

  }, []);

  return (
    <PostList.Provider value={{ postList,fatch, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POSTLIST = [
//   {
//     id: 1,
//     title: "Going to Mumbai",
//     body: "Hi friends, i am going to Mumbai for my vaction. Hope you are enjoying alot. see you soon",
//     reactions: 2,
//     userId: "user-2",
//     tags: ["vaction", "Mumbai", "enjoying"],
//   },
//   {
//     id: 2,
//     title: "Going to Delhi",
//     body: "Hi friends, i am going to Delhi for my vaction. Hope you are enjoying alot. see you soon",
//     reactions: 1,
//     userId: "user-3",
//     tags: ["vaction", "Delhi", "enjoying"],
//   },
// ];

export default PostListProvider;
