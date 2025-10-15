import { AppBar, Toolbar, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Button
          color="inherit"
          component={RouterLink}
          to="/explorar"
          sx={{ width: "50%" }}
        >
          Explorar
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/favoritos"
          sx={{ width: "50%" }}
        >
          Mis favoritos
        </Button>
      </Toolbar>
    </AppBar>
  );
}