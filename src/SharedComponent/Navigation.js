import * as React from 'react';
import AppBar from '@mui/material/AppBar';
  import {makeStyles} from '@mui/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material';

import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';

import useAuth from './../hooks/useAuth';



export default function Navigation() {
  const {user,logout}=useAuth()
const theme=useTheme()
  const useStyle=makeStyles({
    navItem: {
      color: 'white',
      textDecoration: 'none'

    },
    navIcon:{
      [theme.breakpoints.up('sm')]: {
display:'none!important'      }
    },
    navItemContainer:{
      [theme.breakpoints.down('sm')]: {
        display:'none!important'      }
    },
    navLogo:{
      [theme.breakpoints.down('sm')]: {
        textAlign: 'right'     }
    },
    mobileNavItem: {
      color: 'black',
      textDecoration: 'none'

    }

    
  })
  
  const {navItem,navIcon,navItemContainer,navLogo, mobileNavItem}=useStyle();
  const [state, setState] = React.useState(false);

  

  const list = (
    <Box
      sx={{ width:250 }}
      role="presentation"
    
    >
      <List>
      
          <ListItem button >
           
            <ListItemText><Link className={ mobileNavItem}  to="/home">Home</Link></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
           
            <ListItemText><Link className={ mobileNavItem}  to="/AddProduct">Add Product</Link></ListItemText>
          </ListItem>
          <Divider />
          <ListItem button >
           
            <ListItemText><Link className={ mobileNavItem}  to="/Products">More Products</Link></ListItemText>
          </ListItem>
          <Divider />
      </List>
     
     
    </Box>
  );

  return (
   
   <>
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
         className={navIcon}
         onClick={()=>setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography  className={navLogo}variant="h6" component="div" sx={{ flexGrow: 1 }}>
         CarZone
          </Typography>
          <Box className={navItemContainer}>
            <Link className={navItem} to="/Home">  <Button color="inherit">Home</Button></Link >
            
            <Link  className={navItem} to="/Products">  <Button color="inherit">Explore Products</Button></Link>

            {user.email && <span style={{color:'white'}}>Login As: {user?.displayName}</span>}

 
            {
                        user?.email ?
                        <Box>
                       <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/AddProduct">
                          <Button color="inherit">Add Product</Button>
                      </NavLink>

                      <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/DashBoard">
                          <Button color="inherit">DashBoard</Button>
                      </NavLink>
                        <Button onClick={logout} color="inherit">Logout</Button>
                     </Box>
                         :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
          </Box>
        
        </Toolbar>
      </AppBar>
    </Box>
    <div>
     
        <React.Fragment >
        
          <Drawer
        
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
   
    </div>
   </>
  );
}
