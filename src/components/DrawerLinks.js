import { List, ListItem, ListItemText, Link } from "@mui/material";
import { useRouter } from "next/router";

const routes = [
  {
    name: "Inicio",
    href: "/home",
  },
  {
    name: "Inmuebles",
    href: "/inmuebles/1",
  },
  {
    name: "Nosotros",
    href: "/nosotros",
  },
  {
    name: "Contacto",
    href: "/contacto",
  },
];

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

const DrawerLink = ({ children, sx = [], ...rest }) => (
  <ListItem
    underline="none"
    component={Link}
    sx={[...(Array.isArray(sx) ? sx : [sx])]}
    {...rest}
  >
    <ListItemText disableTypography>{children}</ListItemText>
  </ListItem>
);

export function DrawerLinks({ handleClose, currentPage }) {
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
      {routes.map(({ name, href }) => (
        <DrawerLink
          key={name}
          sx={[baseSx, currentPage === name && afterSx]}
          href={href}
          onClick={(e) => {
            e.preventDefault();
            changePageTo(href);
          }}
        >
          {name}
        </DrawerLink>
      ))}
    </List>
  );
}
