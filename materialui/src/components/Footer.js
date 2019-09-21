import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiLinkedin, mdiInstagram } from '@mdi/js';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    height: '3rem',
  },
  toolbar:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 'auto',
    minHeight:'3rem'
  },
  container: {
    flexGrow: 1,
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6'>Follow us:</Typography>
          <a href="https://www.facebook.com/"> <Icon color="white" size={1.5} path={mdiFacebookBox} /></a>
          <a href="https://www.linkedin.com/"> <Icon color="white" size={1.5} path={mdiLinkedin} /></a>
          <a href="https://www.instagram.com/"><Icon color="white" size={1.5} path={mdiInstagram} /></a>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
