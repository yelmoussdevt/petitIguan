// components/AboutUs.js
import { Container, Paper, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import styles from "./AboutUs.module.css";
import { AiOutlineHeart, AiOutlineStar, AiOutlineEnvironment } from 'react-icons/ai'; // Importation d'icônes

export default function AboutUs() {
  return (
    <Parallax speed={-10}>
      <Box sx={{ py: 20, backgroundColor: 'background.default' }} className={styles.aboutContainer}>
        <Container maxWidth="lg">
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{
              padding: 4,
              backgroundColor: "rgba(255,255,255,0.6)",
              color: "primary.main",
              borderRadius: 4,
              boxShadow: 4,
            }}
          >
            {/* Title */}
            <Typography
              variant="h3"
              className={styles.title}
              sx={{
                fontWeight: "bold",
                mb: 4,
                textAlign: "center",
                color: "primary.dark",
              }}
            >
              À Propos de Nous
            </Typography>

            {/* Mission Statement */}
            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8, textAlign: "justify", fontSize: '1.1rem' }}
            >
              Depuis 2013, Surf Taghazout sʼengage à offrir des expériences
              immersives inoubliables dans le domaine du surf et du yoga. Situé
              dans le cadre pittoresque de Taghazout, au Maroc, notre mission
              est de permettre à chacun de se connecter avec la nature, de se
              ressourcer, et de repartir avec des souvenirs gravés à jamais.
            </Typography>

            {/* Core Values */}
            <Typography
              variant="h5"
              className={styles.subtitle}
              textAlign={"center"}
              sx={{ fontWeight: "bold", mb: 3, color: "primary.main" }}
            >
              Nos Valeurs
            </Typography>
            <Grid container spacing={4}>
              {[ 
                {
                  title: "Passion",
                  description:
                    "Nous mettons notre passion pour le surf et le bien-être au cœur de chaque séjour. Nos instructeurs partagent leur amour pour les vagues et la méditation avec enthousiasme et expertise.",
                  icon: <AiOutlineHeart size={40} color="#FF5722" />, // Icône de passion
                },
                {
                  title: "Excellence",
                  description:
                    "Nous aspirons à offrir une qualité de service irréprochable. Des cours de surf au confort de nos hébergements, nous nous assurons que chaque détail répond à vos attentes.",
                  icon: <AiOutlineStar size={40} color="#FFEB3B" />, // Icône d'excellence
                },
                {
                  title: "Respect de la Nature",
                  description:
                    "Le respect de l'environnement est fondamental pour nous. Chaque activité est pensée pour minimiser notre impact sur la nature et préserver la beauté de Taghazout.",
                  icon: <AiOutlineEnvironment size={40} color="#4CAF50" />, // Icône de respect de la nature
                },
              ].map((value, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: 2,
                      boxShadow: 3,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      },
                      bgcolor: "background.paper",
                      height: "100%",
                    }}
                  >
                    <Box sx={{ mb: 2 }}>
                      {value.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                      {value.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            {/* Team Section */}
            <Box sx={{ mt: 4, textAlign: "center" }}>
              <Typography
                variant="h5"
                className={styles.subtitle}
                sx={{ fontWeight: "bold", mb: 2, color: "primary.main" }}
              >
                Rencontrez Notre Équipe
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Une équipe dédiée et passionnée prête à vous accompagner dans
                votre aventure.
              </Typography>
              <Image
                src="/team.webp" // Assurez-vous d'avoir l'image dans le bon dossier
                alt="Notre Équipe"
                width={400}
                height={300}
                style={{
                  borderRadius: "8px",
                  objectFit: "cover",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
            </Box>
          </Paper>
        </Container>
      </Box>
    </Parallax>
  );
}
