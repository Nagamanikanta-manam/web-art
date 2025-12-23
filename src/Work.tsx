import { FC } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Work: FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Restaurant Website",
      tag: "Web Design",
    },
    {
      title: "E-commerce Platform",
      tag: "Full-Stack",
    },
    {
      title: "Marketing Landing Page",
      tag: "UI/UX",
    },
  ];

  return (
    <Box sx={styles.section}>
      <Container>
        <Typography variant="h4" align="center">
          Featured Work
        </Typography>

        <Grid container spacing={4} mt={4}>
          {projects.map((p) => (
            <Grid item xs={12} md={4} key={p.title}>
              <motion.div whileHover={{ y: -8 }}>
                <Box sx={styles.card}>
                  <Typography sx={styles.title}>{p.title}</Typography>

                  <Typography sx={styles.tag}>{p.tag}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={styles.cta}>
          <Button
            onClick={() => navigate("/services/web-design")}
            sx={styles.ctaBtn}
          >
            View All Work
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Work;

/* ---------- Styles ---------- */
const styles = {
  section: {
    py: 10,
    background: "rgba(0,0,0,0.25)",
  },

  card: {
    p: 4,
    borderRadius: 3,
    height: "100%",
    background:
      "linear-gradient(135deg,rgba(168,85,247,0.25),rgba(236,72,153,0.25))",
    border: "1px solid rgba(255,255,255,0.15)",
    transition: "all 0.3s ease",
  },

  title: {
    fontWeight: 700,
    fontSize: "1.05rem",
  },

  tag: {
    mt: 1,
    fontSize: "0.8rem",
    opacity: 0.7,
  },

  cta: {
    mt: 6,
    display: "flex",
    justifyContent: "center",
  },

  ctaBtn: {
    px: 4,
    py: 1.2,
    borderRadius: 999,
    fontWeight: 600,
    color: "white",
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
  },
};
