import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import {
  AiOutlineHeart,
  AiOutlineStar,
  AiOutlineEnvironment,
} from "react-icons/ai";

export function AboutUsMissionCard({ icon, title, description, iconColor }) {
  return (
    <Card>
      <CardContent>
        {icon}
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export function AboutUsMission() {
  return (
    <Container sx={{mt:10}}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <AboutUsMissionCard
            icon={<AiOutlineHeart size={40} color="primary" />}
            title="Passion"
            description="We are driven by a passion for innovation and excellence in everything we do."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AboutUsMissionCard
            icon={<AiOutlineStar size={40} color="secondary" />}
            title="Excellence"
            description="Striving for excellence in all our projects and delivering top-notch services."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <AboutUsMissionCard
            icon={<AiOutlineEnvironment size={40} color="success" />}
            title="Sustainability"
            description="Our commitment to a sustainable future is at the core of our practices."
          />
        </Grid>
      </Grid>
    </Container>
  );
}
