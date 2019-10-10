import React from 'react';
import ImageContainer from '../imageContainer/ImageContainer.js';
import Button from '@material-ui/core/Button';
import {Route} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Header from '../header/Header.js';
import AllPosts from '../allPosts/AllPosts.js';
import Footer from '../footer/Footer.js';
import Post from '../post/Post.js';
import Loading from '../loading/Loading.js';
import useStyles from './Style.js'
import { connect } from "react-redux";

function App(props) {
  console.log(props)
  const [postData, setPostData] = React.useState();

  const getPosts = () => {
    fetch('http://localhost:3001/allTheDB/')
    .then(response => response.json())
    .then(data => {
        setPostData(data)
    })
  }

  if (postData===undefined) {
    getPosts()
  }

  //returning every post
  const returnPosts = (postData)=>{
    if (postData===undefined) {return(<Loading/>)}
    else {
      return(
        postData.map((card,id) => (
          <AllPosts key={id}
                    id={postData[id].id}
                    imageName={postData[id].imageName}
                    title={postData[id].title}
                    description={postData[id].description}
          />
        ))
      )
    }
  }
  const classes = useStyles();
  return (
    <div>
      <Header/>
      <Route exact path="/" render={()=>(
        <div className={classes.mainPage}>
          {returnPosts(postData)}
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
        <ImageContainer/>
      )}/>
      <Route exact path="/post/:id" render={(params)=>(
        <Post {...params}/>
      )}/>
      <Footer/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state: state
  };
}

export default connect(mapStateToProps)(App)
