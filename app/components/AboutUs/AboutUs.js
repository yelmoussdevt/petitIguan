"use client";
import { Box } from "@mui/material";
import AboutUsHeader from "./AboutUsHeader";
import { AboutUsFounders } from "./AboutUsFounders";
import { useTheme } from "@emotion/react";

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.customColors.lightGreen }}>
      <AboutUsHeader />
      <AboutUsFounders />
    </Box>
  );
}
