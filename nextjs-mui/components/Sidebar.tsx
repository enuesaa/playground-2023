import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { FaRegFileAlt } from 'react-icons/fa'

export const Sidebar = () => {
  /* @see https://mui.com/material-ui/react-drawer/ */

  return (
    <Drawer anchor='left' open variant='persistent'>
      <List>
        {['Inbox', 'Starred'].map(text => (
          <ListItem key={text}>
            <ListItemButton sx={{fontSize: '25px'}}>
              {/* <ListItemIcon sx={{justifyContent: 'center'}}><FaRegFileAlt /></ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}