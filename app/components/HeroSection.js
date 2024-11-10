// components/HeroSection.js
import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import { ReactTyped } from "react-typed";

// Charger la police Dancing Script
const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection({ videoSrc, title, subtitle }) {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "70vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        textAlign: "start",
        color: "white",
        bgcolor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Container>
        <Typography className="TitleHero text-6xl font-bold" variant="h1">
          <ReactTyped strings={title} typeSpeed={55} backSpeed={65} loop />
        </Typography>
        <Divider sx={{ width: "100%", mt: 2, mb: 2 }} />
        <Typography
          gutterBottom
          variant="h5"
          component={motion.h2}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          sx={{
            mt: "2",
            textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
          }}
          className="TitleHero text-4xl"
        >
          <ReactTyped strings={subtitle} typeSpeed={50} backSpeed={60} loop />
        </Typography>
      </Container>
    </Box>
  );
}
