import Fab from "@mui/material/Fab";
import makeStyles from '@mui/styles/makeStyles';
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

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
    "&:focus, &:active": {
      boxShadow: "none",
    },
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
          aria-label="Imagén anterior"
        >
          <ChevronLeft />
        </Fab>
      )}
      {index !== max && (
        <Fab
          size="small"
          color="primary"
          className={`${classes.btn} ${classes.btnRight}`}
          onClick={handleNext}
          disableRipple
          aria-label="Siguiente imagén"
        >
          <ChevronRight />
        </Fab>
      )}
    </>
  );
};
