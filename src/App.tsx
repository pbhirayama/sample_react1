import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Checkbox from "./Checkbox";
import Button from "./Button";

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Checkbox isChecked={isChecked} onChange={setIsChecked} />
      <Button disabled={isChecked} />
    </>
  );
};

export default App;
