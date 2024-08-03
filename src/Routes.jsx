import { useState } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./login/Login";
import Edit_Scale from "./scale/Edit_Scale.jsx";

function RoutesComponent() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" Component={Login}/>
      <Route path='/edit_scale' Component={Edit_Scale}/>
    </Routes>
    </BrowserRouter>
  );
}

export default RoutesComponent;
