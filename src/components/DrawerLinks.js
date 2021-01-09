import clsx from "clsx";
import { List, ListItem, ListItemText, Link } from "@material-ui/core";

const DrawerLink = ({
  children,
  href,
  className,
  activeClassName,
  handleClose,
  router,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleClose();
    router.push(href);
  };

  return (
    <ListItem
      href={href}
      onClick={handleClick}
      component={Link}
      underline="none"
      className={clsx(className, {
        [activeClassName]: router.pathname === href,
      })}
    >
      <ListItemText disableTypography>{children}</ListItemText>
    </ListItem>
  );
};

export function DrawerLinks({ classes, handleClose, router }) {
  const { drawerList, link, activeLink } = classes;

  return (
    <List className={drawerList}>
      <DrawerLink
        href="/"
        handleClose={handleClose}
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Inicio
      </DrawerLink>
      <DrawerLink
        href="/inmuebles"
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
      </DrawerLink>
    </List>
  );
}
