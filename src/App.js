import React from "react";
import { Grid } from "@material-ui/core";

import Details from "./components/Details/Details";
import MainBoard from "./components/MainBoard/MainBoard";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="space-around"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <MainBoard />
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Details title="Income" />
          <Details title="Expense" />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
