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

export function Navbar({ currentPage }) {
  const [show, setShow] = useState(false);

  const toggleDrawer = () => {
    setShow(!show);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <AppBar
        color="inherit"
        elevation={0}
        position="fixed"
        sx={{
          borderWidth: 0,
          borderColor: "rgba(0,0,0, 0.12)",
          borderStyle: "solid",
          borderBottomWidth: 1,
          backgroundColor: "rgba(255,255, 255, 0.8)",
          backdropFilter: "saturate(180%) blur(20px)",
        }}
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
              display: "flex",
              flex: 1,
              alignItems: "center",
              flexGrow: { md: 0 },
            }}
          >
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
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                ml: { xs: -3, md: 0 },
                /* "& .nav-logo": {
                  color: scrollYProgress.get() === 0 ? "white" : "black",
                }, */
              }}
            >
              <Logo inNav />
            </Box>
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

            <Box
              mt="auto"
              sx={{
                ".& > *": {
                  color: "white",
                },
              }}
            >
              <RRSS />
            </Box>
          </Drawer>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flex: 1,
              alignSelf: "stretch",
              minHeight: "100%",
            }}
          >
            <NavLinks currentPage={currentPage} />
            <Box ml="auto" mr={-0.75} alignSelf="center">
              <RRSS />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* {(currentPage !== "Inicio" || !currentPage !== "Nosotros") && <Toolbar />} */}
    </>
  );
}
