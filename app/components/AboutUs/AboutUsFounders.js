import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

export function AboutUsFounders() {
  const founders = [
    {
      name: "Malika",
      description:
        "Born in France & originally from Morocco, Malika spent 17 years in corporate sales travelling the world, to more than 47 countries. It took her one trip to fall in love with the region of Agadir and to decide to embark on a slow living life with her family. Malika is fluent in English, French & Spanish. ",
      image: "/malika.webp", // Assurez-vous d'avoir les images appropriées
    },
    {
      name: "Mohammed",
      description:
        "Born & raised in Taghazout, Mohammed has been working in hospitality for over 14 years. He studied at the Ecole Hoteliere in Agadir & got his Red Seal certification in Vancouver.",
      image: "/images/mohammed.jpg",
    },
    {
      name: "Mehdi",
      description:
        "After living more than 20 years in Canada, Mehdi has always known he’d eventually return to his country, Casaoui at heart (from Casablanca) foodie & football enthusiast, Taghazout is the city he decides to grow roots in and call it home.",
      image: "/images/mehdi.jpg",
    },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: "rgba(255, 255, 255, 0.5)" }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          color="primary.main"
          className="TitleHero text-6xl"
          gutterBottom
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          textAlign={"start"}
          className="text-3xl"
          gutterBottom
        >
          We specialise in Surf & Yoga experiences for groups of minimum 10
          people and up
        </Typography>

        <Typography
          variant="body1"
          textAlign={"start"}
          className="text-2xl"
          gutterBottom
        >
          3 friends & a dream. It all started on a trip in Tulum, Mexico, the
          idea of getting together and working on a project by the beach doing
          what we love most, host & share our Moroccan culture
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          {founders.map((founder, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={founder.image}
                  alt={founder.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {founder.name}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {founder.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
