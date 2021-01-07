
import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Avatar,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
    boxShadow: theme.shadows[2],
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[6],
    },
  },
  link: {
    textDecoration: "none",
  },
  imgContainer: {
    backgroundColor: "#e2e2e2",
    paddingTop: "56.25%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "relative",
    overflow: "hidden",
    height: 0,
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  estado: {
    position: "absolute",
    padding: theme.spacing(0.5, 1),
    fontWeight: 600,
    borderRadius: 4,
    top: 20,
    right: 20,
    color: (props) =>
      props.estado === "Venta"
        ? theme.palette.getContrastText(theme.palette.primary.A700)
        : theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: (props) =>
      props.estado === "Venta"
        ? theme.palette.primary.A700
        : theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.primary.dark,
  },
  footer: {
    padding: theme.spacing(0, 2, 2, 2),
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    display: "inline-block",
    marginRight: theme.spacing(2),
  },
}));
export default function InmuebleItem({
  slug,
  titulo,
  precio,
  ubiAprox,
  habitaciones,
  estado,
  area,
  mainImg,
  fecha,
  agent,
}) {
  const classes = useStyles({ estado });

  console.log(agent);
  return (
    <NextLink href="/inmueble/[slug]" as={`/inmueble/${slug}`} passHref>
      <a className={classes.link}>
        <Card className={classes.root} component="article">
          <div className={classes.imgContainer}>
            <LazyLoadImage
              src={mainImg.url}
              alt={mainImg.alt}
              className={classes.img}
            />
            <div className={classes.estado}>{estado}</div>
          </div>
          <CardContent>
            <Typography variant="h6" color="primary" className={classes.title}>
              {titulo.text}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.icon} />{" "}
              {ubiAprox}
            </Typography>
            <Typography variant="h5" gutterBottom>
              ${precio}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {area} m<sup>2</sup> | {habitaciones} habitaciones
            </Typography>
          </CardContent>
          <div className={classes.footer}>
            <Avatar
              className={classes.avatar}
              alt={agent.name}
              src={agent.picture.avatar.url}
            />
            <Typography variant="body2" color="textSecondary">
              {agent.name}
            </Typography>
          </div>
        </Card>
      </a>
    </NextLink>
  );
}

