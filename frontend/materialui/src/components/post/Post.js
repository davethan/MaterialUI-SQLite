import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './Style.js';

export default function Post(props) {
  const id = Number(props.match.params.id)
  const classes = useStyles();
  const [postData, setPostData] = React.useState();

  const getPost = () => {
    fetch('http://localhost:3001/onePost/'+id)
    .then(response => response.json())
    .then(data => {
        setPostData(data)
    })
  }

  if (postData===undefined) {
    getPost()
    return (<CircularProgress/>)
  }
  else{
    return(
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={require('../../../../../backend/images/' + postData[0].imageName)}
              title={postData[0].title}
            />
            <CardContent color="Secondary" >
              <Typography gutterBottom variant="h5" component="h2">
                {postData[0].title}
              </Typography>
              <Typography variant="body2" component="p">
                {postData[0].description+'\n'}
                {postData[0].more}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      )
    }

}
