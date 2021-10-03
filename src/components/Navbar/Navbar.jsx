import React from "react";
import {
  AppBar,
  Toolbar,
  Badge,
  MenuItem,
  Typography,
  IconButton,
  Menu,
} from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart } from "@material-ui/icons";
import logo from "../../assets/commerce.png";
import useStyles from "./styles";
const Navbar = ({ items }) => {
  const location = useLocation(); //this will give us the current path

  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            className={classes.title}
          >
            <img
              src={logo}
              alt="MaskOn"
              height="25px"
              className={classes.image}
            />
            Mask On!
          </Typography>
          {/* THIS DIV IS GOING TO TAKE SPACE TO RIGHT STARTING FROM LEFT UNTIL WE STOP IT  */}
          <div className={classes.grow} />
          {location.pathname === "/" && (
            <div className={classes.button}>
              {/* <Link to="/cart"> go to cart </Link> */}
              {/* but material ui allows us to direct use link in iconbutton  */}
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={items} color="secondary">
                  {/* icon  */}
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
