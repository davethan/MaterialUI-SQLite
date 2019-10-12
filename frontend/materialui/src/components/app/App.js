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

function App(props) {
  const classes = useStyles();

  if (props.dataByReducer === null){
    props.dispatch(startGettingPostsData())
  }

  //returning every post
  const returnPosts = ()=>{
    if (props.dataByReducer === null) {return(<Loading/>)}
    else {
      return(
        props.dataByReducer.map((card,id) => (
          <AllPosts key={id}
                    id={props.dataByReducer[id].id}
                    imageName={props.dataByReducer[id].imageName}
                    title={props.dataByReducer[id].title}
                    description={props.dataByReducer[id].description}
          />
        ))
      )
    }
  }

  const individualPost = (params) => {
    if (props.dataByReducer !== null){
      // console.log(props)
      // const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
      const id = Number(params.match.params.id)
      // console.log(id)
      const propsToBeSent = props.dataByReducer[id-1]
      // console.log (propsToBeSent)
      return (
        <Post {...params} {...propsToBeSent}/>
      )
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
        <ImageContainer/>
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
