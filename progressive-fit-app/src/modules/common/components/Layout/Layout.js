import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircle from "@material-ui/icons/AddCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Snackbar from "@material-ui/core/Snackbar";
import Navbar from "../Navbar";
import AddCSV from "../AddCSV";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: "100%",
    overflow: "hidden"
  },
  appFrame: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    overflowY: "hidden"
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  drawerPaper: {
    position: "fixed",
    overflowY: "hidden",
    width: 250,
    height: "calc(100vh - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "calc(100vh - 64px)",
      marginTop: 64
    }
  },
  sidebar: {
    overflowY: "auto",
    overflowX: "hidden",
    height: "calc(100vh - 56px)",
    [theme.breakpoints.up("md")]: {
      height: "calc(100vh - 64px)"
    }
  },
  flex: {
    flex: 1
  },
  main: {
    flex: "1 1 auto",
    padding: 15,
    overflowX: "hidden",
    display: "flex",
    flexDirection: "column"
  },
  content: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "calc(100% - " + drawerWidth + "px)",
      marginLeft: drawerWidth
    },
    display: "flex",
    minHeight: "calc(100vh - 64px)",
    marginTop: 64,
    overflowY: "auto",
    flexDirection: "column"
  },
  fab: {
    position: "fixed",
    bottom: 0,
    right: 0,
    margin: "0 32px 32px 0"
  },
  rightDrawer: {
    minWidth: drawerWidth
  }
});

class Layout extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClickOpenActionButton = () => {
    this.props.openActionButton();
  };

  handleCloseActionButton = () => {
    this.props.closeActionButton();
  };

  handleCloseSnackbar = () => {
    this.props.closeSnackbar();
  };

  render() {
    const {
      classes,
      sidebar,
      content,
      floating,
      clickActionButton,
      popupSnackbar,
      snackbarMessage
    } = this.props;

    const { mobileOpen } = this.state;

    const drawer = (
      <div>
        <div className={classes.sidebar}>{sidebar}</div>
      </div>
    );

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar position="fixed">
            <Toolbar>
              {sidebar ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
              ) : null}
              <Navbar />
              <AddCSV />
            </Toolbar>
          </AppBar>
          {sidebar ? (
            <React.Fragment>
              <Hidden mdUp>
                <Drawer
                  variant="temporary"
                  anchor="left"
                  open={mobileOpen}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  onClose={this.handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden smDown implementation="css">
                <Drawer
                  variant="permanent"
                  open
                  classes={{
                    paper: classes.drawerPaper
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </React.Fragment>
          ) : null}
          <div
            style={sidebar ? {} : { marginLeft: "0", width: "100%" }}
            className={classes.content}
          >
            <React.Fragment>
              <Snackbar
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={popupSnackbar}
                onClose={this.handleCloseSnackbar}
                SnackbarContentProps={{
                  "aria-describedby": "message-id"
                }}
                message={<span id="message-id">{snackbarMessage}</span>}
              />
            </React.Fragment>
            <div className={classes.main}>{content}</div>
          </div>
        </div>
        {floating ? (
          <React.Fragment>
            <Button
              variant="fab"
              color="secondary"
              aria-label="add"
              className={classes.fab}
              onClick={this.handleClickOpenActionButton}
            >
              <AddCircle />
            </Button>
            <Drawer
              anchor="right"
              open={clickActionButton}
              onClose={this.handleCloseActionButton}
            >
              <div className={classes.rightDrawer}>{floating}</div>
            </Drawer>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Layout);
