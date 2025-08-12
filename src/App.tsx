import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Checkbox from "./Checkbox";
import Button from "./Button";
import Router from "./router/Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import Rooute from "./router/route"; 2個目の方法

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log("App");
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Checkbox isChecked={isChecked} onChange={setIsChecked} />
        <Button disabled={isChecked} title="button" onClick={() => {}} />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        {/* <Rooute /> 2個目の方法 */}
      </QueryClientProvider>
    </>
  );
};

export default App;
