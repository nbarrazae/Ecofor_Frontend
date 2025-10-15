import { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, CardActionArea, CardActions } from "@mui/material";
import { useApi } from "../hooks/useApi"; // Asegúrate de que este hook esté correctamente importado

export default function Explorar() {
  const [cats, setCats] = useState<any[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await useApi();  // Aquí llamas al hook 'useApi' directamente
        setCats(data);
      } catch (error) {
        console.error("Error fetching cats:", error);
      }
    };

    fetchCats();
  }, []);  // No es necesario poner `useApi` en las dependencias porque no cambia

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Explorar Gatos
      </Typography>
      <Grid container spacing={2}>
        {cats.map((cat) => (
          <Grid>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={cat.url}
                  alt="Cat"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {cat.breeds?.[0]?.name || "Cat"}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {cat.description || "No description available."}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  *Corazon*
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}



import axios from "axios";