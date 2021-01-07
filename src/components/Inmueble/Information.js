<<<<<<< Updated upstream
import { useState } from "react";
import { makeStyles, fade } from "@material-ui/core";
import { Button, Divider, Grid, Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandArrowsAlt,
  faCouch,
  faBath,
  faCar,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

import { useSnackbar } from "notistack";

import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "& div:last-child": {
      marginTop: "auto",
    },
  },
  title: {
    fontWeight: 600,
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
    fontWeight: 700,
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
    color: theme.palette.primary.A700,
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
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = (variant) => {
    setOpenDialog(false);
    if (variant) {
      enqueueSnackbar(
        "Mensaje enviado. Te contactaremos lo más pronto posible.",
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }
      );
    }
  };

  return (
    <div className={classes.root}>
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
          ${precio}
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
            <span>
              <FontAwesomeIcon
                icon={faRulerCombined}
                className={classes.itemIcon}
              />
            </span>
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
            <span>
              <FontAwesomeIcon icon={faCouch} className={classes.itemIcon} />
            </span>

            <div>
              <span className={classes.itemCaption}>HABITACIONES</span>
              <span className={classes.itemText}>{habitaciones}</span>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <span>
              <FontAwesomeIcon icon={faBath} className={classes.itemIcon} />
            </span>
            <div>
              <span className={classes.itemCaption}>BAÑOS</span>
              <span className={classes.itemText}>{baños}</span>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <span>
              <FontAwesomeIcon icon={faCar} className={classes.itemIcon} />
            </span>

            <div>
              <span className={classes.itemCaption}>ESTACIONAMIENTOS</span>
              <span className={classes.itemText}>{estacionamientos}</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider className={classes.divider} />
      <div>
        <Typography gutterBottom variant="h6" component="div" align="center">
          ¿Quieres mas información? ¡Contactanos!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          fullWidth
          onClick={handleClickOpen}
        >
          Contactar
        </Button>
        <Contact agent={agent} open={openDialog} handleClose={handleClose} />
      </div>
    </div>
  );
}
=======
import { useState } from "react";
import { makeStyles, fade } from "@material-ui/core";
import { Button, Divider, Grid, Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpandArrowsAlt,
  faCouch,
  faBath,
  faCar,
  faRulerCombined,
} from "@fortawesome/free-solid-svg-icons";

import { useSnackbar } from "notistack";

import Contact from "./Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    "& div:last-child": {
      marginTop: "auto",
    },
  },
  title: {
    fontWeight: 600,
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
    fontWeight: 700,
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
    color: theme.palette.primary.A700,
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
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = (variant) => {
    setOpenDialog(false);
    if (variant) {
      enqueueSnackbar(
        "Mensaje enviado. Te contactaremos lo más pronto posible.",
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }
      );
    }
  };

  return (
    <div className={classes.root}>
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
          ${precio}
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
            <span>
              <FontAwesomeIcon
                icon={faRulerCombined}
                className={classes.itemIcon}
              />
            </span>
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
            <span>
              <FontAwesomeIcon icon={faCouch} className={classes.itemIcon} />
            </span>

            <div>
              <span className={classes.itemCaption}>HABITACIONES</span>
              <span className={classes.itemText}>{habitaciones}</span>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <span>
              <FontAwesomeIcon icon={faBath} className={classes.itemIcon} />
            </span>
            <div>
              <span className={classes.itemCaption}>BAÑOS</span>
              <span className={classes.itemText}>{baños}</span>
            </div>
          </Grid>
          <Grid item xs={6} className={classes.item}>
            <span>
              <FontAwesomeIcon icon={faCar} className={classes.itemIcon} />
            </span>

            <div>
              <span className={classes.itemCaption}>ESTACIONAMIENTOS</span>
              <span className={classes.itemText}>{estacionamientos}</span>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider className={classes.divider} />
      <div>
        <Typography gutterBottom variant="h6" component="div" align="center">
          ¿Quieres mas información? ¡Contactanos!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          disableElevation
          fullWidth
          onClick={handleClickOpen}
        >
          Contactar
        </Button>
        <Contact agent={agent} open={openDialog} handleClose={handleClose} />
      </div>
    </div>
  );
}
>>>>>>> Stashed changes
