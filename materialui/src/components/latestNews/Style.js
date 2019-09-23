import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles
