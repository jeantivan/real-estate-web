import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Link } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
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
  title: {
    cursor: "pointer",
  },
  icon: {
    color: theme.palette.primary.dark,
  },
}));
export default function InmuebleItem({
  slug,
  titulo,
  precio,
  ubiAprox,
  habitaciones,
  area,
  mainImg,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} component="article">
      <div className={classes.imgContainer}>
        <LazyLoadImage
          src={mainImg.url}
          alt={mainImg.alt}
          className={classes.img}
        />
      </div>
      <CardContent>
        <Typography variant="caption" display="block">
          <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.icon} />{" "}
          {ubiAprox}
        </Typography>
        <NextLink href="/inmuebles/[slug]" as={`/inmuebles/${slug}`} passHref>
          <Link variant="h6" className={classes.title}>
            {titulo.text}
          </Link>
        </NextLink>
        <Typography variant="h5" gutterBottom>
          ${precio}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {area} m<sup>2</sup> | {habitaciones} habitaciones
        </Typography>
      </CardContent>
    </Card>
  );
}
