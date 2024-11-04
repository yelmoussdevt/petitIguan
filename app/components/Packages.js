// components/Packages.js
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export default function Packages({ packages }) {
  return (
    <Box>
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash your power with <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Our Packages
                </span>
              </h1>
            </>
          }
        >
          <Grid container spacing={4}>
            {packages.map((packageType, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  sx={{ boxShadow: 4, borderRadius: 2 }}
                >
                  <CardMedia
                    component="img"
                    image={`/package-${packageType.toLowerCase()}.jpg`}
                    alt={`${packageType} Package`}
                    sx={{ height: 200, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {packageType} Package
                    </Typography>
                    <Typography variant="body2">
                      Découvrez notre offre {packageType.toLowerCase()} pour une
                      immersion totale.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </ContainerScroll>
      </div>
     </Box>
  );
}
