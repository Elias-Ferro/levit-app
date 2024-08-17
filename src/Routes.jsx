import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Edit_Scale from "./scale/Edit_Scale.jsx";
import Home from "./home/Home.jsx";

function RoutesComponent() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" Component={Login}/>
      <Route path='/edit_scale' Component={Edit_Scale}/>
      <Route path='/home' Component={Home}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
