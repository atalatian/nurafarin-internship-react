import { Fragment } from 'react'
import classes from '../../Layouts/PC/PCLayout.module.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const NavBar = (props) => {
  return(
    <Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar sx={{ backgroundColor: `#184890` }} position="static">
          <Toolbar sx={{ display: `flex`, pt: 1, pb: 1 }}>
            {props.children}
          </Toolbar>
        </AppBar>
      </Box>
    </Fragment>
  );
}

export default NavBar;