"use client"
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Box
        sx={{
          backgroundImage: 'url("/surf.jpg")',
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundAttachment: 'fixed',
          
        }}
        className="flex flex-col items-center justify-center"
      >
        <Container>


        <Typography
          component="h1"
          className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          fontSize={75}
          sx={{ color: "white", textAlign: "center", paddingTop: "20vh" }}
        >
           Surf and Yoga: Harmony on the Horizon 
        </Typography>
        <Typography
          variant="h4"
             className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          sx={{ color: "white", textAlign: "center", paddingTop: "2vh" }}
        >
        Catch the Perfect Wave, Embrace Inner Peace
        </Typography>
        <Typography
          variant="h6"
             className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
          sx={{ color: "white", textAlign: "center", paddingTop: "2vh" }}
        >
          Catch the Perfect Wave, Embrace Inner Peace
        </Typography>
        </Container>
      </Box>
    </main>
  );
}
