// components/Contact.js
import { Container, Typography, Grid, TextField, Button, Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

export default function Contact() {
  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, color: "primary.main" }}>
        Contactez-nous
      </Typography>
      
      {/* Inspirational Quote */}
      <Typography variant="body1" sx={{ mb: 4, fontStyle: "italic", color: "#555" }}>
        "Le seul moyen de faire du bon travail est d’aimer ce que vous faites." – Steve Jobs
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              backgroundColor: "rgba(255,255,255,0.9)",
              p: 4,
              borderRadius: 4,
              boxShadow: 4,
              '&:hover': {
                boxShadow: 6,
                transition: '0.3s'
              }
            }}
          >
            <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
              Envoyez-nous un message
            </Typography>
            
            <TextField
              fullWidth
              label="Nom"
              variant="outlined"
              sx={{ mb: 3 }}
              inputProps={{
                style: { borderRadius: 4 },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              sx={{ mb: 3 }}
              inputProps={{
                style: { borderRadius: 4 },
              }}
            />
            <PhoneInput
              country={'ma'}
              placeholder="Numéro de téléphone"
              inputStyle={{ width: '100%', marginBottom: '16px', borderRadius: 4 }}
            />
            <hr />
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              sx={{ mb: 3 }}
              inputProps={{
                style: { borderRadius: 4 },
              }}
            />
            
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mt: 2 }}
            >
              Envoyer
            </Button>
          </Box>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            Suivez-nous
          </Typography>
          <Box display="flex" justifyContent="center" gap={3}>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              sx={{
                color: "#3b5998",
                "&:hover": { color: "#365492", transform: "scale(1.1)", transition: "0.2s" },
                fontSize: 40,
                animation: 'pulse 1.5s infinite',
              }}
            >
              <FaFacebook />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              sx={{
                color: "#E1306C",
                "&:hover": { color: "#C13584", transform: "scale(1.1)", transition: "0.2s" },
                fontSize: 40,
                animation: 'pulse 1.5s infinite',
              }}
            >
              <FaInstagram />
            </IconButton>
            <IconButton
              component="a"
              href="https://twitter.com"
              target="_blank"
              sx={{
                color: "#1DA1F2",
                "&:hover": { color: "#1A91DA", transform: "scale(1.1)", transition: "0.2s" },
                fontSize: 40,
                animation: 'pulse 1.5s infinite',
              }}
            >
              <FaTwitter />
            </IconButton>
            <IconButton
              component="a"
              href="https://linkedin.com"
              target="_blank"
              sx={{
                color: "#0077B5",
                "&:hover": { color: "#005582", transform: "scale(1.1)", transition: "0.2s" },
                fontSize: 40,
                animation: 'pulse 1.5s infinite',
              }}
            >
              <FaLinkedin />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
