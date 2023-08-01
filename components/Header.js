import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          MealMetrics 🍔
        </Typography>
        <IconButton edge="end" color="inherit">
          <img src="/fruits.png" alt="Logo" style={{ height: "40px" }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;