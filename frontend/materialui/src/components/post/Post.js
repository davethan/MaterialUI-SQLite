import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style.js';

export default function Post(props) {
  const classes = useStyles();
  return(
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={'http://localhost:3001/images/' + props.imageName}
            title={props.title}
          />
          <CardContent color="Secondary" >
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" component="p">
              {props.description+'\n'}
              {props.more}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
          size="medium"
          color="primary"
          onClick = {() => {
              props.startDeletingPost(props.id, props.imageName);
              props.startGettingPostsData();
              props.history.push('/');
          }}>
            Delete
          </Button>
          <Button
          size="medium"
          color="primary"
          onClick = {() => {
              props.history.push('/')
          }}>
            Go to main page
          </Button>
        </CardActions>
      </Card>
    )
}
