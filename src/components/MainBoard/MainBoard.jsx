import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { MoneyManagerContext } from '../../context/context';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from './InfoCard/InfoCard';


const MainBoard = () => {
  const classes = useStyles();
  const { balance } = useContext(MoneyManagerContext);


  return (
    <Card className={classes.root}>
      <CardHeader title="Money Manager" />
      <CardContent>
        <Typography align="center" varient="h5" style= {{ fontSize: '1.3rem' }} >Total balance: {balance}zł</Typography>
        <Typography varient="subtitle1" style={{ lineHeight: '2.5em', marginTop: '20px' }}>
          <InfoCard />
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
