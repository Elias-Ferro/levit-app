import React, { useState } from 'react';
import {Button, Stack} from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ChurchOutlinedIcon from '@mui/icons-material/ChurchOutlined';
import SidebarMenu from "./Collapse"

const Header = () => {

  return (
    <div>
      <header className="head sticky">
        <img className="image" src="./images/levit.png" alt="LevitApp" />
        <Button
          style={{
            fontSize: "1em",
          }}
          className="btt"
          variant="contained"
          startIcon={<HomeOutlinedIcon />}
        >
          Home
        </Button>
        <Button
          className="btt"
          variant="contained"
          startIcon={<NoteAltOutlinedIcon />}
        >
          Escalas
        </Button>
        <Button
          className="btt"
          variant="contained"
          startIcon={<ChurchOutlinedIcon />}
        >
          Ministérios
        </Button>
        <Button
          className="btt"
          variant="contained"
          startIcon={<CalendarMonthOutlinedIcon />}
        >
          Calendário
        </Button>
        <Button
          className="btt"
          variant="contained"
          startIcon={<SettingsOutlinedIcon />}
        >
          Configurações
        </Button>
      </header>

      <header id="mobile_header">
        <SidebarMenu />
      </header>

      <Stack className="logo_mobile">
        <img
          id="logo_mobile_image"
          src="./images/levit_black.png"
          alt="Logo Levit"
        />
      </Stack>
    </div>
  );
};

export default Header;
