import clsx from "clsx";
import { List, ListItem, ListItemText, Link } from "@material-ui/core";

const DrawerLink = ({ children, handleClick, href, className }) => {
  return (
    <ListItem
      onClick={(e) => handleClick(e, href)}
      component={Link}
      className={className}
    >
      <ListItemText disableTypography>{children}</ListItemText>
    </ListItem>
  );
};

const routes = [
  {
    name: "Inicio",
    href: "/",
  },
  {
    name: "Inmuebles",
    href: "/inmuebles",
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

const DrawerLinks = ({ classes, handleClose, router }) => {
  const { drawerList, link, activeLink } = classes;

  const handleClick = (e, href) => {
    e.preventDefault();
    handleClose();
    router.push(href);
  };

  return (
    <List className={drawerList}>
      {routes.map(({ name, href }) => (
        <DrawerLink
          href={href}
          handleClick={handleClick}
          className={clsx(link, {
            [activeLink]: router.pathname === href,
          })}
        >
          {name}
        </DrawerLink>
      ))}
    </List>
  );
};

export default DrawerLinks;
