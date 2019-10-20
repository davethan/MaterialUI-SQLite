import React from 'react';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import MusicPost from '../musicPost/MusicPost.js';
import Loading from '../loading/Loading.js';
import useStyles from './Style.js';

export default function AllMusicPosts(props) {
  const classes = useStyles();

  //returning every post
  const returnMusicPosts = ()=>{
    if (props.props === null) {return(<Loading/>)}
    else {
      return(
        props.props.map((musicPost, id) => (
          <MusicPost key={id}
                     id={props.props[id].id}
                     imageName={props.props[id].imageName}
                     title={props.props[id].title}
                     artist={props.props[id].artist}
          />
        ))
      )
    }
  }

  return (
    <div>
      {returnMusicPosts()}
    </div>
  );
}
