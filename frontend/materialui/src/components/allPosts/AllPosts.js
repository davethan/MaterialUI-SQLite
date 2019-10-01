import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import useStyles from './Style.js';

export default function AllPosts(props) {
  const classes = useStyles();
  //initialize everything
  const [currentId] = React.useState(1); //this has to change!!!
  const [currentPic, setCurrentPic] = React.useState('img3.jpg');
  const [currentTitle, setCurrentTitle] = React.useState('Post');
  const [currentDescription, setCurrentDescription] = React.useState('Post Description');

  const getImage = () => {
    fetch('http://localhost:3001/onePost/' + currentId)
    .then(response => response.json())
    .then(data => {
        setCurrentPic(data[0].imageName); //image={require('../../images/'+currentPic)}
        setCurrentTitle(data[0].title);
        setCurrentDescription(data[0].description);
    })
  }
  getImage()

  return (
        <Card className={classes.card}>
        <Link to={`/post/${props.id}`} className={classes.link}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.img}
              title={props.title}
            />
            <CardContent color="Secondary" >
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Link>
        </Card>
  );
}
