import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    height: '2.5rem',
  },
  toolbar:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 'auto',
    marginBottom: 'auto',
    minHeight:'2.5rem'
  },
  divToStop:{
    height: '45px',
  },
}));

export default useStyles
