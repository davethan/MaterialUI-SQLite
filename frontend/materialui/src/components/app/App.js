import React from 'react';
import ImageContainer from '../imageContainer/ImageContainer.js';
import {Route} from 'react-router-dom';
import Header from '../header/Header.js';
import AllPosts from '../allPosts/AllPosts.js';
import Footer from '../footer/Footer.js';
import Post from '../post/Post.js';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function App() {
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
    if (postData===undefined) {return(
      <CircularProgress/>
    )}
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

  return (
    <div>
      <Header/>
      <Route exact path="/" render={()=>(
        <div>
          {returnPosts(postData)}
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
