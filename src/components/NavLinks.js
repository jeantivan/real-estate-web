import NextLink from "next/link";
import { Link, Box } from "@mui/material";
import { ROUTES } from "@/utils/constants";

const baseSx = (theme) => ({
  textDecoration: "none",
  color: "#202020",
  fontWeight: "bold",
  display: "inline-flex",
  alignItems: "center",
  position: "relative",
  transition: theme.transitions.create("color", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  "&:after": {
    position: "absolute",
    content: "''",
    width: "0%",
    backgroundColor: theme.palette.primary.main,
    left: 0,
    borderRadius: theme.spacing(1, 1, 0, 0),
  },
});

const afterSx = {
  "&:after": {
    width: "100%",
    bottom: 0,
    height: 4,
  },
};

const NavLink = ({ children, href, sx = [], ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        underline="none"
        sx={[...(Array.isArray(sx) ? sx : [sx])]}
        {...rest}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export function NavLinks({ currentPage }) {
  return (
    <Box
      component="nav"
      role="navigation"
      sx={(theme) => ({
        mx: "auto",
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
      {ROUTES.map(({ name, href }) => (
        <NavLink
          key={name}
          href={href}
          sx={[baseSx, currentPage === name && afterSx]}
          className={`${currentPage === name && "active-link"} nav-link`}
        >
          {name}
        </NavLink>
      ))}
    </Box>
  );
}
