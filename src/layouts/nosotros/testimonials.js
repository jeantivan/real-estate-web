import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";

import { Testimonials, Testimonial } from "@/components/";
import { testimonials } from "@/utils/testimonials";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import clsx from "clsx";

const AutoSwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  container: {
    minHeight: "10vmax",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  testimonialContainer: {
    marginBottom: theme.spacing(3),
  },
  dots: {
    padding: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "center",
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
    backgroundColor: theme.palette.primary.dark,
  },
}));

export function TestimonialsSection() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleChange = (index) => setIndex(index);

  return (
    <Container
      component="section"
      maxWidth="lg"
      id="testimonial-section"
      className={classes.root}
    >
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} md={10}>
          <Typography component="h2" align="center" variant="h4" gutterBottom>
            Clientes felices
          </Typography>
          <Typography align="center" variant="h6" component="p">
            La experiencia de nuestros clientes habla por nosotros.
          </Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <div className={classes.testimonialContainer}>
            <Testimonial {...testimonials[0]} />
          </div>
          <div className={classes.dots}>
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={clsx(classes.dot, {
                  [classes.active]: index === i,
                })}
                onClick={() => handleChange(i)}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
