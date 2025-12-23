import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { motion } from "framer-motion";

const ProblemsWeSolve: FC = () => {
  const problems = [
    {
      problem: "Our website looks outdated and doesn’t convert",
      solution:
        "We redesign with clear user flows, modern UI, and conversion-focused layouts.",
    },
    {
      problem: "Developers don’t understand design",
      solution:
        "We handle design and engineering together — no handoff issues.",
    },
    {
      problem: "Our product UI is confusing for users",
      solution:
        "We simplify interfaces and improve usability through thoughtful UX.",
    },
    {
      problem: "We need to launch fast, but still do it right",
      solution:
        "We help you move quickly without sacrificing quality or scalability.",
    },
    {
      problem: "Nothing on our site feels trustworthy",
      solution:
        "We create clean, consistent visuals that build instant credibility.",
    },
    {
      problem: "We don’t know what to prioritize",
      solution:
        "We guide decisions with clarity, experience, and honest feedback.",
    },
  ];

  return (
    <Box sx={styles.section}>
      <Container>
        <Typography variant="h4" align="center">
          Common Problems We Solve
        </Typography>

        <Typography sx={styles.subtitle} align="center">
          Challenges we regularly help startups, brands, and creators overcome.
        </Typography>

        <Grid container spacing={4} mt={6}>
          {problems.map((p, i) => (
            <Grid key={i} xs={12} sm={6} md={4}>
              <Box sx={styles.cardWrapper}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  style={{ height: "100%" }}
                >
                  <Box sx={styles.card}>
                    <Typography sx={styles.problem}>
                      “{p.problem}”
                    </Typography>
                    <Typography sx={styles.solution}>
                      {p.solution}
                    </Typography>
                  </Box>
                </motion.div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProblemsWeSolve;

/* ================= STYLES ================= */

const styles = {
  section: { py: 10 },

  subtitle: {
    maxWidth: 680,
    mx: "auto",
    mt: 2,
    opacity: 0.75,
    fontSize: "0.95rem",
  },

  cardWrapper: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 12,
  },

  card: {
    minHeight: 170,
    p: 3,
    borderRadius: 3,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: 1.5,
    transition: "box-shadow 0.3s ease",
    "&:hover": {
      boxShadow: "0 18px 45px rgba(168,85,247,0.28)",
    },
  },

  problem: {
    fontWeight: 700,
    fontSize: "0.95rem",
  },

  solution: {
    fontSize: "0.85rem",
    opacity: 0.75,
  },
};
