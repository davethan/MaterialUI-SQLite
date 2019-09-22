import React from 'react';
import ImageContainer from './components/ImageContainer.js';
import {Route, Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Header from './components/Header.js';
import LatestNews from './components/LatestNews.js';
import Footer from './components/Footer.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  latestNews:{
    margin:'auto',
  },
}));

function App() {
  const classes = useStyles();
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
