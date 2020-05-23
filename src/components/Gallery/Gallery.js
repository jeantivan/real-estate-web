import React, { useState, useCallback } from "react";

import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

import { Controls } from "./Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100%",
    height: 0,
    overflow: "hidden",
    paddingTop: "56.25%",
    background: theme.palette.grey[600],
    borderRadius: theme.spacing(2),
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
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export function Gallery({ images }) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleChange = useCallback((index) => setIndex(index), [index]);

  const handleNext = () => {
    let nextIndex = images.length === index ? 0 : index + 1;
    handleChange(nextIndex);
  };
  const handlePrev = () => {
    let prevIndex = index === 0 ? images.length - 1 : index - 1;
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
        {images.map((img) => (
          <div
            key={img}
            className={classes.img}
            style={{ background: img, width: "100%", height: "100%" }}
          >
            {index}
          </div>
        ))}
      </SwipeableViews>
      <Controls
        handleNext={handleNext}
        handlePrev={handlePrev}
        index={index}
        max={images.length - 1}
      />
      <div className={classes.dots}>
        {images.map((_, i) => (
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
