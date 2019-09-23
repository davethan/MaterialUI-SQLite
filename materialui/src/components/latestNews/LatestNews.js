import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './Style.js'

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
