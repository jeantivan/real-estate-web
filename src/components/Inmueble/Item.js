//import Gallery from "../Gallery";
import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Link,
} from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
  },
  imgContainer: {
    backgroundColor: "#e2e2e2",
    paddingTop: "56.25%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
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
      <CardMedia
        className={classes.imgContainer}
        image={mainImg.url}
        alt={mainImg.alt}
      />

      <CardContent>
        <NextLink href="/inmuebles/[slug]" as={`/inmuebles/${slug}`} passHref>
          <Link variant="h6" className={classes.title}>
            {titulo.text}
          </Link>
        </NextLink>
        <Typography variant="h5" gutterBottom>
          {new Intl.NumberFormat().format(precio)}$
        </Typography>
        <Typography variant="body2" gutterBottom>
          {area} m<sup>2</sup> | {habitaciones} habitaciones
        </Typography>
        <Typography variant="caption">
          <FontAwesomeIcon icon={faMapMarkerAlt} className={classes.icon} />{" "}
          {ubiAprox}
        </Typography>
      </CardContent>
    </Card>
  );
}
