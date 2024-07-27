import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Login";

function RoutesComponent() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" Component={Login}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
