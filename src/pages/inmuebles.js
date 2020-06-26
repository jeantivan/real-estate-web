import { getAllInmuebles } from "../lib/api";

import { Layout, Pagination } from "../components";
import { Item } from "../components/Inmueble";

import { useRouter } from "next/router";

import {
  Grid,
  Typography,
  Divider,
  /*Button,
  Collapse,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText, */
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";

/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons"; */

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(2, 0),
  },
  list: {
    margin: theme.spacing(2, -1),
  },
  /* filtro: {
    minWidth: "100%",
  }, */
  pagination: {
    marginTop: theme.spacing(4),
  },
}));

export default function Inmuebles({ data }) {
  const classes = useStyles();
  const router = useRouter();

  //const [showFilters, setShowFilters] = useState(false);

  /* const handleToggle = () => {
    setShowFilters((toggle) => !toggle);
  }; */

  const handlePageChange = (_, newPage) => {
    const { page: currentPage } = router.query;
    if (currentPage == newPage || (!currentPage && newPage === 1)) return;

    router
      .push(newPage === 1 ? "/inmuebles" : `/inmuebles?page=${newPage}`)
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
        {/* <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleToggle}
            endIcon={<FontAwesomeIcon icon={faSort} />}
          >
            Filtros
          </Button>
        </Grid> */}
      </Grid>
      <Divider />

      <Grid container spacing={2} className={classes.list}>
        {inmuebleList.map((inmueble) => (
          <Grid key={inmueble.slug} item xs={12} sm={6} md={4}>
            {<Item {...inmueble} />}
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center" className={classes.pagination}>
        <Pagination
          page={page}
          totPages={total_pages}
          handleChange={handlePageChange}
        />
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const data = await getAllInmuebles(query.page || 1);

  return {
    props: {
      data,
    },
  };
}
