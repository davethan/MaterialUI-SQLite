import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: '50%',
    margin:'auto',
  },
  media: {
    height: 140,
  },
  '@media (max-width: 1000px) and (min-width: 600px)':{
    card: {
      width: '70%',
    },
  },
  '@media(max-width: 600px)':{
    card: {
      width: '90%',
    },
  },
});

export default function LatestNews() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn-image.departures.com/sites/default/files/1495034374/summer-mountain-town_jackson-hole_2000x1125.jpg"
          title="Andorra Mountains"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Andorra
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            My latest summer adventure took part in Andorra where picturesque meets awesome. Unforgetable experience!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
