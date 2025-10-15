import { useState, useEffect } from "react";
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, CardActionArea, CardActions } from "@mui/material";
import { useApi } from "../hooks/useApi";

export default function Explorar() {
  const [cats, setCats] = useState<any[]>([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const data = await useApi();  // Llamada al hook 'useApi'
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
      <Grid container spacing={2} justifyContent="center">
        {cats.map((cat) => (
        <Grid key={cat.id}>
        <Card sx={{ maxWidth: 345, margin: "auto" }}>
          <CardActionArea>
            <CardMedia
          component="img"
          sx={{ objectFit: "contain", height: 200 }}
          image={cat.url}
          alt="Cat"
            />
            <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cat.breeds?.[0]?.name || "Cat"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {cat.breeds?.[0]?.temperament || "No description available."}
          </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
          ❤️
            </Button>
          </CardActions>
        </Card>
          </Grid>
        ))}
      </Grid>
        </Container>
      );
    }
