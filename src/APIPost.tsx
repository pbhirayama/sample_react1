import { useQuery } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

type ApiResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const fetchPosts = async (): Promise<ApiResponse[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch posts");
  return await response.json();
};

const APIPost = () => {
  //   const fetchData = async (): Promise<ApiResponse[]> => {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data: ApiResponse[] = await response.json();
  //     return data;
  //   }; 実装練習5のやつ
  const {
    data: posts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  //   const [posts, setPosts] = useState<ApiResponse[]>([]); 実装練習5のやつだけど使わないかも？

  //   useEffect(() => {
  //     fetchData().then((data) => {
  //       setPosts(data);
  //     });
  //   }, []); 実装練習5のやつ
  const navi = useNavigate();
  const onClick = (post: ApiResponse) => {
    navi(`/posts/${post.id}`, { state: { current: post } });
  };

  if (isLoading) return <p>読み込み中…</p>;
  if (isError || !posts) return <p>データ取得に失敗しました</p>;

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
