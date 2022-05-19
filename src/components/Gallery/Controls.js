import Fab from "@mui/material/Fab";
import { styled } from '@mui/material/styles';
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

const PREFIX = 'Controls';

const classes = {
  btn: `${PREFIX}-btn`,
  btnLeft: `${PREFIX}-btnLeft`,
  btnRight: `${PREFIX}-btnRight`
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.btn}`]: {
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

  [`& .${classes.btnLeft}`]: {
    left: 10,
    transform: "translateX(calc(-100% - 5px))",
  },

  [`& .${classes.btnRight}`]: {
    right: 10,
    transform: "translateX(calc(100% + 5px))",
  }
}));

export const Controls = ({ handlePrev, handleNext, index, max }) => {

  return (
    (<Root>
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
    </Root>)
  );
};
