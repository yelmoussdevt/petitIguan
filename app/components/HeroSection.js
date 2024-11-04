// components/HeroSection.js
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";
import { Dancing_Script } from 'next/font/google'; // Importer la police depuis Next.js

// Charger la police Dancing Script
const dancingScript = Dancing_Script({
  weight: ['400', '700'], // Choisissez les poids que vous souhaitez utiliser
  subsets: ['latin'], // Sous-ensembles de caractères
  display: 'swap', // Pour une meilleure performance
});

export default function HeroSection({ carouselItems }) {
  return (
    <Carousel indicators={false}  animation="fade" interval={10000} >
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            sx={{
              fontWeight: "700", // Utiliser un poids spécifique pour le titre
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
              fontFamily: dancingScript.style.fontFamily, // Appliquer la police Dancing Script
            }}
            className="text-6xl"
          >
            {item.title}
          </Typography>
          <Typography
          gutterBottom
            variant="h5"
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            sx={{ mt: 2, textShadow: "1px 1px 6px rgba(0,0,0,0.6)", fontFamily: 'Roboto, sans-serif' }} // Garder Roboto pour le sous-titre
          >
            {item.subtitle}
          </Typography>
          {/* <Button variant="contained" color="secondary" sx={{ mt: 4, fontWeight: "bold" }}>
            Explorez lʼExpérience
          </Button> */}

          <button className="button mt-10">
  <span className="text">   Explorez lʼExpérience</span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
</button>

        </Box>
      ))}
    </Carousel>
  );
}
