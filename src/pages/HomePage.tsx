import { useNavigate } from "react-router-dom";
import { Button1 } from "../parts/Button";
// import React from "react";

const HomePage = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/");
  };
  return (
    <>
      <h1>Here is home!</h1>
      <Button1 onClick={onClick} title="to index" />
    </>
  );
};

export default HomePage;
