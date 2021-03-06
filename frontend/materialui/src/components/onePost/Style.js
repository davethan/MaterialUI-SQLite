import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  link:{
    textDecoration: 'none',
    color:'black',
  },
  card: {
    width: '50%',
    margin:'auto',
    marginBottom: '0.5rem',
  },
  media: {
    height: 200,
  },
  '@media (max-width: 1000px) and (min-width: 600px)':{
    card: {
      width: '70%',
    },
  },
  '@media(max-width: 600px)':{
    card: {
      width: '100%',
    },
  },
});

export default useStyles
