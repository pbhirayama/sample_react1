import { useLocation } from "react-router-dom";
import { APIPostsubContentPane } from "../components/panes/APIPostsubContentPane";

type ApiResponse = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const APIPostsubContainer = () => {
  const loca = useLocation();
  const current = loca.state.current as ApiResponse;

  return <APIPostsubContentPane title={current.title} body={current.body} />;
};
