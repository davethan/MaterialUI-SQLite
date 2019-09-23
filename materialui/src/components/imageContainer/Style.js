import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '50%',
  },
  '@media (max-width: 1000px) and (min-width: 600px)':{
    gridList: {
      width: '70%',
    },
  },
  '@media(max-width: 600px)':{
    gridList: {
      width: '100%',
    },
  },
}));

export default useStyles
