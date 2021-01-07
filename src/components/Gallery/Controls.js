import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

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
          aria-label="anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Fab>
      )}
      {index !== max && (
        <Fab
          size="small"
          color="primary"
          className={`${classes.btn} ${classes.btnRight}`}
          onClick={handleNext}
          disableRipple
          aria-label="siguiente"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Fab>
      )}
    </>
  );
};
