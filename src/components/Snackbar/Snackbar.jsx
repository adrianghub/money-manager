import React from 'react';
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

import useStyles from './styles';

function CustomSnackbar({ open, setOpen }) {
  const classes = useStyles();
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;

    setOpen(false);
  }


  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity="success" elevation={6} varient="filled">
          Successfully created transaction!
        </MuiAlert>
      </Snackbar> 
    </div>
  )
}

export default CustomSnackbar
