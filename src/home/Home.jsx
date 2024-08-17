import { useState } from "react";
import Box from '@mui/material/Box';
import Header from '../components/Header'
import { Stack, Typography } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <title>Home</title>
    <Header/>
    </>
  );
}

export default Home;
