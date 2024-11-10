"use client";
import { useTheme } from "@emotion/react";
import { Box, Container, Divider, Typography } from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
import {ReactTyped} from "react-typed";
import Wave from "react-wavify";



export default function HeroSection({ videoSrc, title, subtitle }) {
  const theme = useTheme();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

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
        textAlign: "center",
        color: "white",
        bgcolor: "rgba(0, 0, 0, 0.3)",
        zIndex: -3,
      }}
    >
      <video
        autoPlay
        playsInline
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -3,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        style={{
          scale,
          rotate,
          position: "fixed",
          right: "-1%",
          bottom: "10%",
          borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
          padding: 50,
          zIndex: -3,
          background: "rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <Image
          src="/logoIguan.png"
          alt="Company Image"
          width={250}
          height={250}
        />
      </motion.div>
      <Container>
        <Typography
          className="TitleHero md:text-8xl sm:text-5xl font-bold drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,1)]"
          variant="h1"
          color={theme.palette.customColors.lightGreen}
         
        >
          <ReactTyped
            strings={title}
            typeSpeed={90}
            backSpeed={30}
            loop
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
            mt: 2,
            textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
          
          }}
          className="md:text-4xl sm:text-2xl"
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
        fill="url(#gradient)"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 3,
        }}
        style={{ position: "absolute", bottom: 0, width: "100%", zIndex: -3 }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%" stopColor={theme.palette.customColors.darkGreen} />
            <stop offset="90%" stopColor={theme.palette.customColors.lighterGreen} />
          </linearGradient>
        </defs>
      </Wave>
    </Box>
  );
}