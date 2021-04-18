import React from 'react';
import { Grid } from '@material-ui/core'

import Details from './components/Details/Details'
import MainBoard from './components/MainBoard/MainBoard';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income"/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <MainBoard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense"/>
        </Grid>
      </Grid>
    </>
  )
}

export default App;