import { Paper, Typography, Avatar } from "@mui/material";
import { styled } from '@mui/material/styles';
const PREFIX = 'Testimonial';

const classes = {
  root: `${PREFIX}-root`,
  client: `${PREFIX}-client`,
  clientPicture: `${PREFIX}-clientPicture`,
  clientInfo: `${PREFIX}-clientInfo`,
  clientName: `${PREFIX}-clientName`,
  clientType: `${PREFIX}-clientType`
};

const StyledPaper = styled(Paper)((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
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

  [`& .${classes.client}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(3),
  },

  [`& .${classes.clientPicture}`]: {
    width: 56,
    height: 56,
    marginRight: theme.spacing(2),
  },

  [`& .${classes.clientInfo}`]: {
    display: "flex",
    flexDirection: "column",
  },

  [`& .${classes.clientName}`]: {
    fontWeight: "bold",
  },

  [`& .${classes.clientType}`]: {
    ...theme.typography.subtitle2,
    textTransform: "uppercase",
    lineHeight: 1,
  }
}));

export function Testimonial({ client, type, picture, text }) {


  return (
    <StyledPaper elevation={10} className={classes.root}>
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
    </StyledPaper>
  );
}
