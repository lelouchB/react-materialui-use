import React from "react";
import Button from "@material-ui/core/Button";
import LoginIcon from "@material-ui/icons/AccountCircle";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function App() {
  return (
    <div>
      <div className="root" style={{ margin: "0 100px" }}>
        <div className="primary" style={{ marginTop: "10px" }}>
          <h4>Primary Button</h4>

          <Button color="primary" variant="contained">
            Click Me
          </Button>
        </div>
        <div className="primary_large" style={{ marginTop: "10px" }}>
          <h4>Primary Button Large</h4>

          <Button color="primary" size="large" variant="contained">
            Click Me
          </Button>
        </div>
        <div className="primary_starticon" style={{ marginTop: "10px" }}>
          <h4>Primary Button with Start Icon</h4>
          <Button startIcon={<LoginIcon />} color="primary" variant="contained">
            Login
          </Button>{" "}
        </div>
        <div className="primary_endicon" style={{ marginTop: "10px" }}>
          <h4>Primary Button with End Icon</h4>
          <Button endIcon={<LoginIcon />} color="primary" variant="contained">
            Login
          </Button>{" "}
        </div>

        <div className="primary_endicon" style={{ marginTop: "10px" }}>
          <h4>Login/Logout Button Group</h4>

          <ButtonGroup variant="contained" >
            <Button endIcon={<LoginIcon />} color="primary">
              Login
            </Button>
            <Button startIcon={<LogoutIcon />} color="secondary">
              Logout
            </Button>
          </ButtonGroup>
        </div>
        <div className="primary_endicon" style={{ marginTop: "10px" }}>
          <h4>Login/Logout Button Group Vertical</h4>

          <ButtonGroup variant="contained" orientation="vertical">
            <Button endIcon={<LoginIcon />} color="primary">
              Login
            </Button>
            <Button startIcon={<LogoutIcon />} color="secondary">
              Logout
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
