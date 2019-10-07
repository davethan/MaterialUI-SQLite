import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useStyles from './Style.js'
import Loading from '../loading/Loading.js';

export default function ImageContainer() {
  const classes = useStyles();
  const [tileData, setTileData] = React.useState();

  const getTileData = () => {
    fetch('http://localhost:3001/tileImages/')
    .then(response => response.json())
    .then(data => {
        setTileData(data)
    })
  }

  if (tileData===undefined) {
    getTileData()
    return (<Loading/>)
  }
  else{
    return (
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}>
          {tileData.map(tile => (
            <GridListTile key={tile.id} cols={tile.cols || 1}>
              <img src={require('../../../../../backend/images/' + tile.imageName)} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}
