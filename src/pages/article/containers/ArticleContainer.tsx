import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button1 } from "../../../parts/Button";

export const ArticleContainer = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined);
  const urlParams = useParams<{ id?: string | undefined }>();
  useEffect(() => {
    setSelectedId(urlParams.id);
  }, [urlParams.id]);
  const navi = useNavigate();
  const onClick = (id: number) => {
    navi(`/article/${id}`, { state: { from: selectedId } });
  };
  const buttons = [];
  for (let id: number = 1; id <= 5; id++) {
    buttons.push(<Button1 key={id} title={`to article:${id}`} disabled={false} onClick={() => onClick(id)} />);
  }
  return <>{buttons}</>;
};
