import React from 'react';
import ImageContainer from '../imageContainer/ImageContainer.js';
import {Route} from 'react-router-dom';
import Header from '../header/Header.js';
import LatestNews from '../latestNews/LatestNews.js';
import Footer from '../footer/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" render={()=>( //not the way to do it. I should map!
        <div>
          <LatestNews/><br/>
          <LatestNews/><br/>
          <LatestNews/>
        </div>
      )}/>
      <Route exact path="/photos" render={()=>(
        <ImageContainer/>
      )}/>
      <Footer/>
    </div>
  );
}

export default App;
