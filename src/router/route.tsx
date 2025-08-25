import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Outlet, Link } from "react-router-dom";
import Article from "../pages/article/components/Article";
import Articlesub from "../pages/article/components/Articlesub";

const route = () => {
  return (
    <Router>
      <Routes>
        <Route path='/article/' element={<Article />}>
          <Route path=':id' element={<Articlesub />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default route;
