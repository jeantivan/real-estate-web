import clsx from "clsx";
import { List, ListItem, ListItemText, Link } from "@mui/material";
import { useRouter } from "next/router";

const baseSx = (theme) => ({
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
});
const afterSx = (theme) => ({
  color: theme.palette.primary.main,
  "&:after": {
    top: 0,
    width: 4,
    height: "100%",
    borderRadius: theme.spacing(0, 1, 1, 0),
  },
});

export function DrawerLinks({ handleClose }) {
  const router = useRouter();

  const changePageTo = (href) => {
    handleClose();
    return router.push(href);
  };

  return (
    <List
      sx={(theme) => ({
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        maxWidth: 260,
      })}
    >
      <ListItem
        underline="none"
        component={Link}
        sx={[baseSx, router.pathname === "/home" && afterSx]}
        href="/home"
        onClick={(e) => {
          e.preventDefault();
          changePageTo("/home");
        }}
      >
        <ListItemText disableTypography>Inicio</ListItemText>
      </ListItem>

      <ListItem
        underline="none"
        component={Link}
        sx={[baseSx, router.pathname === "/inmuebles/[page]" && afterSx]}
        href="/inmuebles/1"
        onClick={(e) => {
          e.preventDefault();
          changePageTo("/inmuebles/1");
        }}
      >
        <ListItemText disableTypography>Inmuebles</ListItemText>
      </ListItem>

      <ListItem
        underline="none"
        component={Link}
        sx={[baseSx, router.pathname === "/nosotros" && afterSx]}
        href="/nosotros"
        onClick={(e) => {
          e.preventDefault();
          changePageTo("/nosotros");
        }}
      >
        <ListItemText disableTypography>Nosotros</ListItemText>
      </ListItem>
      <ListItem
        underline="none"
        component={Link}
        href="/contacto"
        sx={[baseSx, router.pathname === "/contacto" && afterSx]}
        onClick={(e) => {
          e.preventDefault();
          changePageTo("/contacto");
        }}
      >
        <ListItemText disableTypography>Contacto</ListItemText>
      </ListItem>

      {/* <DrawerLink
        href="/home"
        handleClose={handleClose}
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Inicio
      </DrawerLink>
      <DrawerLink
        href="/inmuebles/1"
        handleClose={handleClose}
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Inmuebles
      </DrawerLink>
      <DrawerLink
        href="/nosotros"
        handleClose={handleClose}
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Nosotros
      </DrawerLink>
      <DrawerLink
        href="/contacto"
        handleClose={handleClose}
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Contacto
      </DrawerLink> */}
    </List>
  );
}
