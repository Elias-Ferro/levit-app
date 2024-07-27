import { useState } from "react";
import "./style-login.css";
import Box from '@mui/material/Box';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Box
    sx={{
      width: 380,
      maxWidth: "100%",
      height: 300
    }}>
    <Typography id='title' fontSize={"32px"}>LOGIN</Typography>
    <br />
      <Stack>
        <TextField fullWidth className="outlined_input" label="email" variant="filled"/>
        <br />
        <TextField fullWidth type="password"  className="outlined_input" label="password" variant="filled"/>
        <br />
        <Button id="button" fullWidth variant="contained">Entrar</Button>
      </Stack>
    </Box>
    <img src="./images/levit.png" alt="" />
    </>
  );
}

export default Login;
