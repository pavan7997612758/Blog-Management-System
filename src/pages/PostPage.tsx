import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<{ title: string; content: string }>();

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/${id}`).then((response) => {
      setPost(response.data);
    });
  }, [id]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostPage;
