import { getAllInmuebles } from "../lib/api";

import { Layout, Pagination, Filters } from "../components";
import { Item } from "../components/Inmueble";

import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Grid,
  Typography,
  Divider,
  Button,
  Collapse,
  Link,
  Container,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2, 0),
  },
  list: {
    margin: theme.spacing(2, -1),
  },
  pagination: {
    margin: theme.spacing(4, 0),
  },
}));

export default function Inmuebles({ data }) {
  const classes = useStyles();
  const router = useRouter();

  const [showFilters, setShowFilters] = React.useState(false);

  const handleToggle = () => {
    setShowFilters(!showFilters);
  };

  const handlePageChange = (_, newPage) => {
    const { page: currentPage } = router.query;
    if (currentPage == newPage || (!currentPage && newPage === 1)) return;

    router
      .push(
        newPage === 1
          ? {
              pathname: "/inmuebles",
              query: {
                ...router.query,
              },
            }
          : {
              pathname: "/inmuebles",
              query: {
                ...router.query,
                page: newPage,
              },
            }
      )
      .then(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
  };

  const { results, total_pages, page } = data;

  const inmuebleList = results.map(({ data, uid }) => {
    return {
      slug: uid,
      area: data.area,
      titulo: data.titulo[0],
      mainImg: data.mainimg,
      precio: data.precio,
      estado: data.estado,
      ubiAprox: data.ubiaprox,
      habitaciones: data.habitaciones,
    };
  });

  return (
    <Layout
      titulo="Inmuebles"
      descripcion="Cras rutrum, ligula id varius consequat, nunc leo tincidunt massa, eu ornare neque ipsum vitae dui. Etiam arcu mauris, rhoncus vel nibh id, auctor porttitor leo. Phasellus eu lectus lorem. Curabitur consequat porta lacus interdum placerat. Nullam urna ligula, dignissim non enim eu, fermentum porta nulla. Etiam ut feugiat felis. In a odio ut erat efficitur vehicula. Proin vestibulum neque est, sit amet varius libero finibus et. Nullam magna justo, volutpat eget lacinia vel, fringilla non ligula. Nam sagittis justo ac ornare condimentum. Donec eros eros, bibendum quis velit nec, tincidunt gravida nisi."
    >
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="flex-end"
          className={classes.title}
        >
          <Grid item>
            <Typography variant="h2" component="h1">
              Inmuebles
            </Typography>
          </Grid>
          {results.length >= 1 && (
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleToggle}
                endIcon={<FontAwesomeIcon icon={faSort} />}
              >
                Filtros
              </Button>
            </Grid>
          )}
        </Grid>
        <Divider />
        {results.length >= 1 && (
          <Collapse in={showFilters}>
            <Filters />
          </Collapse>
        )}

        <Grid container spacing={2} className={classes.list}>
          {results.length < 1 ? (
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="div"
                align="center"
                gutterBottom
              >
                No hay propiedades para mostrar.
              </Typography>
              <NextLink href="/inmuebles" passHref>
                <Link
                  display="block"
                  variant="h6"
                  align="center"
                  color="primary"
                  underline="hover"
                >
                  Ver todos los inmuebles.
                </Link>
              </NextLink>
            </Grid>
          ) : (
            inmuebleList.map((inmueble) => (
              <Grid key={inmueble.slug} item xs={12} sm={6} md={4}>
                {<Item {...inmueble} />}
              </Grid>
            ))
          )}
        </Grid>
        {results.length >= 1 && (
          <Grid container justify="center" className={classes.pagination}>
            <Pagination
              page={page}
              totPages={total_pages}
              handleChange={handlePageChange}
            />
          </Grid>
        )}
      </Container>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const data = await getAllInmuebles(query);

  return {
    props: {
      data,
    },
  };
}
