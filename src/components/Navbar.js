import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { DrawerLinks } from "./DrawerLinks";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { RRSS } from "./RRSS";

const PREFIX = "Navbar";

const classes = {
  toolbar: `${PREFIX}-toolbar`,
  menuButton: `${PREFIX}-menuButton`,
  containerIconLogo: `${PREFIX}-containerIconLogo`,
  centerLogo: `${PREFIX}-centerLogo`,
  drawerContainer: `${PREFIX}-drawerContainer`,
  list: `${PREFIX}-list`,
  social: `${PREFIX}-social`,
  navContainer: `${PREFIX}-navContainer`,
  link: `${PREFIX}-link`,
  activeLink: `${PREFIX}-activeLink`,
  activeDrawerLink: `${PREFIX}-activeDrawerLink`,
  icon: `${PREFIX}-icon`,
};

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderWidth: 0,
  borderColor: "rgba(0,0,0, 0.12)",
  borderStyle: "solid",
  borderBottomWidth: 1,

  [`& .${classes.toolbar}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  [`& .${classes.menuButton}`]: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  [`& .${classes.containerIconLogo}`]: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      flexGrow: 0,
    },
  },

  [`& .${classes.centerLogo}`]: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
    marginLeft: theme.spacing(-3),
  },

  [`& .${classes.drawerContainer}`]: {
    display: "flex",
    width: 260,
    paddingTop: theme.spacing(1),
  },

  [`& .${classes.social}`]: {
    marginTop: "auto",
  },

  [`& .${classes.navContainer}`]: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "stretch",
    flexShrink: 0,
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    "& > a": {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  },
}));

export function Navbar({ currentPage }) {
  const [show, setShow] = useState(false);

  const toggleDrawer = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <StyledAppBar
      color="inherit"
      elevation={0}
      position="static"
      className={classes.appBar}
    >
      <Toolbar component={Container} maxWidth="lg" className={classes.toolbar}>
        <div className={classes.containerIconLogo}>
          <Box
            sx={{
              display: { md: "none" },
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              size="large"
            >
              <Menu />
            </IconButton>
          </Box>
          <Logo inNav darkColor className={classes.centerLogo} />
        </div>
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
              size="large"
            >
              <Menu />
            </IconButton>
            <Box mx="auto">
              <Logo inNav darkColor />
            </Box>
          </Toolbar>
          <Divider />
          <DrawerLinks handleClose={handleClose} currentPage={currentPage} />

          <Box mt="auto" className={classes.social}>
            <RRSS />
          </Box>
        </Drawer>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flex: 1,
            alignItems: "center",
            minHeight: "100%",
          }}
        >
          <NavLinks currentPage={currentPage} />
          <Box ml="auto" mr={-0.75}>
            <RRSS />
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
