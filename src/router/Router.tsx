import { useRoutes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SlashPage from "../pages/SlashPage";
import Article from "../pages/Article";
import Articlesub from "../pages/article/Articlesub";
// import { Children } from "react";
import APIPost from "../pages/APIPost";
import APIPostsub from "../pages/posts/APIPostsub";
// import { Routes, Route } from 'react-router-dom';2番のやり方の時に使う

// ファイルごとに分ける、大規模な時におススメ
const Router = () => {
  const routingConfig = [
    {
      path: "/",
      element: <SlashPage />
    },
    {
      path: "/home",
      element: <HomePage />
    },
    {
      path: "/article",
      element: <Article />,
      children: [
        {
          path: ":id",
          element: <Articlesub />
        }
      ]
    },
    {
      path: "/posts",
      element: <APIPost />
    },
    {
      path: "/posts/:id",
      element: <APIPostsub />
    }
    // 想定外のパスの場合はページが存在しない場合の画面へ遷移
    // { path: '*', element: <NotFound /> }
  ];

  const routing = useRoutes(routingConfig);

  return routing;
};

// やり方2番目：ファイルごとに分けない、少数のときオススメ
// const Router = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//     </Routes>
//   );
// };

export default Router;
