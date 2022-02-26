import { Paper, Typography, Avatar } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1280,
    width: "100%",
    margin: "0 auto",
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(5),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(7),
    },
  },
  client: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },
  clientPicture: {
    width: 56,
    height: 56,
    marginRight: theme.spacing(2),
  },
  clientInfo: {
    display: "flex",
    flexDirection: "column",
  },
  clientName: {
    fontWeight: "bold",
  },
  clientType: {
    ...theme.typography.subtitle2,
    textTransform: "uppercase",
    lineHeight: 1,
  },
}));

export function Testimonial({ client, type, picture, text }) {
  const classes = useStyles();

  return (
    <Paper elevation={10} className={classes.root}>
      <Typography variant="body1" align="center" paragraph>
        <em>{text}</em>
      </Typography>
      <div className={classes.client}>
        <Avatar className={classes.clientPicture} src={picture} />
        <div className={classes.clientInfo}>
          <Typography className={classes.clientName} variant="h6" component="p">
            {client}
          </Typography>
          <Typography
            color="textSecondary"
            variant="overline"
            className={classes.clientType}
          >
            {type}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
