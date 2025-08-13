import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ArticlesubContentPane } from "../components/panes/ArticlesubContentPane";

export const ArticlesubContainer = () => {
  const loca = useLocation();
  const from: string | undefined = loca.state.from;
  const urlParams = useParams<{ id: string }>();

  const id = urlParams.id ?? "unknown";

  return <ArticlesubContentPane id={id} from={from} />;
};
