import { useNavigate } from "react-router-dom";
import React from "react";

const SlashPage = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/home");
  };

  return (
    <>
      <h1>Here is index!</h1>
      <a onClick={onClick}>to home</a>
    </>
  );
};

export default SlashPage;
