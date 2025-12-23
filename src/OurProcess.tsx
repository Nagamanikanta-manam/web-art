import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Understand the Problem",
    desc: "We deeply understand your goals, users, and constraints before touching design.",
    width: "60%",
  },
  {
    step: "02",
    title: "Define Structure & Flow",
    desc: "User journeys, hierarchy, and system boundaries are clarified early.",
    width: "50%",
  },
  {
    step: "03",
    title: "Design with Intent",
    desc: "Every interface decision is purposeful, clean, and user-focused.",
    width: "40%",
  },
  {
    step: "04",
    title: "Build & Refine",
    desc: "We engineer scalable, production-ready code while refining details.",
    width: "30%",
  },
  {
    step: "05",
    title: "Launch & Iterate",
    desc: "Ship confidently, then improve with real-world feedback.",
    width: "20%",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const OurProcessFunnel: FC = () => {
  return (
    <Box sx={styles.section}>
      <Container>
        <Typography variant="h4" align="center">
          Our Process
        </Typography>

        <Typography sx={styles.subtitle} align="center">
          A focused funnel — reducing complexity as ideas turn into a real product.
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Box sx={styles.funnel} mt={5}>
            {steps.map((s, i) => (
              <motion.div key={i} variants={itemVariants}>
                <Box
                  sx={{
                    ...styles.stepCard,
                    width: { xs: "94%", md: s.width },
                    mx: "auto",
                  }}
                >
                  <Typography sx={styles.step}>{s.step}</Typography>
                  <Typography sx={styles.title}>{s.title}</Typography>
                  <Typography sx={styles.desc}>{s.desc}</Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OurProcessFunnel;

/* ================= STYLES ================= */

const styles = {
  section: {
    py: 11,
    position: "relative",
  },

  subtitle: {
    maxWidth: 720,
    mx: "auto",
    mt: 1.25,
    opacity: 0.75,
    fontSize: "0.9rem",
  },

  funnel: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 8,

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "50%",
      width: "1px",
      background:
        "linear-gradient(to bottom, transparent, rgba(168,85,247,0.35), transparent)",
      transform: "translateX(-50%)",
      zIndex: 0,
    },
  },

  stepCard: {
    position: "relative",
    zIndex: 1,
    p: 2,
    borderRadius: 2.5,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    textAlign: "center",
    backdropFilter: "blur(6px)",
    transition: "all 0.25s ease",
    maxWidth: 680,

    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: "0 14px 36px rgba(168,85,247,0.25)",
      borderColor: "rgba(168,85,247,0.45)",
    },
  },

  step: {
    fontSize: "0.7rem",
    fontWeight: 700,
    letterSpacing: "0.12em",
    color: "#a855f7",
    mb: 0.2,
  },

  title: {
    fontWeight: 700,
    fontSize: "0.95rem",
    lineHeight: 1.35,
  },

  desc: {
    fontSize: "0.82rem",
    opacity: 0.75,
    lineHeight: 1.5,
    mt: 0.25,
  },
};
