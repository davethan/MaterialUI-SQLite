import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiFacebookBox, mdiLinkedin  } from '@mdi/js';

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
      <AppBar color="secondary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h6'>Follow us:</Typography>
          <a href="https://www.facebook.com/AKKATechnologiesGroup/?__tn__=%2Cd%2CP-R&eid=ARDb96i-ehRo8NxpGiPpEHdINsFwz6Py3DJPz_eIHofjbgKMsipdgZZRfwX5GZDtA94pKE7gTHK-fmGF"><Icon path={mdiFacebookBox} size={1.5} color="whitesmoke"/></a>
          <a href="https://www.facebook.com/"></a>
          <a href="https://www.linkedin.com/"></a>
          <a href="https://www.instagram.com/"></a>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

/*

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
<FacebookIcon/>
*/
