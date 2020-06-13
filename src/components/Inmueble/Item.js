import Gallery from "../Gallery";
import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent, Link } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
  },
  gallery: {
    width: "100%",
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
  titulo,
  images,
  slug,
  precio,
  ubiAprox,
  habitaciones,
  area,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} component="article">
      <div className={classes.gallery}>
        <Gallery images={images} />
      </div>
      <CardContent>
        <NextLink href="/inmuebles/[slug]" as={`/inmuebles/${slug}`}>
          <Link variant="h6" className={classes.title}>
            {titulo}
          </Link>
        </NextLink>
        <Typography variant="h5" gutterBottom>
          {precio}$
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
