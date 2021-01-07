import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    ...theme.typography.h6,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "white",
    textShadow: "1px 2px 4px rgba(0, 0, 0, 0.8)",
  },
  hero: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    height: "15vmax",
    overflow: "hidden",
    backgroundSize: "cover",
    background: (props) =>
      `radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 37%, rgba(0, 0, 0, 0.65) 100%), url(${props.imgUrl}) no-repeat center center scroll`,
    [theme.breakpoints.up("sm")]: {
      height: "20vmin",
    },
  },
}));

export default function Hero({ imgUrl, alt, children }) {
  const classes = useStyles({ imgUrl });

  return (
    <div
      className={classes.hero}
      {...(alt && alt !== "" ? { role: "img", "aria-label": alt } : {})}
    >
      <h1 className={classes.title}>{children}</h1>
    </div>
  );
}
