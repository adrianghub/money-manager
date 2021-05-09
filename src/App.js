import React, { useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

import Details from "./components/Details/Details";
import MainBoard from "./components/MainBoard/MainBoard";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null);

  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <>
      <Grid
        className={classes.grid}
        container
        spacing={0}
        alignItems="center"
        justify="space-around"
        style={{ height: "100vh", margin: "0 auto" }}
      >
        <Grid ref={main} className={classes.main} item xs={12} sm={12} md={6}>
          <MainBoard />
        </Grid>
        <Grid className={classes.last} item xs={12} sm={12} md={5}>
          <Details title="Income" />
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
        <PushToTalkButton />
        <ErrorPanel />
      </PushToTalkButtonContainer>
      </Grid>
    </>
  );
};

export default App;
