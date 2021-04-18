import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const MainBoard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="Money Manager" />
      <CardContent>
        <Typography align="center" varient="h5">Total balance: 100zł</Typography>
        <Typography varient="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          {/* Data */}
          Try saying: Add income for 100zł in Category Salary for Monday.
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MainBoard;
