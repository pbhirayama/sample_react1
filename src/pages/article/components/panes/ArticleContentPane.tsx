import { Outlet } from "react-router-dom";
// import React from "react";
import { ArticleContainer } from "../../containers/ArticleContainer";

export const ArticleContentPane = () => (
  <>
    <h1>This is article</h1>
    <ArticleContainer />
    {/* 2番目のやり方
            {Array.from({length:5},(_,i)=>(
                const id=i+1;
                return (<Button1 key={id} title={`to article: ${id}`} disabled={false} onClick={()=>onClick(id)} />
            )))} */}

    {/* 子ルートをここに表示 */}
    <Outlet />
  </>
);
