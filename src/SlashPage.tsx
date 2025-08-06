import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; 2番目のやり方で使用
import React from "react";

const SlashPage = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/home");
  };

  return (
    <>
      <h1>Here is index!</h1>
      {/* やり方2番目
      <Link onClick={onClick} to="/home">
        to home
      </Link> */}
      <a onClick={onClick}>to home</a>
    </>
  );
};

export default SlashPage;
