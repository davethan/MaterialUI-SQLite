import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@mdi/react';
import { mdiDotsVertical } from '@mdi/js';
import {Link} from 'react-router-dom'
import useStyles from './Style.js'

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
            <Paper className={classes.paper}>
              <Link className={classes.link} to="/"><MenuItem><Typography>Latest News</Typography></MenuItem></Link>
              <Link className={classes.link} to="/photos"><MenuItem><Typography>Photos</Typography></MenuItem></Link>
              <Link className={classes.link} to="/thirdlink"><MenuItem><Typography>third link</Typography></MenuItem></Link>
              <Link className={classes.link} to="/fourthlink"><MenuItem><Typography>fourth link</Typography></MenuItem></Link>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
