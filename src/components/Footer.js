import { styled } from "@mui/styles";
import {
  Link,
  Grid,
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import {
  Copyright,
  Instagram,
  Facebook,
  Favorite,
  LocationOn,
  Phone,
  PhoneAndroid,
  Mail,
  YouTube,
  Twitter,
} from "@mui/icons-material";
import { keyframes } from "@emotion/react";

import NextLink from "next/link";

import { Newsletter } from "./Newsletter";
import { Logo } from "./Logo";
import { display } from "@mui/system";

const PREFIX = "Footer";

const classes = {
  root: `${PREFIX}-root`,
  bgDark: `${PREFIX}-bgDark`,
  container: `${PREFIX}-container`,
  gridItem: `${PREFIX}-gridItem`,
  subFooter: `${PREFIX}-subFooter`,
  copyright: `${PREFIX}-copyright`,
  logo: `${PREFIX}-logo`,
  heading: `${PREFIX}-heading`,
  text: `${PREFIX}-text`,
  link: `${PREFIX}-link`,
  icon: `${PREFIX}-icon`,
  rs: `${PREFIX}-rs`,
  social: `${PREFIX}-social`,
  me: `${PREFIX}-me`,
  heart: `${PREFIX}-heart`,
  heading: `${PREFIX}-heading`,
};

const pulseAnimation = keyframes`
  from {
    transform: scale3d(1, 1, 1);
  },
  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
`;

const sxClasses = {
  root: {
    width: "100%",
    bgcolor: "#24324a",
    color: "white",
  },
  bgDark: {
    bgcolor: "#1d293e",
  },
  container: {
    pt: 8,
    pb: 8,
  },
  gridItem: {
    p: 2,
  },
  subFooter: {
    color: "#8a99b3",
    fontSize: "0.8rem",
    display: "flex",
    py: 2,
  },
  copyright: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    mb: 2,
  },
  heading: {
    mb: { xs: 2, sm: 4 },
  },
  text: {
    color: "#8a99b3",
    fontSize: "0.8rem",
    display: "inline-flex",
    alignItems: "center",
    lineHeight: 1.2,
    my: 2,
  },
  link: [
    (theme) => ({
      ...theme.typography.body2,
      color: "#8a99b3",
      textDecoration: "none",

      marginBottom: theme.spacing(2),
      transition: theme.transitions.create(["color", "textDecoration"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
    {
      "&:hover": {
        color: "white",
      },
    },
  ],
  icon: {
    width: 12,
    height: 12,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    mr: 2,
  },
  rs: {
    mt: -1.5,
    mb: 2,
  },
  social: [
    (theme) => ({
      color: "#8a99b3",
      transition: theme.transitions.create("color", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }),
    {
      "&:hover": {
        color: "white",
      },
    },
  ],
  me: {
    display: "inline-flex",
    alignItems: "center",
    "& > *": {
      mx: 0.25,
    },
  },
  heart: {
    color: "#f44336",
    animation: `${pulseAnimation} 1s ease-in-out infinite`,
  },
};

export function Footer() {
  return (
    <Box component="footer" id="footer" sx={sxClasses.root}>
      <Container sx={sxClasses.container}>
        <Grid container justifyContent="space-between">
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            container
            direction="column"
            sx={sxClasses.gridItem}
          >
            <Typography variant="h6" sx={sxClasses.heading}>
              Nosotros
            </Typography>
            <Logo inFooter lightColor sx={sxClasses.logo} />
            <Typography sx={sxClasses.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
              ipsa ut labore ducimus similique voluptates tempora deleniti
              minima quisquam odit?
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            container
            direction="column"
            sx={sxClasses.gridItem}
          >
            <Typography variant="h6" sx={sxClasses.heading}>
              Navega
            </Typography>
            <NextLink href="/home" passHref>
              <Link sx={sxClasses.link}>Inicio</Link>
            </NextLink>
            <NextLink href="/inmuebles/1" passHref>
              <Link sx={sxClasses.link}>Inmuebles</Link>
            </NextLink>
            <NextLink href="/nosotros" passHref>
              <Link sx={sxClasses.link}>Nosotros</Link>
            </NextLink>
            <NextLink href="/contacto" passHref>
              <Link sx={sxClasses.link}>Contacto</Link>
            </NextLink>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            container
            direction="column"
            sx={sxClasses.gridItem}
          >
            <Typography variant="h6" sx={sxClasses.heading}>
              Contáctanos
            </Typography>

            <Box sx={sxClasses.text}>
              <Box
                component="span"
                role="img"
                aria-label="ubicacion"
                sx={sxClasses.icon}
              >
                <LocationOn fontSize="small" />
              </Box>
              Centro Perú, Av. Francisco de Miranda, Caracas.
            </Box>
            <Box sx={sxClasses.text}>
              <Box
                component="span"
                role="img"
                aria-label="telefono"
                sx={sxClasses.icon}
              >
                <PhoneAndroid fontSize="small" />
              </Box>
              +58 424 123 45-67
            </Box>
            <Box sx={sxClasses.text}>
              <Box
                component="span"
                role="img"
                aria-label="telefono"
                sx={sxClasses.icon}
              >
                <Phone fontSize="small" />
              </Box>
              +58 212 123 45-67
            </Box>
            <Box sx={sxClasses.text}>
              <Box
                component="span"
                role="img"
                aria-label="email"
                sx={sxClasses.icon}
              >
                <Mail fontSize="small" />
              </Box>
              contacto@avilatek.com
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            container
            direction="column"
            sx={sxClasses.gridItem}
          >
            <Typography variant="h6" sx={sxClasses.heading}>
              Siguenos
            </Typography>
            <Box sx={sxClasses.rs}>
              <IconButton
                sx={sxClasses.social}
                edge="start"
                disableRipple
                aria-label="Cuenta de instagram"
                size="large"
              >
                <Instagram />
              </IconButton>
              <IconButton
                sx={sxClasses.social}
                disableRipple
                aria-label="Cuenta de facebook"
                size="large"
              >
                <Facebook />
              </IconButton>
              <IconButton
                sx={sxClasses.social}
                disableRipple
                aria-label="Cuenta de twitter"
                size="large"
              >
                <Twitter />
              </IconButton>
              <IconButton
                sx={sxClasses.social}
                disableRipple
                aria-label="Canal de youtube"
                size="large"
              >
                <YouTube />
              </IconButton>
            </Box>
            <Typography variant="h6" gutterBottom>
              Promociones
            </Typography>
            <Typography sx={sxClasses.text}>
              Recibe notificaciones cuando se publique un nuevo inmueble.
            </Typography>
            <Newsletter />
          </Grid>
        </Grid>
      </Container>
      <Box sx={sxClasses.bgDark}>
        <Container>
          <Grid container spacing={2} sx={sxClasses.subFooter}>
            <Grid item sx={sxClasses.copyright}>
              <Box
                component="span"
                role="img"
                aria-label="ubicacion"
                sx={sxClasses.icon}
              >
                <Copyright fontSize="small" />
              </Box>
              {new Date().getFullYear()} Avilatek | Todos los derechos
              reservados
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              container
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <Box sx={sxClasses.me}>
                <span>Creado con</span>
                <Box component="span" aria-hidden="true" sx={sxClasses.heart}>
                  <Favorite fontSize="small" />
                </Box>
                <span>por</span>
                <Link
                  target="_blank"
                  href="https://github.com/jeantivan"
                  rel="noopener noreferrer"
                  color="primary"
                >
                  JEAN TIVAN.
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
