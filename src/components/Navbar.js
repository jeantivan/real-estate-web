import { useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Grid,
  useScrollTrigger,
  useMediaQuery,
} from "@material-ui/core/";

import clsx from "clsx";
import { useRouter } from "next/router";
import NextLink from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

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
  toolbar: {
    maxWidth: 1920,
    width: "100%",
    padding: theme.spacing(0, 2),
    borderBottom: `1px solid ${fade(theme.palette.primary.light, 0.2)}`,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(0, 4),
    },
    [theme.breakpoints.up("xl")]: {
      padding: theme.spacing(0, 10),
      margin: "0 auto",
    },
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(1),
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
    backgroundColor: theme.palette.background.paper,
  },
  social: {
    marginTop: "auto",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      padding: 0,
    },
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    "& a:not(:last-child)": {
      margin: theme.spacing(0, 2),
    },
    "& a:last-child": {
      marginLeft: theme.spacing(2),
    },
    alignSelf: "stretch",
    flexShrink: 0,
  },
  link: {
    textDecoration: "none",
    color: "#202020",
    fontWeight: "bold",
    display: "inline-flex",
    alignItems: "center",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    position: "relative",
    "&:hover": {
      color: theme.palette.primary.main,
    },

    "&:after": {
      position: "absolute",
      content: "''",
      width: "0%",
      backgroundColor: theme.palette.primary.main,
      left: 0,
      borderRadius: theme.spacing(1, 1, 0, 0),
    },
  },
  activeLink: {
    color: theme.palette.primary.main,

    "&:after": {
      width: "100%",
      bottom: 0,
      height: 4,
    },
  },
  activeDrawerLink: {
    color: theme.palette.primary.main,
    "&:after": {
      top: 0,
      width: 4,
      height: "100%",
      borderRadius: theme.spacing(0, 1, 1, 0),
    },
  },
  icon: {
    color: "#202020",
    transition: theme.transitions.create("color", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));

const NavLink = ({ children, href, className, activeClassName }) => {
  const router = useRouter();
  const active =
    router.pathname === href ||
    (router.pathname.includes("inmuebles") && href === "/inmuebles");

  return (
    <NextLink href={href}>
      <Link
        underline="none"
        href={href}
        className={clsx(className, { [activeClassName]: active })}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavLinks = ({ classes }) => {
  const { link, activeLink, navContainer } = classes;
  return (
    <nav role="navigation" className={navContainer}>
      {routes.map(({ href, text }) => (
        <NavLink
          key={href}
          href={href}
          className={link}
          activeClassName={activeLink}
        >
          {text}
        </NavLink>
      ))}
    </nav>
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
  const theme = useTheme();
  const upToMd = useMediaQuery(theme.breakpoints.up("md"));

  const toggleDrawer = () => {
    setShow(!show);
  };

  const SocialMediaLinks = (
    <div className={classes.social}>
      <Grid container justify="space-between">
        <Grid item>
          <IconButton
            color="primary"
            className={classes.icon}
            disableRipple
            aria-label="Cuenta de instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            className={classes.icon}
            disableRipple
            aria-label="Cuenta de facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            className={classes.icon}
            disableRipple
            aria-label="Cuenta de facebook"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <ElevationScroll>
      <AppBar color="inherit" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div style={{ display: "inherit" }}>
            {!upToMd && (
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
            )}
            <Logo type="navbar" />
          </div>
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
                <FontAwesomeIcon icon={faBars} />
              </IconButton>
              <Logo type="navbar" />
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

            {SocialMediaLinks}
          </Drawer>
          {upToMd && (
            <>
              <NavLinks
                classes={{
                  link: classes.link,
                  activeLink: classes.activeLink,
                  navContainer: classes.navContainer,
                }}
              />
              {SocialMediaLinks}
            </>
          )}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
