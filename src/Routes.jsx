import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Home from "./home/Home";

function RoutesComponent() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" Component={Login}/>
      <Route path='/home' Component={Home}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
