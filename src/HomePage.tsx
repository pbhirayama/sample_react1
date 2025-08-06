import { useNavigate } from "react-router-dom";
import React from "react";

const HomePage = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/");
  };
  return (
    <>
      <h1>Here is home!</h1>
      <button onClick={onClick}>to index</button>
    </>
  );
};

export default HomePage;
