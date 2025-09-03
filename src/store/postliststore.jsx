import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  modifiyPost: () => {},
});

const postListReducer = (currPostList, action) => {
   
  let newPostList = currPostList;
  if (action.type === "DELETE_POST"){
     newPostList = newPostList.filter((post) => post.id !== action.payload);
    }
    else if (action.type === "ADD_POST"){
       newPostList = [action.payload, ...newPostList];      
    }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POSTLIST
  );

  const addPost = (postData) => {
    dispatchPostList(
      { type: "ADD_POST", 
        payload: { 
          id: Math.random().toString(), // Generate a random ID for the new post
          ...postData,
          // title: postData.title,
          // body: postData.body,
          // reactions: postData.reactions,
          // userId: postData.userId,
          // tags: postData.tags,
          
        } 
      }
    );
  };
  const deletePost = (postid) => {
    dispatchPostList(
      { type: "DELETE_POST", 
        payload: postid}
      );
    };


  const modifiyPost = () => {};
  return (
    <PostList.Provider value={{ postList, addPost, deletePost, modifiyPost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POSTLIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi friends, i am going to Mumbai for my vaction. Hope you are enjoying alot. see you soon",
    reactions: 2,
    userId: "user-2",
    tags: ["vaction", "Mumbai", "enjoying"],
  },
  {
    id: 2,
    title: "Going to Delhi",
    body: "Hi friends, i am going to Delhi for my vaction. Hope you are enjoying alot. see you soon",
    reactions: 1,
    userId: "user-3",
    tags: ["vaction", "Delhi", "enjoying"],
  },
];

export default PostListProvider;
