import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import NextLink from "next/link";

const PREFIX = "Item";

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  location: `${PREFIX}-location`,
  link: `${PREFIX}-link`,
  imgContainer: `${PREFIX}-imgContainer`,
  img: `${PREFIX}-img`,
  estado: `${PREFIX}-estado`,
  footer: `${PREFIX}-footer`,
  avatar: `${PREFIX}-avatar`,
};

const Link = styled("a")(({ theme }) => ({
  [`& .${classes.root}`]: {
    minWidth: "100%",
    boxShadow: theme.shadows[2],
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[6],
    },
  },

  [`& .${classes.title}`]: {
    fontWeight: "bold",
  },

  [`& .${classes.location}`]: {
    fontWeight: "bold",
  },

  [`&.${classes.link}`]: {
    textDecoration: "none",
  },

  [`& .${classes.imgContainer}`]: {
    backgroundColor: "#e2e2e2",
    paddingTop: "56.25%",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    position: "relative",
    overflow: "hidden",
    height: 0,
  },

  [`& .${classes.img}`]: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  [`& .${classes.estado}`]: {
    position: "absolute",
    padding: theme.spacing(0.5, 1),
    fontWeight: 600,
    borderRadius: 4,
    top: 20,
    right: 20,
  },

  [`& .${classes.footer}`]: {
    padding: theme.spacing(0, 2, 2, 2),
    display: "flex",
    alignItems: "center",
  },

  [`& .${classes.avatar}`]: {
    display: "inline-block",
    marginRight: theme.spacing(1),
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export function InmuebleItem({
  slug,
  titulo,
  precio,
  ubiAprox,
  habitaciones,
  estado,
  banos,
  area,
  mainImg,
  fecha,
  agent,
  priority,
}) {
  return (
    <NextLink href="/inmueble/[slug]" as={`/inmueble/${slug}`} passHref>
      <Link className={classes.link}>
        <Card className={classes.root} component="article">
          <div className={classes.imgContainer}>
            <Image
              src={mainImg.url}
              alt={mainImg.alt}
              className={classes.img}
              layout="fill"
              priority={priority}
            />
            <Box
              className={classes.estado}
              sx={(theme) => ({
                color:
                  estado === "Venta"
                    ? theme.palette.getContrastText(theme.palette.primary.A700)
                    : theme.palette.getContrastText(
                        theme.palette.secondary.main
                      ),

                bgcolor:
                  estado === "Venta"
                    ? theme.palette.primary.A700
                    : theme.palette.secondary.main,
              })}
            >
              {estado}
            </Box>
          </div>
          <CardContent>
            <Typography variant="h6" className={classes.title}>
              {titulo.text}
            </Typography>
            <Typography
              variant="body2"
              className={classes.location}
              color="textSecondary"
              gutterBottom
            >
              {ubiAprox}
            </Typography>
            <Typography variant="h5" gutterBottom>
              ${precio}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {area} m<sup>2</sup> | {habitaciones} Habitaciones | {banos} Baños
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </NextLink>
  );
}
