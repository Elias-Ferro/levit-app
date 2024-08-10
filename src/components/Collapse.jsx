import React, { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const SidebarMenu = () => {
  const [open, setOpen] = useState(false);

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
              <ListItemText primary="Item 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Item 2" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Item 3" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <ListItemText primary="Item 4" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default SidebarMenu;
