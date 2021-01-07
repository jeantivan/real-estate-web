import { useState, useCallback } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  dots: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    bottom: 10,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: theme.palette.grey[400],
    margin: theme.spacing(0, 0.5),
    cursor: "pointer",
    borderRadius: "50%",
    transition: theme.transitions.create("background-color", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  active: {
    backgroundColor: theme.palette.primary.light,
  },
  slide: {
    overflow: "hidden",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  img: {
    width: "100%",
    height: "auto",
    overflow: "hidden",
    display: "block",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    objectFit: "cover",
  },
}));

export function Gallery({ imagenes }) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleChange = useCallback((index) => setIndex(index), [index]);

  const handleNext = () => {
    let nextIndex = imagenes.length === index ? 0 : index + 1;
    handleChange(nextIndex);
  };
  const handlePrev = () => {
    let prevIndex = index === 0 ? imagenes.length - 1 : index - 1;
    handleChange(prevIndex);
  };

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
          <LazyLoadImage
            key={imagen.alt}
            alt={imagen.alt}
            src={imagen.url}
            className={classes.img}
          />
        ))}
      </SwipeableViews>
      <Controls
        handleNext={handleNext}
        handlePrev={handlePrev}
        index={index}
        max={imagenes.length - 1}
      />
      <div className={classes.dots}>
        {imagenes.map((_, i) => (
          <span
            key={i}
            className={clsx(classes.dot, { [classes.active]: index === i })}
            onClick={() => handleChange(i)}
          />
        ))}
      </div>
    </div>
  );
}
