import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import PostContainer from './components/PostContainer.js'
import {Route, Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" render={()=>(
        <div>
          <Typography>I haven't decided what will be in the first page yet.</Typography>
          <Typography>So press the three dots and go to photos.</Typography>
        </div>
      )}/>
      <Route exact path="/photos" render={()=>(
        <PostContainer/>
      )}/>
      <Footer/>
    </div>
  );
}

export default App;
