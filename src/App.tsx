import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Checkbox from "./Checkbox";
import Button from "./Button";
import Router from "./router/Router";
import { BrowserRouter, Route } from "react-router-dom";
// import Rooute from "./router/route"; 2個目の方法

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Checkbox isChecked={isChecked} onChange={setIsChecked} />
      <Button disabled={isChecked} title="button" onClick={() => {}} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      {/* <Rooute />　2個目の方法 */}
    </>
  );
};

export default App;
