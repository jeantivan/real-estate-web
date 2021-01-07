
import NextLink from "next/link";
import Link from "@material-ui/core/Link";
import clsx from "clsx";

const NavLink = ({ children, href, className }) => {
  return (
    <NextLink href={href} passHref>
      <Link underline="none" className={className}>
        {children}
      </Link>
    </NextLink>
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
const NavLinks = ({ classes, router }) => {
  const { link, activeLink, navContainer } = classes;
  return (
    <nav role="navigation" className={navContainer}>
      {routes.map(({ name, href }) => (
        <NavLink
          key={name}
          href={href}
          className={clsx(link, {
            [activeLink]: router.pathname === href,
          })}
        >
          {name}
        </NavLink>
      ))}
      {/* <NavLink
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
      </NavLink> */}
    </nav>
  );
};

export default NavLinks;

