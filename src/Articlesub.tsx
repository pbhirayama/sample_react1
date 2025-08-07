import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Articlesub = () => {
  const urlParams = useParams<{ id: string }>();
  return (
    <>
      <h3>This is article {urlParams.id}</h3>
    </>
  );
};

export default Articlesub;
