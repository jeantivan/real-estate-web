import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink from "next/link";

import Logo from "./Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    padding: theme.spacing(0, 2),
    borderBottom: `1px solid ${fade(theme.palette.primary.light, 0.2)}`,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 4),
    },
  },
  menuButton: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  drawerContainer: {
    display: "flex",
    width: 240,
    paddingTop: theme.spacing(1),
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  social: {
    width: "100%",
    marginTop: "auto",
  },
  navContainer: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
    "& a:not(:last-child)": {
      margin: theme.spacing(0, 2),
    },
    "& a:last-child": {
      marginLeft: theme.spacing(2),
    },
  },
  link: {
    textDecoration: "none",
    color: "#202020",
    fontWeight: "bold",
    transition: theme.transitions.create(["color"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "relative",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  activeLink: {
    color: theme.palette.primary.main,

    "&:after": {
      position: "absolute",
      content: "''",
      height: 2,
      width: "80%",
      backgroundColor: theme.palette.primary.main,
      bottom: 0,
      left: 0,
      borderRadius: theme.spacing(2),
    },
  },
}));

const NavLink = ({ children, href, className, activeClassName }) => {
  const router = useRouter();
  const active = router.pathname === href;

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={clsx(className, { [activeClassName]: active })}
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const toggleDrawer = () => {
    setShow(!show);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Drawer
            anchor="left"
            open={show}
            onClose={toggleDrawer}
            className={classes.drawer}
            component="nav"
          >
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
              <Logo />
            </Toolbar>
            <Divider />
            <List className={classes.list}>
              <ListItem button component="a">
                <ListItemText>Inmuebles</ListItemText>
              </ListItem>
              <ListItem button component="a">
                <ListItemText>Servicios</ListItemText>
              </ListItem>
              <ListItem button component="a">
                <ListItemText>Nosotros</ListItemText>
              </ListItem>
              <ListItem button component="a">
                <ListItemText>Contacto</ListItemText>
              </ListItem>
            </List>

            <div className={classes.social}>
              <Divider />
              <Grid container justify="space-around">
                <Grid item>
                  <IconButton
                    color="secondary"
                    aria-label="Cuenta de instagram"
                  >
                    <InstagramIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="secondary" aria-label="Cuenta de facebook">
                    <FacebookIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="secondary" aria-label="Cuenta de facebook">
                    <MailIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </div>
          </Drawer>
          <nav role="navigation" className={classes.navContainer}>
            <NavLink
              href="/"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Inicio
            </NavLink>
            <NavLink
              href="/inmuebles"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Inmuebles
            </NavLink>
            <NavLink
              href="/servicios"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Servicios
            </NavLink>
            <NavLink
              href="/nosotros"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Nosotros
            </NavLink>
            <NavLink
              href="/contacto"
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              Contacto
            </NavLink>
          </nav>
        </Toolbar>
      </AppBar>
    </div>
  );
}
