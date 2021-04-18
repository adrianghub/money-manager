import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

import useStyles from './styles';

const Details = ({ title }) => {
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
          <Typography varient="h5">50zł</Typography>
          {/* <Doughnut data="" /> */}
      </CardContent>
    </Card>
  )
}

export default Details;
