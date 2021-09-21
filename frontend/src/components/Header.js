import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinkContainer } from "react-router-bootstrap";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
    cursor: 'pointer'
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color={"transparent"}>
        <Toolbar>
          <LinkContainer to={"/"}>
            <Typography variant="h6" className={classes.title}>
              <strong>Todo List</strong> <small>Jorge Jiménez Díaz</small>
            </Typography>
          </LinkContainer>
        </Toolbar>
      </AppBar>
    </div>
  );
}
