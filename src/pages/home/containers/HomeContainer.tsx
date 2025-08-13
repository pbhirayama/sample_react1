import { useNavigate } from "react-router-dom";
import { HomeContentPane } from "../components/panes/HomeContentPane";

export const HomeContainer = () => {
  const navi = useNavigate();

  const onClick = () => {
    navi("/");
  };

  return <HomeContentPane onClick={onClick} />;
};
