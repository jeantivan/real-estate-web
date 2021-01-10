import {
  AppBar,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import { Menu } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { DrawerLinks } from "./DrawerLinks";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { RRSS } from "./RRSS";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    width: "100%",
    borderBottom: `1px solid ${fade(theme.palette.primary.light, 0.2)}`,

    [theme.breakpoints.up("xl")]: {
      maxWidth: 1280,
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
    width: 260,
    paddingTop: theme.spacing(1),
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    maxWidth: 260,
  },
  social: {
    margin: "auto auto 0 auto",

    [theme.breakpoints.up("md")]: {
      margin: 0,
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

export function Navbar() {
  const router = useRouter();
  let classes = useStyles();
  const [show, setShow] = useState(false);

  const toggleDrawer = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <AppBar
      color="inherit"
      elevation={0}
      position="static"
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <div style={{ display: "inherit" }}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <Menu />
            </IconButton>
          </Hidden>

          <Logo type="navbar" />
        </div>
        <Hidden mdUp>
          <Drawer
            anchor="left"
            open={show}
            onClose={toggleDrawer}
            className={classes.drawerContainer}
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
                <Menu />
              </IconButton>
              <Logo type="navbar" />
            </Toolbar>
            <Divider />
            <DrawerLinks
              router={router}
              classes={{
                drawerList: classes.list,
                link: classes.link,
                activeLink: classes.activeDrawerLink,
              }}
              handleClose={handleClose}
            />

            <div className={classes.social}>
              <RRSS type="light" />
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown>
          <NavLinks
            classes={{
              link: classes.link,
              activeLink: classes.activeLink,
              navContainer: classes.navContainer,
            }}
            router={router}
          />
          <div className={classes.social}>
            <RRSS type="light" />
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}
