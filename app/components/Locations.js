import { Typography, Box, Container } from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";

const locationsData = [
  {
    name: "Mountain Berber lodge",
    description:
      "Our beautiful Villa with stunning ocean and mountain views located just 2 kilometers from Taghazout in the middle of an argan forest offers a peaceful retreat on an estate of over 1000 square meters",
    image: "/mountain-berber/MBLexterieur3.jpeg",
    bookNowText: "Book now →",
    detailsText: "Show more details",
  },
  {
    name: "Villa Kiola",
    description:
      "Our beautiful Villa with stunning ocean and mountain views located just 2 kilometers from Taghazout in the middle of an argan forest offers a peaceful retreat on an estate of over 1000 square meters",

    image: "/villaKiola/kiolaexterieur1.jpg",
    bookNowText: "Book now →",
    detailsText: "Show more details",
  },
];

const Locations = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <Typography variant="h6" gutterBottom>
          Our Locations
        </Typography>
        <Typography variant="body1">
          Located 19 km north of Agadir...
        </Typography>
        <Typography variant="h6" gutterBottom>
          Taghazout: The Location
        </Typography>
        <Typography variant="body1" paragraph>
          Located 19 km north of Agadir...
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <Grid container spacing={5}>
            {locationsData.map((location, index) => (
              <Grid
                size={{ xs: 12, md: 6 }}
                key={index}
              >
                <CardContainer >
                  <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {location.name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
                    >
                      {location.description}
                    </CardItem>
                    <CardItem
                      translateZ="100"
                      rotateX={20}
                      rotateZ={-10}
                      className="w-full mt-4"
                    >
                      <Image
                        src={location.image}
                        height={300}
                        width={300}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        {location.bookNowText}
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        translateX={40}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        {location.detailsText}
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Locations;
