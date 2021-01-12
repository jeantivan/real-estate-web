import { Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  description: {
    fontWeight: 700,
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
}));

export function InmuebleOverview() {
  return (
    <Paper component="section" elevation={0} variant="outlined">
      <Box p={2}>
        <Typography
          variant="h6"
          component="h3"
          className={classes.description}
          gutterBottom
        >
          Caracteristicas.
        </Typography>
      </Box>
    </Paper>
  );
}
