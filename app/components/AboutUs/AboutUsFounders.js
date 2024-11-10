import styled from "@emotion/styled";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Tooltip,
  Divider,
} from "@mui/material";

const ClampText = styled("div")({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: 4, // Limite le texte à 6 lignes
  textOverflow: "ellipsis",
});

export function AboutUsFounders() {
  const founders = [
    {
      name: "Malika",
      description:
        "Born in France & originally from Morocco, Malika spent 17 years in corporate sales travelling the world, to more than 47 countries. It took her one trip to fall in love with the region of Agadir and to decide to embark on a slow living life with her family. Malika is fluent in English, French & Spanish.",
      image: "/malika.webp",
    },
    {
      name: "Mohammed",
      description:
        "Born & raised in Taghazout, Mohammed has been working in hospitality for over 14 years. He studied at the Ecole Hoteliere in Agadir & got his Red Seal certification in Vancouver.",
      image: "/mohammed.webp",
    },
    {
      name: "Mehdi",
      description:
        "After living more than 20 years in Canada, Mehdi has always known he’d eventually return to his country, Casaoui at heart (from Casablanca), foodie & football enthusiast, Taghazout is the city he decides to grow roots in and call it home.",
      image: "/mehdi.webp",
    },
  ];

  return (
    <Box sx={{ py: 20 }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          textAlign="start"
          color="customColors.darkGreen"
          className="text-4xl font-semibold "
        >
          <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none TitleHero">
            About Us
          </span>
        </Typography>
        <Divider sx={{ width: "100%", mt: 2, mb: 2 }} />
        <Typography
          variant="body1"
          textAlign={"start"}
          className="text-3xl"
          gutterBottom
        >
          We specialise in Surf & Yoga experiences <br /> for groups of minimum
          10 people and up
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
        <Divider sx={{ width: "100%", mt: 2, mb: 2 }} />

        <Typography
          variant="h4"
          component="h2"
          textAlign="start"
          color="customColors.darkGreen"
          className="py-5 "
        >
          <span className="text-4xl md:text-[4rem] font-semibold mt-1 leading-none  ">
          Meet Our Founders
          </span>
        </Typography>

        <Grid container spacing={4}>
          {founders.map((founder, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "center", pt: 2 }}>
                  <Avatar
                    alt={founder.name}
                    src={founder.image}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {founder.name}
                  </Typography>
                  <Tooltip title={founder.description} placement="top" arrow>
                    <ClampText>
                      <Typography variant="body2" color="text.secondary">
                        {founder.description}
                      </Typography>
                    </ClampText>
                  </Tooltip>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
