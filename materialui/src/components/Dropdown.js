import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';
import {Route, Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  menuButton: {
    marginLeft: theme.spacing(10),
  },
  link:{
    textDecoration:'none',
    color:'black'
  },
}));

export default function Dropdown() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} aria-label="menu">
            <Icon color="white" size={1} path={mdiDotsVertical} />
          </IconButton>
          {open ? (
            <Paper color="secondary" className={classes.paper}>
              <Link className={classes.link} to="/photos"><MenuItem><Typography>Photos</Typography></MenuItem></Link>
              <Link className={classes.link} to="/secondlink"><MenuItem><Typography>second link</Typography></MenuItem></Link>
              <Link className={classes.link} to="/thirdlink"><MenuItem><Typography>third link</Typography></MenuItem></Link>
              <Link className={classes.link} to="/fourthlink"><MenuItem><Typography>fourth link</Typography></MenuItem></Link>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
