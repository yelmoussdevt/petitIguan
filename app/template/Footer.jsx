"use client";
import React from "react";
import { Container, Grid, Typography, Box, Divider, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: "#212121", color: "white", py: 5 }}>
        <Container>
          <Grid container spacing={4}>
            {/* Section "About Us" */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                À Propos de Nous
              </Typography>
              <Typography variant="body2" paragraph>
                Établi en 2013, Surf Taghazout est une option populaire pour les
                surfers du monde entier, offrant des hébergements allant de
                l'économique au luxe. Notre objectif est de vous garantir des
                vacances inoubliables et le meilleur rapport qualité-prix.
              </Typography>
              <Link href="/about" color="inherit" underline="hover">
                En savoir plus
              </Link>
            </Grid>
            {/* Section "Quick Links" */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Liens Rapides
              </Typography>
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link href="/" color="inherit" underline="hover">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/about" color="inherit" underline="hover">
                    À Propos
                  </Link>
                </li>
                <li>
                  <Link href="/services" color="inherit" underline="hover">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" color="inherit" underline="hover">
                    Contact
                  </Link>
                </li>
              </ul>
            </Grid>
            {/* Section "Follow Us" */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Suivez-Nous
              </Typography>
              <Box display="flex" gap={2}>
                <IconButton
                  component="a"
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#3b5998" },
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#1DA1F2" },
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#E1306C" },
                  }}
                >
                  <Instagram />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "white",
                    "&:hover": { color: "#0077B5" },
                  }}
                >
                  <LinkedIn />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, bgcolor: "#424242" }} />

          {/* Section "Contact Information" */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Informations de Contact
              </Typography>
              <Typography variant="body2">
                Adresse : Avenue des Alizés, Taghazout, Maroc
              </Typography>
              <Typography variant="body2">
                Téléphone : +212 123 456 789
              </Typography>
              <Typography variant="body2">
                Email : info@surftaghazout.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>
                Newsletter
              </Typography>
              <Typography variant="body2" paragraph>
                Abonnez-vous à notre newsletter pour recevoir les dernières
                nouvelles et offres spéciales.
              </Typography>
              <Box component="form">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  style={{
                    padding: "10px",
                    width: "100%",
                    borderRadius: "5px",
                    border: "none",
                    marginBottom: "10px",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#007B55",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  S'abonner
                </button>
              </Box>
            </Grid>
          </Grid>
          <div className="text-center mt-4">
            &copy; {new Date().getFullYear()} Nom de la Société | Tous Droits Réservés
          </div>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
