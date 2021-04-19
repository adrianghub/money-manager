import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  transaction: {
    marginTop: '20px',
    padding: '10px 45px',
    borderRadius: '45px',
    letterSpacing: '2px',
    fontFamily: 'Lato',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease 0s',
    "&:hover": {
      backgroundColor: '#2EE59D',
      boxShadow: '0px 15px 20px rgba(46, 229, 157, 0.4)',
      color: '#fff',
      transform: 'translateY(-7px)',
    }
  }
}));