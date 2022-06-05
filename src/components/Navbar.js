import {
  AppBar,
  Container,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Box,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { DrawerLinks } from "./DrawerLinks";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";
import { RRSS } from "./RRSS";
import { useScroll } from "@use-gesture/react";

const appbarBaseSx = {
  borderWidth: 0,
  borderStyle: "solid",
  borderBottomWidth: 1,
  transition: "all 0.1s ease",
};

export function Navbar({ currentPage }) {
  const [show, setShow] = useState(false);
  const [trigger, setTrigger] = useState(false);

  useScroll(
    ({ xy: [_, y] }) => {
      setTrigger(y > 0);
    },
    { target: typeof window !== "undefined" ? window : null }
  );

  const isInicioPage = currentPage === "Inicio";

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
      position="fixed"
      sx={[
        appbarBaseSx,
        {
          backdropFilter: trigger && "saturate(180%) blur(20px)",
          borderColor: !isInicioPage
            ? "rgba(0,0,0, 0.12)"
            : trigger
            ? "rgba(0,0,0, 0.12)"
            : "rgba(0,0,0,0)",
          backgroundColor: !isInicioPage
            ? "rgba(255,255, 255, 0.9)"
            : !trigger
            ? "transparent"
            : "rgba(255,255, 255, 0.9)",
        },
      ]}
    >
      <Toolbar
        component={Container}
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: { md: "none" },
          }}
        >
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={toggleDrawer}
            size="large"
            sx={{
              transition: "all 0.1s ease",
              color: !isInicioPage ? "black" : !trigger ? "white" : "black",
            }}
          >
            <Menu />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            flexGrow: { md: 0 },
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              mx: "auto",
              ml: { xs: -1.75, sm: 0 },
              "& .nav-logo": {
                transition: "all 0.1s ease",
                color: !isInicioPage ? "black" : !trigger ? "white" : "black",
              },
            }}
          >
            <Logo inNav />
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            display: { xs: "none", md: "flex" },
            flex: 1,
            alignSelf: "stretch",
            minHeight: "100%",
            "& .nav-link": {
              transition: "all 0.1s ease",
              color: !isInicioPage ? "black" : !trigger ? "white" : "black",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            },
          })}
        >
          <NavLinks currentPage={currentPage} />
        </Box>
        <Box
          sx={(theme) => ({
            display: { xs: "none", sm: "flex" },
            ml: "auto",
            mr: -1.5,
            alignSelf: "center",
            "& .redes-icon": {
              transition: "all 0.1s ease",
              color: !isInicioPage ? "black" : !trigger ? "white" : "black",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            },
          })}
        >
          <RRSS />
        </Box>
        <Drawer
          anchor="left"
          open={show}
          onClose={toggleDrawer}
          component="nav"
          sx={{ display: "flex", width: 260, pt: 1 }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              size="large"
              mr={1}
            >
              <Menu />
            </IconButton>
            <Box mx="auto">
              <Logo inNav />
            </Box>
          </Toolbar>
          <Divider />
          <DrawerLinks handleClose={handleClose} currentPage={currentPage} />
          <Box mt="auto" sx={{ "& .redes-icon": { color: "black" } }}>
            <RRSS />
          </Box>
        </Drawer>
      </Toolbar>
      {/* <animated.div {...bind()} /> */}
    </AppBar>
  );
}
