import { FC } from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import { Layout, Code, Palette, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SERVICES = {
  "web-design": {
    id: "web-design",
    title: "Website Design",
    description:
      "Fast, responsive, and conversion-focused websites tailored to your brand.",
  },
  "full-stack": {
    id: "full-stack",
    title: "Full-Stack Applications",
    description:
      "Scalable, secure, and performance-driven applications built end-to-end.",
  },
  "poster-design": {
    id: "poster-design",
    title: "Poster Design",
    description:
      "High-impact posters and creatives designed to attract, engage, and convert.",
  },
  "calendar-design": {
    id: "calendar-design",
    title: "Calendar Design",
    description:
      "Premium calendar designs that keep your brand visible throughout the year.",
  },
};

/** UI-only concern: icons */
const SERVICE_ICONS = {
  "web-design": Layout,
  "full-stack": Code,
  "poster-design": Palette,
  "calendar-design": Calendar,
};

const Services: FC = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4" align="center">
        Our Services
      </Typography>

      <Grid container spacing={4} mt={4} justifyContent="center">
        {Object.values(SERVICES).map((service) => {
          const Icon = SERVICE_ICONS[service.id as keyof typeof SERVICE_ICONS];

          return (
            <Grid item xs={12} md={3} key={service.id}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  sx={styles.card}
                  onClick={() => navigate(`/services/${service.id}`)}
                >
                  <CardContent sx={{ textAlign: "center" }}>
                    <Icon size={36} />
                    <Typography mt={2} fontWeight={600}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="gray">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Services;

const styles = {
  card: {
    cursor: "pointer",
    maxWidth: 260,
    mx: "auto",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(14px)",
    borderRadius: 3,
    border: "1px solid rgba(255,255,255,0.12)",
    transition: "all 0.3s ease",
    "&:hover": {
      boxShadow: "0 20px 40px rgba(168,85,247,0.25)",
    },
  },
};
