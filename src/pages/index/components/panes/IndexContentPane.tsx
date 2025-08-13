import Button from "../../../../parts/Button";
import { Button1 } from "../../../../parts/Button";
import Checkbox from "../../../../parts/Checkbox";

type IndexProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
  onClickH: () => void;
  onClickA: () => void;
  onClickP: () => void;
};

export const IndexContentPane = ({ isChecked, onChange, onClickH, onClickA, onClickP }: IndexProps) => (
  <>
    <h1>Here is index!</h1>
    {/* やり方2番目
      <Link onClick={onClick} to="/home">
        to home
      </Link> */}
    {/* <a onClick={onClickH}>to home</a> */}
    <Checkbox isChecked={isChecked} onChange={onChange} />
    <Button disabled={isChecked} title='button' onClick={() => {}} />
    <Button1 disabled={false} title='to home' onClick={() => onClickH()} />
    <Button1 disabled={false} title='to posts' onClick={() => onClickP()} />
    <Button1 disabled={false} title='to article' onClick={() => onClickA()} />
  </>
);
