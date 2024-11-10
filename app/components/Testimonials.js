"use client"
import { Container, Paper, Typography, Avatar, Box, Grid } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { motion } from "framer-motion";

export default function Testimonials({ testimonials }) {
  return (
    <Container sx={{ py: 15, textAlign: "center" }}>
      {/* Section Title */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
        Avis de nos Clients
      </Typography>

      <Carousel indicators={false} interval={8000} navButtonsAlwaysVisible>
        {testimonials.map((testimonial, index) => (
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            key={index}
            sx={{
              p: 4,
              backgroundColor: "rgba(255,255,255,0.9)",
              boxShadow: 3,
              borderRadius: 2,
              maxWidth: 600,
              mx: "auto",
            }}
          >
            {/* Avatar and Name */}
            <Grid container spacing={2} alignItems="center" direction="column">
              <Grid item>
                <Avatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  sx={{
                    width: 80,
                    height: 80,
                    border: "2px solid",
                    borderColor: "primary.main",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "primary.main" }}>
                  {testimonial.name}
                </Typography>
              </Grid>
            </Grid>

            {/* Testimonial Quote */}
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                color: "text.secondary",
                mt: 2,
              }}
            >
              “{testimonial.quote}”
            </Typography>
          </Paper>
        ))}
      </Carousel>
    </Container>
  );
}
