import React from "react";
import { Facebook, Instagram, Twitter, WhatsApp } from "@mui/icons-material";
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
    <Box backgroundColor="white" component="section" id="redes-sociales">
      <Container sx={{ py: 4 }}>
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
