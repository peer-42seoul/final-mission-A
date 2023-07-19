import {Drawer, List, ListItem, ListItemButton, ListItemText} from '@mui/material';
import React from 'react';

export default function SideBar({setCategory, setTitle, setIsSearch} 
  : {
    setCategory: React.Dispatch<React.SetStateAction<string>>,
    setTitle: React.Dispatch<React.SetStateAction<string>>,
    setIsSearch: React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <Drawer
      sx={{
        flexShrink: 1,
        "&. MuiDrawer-paper": {
          boxSizing: "border-box"
        },
        flexGrow: 0,
      }}
      variant='permanent'
    >
      <List>
        {['all', 'minishell', 'ft_irc', 'minirt'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => {
              setCategory(text);
              setIsSearch(false);
              setTitle('');
              }}>
              <ListItemText primary={text}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}