import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import {
  Container,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
const PREFIX = "redes";

const classes = {
  container: `${PREFIX}-container`,
  bgLight: `${PREFIX}-bgLight`,
  rsHeading: `${PREFIX}-rsHeading`,
  list: `${PREFIX}-list`,
  listItem: `${PREFIX}-listItem`,
  listIcon: `${PREFIX}-listIcon`,
};

const Root = styled("section")(({ theme }) => ({
  [`& .${classes.container}`]: {
    padding: theme.spacing(4, 2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(4, 2),
    // },
  },

  [`&.${classes.bgLight}`]: {
    backgroundColor: "white",
  },

  [`& .${classes.rsHeading}`]: {},

  [`& .${classes.list}`]: {
    listStyle: "none",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  [`& .${classes.listItem}`]: {
    fontSize: theme.spacing(2.5),
    display: "flex",
    color: theme.palette.text.secondary,
    transition: theme.transitions.create(["color", "transform"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      transform: "scale(1.1)",
      color: theme.palette.primary.main,
    },
  },

  [`& .${classes.listIcon}`]: {
    minWidth: 56,
  },
}));

const listItemStyle = (theme) => ({
  px: 0,
  transition: theme.transitions.create(["color"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  "&:hover *": {
    backgroundColor: "transparent",
    color: theme.palette.primary.main,
  },
});

export function RedesSection() {
  return (
    <Box backgroundColor="white">
      <Container component="section" id="redes-sociales" sx={{ py: 4 }}>
        <Typography
          component="h2"
          sx={(theme) => ({
            ...theme.typography.h5,
            fontWeight: "bold",
            marginBottom: theme.spacing(3),
          })}
        >
          Nuestras redes sociales.
        </Typography>
        <Typography variant="body1">
          Síguenos en nuestras redes sociales y enterate de nuestros nuevos
          inmuebles publicados
        </Typography>
        <List>
          <ListItem sx={listItemStyle}>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="@avilatekinmobiliaria" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
              <ListItemText primary="Avilatek Inmobiliaria" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemText primary="@avilatekinmobiliaria" />
            </ListItemButton>
          </ListItem>
          <ListItem sx={listItemStyle}>
            <ListItemButton disableRipple>
              <ListItemIcon>
                <WhatsApp />
              </ListItemIcon>
              <ListItemText primary="+58 424 1234567" />
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}
