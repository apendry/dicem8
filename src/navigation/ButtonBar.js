import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Icon} from "@iconify/react"
import BattleTechButtons from './menus/BattleTechButtons';
import GaslandsButtons from './menus/GaslandsButtons';
import { Link } from 'react-router-dom';

export function CreateListItem(name, icon, href, setOpen) {
  return (
    <ListItem key={name} disablePadding>
      <ListItemButton component={Link} to={href} onClick={() => setOpen(false)}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
}

export default function ButtonBar() {

  const [open, setOpen] = React.useState(false)

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {CreateListItem('Basic Rolls', <Icon icon="game-icons:perspective-dice-one"/>, "/", setOpen)}
        <BattleTechButtons setOpen={setOpen}/>
        <GaslandsButtons setOpen={setOpen}/>
      </List>
      <Divider />
      <List>
        {CreateListItem('About', <Icon icon="game-icons:info"/>, "/pages/about", setOpen)}
      </List>
    </Box>
  );

  return (
      <>
        <AppBar sx={{marginBottom: "30px"}} position="static">
        <Toolbar>
            <IconButton onClick={() => setOpen(true)} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            DiceM<Icon icon="game-icons:dice-eight-faces-eight" />
            </Typography>
        </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={() => setOpen(false)}>
            {DrawerList}
        </Drawer>
      </>
  );
}