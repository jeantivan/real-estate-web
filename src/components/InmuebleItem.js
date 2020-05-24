import Gallery from "./Gallery";
import { Typography, Card, CardContent, Link } from "@material-ui/core";
import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
  },
  gallery: {
    width: "100%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  price: {},
}));
export default function InmuebleItem({ titulo, images, slug, precio }) {
  const classes = useStyles();

  return (
    <Card className={classes.root} component="article">
      <div className={classes.gallery}>
        <Gallery images={images} />
      </div>
      <CardContent>
        <NextLink href="/inmuebles/[slug]" as={`/inmuebles/${slug}`}>
          <Link variant="h5">{titulo}</Link>
        </NextLink>
        <Typography variant="h6" gutterBottom>
          {precio}$
        </Typography>
      </CardContent>
    </Card>
  );
}
