import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";

import React from "react";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 10 : 0,
  });
}

function HideOnScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <ElevationScroll>
      <HideOnScroll>
        <AppBar color="primary">
          <Toolbar>
            <Typography variant="h3" color="info">
              Arc Development
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </ElevationScroll>
  );
}
