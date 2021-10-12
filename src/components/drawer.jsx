import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import '../css/drawer.css'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const drawerWidth = 210;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});




const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const showArchived=()=>{

    props.listenClickArchive()
  }

  const showDeleted=()=>{

    props.listenClickDeleted()
  }

  const shownotes=()=>{

    props.listenClicknotes()
  }



  return (



    
  
         

      <Drawer PaperProps={{ style: { position: "absolute" } }} variant="permanent" open={open} onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
       
        <List>
        <ListItem button key="Notes" button onClick={shownotes} >
              <ListItemIcon>
              <LightbulbOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Notes" />
        </ListItem>   
         
            <ListItem button key="Reminders">
              <ListItemIcon>
              <NotificationsNoneOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Reminders" />
            </ListItem>   


            <ListItem button key="Editlabels">
              <ListItemIcon>
              <CreateOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Edit labels" />
            </ListItem>   

            <ListItem button onClick={showArchived} key="Archive">
              <ListItemIcon>
              <ArchiveOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Archive" />
            </ListItem>   

            <ListItem button onClick={showDeleted} key="Trash">
              <ListItemIcon>
              <DeleteOutlineOutlinedIcon/>
              </ListItemIcon>
              <ListItemText primary="Trash" />
            </ListItem>   

        </List>
       
      </Drawer>
   
   
  );
}
