import { useState } from "react";
import { makeStyles, fade } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandArrowsAlt,
  faCouch,
  faBath,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 400,
    position: "relative",
    display: "inline-block",

    "&:after": {
      position: "absolute",
      bottom: 0,
      left: 0,
      content: "''",
      width: "45%",
      height: 2,
      backgroundColor: theme.palette.primary.light,
    },
  },
  price: {
    //fontWeight: "bold",
    color: theme.palette.primary.dark,
  },
  divider: {
    margin: theme.spacing(2, 0),
    backgroundColor: fade(theme.palette.primary.light, 0.2),
  },
  location: {
    display: "inline-flex",
    alignItems: "center",
    color: theme.palette.primary.main,
  },
  item: {
    display: "flex",
    alignItems: "center",
    fontSize: theme.spacing(3),
  },
  itemIcon: {
    flexShrink: 0,
    color: theme.palette.primary.light,
    fontSize: theme.spacing(3),
    marginRight: theme.spacing(2),
  },
  itemCaption: {
    display: "block",
    fontSize: theme.typography.pxToRem(12),
  },
  itemText: {
    display: "block",
    fontSize: theme.typography.pxToRem(18),
    fontWeight: 600,
  },
  button: {
    width: "100%",
  },
}));

export default function Information({
  precio,
  area,
  habitaciones,
  baños,
  estacionamientos,
  agent,
}) {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <section id="info-inmueble">
      <div>
        <Typography
          variant="h6"
          component="h3"
          className={classes.title}
          gutterBottom
        >
          Precio referencial.
        </Typography>
        <Typography variant="h2" component="h4" className={classes.price}>
          {new Intl.NumberFormat().format(precio)}$
        </Typography>
      </div>
      <Divider className={classes.divider} />
      <div>
        <Typography
          variant="h6"
          component="h3"
          className={classes.title}
          gutterBottom
        >
          Características del inmueble.
        </Typography>
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="flex-end"
        >
          <Grid item xs={6} className={classes.item}>
            <FontAwesomeIcon
              icon={faExpandArrowsAlt}
              className={classes.itemIcon}
            />
            <div>
              <span className={classes.itemCaption}>AREA</span>
              <span className={classes.itemText}>
                {area}{" "}
                <Typography variant="caption">
                  m<sup>2</sup>
                </Typography>
              </span>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <FontAwesomeIcon icon={faCouch} className={classes.itemIcon} />
            <div>
              <span className={classes.itemCaption}>HABITACIONES</span>
              <span className={classes.itemText}>{habitaciones}</span>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <FontAwesomeIcon icon={faBath} className={classes.itemIcon} />
            <div>
              <span className={classes.itemCaption}>BAÑOS</span>
              <span className={classes.itemText}>{baños}</span>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <FontAwesomeIcon icon={faCar} className={classes.itemIcon} />
            <div>
              <span className={classes.itemCaption}>ESTACIONAMIENTOS</span>
              <span className={classes.itemText}>{estacionamientos}</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider className={classes.divider} />
      <div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          className={classes.button}
          onClick={handleClickOpen}
        >
          Contactar
        </Button>
        <Contact agent={agent} open={openDialog} handleClose={handleClose} />
      </div>
    </section>
  );
}
