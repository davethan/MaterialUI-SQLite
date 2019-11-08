import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useStyles from './Style.js'
import Loading from '../loading/Loading.js';

export default function ImageContainer(props) {
  const classes = useStyles();

  if (props.props===null) {
    return (<Loading/>)
  }
  else{
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {props.props.map((tile,id) => (
            <GridListTile key={id} cols={props.props[id].cols || 1}>
              <img src={'http://localhost:3001/images/' + props.props[id].imageName} alt={props.props[id].title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
