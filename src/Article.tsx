import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button1 } from "./Button";

// const articleIds=[1,2,3,4,5];

const Article = () => {
  const navi = useNavigate();
  const onClick = (id: number) => {
    navi(`/article/${id}`);
  };
  const buttons = [];
  for (let id: number = 1; id <= 5; id++) {
    buttons.push(
      <Button1
        key={id}
        title={`to article:${id}`}
        disabled={false}
        onClick={() => onClick(id)}
      />
    );
  }
  return (
    <>
      <h1>This is article</h1>
      {buttons}
      {/* 2番目のやり方
            {Array.from({length:5},(_,i)=>(
                const id=i+1;
                return (<Button1 key={id} title={`to article: ${id}`} disabled={false} onClick={()=>onClick(id)} />
            )))} */}

      {/* 子ルートをここに表示 */}
      <Outlet />
    </>
  );
};

export default Article;
