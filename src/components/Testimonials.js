import { Testimonial } from "./Testimonial";
import { styled } from '@mui/material/styles';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import clsx from "clsx";
import { testimonials } from "@/utils/testimonials";

const PREFIX = 'Testimonials';

const classes = {
  testimonials: `${PREFIX}-testimonials`,
  testimonialSlide: `${PREFIX}-testimonialSlide`,
  dots: `${PREFIX}-dots`,
  dot: `${PREFIX}-dot`,
  active: `${PREFIX}-active`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.testimonials}`]: {
    marginBottom: theme.spacing(4),
    maxWidth: "100vw",
  },

  [`& .${classes.testimonialSlide}`]: {
    // padding: theme.spacing(3, 2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(4),
    // },
    // [theme.breakpoints.up("md")]: {
    //   padding: theme.spacing(4, 6),
    // },
  },

  [`& .${classes.dots}`]: {
    padding: theme.spacing(1),
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  [`& .${classes.dot}`]: {
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

  [`& .${classes.active}`]: {
    backgroundColor: theme.palette.primary.dark,
  }
}));

const AutoSwipeableViews = autoPlay(SwipeableViews);

export function Testimonials() {

  const [index, setIndex] = React.useState(0);

  const handleChange = (index) => setIndex(index);
  return (
    <Root className={classes.testimonials}>
      <AutoSwipeableViews
        index={index}
        onChangeIndex={handleChange}
        enableMouseEvents
        style={{ paddig: "0 30px" }}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.client} className={classes.testimonialSlide}>
            <Testimonial {...testimonial} />
          </div>
        ))}
      </AutoSwipeableViews>
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
    </Root>
  );
}
