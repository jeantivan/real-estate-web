import { getAllInmuebles } from "../lib/inmuebles";
import Layout from "../components/Layout";
import Pagination from "../components/Pagination";
import { Item } from "../components/Inmueble";

import { useState } from "react";
import { useRouter } from "next/router";

import {
  Grid,
  Typography,
  Button,
  Divider,
  Collapse,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: theme.spacing(2, 0),
  },
  filtro: {
    minWidth: "100%",
  },
  pagination: {
    marginTop: theme.spacing(4),
  },
}));

export default function Inmuebles({ data }) {
  const classes = useStyles();
  const router = useRouter();

  const [showFilters, setShowFilters] = useState(false);

  const handleToggle = () => {
    setShowFilters((toggle) => !toggle);
  };

  const handlePageChange = (_, newPage) => {
    router.push(`/inmuebles?page=${newPage}`);
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
        className={classes.container}
      >
        <Grid item>
          <Typography variant="h2" component="h1">
            Inmuebles
          </Typography>
        </Grid>
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
      </Grid>
      <Divider />
      <Collapse in={showFilters} className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <FormControl variant="outlined" className={classes.filtro}>
              <InputLabel id="filtro-fecha">Precio</InputLabel>
              <Select labelId="filtro-precio" id="filtro-precio" label="Precio">
                <MenuItem value="default">Por defecto</MenuItem>
                <MenuItem value="asc">Mayor a menor</MenuItem>
                <MenuItem value="desc">Menor a mayor</MenuItem>
              </Select>
              <FormHelperText>
                <Button size="small" color="primary" className={classes.margin}>
                  Avanzado
                </Button>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="outlined" className={classes.filtro}>
              <InputLabel id="filtro-fecha">Fecha de publicación</InputLabel>
              <Select
                labelId="filtro-fecha"
                id="filtro-fecha"
                label="Fecha de publicación"
              >
                <MenuItem value="default">Por defecto</MenuItem>
                <MenuItem value="asc">Nuevos</MenuItem>
                <MenuItem value="desc">Antiguos</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <Button>Filtro 3</Button>
          </Grid>
          <Grid item xs={3}>
            <Button>Filtro 4</Button>
          </Grid>
        </Grid>
      </Collapse>

      <Grid container spacing={2}>
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
