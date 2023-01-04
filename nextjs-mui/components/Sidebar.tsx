import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

export const Sidebar = () => {
  /* @see https://mui.com/material-ui/react-drawer/ */

  return (
    <Drawer anchor='left' open={true} variant="persistent">
      <List>
        {['Inbox', 'Starred'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}