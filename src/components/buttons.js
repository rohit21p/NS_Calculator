import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    padding: "25px",
    border: "1px solid #959595",
    width: "80px",
    textAlign: "center"
  }
}));

export default function (props) {
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "=", "C", "/"];
  const classes = useStyles();
  const { handleButtonClick } = props;

  return (
    <Grid container>
      {buttons.map((button) => (
        <Grid
          item
          className={classes.button}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </Grid>
      ))}
    </Grid>
  );
}
