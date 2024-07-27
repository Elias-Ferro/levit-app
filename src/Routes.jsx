import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

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
