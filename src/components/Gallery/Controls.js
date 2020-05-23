import React from "react";
import Fab from "@material-ui/core/Fab";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    boxShadow: "none",
    position: "absolute",
    top: "50%",
    opacity: 0,
    transition: theme.transitions.create(["transform", "opacity"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  btnLeft: {
    left: 10,
    transform: "translateX(calc(-100% - 5px))",
  },
  btnRight: {
    right: 10,
    transform: "translateX(calc(100% + 5px))",
  },
}));

export const Controls = ({ handlePrev, handleNext, index, max }) => {
  const classes = useStyles();
  return (
    <>
      {index !== 0 && (
        <Fab
          size="small"
          color="primary"
          className={`${classes.btn} ${classes.btnLeft}`}
          onClick={handlePrev}
          disableRipple
        >
          <NavigateBeforeIcon />
        </Fab>
      )}
      {index !== max && (
        <Fab
          size="small"
          color="primary"
          className={`${classes.btn} ${classes.btnRight}`}
          onClick={handleNext}
          disableRipple
        >
          <NavigateNextIcon />
        </Fab>
      )}
    </>
  );
};