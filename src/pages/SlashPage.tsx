import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom"; 2番目のやり方で使用
// import React from "react";
import { Button1 } from "../parts/Button";

const SlashPage = () => {
  const navi = useNavigate();

  const onClickH = () => {
    navi("/home");
  };
  const onClickA = () => {
    navi("/article");
  };
  const onClickP = () => {
    navi("/posts");
  };

  return (
    <>
      <h1>Here is index!</h1>
      {/* やり方2番目
      <Link onClick={onClick} to="/home">
        to home
      </Link> */}
      {/* <a onClick={onClickH}>to home</a> */}
      <Button1 disabled={false} title="to home" onClick={() => onClickH()} />
      <Button1 disabled={false} title="to posts" onClick={() => onClickP()} />
      <Button1 disabled={false} title="to article" onClick={() => onClickA()} />
    </>
  );
};

export default SlashPage;
