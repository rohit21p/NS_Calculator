import React from "react";
import "./styles.css";
import Buttons from "./components/buttons";
import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "320px",
    margin: "auto"
  }
}));

export default function App() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    display: ""
  });

  function handleButtonClick(button) {
    try {
      let value = "";
      if (button === "=") value = eval(state.display);
      else if (button === "C") value = "";
      else if (
        button === "+" ||
        button === "-" ||
        button === "/" ||
        button === "*"
      )
        value = state.display + " " + button + " ";
      else value = state.display + button;
      setState((state) => ({
        ...state,
        display: value
      }));
    } catch (error) {
      setState((state) => ({
        ...state,
        display: "Error"
      }));
    }
  }

  return (
    <Grid
      container
      justify="center"
      direction="column"
      className={classes.root}
    >
      <Grid item>
        <TextField variant="outlined" fullWidth value={state.display} />
      </Grid>
      <Grid item>
        <Buttons handleButtonClick={handleButtonClick} />
      </Grid>
    </Grid>
  );
}
