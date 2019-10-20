import React from 'react';
import MusicPost from '../musicPost/MusicPost.js';
import Loading from '../loading/Loading.js';

export default function AllMusicPosts(props) {

  //returning every post
  if (props.props === null) {
    return(<Loading/>)
  }
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
