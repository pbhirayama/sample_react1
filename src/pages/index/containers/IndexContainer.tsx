import { useNavigate } from "react-router-dom";
import { IndexContentPane } from "../components/panes/IndexContentPane";
import { useState } from "react";

export const IndexContainer = () => {
  const navi = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const onClickH = () => {
    navi("/home");
  };
  const onClickA = () => {
    navi("/article");
  };
  const onClickP = () => {
    navi("/posts");
  };

  const onChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  return (
    <IndexContentPane
      isChecked={isChecked}
      onChange={onChange}
      onClickA={onClickA}
      onClickH={onClickH}
      onClickP={onClickP}
    />
  );
};
