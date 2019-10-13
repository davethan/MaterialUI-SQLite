import React from 'react';
import ImageContainer from '../imageContainer/ImageContainer.js';
// import Button from '@material-ui/core/Button';
import {Route} from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
import Header from '../header/Header.js';
import AllPosts from '../allPosts/AllPosts.js';
import Footer from '../footer/Footer.js';
import Post from '../post/Post.js';
import Loading from '../loading/Loading.js';
import useStyles from './Style.js'
import { connect } from "react-redux";
import { startGettingPostsData } from "../../redux/actions.js"
import { startGettingTileData } from "../../redux/actions.js"

function App(props) {
  console.log(props)
  const classes = useStyles();

  if (props.dataByReducer.getPostsDataReducer === null){
    props.dispatch(startGettingPostsData())
  }

  if (props.dataByReducer.getTileDataReducer === null){
    props.dispatch(startGettingTileData())
  }

  //returning every post
  const returnPosts = ()=>{
    if (props.dataByReducer.getPostsDataReducer === null) {return(<Loading/>)}
    else {
      return(
        props.dataByReducer.getPostsDataReducer.map((card,id) => (
          <AllPosts key={id}
                    id={props.dataByReducer.getPostsDataReducer[id].id}
                    imageName={props.dataByReducer.getPostsDataReducer[id].imageName}
                    title={props.dataByReducer.getPostsDataReducer[id].title}
                    description={props.dataByReducer.getPostsDataReducer[id].description}
          />
        ))
      )
    }
  }

  const individualPost = (params) => {
    if (props.dataByReducer.getPostsDataReducer !== null){
      const id = Number(params.match.params.id)
      const propsToBeSent = props.dataByReducer.getPostsDataReducer[id-1]
      return (<Post {...params} {...propsToBeSent}/>)
    }
  }

  return (
    <div>
      <Header/>
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
        <ImageContainer props={props.dataByReducer.getTileDataReducer}/>
      )}/>
      <Route exact path="/post/:id" render={(params)=>(
        <div>
          {individualPost(params)}
        </div>
      )}/>
      <Footer/>
    </div>
  );
}

//Redux Injection!
function mapStateToProps(state) {
  return {
    dataByReducer: state
  };
}

export default connect(mapStateToProps)(App)
