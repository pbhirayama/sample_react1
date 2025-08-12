import React from "react";

type ButtonProps = {
  title: string;
  disabled?: boolean; //?はオプション…なくてもOK
  onClick: () => void;
  selectedId?: number | null;
  id?: number;
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
  selectedId,
  id,
}) => {
  const isSelected = selectedId === id;
  return (
    <>
      <button
        disabled={disabled}
        onClick={() => onClick()}
        style={{ backgroundColor: isSelected ? "lightblue" : "white" }}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
