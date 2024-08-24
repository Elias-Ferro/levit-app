import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom";

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/home')
  }

  const goToEditScale = () => {
    navigate('/edit_scale')
  }

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{paddingTop: "20px"}}
      >
        <MenuIcon sx={{
            width: "50px",
            height: "50px"
        }} />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
            sx: {
                width: "240px"
            }
        }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemText primary="Home" onClick={goToHome}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Editar escala" onClick={goToEditScale}/>
            </ListItem>
            <ListItem>
              <ListItemText primary="Ministérios" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Calendário" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem >
              <ListItemText primary="Configurações" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default SidebarMenu;
