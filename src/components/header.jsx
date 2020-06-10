import React from "react";
import { NavLink, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import '../assets/main.css';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import UpdateIcon from '@material-ui/icons/Update';
import Button from '@material-ui/core/Button';

const renderLogoutButton = ({ menuItem }, doGoogleLogout) => {
  return (<Button className={menuItem} onClick={doGoogleLogout}>LOGOUT</Button>);
};

const renderLogInButton = ({ menuItem }) => {
  return (<Button className={menuItem}> <Link to="/login">
    LOGIN
</Link></Button>);
};

const Heder = ({ isUserLogin, doGoogleLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative" color="default">
        <Container>
          <Toolbar className={classes.justifyContent}>
            <Typography variant="h6" className="flex">
              <div className="mr1"><UpdateIcon /></div>
              <div> Tracker</div>
            </Typography>

            <Typography variant="subtitle1" className={classes.menuList}>
              <NavLink to="/home" className={classes.menuItem}>
                HOME
              </NavLink>
              {isUserLogin ? renderLogoutButton(classes, doGoogleLogout) : renderLogInButton(classes)}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </div >
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  justifyContent: {
    justifyContent: "space-between"
  },
  alignContent: {
    alignItems: "center"
  },
  minHight33x: {
    minHeight: "33px !important"
  },
  menuList: {
    display: "flex"
  },
  menuItem: {
    padding: "24px 5px",
    fontSize: "0.8rem",
    fontWeight: 500,
    margin: "0px 5px",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "black",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#eee",
      color: "orange"
    }
  },
  infoHeader: {
    marginLeft: "17.5%",
    marginRight: "15%"
  }
}));

export default Heder;
