import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Articlesub = () => {
  const loca = useLocation();
  const from: string | undefined = loca.state.from;
  const urlParams = useParams<{ id: string }>();
  console.log("Asub");
  return (
    <>
      <h3>This is article {urlParams.id}</h3>
      {typeof from === "string" && <h4>from:{from}</h4>}
    </>
  );
};

export default Articlesub;
