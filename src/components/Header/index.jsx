import { Box, IconButton, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import CodeIcon from "@material-ui/icons/Code";
import Login from "features/Auth/components/Login";
import Register from "features/Auth/components/Register";
import { logout } from "features/Auth/userSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  closeIcon: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.grey[500],
    zIndex: 1,
  },
}));

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};
export default function Header() {
  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = loggedInUser.id;
  const disPatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = (e) => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    const action = logout();
    disPatch(action);
  };
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <CodeIcon className={classes.menuButton} />

          <Typography variant="h6" className={classes.title}>
            <Link className={classes.link} to="/">
              Tea Shop
            </Link>
          </Typography>
          <NavLink to="/products">
            <Button className={classes.link}>Products</Button>
          </NavLink>
          <NavLink to="/todo">
            <Button className={classes.link}>Todo</Button>
          </NavLink>
          {!isLoggedIn && (
            <Button
              className={classes.link}
              onClick={handleClickOpen}
              color="inherit"
            >
              Login
            </Button>
          )}
          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleUserClick}>
              <AccountCircleIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
      <Dialog
        open={open}
        onClose={handleClose}
        disableBackdropClick
        aria-labelledby="form-dialog-title"
        disableEscapeKeyDown
      >
        <IconButton className={classes.closeIcon} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
              <Register closeDialog={handleClose} />
              <Box textAlign="center">
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(MODE.LOGIN);
                  }}
                >
                  Already have an account. Login here
                </Button>
              </Box>
            </>
          )}
          {mode === MODE.LOGIN && (
            <>
              <Login closeDialog={handleClose} />
              <Box textAlign="center">
                <Button
                  color="primary"
                  onClick={() => {
                    setMode(MODE.REGISTER);
                  }}
                >
                  Dont have an account. Register here
                </Button>
              </Box>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
