import { useState } from "react";
import "./style-login.css";
import Paper from '@mui/material/Paper';
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';

function Login() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Paper elevation={2} sx={{padding: "10px 30px 20px"}}>
      
      <Typography fontSize={"32px"}>LevitApp</Typography>
      <Stack>
        <TextField id="outlined_input" label="email" variant="outlined"/>
        <TextField id="outlined_input" label="password" variant="outlined"/>
      </Stack>
    </Paper>
    </>
  );
}

export default Login;
