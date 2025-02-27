import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Icon} from "@iconify/react"
import { CreateListItem } from '../ButtonBar';

export default function GaslandsButtons({setOpen}) {

    const [glOpen, setGlOpen] = React.useState(false)

    function CreateGaslandsItems() {
        if(glOpen){
          return (
            <List sx={{ marginLeft: "30px" }}>
              {CreateListItem('Skid Dice', <Icon icon="game-icons:perspective-dice-one"/>, "/gaslands/skiddie", setOpen)}
            </List>
          )
        }
      }

    return (
        <>
        <ListItem key="gl" disablePadding>
            <ListItemButton onClick={() => setGlOpen(!glOpen)}>
              <ListItemIcon>
                <Icon icon={glOpen ? "quill:chevron-down" : "quill:chevron-right"}/>
              </ListItemIcon>
              <ListItemText primary="Gaslands" />
            </ListItemButton>
        </ListItem>
        <CreateGaslandsItems />
        </>
    )

}