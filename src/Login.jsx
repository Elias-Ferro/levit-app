import { useState } from "react";
import "./App.css";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="title">CADASTRO</h1>
        <label htmlFor="email">email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" />
      </div>
    </>
  );
}

export default Login;
