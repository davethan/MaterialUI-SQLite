import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '40%',
    margin:'auto',
    marginBottom: '0.5rem',
    justifyContent: 'space-between'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
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
}));

export default useStyles
