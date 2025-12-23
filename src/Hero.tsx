import { FC } from "react";
import { Container, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import SplitText from "./SplitText";

const Hero: FC = () => {
  const navigate = useNavigate();

  return (
    <Container sx={styles.hero}>
      {/* Text */}
      <Box sx={styles.textWrapper}>
        <SplitText
          text="Designing & Building"
          tag="h1"
          className="hero-title"
        />
        <SplitText
          text="Digital Experiences"
          tag="h1"
          className="hero-title-gradient"
        />
        <SplitText
          text="Webart is a creative studio crafting websites, full-stack applications, posters, and calendars."
          tag="p"
          splitType="words"
          className="hero-description"
        />
      </Box>

      {/* CTA buttons */}
      <Box sx={styles.buttons}>
        <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}>
          <Button
            sx={styles.primaryBtn}
            onClick={() => navigate("/start-project")}
          >
            Start a Project
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Hero;
/* ================= STYLES ================= */

const styles = {
  hero: {
    pt: 18,
    pb: 14,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  textWrapper: {
    maxWidth: 900,
    mx: "auto",
  },

  buttons: {
    mt: 5,
    display: "flex",
    justifyContent: "center",
    gap: 2,
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    color: "white",
    px: 4,
    py: 1.5,
    fontWeight: 600,
    borderRadius: 999,
    boxShadow: "0 10px 30px rgba(168,85,247,0.35)",
    "&:hover": {
      background: "linear-gradient(90deg,#f472b6,#c084fc)",
    },
  },

  outlineBtn: {
    borderColor: "rgba(255,255,255,0.4)",
    color: "white",
    px: 4,
    py: 1.5,
    borderRadius: 999,
    "&:hover": {
      borderColor: "#a855f7",
      background: "rgba(168,85,247,0.1)",
    },
  },
};
