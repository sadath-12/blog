import * as React from 'react';
import { makeStyles } from '@mui/styles';

import { AppBar} from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({

  root1:{
      background:"#FFFFFF",
      color:"black",
      justifyContent:"center",
      "& > *":{
          padding:20
      }
  },
  link:{
      textDecoration:"none",
      color:"inherit"
  }
});

export default function Header() {
  const classes = useStyles();
  return (
      <>
      <AppBar >
          <Toolbar className={classes.root1}>
          <NavLink to='/' className={classes.link}>
              <Typography>HOME</Typography>
          
           </NavLink>
          <NavLink to='/' className={classes.link}>
              <Typography>CONTACT</Typography>
          
           </NavLink>
          <NavLink to='/' className={classes.link}>
              <Typography>ABOUT</Typography>
          
           </NavLink>
          <NavLink to='/' className={classes.link}>
              <Typography>LOGIN</Typography>
          
           </NavLink>
          </Toolbar>
      </AppBar>
      </>
  )
  

}




