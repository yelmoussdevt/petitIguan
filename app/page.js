"use client";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  Grid,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import { useState } from "react";
import Carousel from "react-material-ui-carousel"; // Assurez-vous d'installer react-material-ui-carousel
import { motion } from "framer-motion"; // Assurez-vous d'installer framer-motion
import Link from "next/link";

export default function Home() {
  const [carouselItems] = useState([
    {
      image: "/surf.jpg",
      title: "Vagues parfaites, esprit tranquille",
      subtitle: "Une aventure surf & yoga inoubliable",
    },
    {
      image: "/yoga.jpg",
      title: "Equilibre et Sérénité",
      subtitle: "Connectez-vous à votre moi intérieur",
    },
    {
      image: "/surfer.jpg",
      title: "Soleil, mer et bien-être",
      subtitle: "Vivez la paix et la liberté",
    },
  ]);

  return (
    <main>
      {/* Hero Section with Carousel */}
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible
        animation="slide"
        interval={10000}
      >
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundImage: `url(${item.image})`,
              minHeight: "100vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography
              variant="h2"
              component={motion.h1}
              className="font-bold drop-shadow-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-7xl"
             
            >
              {item.title}
            </Typography>
            <Typography
              variant="h5"
              component={motion.h2}
              className="drop-shadow-md mt-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {item.subtitle}
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 4, fontWeight : 'bold' }}>
              Explorez l'Expérience
            </Button>
          </Box>
        ))}
      </Carousel>

      {/* About Section with Parallax Effect */}
      <Container className="py-16">
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{
            padding: 3,
            backgroundColor: "rgba(255,255,255,0.85)",
            color: "primary.main",
          }}
          maxWidth="md"
        >
          <Typography variant="h4" className="font-bold mb-8">
            À Propos de Nous
          </Typography>
          <Typography variant="body1">
            Surf Taghazout est reconnu pour ses services impeccables depuis
            2013. Avec des hébergements pour tous les budgets, notre mission est
            de créer des expériences uniques dans le surf et le yoga, tout en
            offrant des souvenirs inoubliables dans un cadre enchanteur au
            Maroc.
          </Typography>
        </Paper>
      </Container>

      {/* Packages Section with Hover Effects */}
      <Container className="py-16 bg-gray-100">
        <Typography variant="h4" className="font-bold mb-8">
          Nos Packages
        </Typography>
        <Grid container spacing={4}>
          {["Surf", "Yoga", "Surf & Yoga"].map((packageType, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                className="shadow-lg rounded-lg"
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={`/package-${packageType.toLowerCase()}.jpg`}
                  alt={`${packageType} Package`}
                />
                <CardContent>
                  <Typography variant="h6" className="font-bold mb-2">
                    {packageType} Package
                  </Typography>
                  <Typography variant="body2">
                    Découvrez notre offre {packageType.toLowerCase()} pour une
                    immersion totale.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Follow Us Section */}
      <Container className="py-16 text-center">
        <Typography variant="h4" className="font-bold mb-8">
          Suivez-nous
        </Typography>
        <Box className="flex justify-center space-x-4">
          <IconButton
            color="inherit"
            href="https://facebook.com"
            target="_blank"
          >
            <Facebook fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://twitter.com"
            target="_blank"
          >
            <Twitter fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://instagram.com"
            target="_blank"
          >
            <Instagram fontSize="large" />
          </IconButton>
        </Box>
      </Container>

      {/* Contact Section with Animated Button */}
      <Container className="py-16 bg-gray-100">
        <Typography variant="h4" className="font-bold mb-8">
          Contactez-nous
        </Typography>
        <Typography variant="body1" className="mb-4">
          Email: info@surftaghazout.com
        </Typography>
        <Typography variant="body1" className="mb-4">
          Téléphone: +212 123 456 789
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Réservez Maintenant
        </Button>
      </Container>
    </main>
  );
}
