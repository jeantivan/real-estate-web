import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function UserCard({ name, email, phoneNumber, avatar }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar alt={name} src={avatar} />}
        title={name}
        subheader="Real estate agent"
      />
      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Email:" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneAndroidIcon />
            </ListItemIcon>
            <ListItemText primary="Phone number: " secondary={phoneNumber} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
