import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiLinkedin, mdiInstagram, mdiTwitter, mdiPinterest } from '@mdi/js';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    height: '2.5rem',
  },
  toolbar:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 'auto',
    minHeight:'2.5rem'
  },
  divToStop:{
    height: '45px',
  },
}));

export default function BottomAppBar() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <a href="https://www.facebook.com/"> <Icon color="white" size={1} path={mdiFacebookBox} /></a>
          <a href="https://www.linkedin.com/"> <Icon color="white" size={1} path={mdiLinkedin} /></a>
          <a href="https://www.instagram.com/"><Icon color="white" size={1} path={mdiInstagram} /></a>
          <a href="https://www.twitter.com/"><Icon color="white" size={1} path={mdiTwitter} /></a>
          <a href="https://www.tmblr.com/"><Icon color="white" size={1} path={mdiPinterest} /></a>
        </Toolbar>
      </AppBar>
      <div className={classes.divToStop}/>
    </React.Fragment>
  );
}
