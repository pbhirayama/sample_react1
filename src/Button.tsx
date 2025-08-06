import React from "react";

type ButtonProps = {
  title: string;
  disabled?: boolean; //?はオプション…なくてもOK
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ disabled }) => {
  return (
    <>
      <button disabled={disabled}>button</button>
    </>
  );
};

export const Button1: React.FC<ButtonProps> = ({
  title,
  disabled = false,
  onClick,
}) => {
  return (
    <>
      <button disabled={disabled} onClick={() => onClick()}>
        {title}
      </button>
    </>
  );
};

export default Button;
