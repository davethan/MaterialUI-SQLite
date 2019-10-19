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
import { setStateOfMenu } from "../../redux/actions"

export default function Dropdown(props) {
  const classes = useStyles();

  const handleClick = () => {
    props.dispatch(setStateOfMenu(true));
  };

  const handleClickAway = () => {
    props.dispatch(setStateOfMenu(false));
  };

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} aria-label="menu">
            <Icon color="white" size={1} path={mdiDotsVertical} />
          </IconButton>
          {props.stateOfMenu ? (
            <Paper className={classes.paper}>
              <Link className={classes.link} to="/"><MenuItem><Typography>Latest News</Typography></MenuItem></Link>
              <Link className={classes.link} to="/photos"><MenuItem><Typography>Photos</Typography></MenuItem></Link>
              <Link className={classes.link} to="/music"><MenuItem><Typography>My music</Typography></MenuItem></Link>
              <Link className={classes.link} to="/fourthlink"><MenuItem><Typography>fourth link</Typography></MenuItem></Link>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
