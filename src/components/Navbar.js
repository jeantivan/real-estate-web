import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Grid,
  useScrollTrigger,
} from "@material-ui/core/";

import MenuIcon from "@material-ui/icons/Menu";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import clsx from "clsx";
import { useRouter } from "next/router";
//import NextLink from "next/link";

import Logo from "./Logo";

const routes = [
  {
    href: "/",
    text: "Inicio",
  },
  {
    href: "/inmuebles",
    text: "Inmuebles",
  },
  {
    href: "/servicios",
    text: "Servicios",
  },
  {
    href: "/nosotros",
    text: "Nosotros",
  },
  {
    href: "/contacto",
    text: "Contacto",
  },
];

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
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(0, 10),
    },
    alignItems: "center",
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
    maxWidth: 240,
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
    alignSelf: "stretch",
  },
  link: {
    textDecoration: "none",
    color: "#202020",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    transition: theme.transitions.create(["color"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "relative",
    "&:hover": {
      color: theme.palette.primary.main,

      "&:after": {
        width: "80%",
      },
    },

    "&:after": {
      position: "absolute",
      content: "''",
      width: "0%",
      backgroundColor: theme.palette.primary.main,
      left: 0,
      borderRadius: theme.spacing(1, 1, 0, 0),
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  },
  activeLink: {
    color: theme.palette.primary.main,

    "&:after": {
      width: "80%",
      bottom: 0,
      height: 4,
      transform: "translateX(10%)",
    },
  },
  activeDrawerLink: {
    color: theme.palette.primary.main,
    "&:after": {
      top: 8,
      width: 4,
      height: "calc(100% - 16px)",
      borderRadius: theme.spacing(0, 1, 1, 0),
    },
  },
}));

const NavLink = ({ children, href, className, activeClassName }) => {
  const router = useRouter();
  const active =
    router.pathname === href ||
    (router.pathname.includes("inmuebles") && href === "/inmuebles");
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  /* React.useEffect(() => {
    console.log(router.pathname, router.pathname.replace("/", "1"));
  }); */
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

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
}

export default function Navbar() {
  let classes = useStyles();
  const [show, setShow] = useState(false);

  const toggleDrawer = () => {
    setShow(!show);
  };

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar color="inherit" elevation={0}>
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
                {routes.map((route) => (
                  <ListItem
                    key={route.href}
                    component={NavLink}
                    className={classes.link}
                    activeClassName={classes.activeDrawerLink}
                    href={route.href}
                  >
                    <ListItemText disableTypography>{route.text}</ListItemText>
                  </ListItem>
                ))}
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
                    <IconButton
                      color="secondary"
                      aria-label="Cuenta de facebook"
                    >
                      <FacebookIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton
                      color="secondary"
                      aria-label="Cuenta de facebook"
                    >
                      <MailIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </div>
            </Drawer>
            <nav role="navigation" className={classes.navContainer}>
              {routes.map((route) => (
                <NavLink
                  key={route.href}
                  href={route.href}
                  className={classes.link}
                  activeClassName={classes.activeLink}
                >
                  {route.text}
                </NavLink>
              ))}
            </nav>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
