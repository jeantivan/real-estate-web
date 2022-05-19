import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import {
  Container,
  Grid,
  IconButton,
  Button,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
const PREFIX = 'redes';

const classes = {
  container: `${PREFIX}-container`,
  bgLight: `${PREFIX}-bgLight`,
  rsHeading: `${PREFIX}-rsHeading`,
  list: `${PREFIX}-list`,
  listItem: `${PREFIX}-listItem`,
  listIcon: `${PREFIX}-listIcon`
};

const Root = styled('section')((
  {
    theme
  }
) => ({
  [`& .${classes.container}`]: {
    padding: theme.spacing(4, 2),
    // [theme.breakpoints.up("sm")]: {
    //   padding: theme.spacing(4, 2),
    // },
  },

  [`&.${classes.bgLight}`]: {
    backgroundColor: "white",
  },

  [`& .${classes.rsHeading}`]: {
    ...theme.typography.h5,
    fontWeight: "bold",
    margin: 0,
    marginBottom: theme.spacing(3),
  },

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
  }
}));

export function RedesSection() {

  return (
    <Root id="rrss" className={classes.bgLight}>
      <Container className={classes.container}>
        <h2 className={classes.rsHeading}>Nuestras redes sociales.</h2>
        <Typography
          variant="body1
        "
        >
          Enterate de nuestros nuevos inmbuebles publicados, siguenos
        </Typography>
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <div className={classes.listIcon}>
              <Instagram />
            </div>
            <div>@avilatekinmobiliaria</div>
          </li>
        </ul>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Instagram />
              </ListItemIcon>
              <ListItemText primary="@avilatekinmobiliaria" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
              <ListItemText primary="Avilatek Inmobiliaria" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemText primary="@avilatekinmobiliaria" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <WhatsApp />
              </ListItemIcon>
              <ListItemText primary="+58 424 1234567" />
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </Root>
  );
}
