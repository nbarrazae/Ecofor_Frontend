import { Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { Button, Toolbar  } from "@mui/material";


export default function Proyecto2() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5" align="center" gutterBottom>
        ❤️ Mis favoritos
      </Typography>
      <Typography variant="body1" align="center" color="textSecondary">
        No tienes favoritos aún. Explora para agregar a favoritos.
      </Typography>
      <Container sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Toolbar sx={{ justifyContent: "center" }}>
        <Button
          color= "primary"
          variant="contained"
          component={RouterLink}
          to="/explorar"
        >
          Explorar
        </Button>
      </Toolbar>
      </Container>
    </Container>
  );
}