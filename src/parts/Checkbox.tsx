import React from "react";

type CheckboxProps = {
  isChecked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ isChecked, onChange }) => {
  return (
    <>
      <input type='checkbox' checked={isChecked} onChange={(e) => onChange(e.target.checked)} />
    </>
  );
};

export default Checkbox;
