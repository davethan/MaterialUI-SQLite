import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';

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
            <MenuIcon />
          </IconButton>
          {open ? (
            <Paper className={classes.paper}>
              <MenuItem><Typography>First Link</Typography></MenuItem>
              <MenuItem><Typography>Second Link</Typography></MenuItem>
              <MenuItem><Typography>Third Link</Typography></MenuItem>
              <MenuItem><Typography>Fourth Link</Typography></MenuItem>
              <MenuItem><Typography>Fifth Link</Typography></MenuItem>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
