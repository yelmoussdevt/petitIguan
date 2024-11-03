// components/HeroSection.js
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";

export default function HeroSection({ carouselItems }) {
  return (
    <Carousel indicators={false} navButtonsAlwaysVisible animation="slide" interval={10000}>
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
              fontWeight: "bold",
              textShadow: "2px 2px 8px rgba(0,0,0,0.6)",
            }}
            className="text-6xl"
          >
            {item.title}
          </Typography>
          <Typography
            variant="h5"
            component={motion.h2}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            sx={{ mt: 2, textShadow: "1px 1px 6px rgba(0,0,0,0.6)" }}
          >
            {item.subtitle}
          </Typography>
          <Button variant="contained" color="secondary" sx={{ mt: 4, fontWeight: "bold" }}>
            Explorez l'Expérience
          </Button>
        </Box>
      ))}
    </Carousel>
  );
}
