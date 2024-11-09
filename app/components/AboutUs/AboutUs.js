import { Box } from "@mui/material";
import AboutUsHeader from "./AboutUsHeader";
import { AboutUsMission } from "./AboutUsMissionCard";
import { AboutUsFounders } from "./AboutUsFounders";
import { AboutUsLocation } from "./AboutUsLocation";
import { AboutUsImages } from "./AboutUsImages";
import { AboutUsText } from "./AboutUsText";

export default function AboutUs() {
  return (
    <Box>
      <AboutUsHeader />
      {/* <AboutUsMission /> */}
      <AboutUsFounders />
      <AboutUsLocation />
      <AboutUsImages />
      <AboutUsText />
    </Box>
  );
}
