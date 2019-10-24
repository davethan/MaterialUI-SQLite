import React, { useEffect } from 'react';
import ImageContainer from '../imageContainer/ImageContainer.js';
// import Button from '@material-ui/core/Button';
import {Route} from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
import Header from '../header/Header.js';
import OnePost from '../onePost/OnePost.js';
import Footer from '../footer/Footer.js';
import Post from '../post/Post.js';
import AllMusicPosts from '../allMusicPosts/AllMusicPosts.js';
import Loading from '../loading/Loading.js';
import useStyles from './Style.js';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import * as actions from "../../redux/actions.js";

function App(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.getPostsDataReducer === null){
      props.startGettingPostsData()
    }

    if (props.getTileDataReducer === null){
      props.startGettingTileData()
    }

    if (props.getMusicPostsDataReducer === null){
      props.startGettingMusicPostsData()
    }
  });

  //returning every post
  const returnPosts = ()=>{
    if (props.getPostsDataReducer === null) {return(<Loading/>)}
    else {
      return(
        props.getPostsDataReducer.map((card,id) => (
          <OnePost key={id}
                   id={props.getPostsDataReducer[id].id}
                   imageName={props.getPostsDataReducer[id].imageName}
                   title={props.getPostsDataReducer[id].title}
                   description={props.getPostsDataReducer[id].description}
          />
        ))
      )
    }
  }

  const individualPost = (params) => {
    if (props.getPostsDataReducer !== null){
      const id = Number(params.match.params.id)
      const propsToBeSent = props.getPostsDataReducer[id-1]
      return (<Post {...params} {...propsToBeSent}/>)
    }
  }

  return (
    <div>
      <Header stateOfMenu={props.stateOfMenuReducer} setStateOfMenu={props.setStateOfMenu}/>
      <Route exact path="/" render={()=>(
        <div className={classes.mainPage}>
          {returnPosts()}
          {/*
          <Button
            variant="contained"
            color="secondary"
            className={classes.uploadButton}
          >
            <Typography variant="h6">Upload a post!</Typography>
          </Button>
          */}
        </div>
      )}/>
      <Route exact path="/photos" render={()=>(
        <ImageContainer props={props.getTileDataReducer}/>
      )}/>
      <Route exact path="/post/:id" render={(params)=>(
        <div>
          {individualPost(params)}
        </div>
      )}/>
      <Route exact path ="/music" render={()=>(
        <AllMusicPosts props={props.getMusicPostsDataReducer}/>
      )}/>
      <Footer/>
    </div>
  );
}

//Redux Injection!
function mapStateToProps(state) {
  return {
    getMusicPostsDataReducer: state.getMusicPostsDataReducer,
    getTileDataReducer: state.getTileDataReducer,
    getPostsDataReducer: state.getPostsDataReducer,
    stateOfMenuReducer: state.stateOfMenuReducer
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
