"use client"
import { useTheme } from "@emotion/react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import { ReactTyped } from "react-typed";
import Wave from "react-wavify";
// Charger la police Dancing Script
const dancingScript = Dancing_Script({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function HeroSection({ videoSrc, title, subtitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "start",
        color: "white",
        bgcolor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <video
        autoPlay
        playsinline 
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
      <Container className="mt-auto">
        <Typography
          className="TitleHero md:text-7xl sm:text-4xl font-bold"
          variant="h1"
          color="secondary.main"
        >
          <ReactTyped
            strings={title}
            typeSpeed={70}
            backSpeed={70}
            loop
            showCursor={false}
          />
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
          className=" md:text-4xl sm:text-2xl  "
        >
          <ReactTyped
            strings={subtitle}
            typeSpeed={80}
            backSpeed={80}
            loop
            showCursor={false}
          />
        </Typography>
      </Container>
      <Wave
        fill={theme.palette.customColors.turquoise}
        paused={false}
        style={{ display: "flex" }}
        className="mt-auto"
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.15,
          points: 6,
        }}
      />
    </Box>
  );
}
