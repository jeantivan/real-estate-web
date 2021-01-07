import { useRouter } from "next/router";

import {
  Grid,
  Button,
  TextField,
  MenuItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountDown,
  faSortAmountUp,
  faClock,
  faFileContract,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2, -1),
  },
  avatarFilter: {
    "& .MuiSelect-root": {
      display: "inline-flex",
      alignItems: "center",
    },
  },
  icon: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
}));

const agents = [
  {
    id: "XuKuBBIAACMAZ0zX",
    name: "Gina Linetti",
    picture:
      "https://images.prismic.io/realestateweb/187dcf9a-b2e2-4274-a45a-f8f0b7d435cd_Gina-Linetti.jpg?auto=compress,format&rect=0,0,160,160&w=40&h=40",
  },
  {
    id: "XuKtwRIAAFbNZ0us",
    name: "Rosa Diaz",
    picture:
      "https://images.prismic.io/realestateweb/1b1d66ad-9cd4-4dcf-a375-7caa0317dee3_Rosa-Diaz.jpg?auto=compress,format&rect=0,0,160,160&w=40&h=40",
  },
  {
    id: "XuKs2RIAAFbNZ0em",
    name: "Jake Peralta",
    picture:
      "https://images.prismic.io/realestateweb/a0327e67-9412-41ea-aca3-9297226af193_Jake-Peralta.jpg?auto=compress,format&rect=0,0,160,160&w=40&h=40",
  },
  {
    id: "XuKsaBIAACEAZ0Wl",
    name: "Terry Jeffords",
    picture:
      "https://images.prismic.io/realestateweb/df49e828-bffe-4216-9ae6-ffdd7136ec93_Terry-Jeffords.jpg?auto=compress,format&rect=0,0,160,160&w=40&h=40",
  },
];

const FilterSelect = (props) => (
  <TextField component={Paper} select variant="outlined" fullWidth {...props} />
);

const Filters = () => {
  const classes = useStyles();
  const router = useRouter();
  const [filters, setFilters] = React.useState({
    agent: router?.query?.agent || "",
    orderBy: router?.query?.orderBy || "",
    estado: router?.query?.estado || "",
  });

  const handleChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClick = () => {
    let newQuery = {
      ...router.query,
    };

    if (filters.agent) newQuery.agent = filters.agent;
    if (filters.orderBy) newQuery.orderBy = filters.orderBy;
    if (filters.estado) newQuery.estado = filters.estado;
    router.push({
      pathname: "/inmuebles",
      query: newQuery,
    });
  };

  React.useEffect(() => {
    console.log(router.query);
    console.log(filters);
  }, [filters]);
  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12} sm={4} md={3}>
        <FilterSelect
          name="estado"
          label="Estado"
          value={filters.estado}
          onChange={handleChange}
          size={filters.estado ? "small" : "medium"}
          classes={{
            root: classes.avatarFilter,
          }}
        >
          <MenuItem value="Venta">
            <ListItemAvatar>
              <Avatar className={classes.icon} aria-label="Venta icon">
                <FontAwesomeIcon icon={faMoneyBillWave} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Venta</ListItemText>
          </MenuItem>
          <MenuItem value="Alquiler">
            <ListItemAvatar>
              <Avatar className={classes.icon} aria-label="Alquiler icon">
                <FontAwesomeIcon icon={faFileContract} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Alquiler</ListItemText>
          </MenuItem>
        </FilterSelect>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <FilterSelect
          label="Ordenar por"
          name="orderBy"
          value={filters.orderBy}
          onChange={handleChange}
          size={filters.orderBy ? "small" : "medium"}
          classes={{
            root: classes.avatarFilter,
          }}
        >
          <MenuItem value="dn">
            <ListItemAvatar>
              <Avatar className={classes.icon} aria-label="Reciente">
                <FontAwesomeIcon icon={faClock} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Recientes</ListItemText>
          </MenuItem>
          <MenuItem value="pmax">
            <ListItemAvatar>
              <Avatar className={classes.icon} aria-label="Todos">
                <FontAwesomeIcon icon={faSortAmountUp} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Mayor Precio</ListItemText>
          </MenuItem>
          <MenuItem value="pmin">
            <ListItemAvatar>
              <Avatar className={classes.icon} aria-label="Todos">
                <FontAwesomeIcon icon={faSortAmountDown} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>Menor Precio</ListItemText>
          </MenuItem>
        </FilterSelect>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <FilterSelect
          name="agent"
          label="Agente"
          value={filters.agent}
          onChange={handleChange}
          size={filters.agent ? "small" : "medium"}
          classes={{
            root: classes.avatarFilter,
          }}
          SelectProps={{
            MenuProps: {
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              keepMounted: true,
            },
          }}
        >
          {agents.map((agent) => (
            <MenuItem key={agent.id} value={agent.id}>
              <ListItemAvatar>
                <Avatar alt={agent.name} src={agent.picture} />
              </ListItemAvatar>
              <ListItemText>{agent.name}</ListItemText>
            </MenuItem>
          ))}
        </FilterSelect>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick}
          disableElevation
        >
          Filtrar
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;
