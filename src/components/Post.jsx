import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../store/postliststore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "28rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor-pointer "
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hastag">
            {tag}
          </span>
        ))}
        <div>
          <span className="badge text-bg-success hastag">
            Like: {post.reactions.likes}
          </span>
          <span className="badge text-bg-success hastag">
            DisLike: {post.reactions.dislikes}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Post;
