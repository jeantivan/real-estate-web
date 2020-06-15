import { getAllInmuebles } from "../lib/inmuebles";
import Layout from "../components/Layout";
import { Item } from "../components/Inmueble";

import { useState } from "react";

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
}));

export default function Inmuebles({ inmuebleList }) {
  const classes = useStyles();

  const [showFilters, setShowFilters] = useState(false);

  const handleToggle = () => {
    setShowFilters((toggle) => !toggle);
  };

  return (
    <Layout titulo="Inmuebles">
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
    </Layout>
  );
}

export async function getStaticProps() {
  const { results } = await getAllInmuebles();

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

  return {
    props: {
      inmuebleList,
    },
  };
}
