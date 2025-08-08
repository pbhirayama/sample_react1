import React from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

type ApiResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const APIPostsub = () => {
  const loca = useLocation();
  const current = loca.state.current;
  return (
    <>
      <h2>{current.title}</h2>
      <tr />
      <p>{current.body}</p>
    </>
  );
};

export default APIPostsub;
