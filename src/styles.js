import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
    [theme.breakpoints.up('md')]: {
      marginRight: '50px!important',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));