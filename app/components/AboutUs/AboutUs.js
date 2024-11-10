"use client"
import { Box } from "@mui/material";
import AboutUsHeader from "./AboutUsHeader";
import { AboutUsFounders } from "./AboutUsFounders";
import { AboutUsImages } from "./AboutUsImages";

export default function AboutUs() {
  return (
    <Box>
      <AboutUsHeader />
      <AboutUsFounders />
      <AboutUsImages />

    </Box>
  );
}
