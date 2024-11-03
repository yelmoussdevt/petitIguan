// components/Packages.js
import { Container, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

export default function Packages({ packages }) {
  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Nos Packages
      </Typography>
      <Grid container spacing={4}>
        {packages.map((packageType, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{ boxShadow: 4, borderRadius: 2 }}
            >
              <CardMedia
                component="img"
                image={`/package-${packageType.toLowerCase()}.jpg`}
                alt={`${packageType} Package`}
                sx={{ height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {packageType} Package
                </Typography>
                <Typography variant="body2">
                  Découvrez notre offre {packageType.toLowerCase()} pour une immersion totale.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
