import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreatePostPage = () => {
  const navigate = useNavigate();

  const handleCreatePost = (data: { title: string; content: string }) => {
    axios.post("http://localhost:5000/posts", data).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Create Post</h1>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePostPage;
