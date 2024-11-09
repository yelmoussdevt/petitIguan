import { Box } from "@mui/material";
import Image from "next/image";

export function AboutUsImages() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <Image src="/path/to/berber-lodge.jpg" alt="Mountain Berber Lodge" width={300} height={200} />
      <Image src="/path/to/villa-kiola.jpg" alt="Villa Kiola" width={300} height={200} />
      <Image src="/path/to/food-image.jpg" alt="Food" width={300} height={200} />
    </Box>
  );
}
