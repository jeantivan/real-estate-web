import clsx from "clsx";
import makeStyles from '@mui/styles/makeStyles';
import SwipeableViews from "react-swipeable-views";

import Image from "next/image";

import { Controls } from "./Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: 0,
    overflow: "hidden",
    paddingTop: "56.25%",
    background: theme.palette.grey[600],
    borderRadius: "inherit",
    "&:hover button": {
      transform: "translateX(0)",
      opacity: 1,
    },
  },
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    display: "flex",
    "& .react-swipeable-view-container": {
      width: "100%",
      maxHeight: "100%",
    },
  },
  slide: {
    position: "relative",
    overflow: "hidden",
    width: "100%",
  },
}));

export function Carousel({
  imagenes,
  index,
  handleNext,
  handlePrev,
  handleChange,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SwipeableViews
        index={index}
        onChangeIndex={handleChange}
        className={classes.container}
        slideClassName={classes.slide}
        enableMouseEvents
      >
        {imagenes.map(({ imagen }) => (
          <Image key={imagen.alt} alt={imagen.alt} src={imagen.url} layout="fill" />
        ))}
      </SwipeableViews>
      <Controls
        handleNext={handleNext}
        handlePrev={handlePrev}
        index={index}
        max={imagenes.length - 1}
      />
    </div>
  );
}
