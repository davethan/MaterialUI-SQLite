import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style.js';
import cardData from '../../data/cardData.js' //DATABASE!!!

export default function Post(props) {
  const id = Number(props.match.params.id)
  const post = cardData.find((post) => post.id === id)
  const classes = useStyles();

  return(
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={post.img}
          title={post.title}
        />
        <CardContent color="Secondary" >
          <Typography gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p">
            {post.description+'\n'}
            {post.more}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
