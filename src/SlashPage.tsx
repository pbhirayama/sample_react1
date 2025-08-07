import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; 2番目のやり方で使用
import React from "react";
import { Button1 } from "./Button";

const SlashPage = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/home");
  };
  const onClickA = () => {
    navi("/article");
  };

  return (
    <>
      <h1>Here is index!</h1>
      {/* やり方2番目
      <Link onClick={onClick} to="/home">
        to home
      </Link> */}
      <a onClick={onClick}>to home</a>
      <Button1 disabled={false} title="to article" onClick={() => onClickA()} />
    </>
  );
};

export default SlashPage;
