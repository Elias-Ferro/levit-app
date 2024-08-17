import { useState } from "react";
import "./style-login.css";
import Box from '@mui/material/Box';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Login() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home')
  }

  return (
    <>
    <title>Login</title>
    <Box id="all">
    <Typography id='title' fontSize={"32px"} color={"white"}>LOGIN</Typography>
    <br />
      <Stack sx={{
        minWidth: "252px"
      }}>
        <TextField defaultValue={"membro@email.com"} className="outlined_input" label="Email" variant="filled"/>
        <br />
        <TextField defaultValue={"********I"} type="password"  className="outlined_input" label="Password" variant="filled"/>
        <br />
        <Button id="button" fullWidth variant="contained" onClick={goToHome}>Entrar</Button>
          <img id='image' src="./images/levit.png"/>
      </Stack>
    </Box>
    
    </>
  );
}

export default Login;
