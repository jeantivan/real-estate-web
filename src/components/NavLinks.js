import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import clsx from "clsx";

const NavLink = ({ children, href, className, activeClassName, router }) => {
  return (
    <NextLink href={href} passHref>
      <Link
        underline="none"
        className={clsx(className, {
          [activeClassName]: router.pathname === href,
        })}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const NavLinks = ({ classes, router }) => {
  const { link, activeLink, navContainer } = classes;
  return (
    <nav role="navigation" className={navContainer}>
      <NavLink
        href="/"
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Inicio
      </NavLink>
      <NavLink
        href="/inmuebles"
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Inmuebles
      </NavLink>
      <NavLink
        href="/servicios"
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Servicios
      </NavLink>
      <NavLink
        href="/nosotros"
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Nosotros
      </NavLink>
      <NavLink
        href="/contacto"
        className={link}
        activeClassName={activeLink}
        router={router}
      >
        Contacto
      </NavLink>
    </nav>
  );
};

export default NavLinks;
