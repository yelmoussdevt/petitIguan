import { Typography, Box } from "@mui/material";
import Image from "next/image";

export function AboutUsLocation() {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h6" gutterBottom>Taghazout: The Location</Typography>
      <Typography variant="body1" paragraph>Located 19 km north of Agadir...</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <Image src="/path/to/taghazout-image.jpg" alt="Taghazout" width={300} height={200} />
        <Image src="/path/to/surfers-image.jpg" alt="Surfers" width={300} height={200} />
      </Box>
    </Box>
  );
}
