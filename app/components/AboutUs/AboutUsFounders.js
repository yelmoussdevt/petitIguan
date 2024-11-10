import { Box, Typography } from "@mui/material";

export function AboutUsFounders() {
  return (
    <Box sx={{ py: 10 }}>
     
      <Typography variant="body1" paragraph>
        We specialise in Surf & Yoga experiences for groups of a minimum of 10 people and up...
      </Typography>

      {/* Repeat for each founder */}
      <Typography variant="h6" gutterBottom>* Malika</Typography>
      <Typography variant="body1" paragraph>Born in France and originally from Morocco...</Typography>
      <Typography variant="h6" gutterBottom>* Mohammed</Typography>
      <Typography variant="body1" paragraph>Born and raised in Taghazout...</Typography>
      <Typography variant="h6" gutterBottom>* Mehdi</Typography>
      <Typography variant="body1" paragraph>After living in Canada for over 20 years...</Typography>
    </Box>
  );
}
