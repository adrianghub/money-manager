import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useTransactions from '../../useTransactions.js';
import useStyles from './styles';

const Details = ({ title }) => {
  const classes = useStyles();

  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense} style={{ margin: '20px' }}>
      <CardHeader title={title} />
      <CardContent>
          <Typography varient="h5">{total}</Typography>
          <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Details;
