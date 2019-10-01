import React from 'react';
import ImageContainer from '../imageContainer/ImageContainer.js';
import {Route} from 'react-router-dom';
import Header from '../header/Header.js';
import AllPosts from '../allPosts/AllPosts.js';
import Footer from '../footer/Footer.js';
import cardData from '../../data/cardData.js';
import Post from '../post/Post.js';

function App() {
  /**************************************calling the DB***********************************************/
  //initialize everything
  const [currentId] = React.useState(1); //this has to change!!!
  const [currentPic, setCurrentPic] = React.useState('img3.jpg');
  const [currentTitle, setCurrentTitle] = React.useState('Post');
  const [currentDescription, setCurrentDescription] = React.useState('Post Description');

  const getImage = () => {
    fetch('http://localhost:3001/allTheDB/')
    .then(response => response.json())
    .then(data => {
        setCurrentPic(data[0].imageName); //image={require('../../images/'+currentPic)}
        setCurrentTitle(data[0].title);
        setCurrentDescription(data[0].description);
    })
  }
  getImage()
  /****************************************************************************************************/

  return (
    <div>
      <Header/>
      <Route exact path="/" render={()=>(
        <div>
          {cardData.map((card,id) => (
            <AllPosts key={id} id={card.id} img={card.img} title={card.title} description={card.description}/>
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
