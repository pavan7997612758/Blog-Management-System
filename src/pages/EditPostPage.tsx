import { useParams, useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import { useEffect, useState } from "react";
import axios from "axios";

const EditPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<{ title: string; content: string }>();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  const handleEditPost = (data: { title: string; content: string }) => {
    axios.put(`http://localhost:5000/posts/${id}`, data).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Edit Post</h1>
      {post && <PostForm initialData={post} onSubmit={handleEditPost} />}
    </div>
  );
};

export default EditPostPage;
