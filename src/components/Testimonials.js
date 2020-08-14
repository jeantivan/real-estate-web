import Testimonial from "./Testimonial";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  testimonials: {
    marginBottom: theme.spacing(4),
    maxWidth: "100vw",
  },
  testimonialSlide: {
    padding: theme.spacing(3, 2),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4, 6),
    },
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

const testimonials = [
  {
    client: "Cecilio Manzanares",
    type: "Comprador",
    picture: "/images/male-1.jpg",
    text:
      "Etiam condimentum mauris viverra elit ullamcorper, in pellentesque lectus faucibus.Nullam sodales, turpis quis luctus euismod, magna sem egestas ipsum, id posuere ex eros sed.",
  },
  {
    client: "Daila Zapata Jiménez",
    type: "Vendedora",
    picture: "/images/female-1.jpg",
    text:
      "Fusce finibus, orci a imperdiet semper, dui justo vestibulum orci, id ornare arcu tellus ut metus. Integer gravida nibh neque, ac lobortis neque ornare id. Phasellus ac pharetra orci, at tristique nibh. Aliquam ac augue.",
  },
  {
    client: "Francisco Cardona Cadena",
    type: "Vendedor",
    picture: "/images/male-2.jpg",
    text:
      "Etiam mollis posuere dui, porta dictum neque. Etiam posuere aliquam quam, non facilisis orci euismod quis. Nunc in ullamcorper ipsum. Aenean dapibus libero in maximus.",
  },
  {
    client: "Josefina Morales",
    type: "Compradora",
    picture: "/images/female-2.jpg",
    text:
      "Duis non orci feugiat, bibendum metus sit amet, dignissim ligula. Donec vel pellentesque quam. Sed vel risus nibh. Cras ipsum tortor, tristique ac magna et, scelerisque aliquet ante. Sed pulvinar diam in enim euismod, vel.",
  },
];

const AutoSwipeableViews = autoPlay(SwipeableViews);

export default function Testimonials() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleChange = (index) => setIndex(index);
  return (
    <div className={classes.testimonials}>
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
    </div>
  );
}
