import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";


const Header = ({logout}) => {
  return (
    <AppBar position="static">
      <Toolbar className="header">
        <Typography variant="h6">
          Github Client
        </Typography>
        <div>
        </div>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
