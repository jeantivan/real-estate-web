import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
    "&:hover > $icon": {
      color: theme.palette.primary.A700,
    },
  },
  icon: {
    margin: "0 auto",
    color: "#4c4c4c",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    "& > svg": {
      display: "block",
      width: 48,
      height: 48,
    },
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  heading: {
    marginBottom: theme.spacing(2),
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      width: 48,
      height: 2,
      backgroundColor: theme.palette.primary.A700,
      bottom: -2,
      left: "50%",
      transform: "translateX(-24px)",
    },
  },
}));

export default function Service({ icon, title, text }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div aria-hidden="true" className={classes.icon}>
        {icon}
      </div>
      <div className={classes.content}>
        <Typography variant="h6" align="center" className={classes.heading}>
          {title}
        </Typography>
        <Typography variant="body2" align="center" className={classes.text}>
          {text}
        </Typography>
      </div>
    </div>
  );
}
