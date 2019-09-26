import React from 'react';
import ImageContainer from '../imageContainer/ImageContainer.js';
import {Route} from 'react-router-dom';
import Header from '../header/Header.js';
import AllPosts from '../allPosts/AllPosts.js';
import Footer from '../footer/Footer.js';
import cardData from '../../data/cardData.js';
import Post from '../post/Post.js';

function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" render={()=>(
        <div>
          {cardData.map(card => (
            <AllPosts id={card.id} img={card.img} title={card.title} description={card.description}/>
          ))}
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

export default App;
