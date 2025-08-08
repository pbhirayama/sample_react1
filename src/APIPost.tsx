import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

type ApiResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const APIPost = () => {
  const fetchData = async (): Promise<ApiResponse[]> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: ApiResponse[] = await response.json();
    return data;
  };
  const [posts, setPosts] = useState<ApiResponse[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setPosts(data);
    });
  }, []);
  const navi = useNavigate();
  const onClick = (post: ApiResponse) => {
    navi(`/posts/${post.id}`, { state: { current: post } });
  };

  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          onClick={() => onClick(post)}
          style={{ cursor: "pointer" }}
        >
          <h2>{post.title}</h2>
          <tr />
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default APIPost;
