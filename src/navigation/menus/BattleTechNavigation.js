import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {Icon} from "@iconify/react"
import { CreateListItem } from '../Navigation';

export default function BattleTechNavigation({setOpen}) {

    const [btOpen, setBtOpen] = React.useState(false)

    function CreateBattleTechItems() {
        if(btOpen){
          return (
            <List sx={{ marginLeft: "30px" }}>
              {CreateListItem('Hit Location', <Icon icon="game-icons:rolling-dices"/>, setOpen)}
              {CreateListItem('Cluster Table', <Icon icon="game-icons:rolling-dices"/>, setOpen)}
            </List>
          )
        }
      }

    return (
        <>
        <ListItem key="bt" disablePadding>
            <ListItemButton onClick={() => setBtOpen(!btOpen)}>
              <ListItemIcon>
                <Icon icon={btOpen ? "quill:chevron-down" : "quill:chevron-right"}/>
              </ListItemIcon>
              <ListItemText primary="BattleTech" />
            </ListItemButton>
        </ListItem>
        <CreateBattleTechItems />
        </>
    )

}