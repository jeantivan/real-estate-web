import { Fab } from "@mui/material";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

const baseStyles = (theme) => ({
  boxShadow: "none",
  position: "absolute",
  opacity: 0,
  top: "50%",
  "&:focus, &:active": {
    boxShadow: "none",
  },
  transition: theme.transitions.create(["transform", "opacity"], {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

export const Controls = ({ handlePrev, handleNext, index, max }) => {
  return (
    <>
      {index !== 0 && (
        <Fab
          size="small"
          color="primary"
          onClick={handlePrev}
          disableRipple
          aria-label="Imagen anterior"
          sx={[
            baseStyles,
            { transform: "translate(calc(-100% - 5px), -50%)", left: 10 },
          ]}
        >
          <ChevronLeft />
        </Fab>
      )}
      {index !== max && (
        <Fab
          size="small"
          color="primary"
          onClick={handleNext}
          disableRipple
          aria-label="Siguiente imagen"
          sx={[
            baseStyles,
            { right: 10, transform: "translate(calc(100% + 5px), -50%)" },
          ]}
        >
          <ChevronRight />
        </Fab>
      )}
    </>
  );
};
