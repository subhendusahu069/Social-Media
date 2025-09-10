import { useContext, useRef } from "react";
import { PostList } from "../store/postliststore";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIDElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      userId: userIDElement.current.value,
      title: postTitleElement.current.value,
      body: postBodyElement.current.value,
      reactions: reactionsElement.current.value,
      tags: tagsElement.current.value.split(",").map((tag) => tag.trim()), // Split by comma and trim spaces
    };

    userIDElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(postData);
  };
  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Enter your user id"
          ref={userIDElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title of your post"
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Context
        </label>
        <textarea
          type="textarea"
          className="form-control"
          id="body"
          placeholder="Tell us something..."
          ref={postBodyElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Post your reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="Post your reactions"
          ref={reactionsElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Post your tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Post your tags"
          ref={tagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
