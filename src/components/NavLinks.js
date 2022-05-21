import NextLink from "next/link";
import { Link, Box } from "@mui/material";
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
    width: "100%",
    bottom: 0,
    height: 4,
  },
});

const NavLink = ({ children, href, sx = [] }) => {
  return (
    <NextLink href={href} passHref>
      <Link underline="none" sx={[...(Array.isArray(sx) ? sx : [sx])]}>
        {children}
      </Link>
    </NextLink>
  );
};

export function NavLinks() {
  const router = useRouter();

  return (
    <Box
      component="nav"
      role="navigation"
      sx={(theme) => ({
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
      })}
    >
      {routes.map(({ name, href }) => {
        if (
          router.pathname === "/inmuebles/[page]" &&
          href === "/inmuebles/1"
        ) {
          return (
            <NavLink key={name} href={href} sx={[baseSx, afterSx]}>
              {name}
            </NavLink>
          );
        }
        return (
          <NavLink
            key={name}
            href={href}
            sx={[baseSx, router.pathname === href && afterSx]}
          >
            {name}
          </NavLink>
        );
      })}
    </Box>
  );
}
