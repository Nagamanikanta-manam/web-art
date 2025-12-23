import { FC } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

const AnimatedBackground: FC = () => {
  return (
    <>
      <motion.div
        style={styles.blobPurple}
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={styles.blobPink}
        animate={{
          x: [0, -140, 100, 0],
          y: [0, 120, -80, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 48,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Box sx={styles.dots} />
    </>
  );
};

export default AnimatedBackground;

const styles = {
  blobPurple: {
    position: "fixed" as const,
    top: "-20%",
    left: "-20%",
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(168,85,247,0.35)",
    filter: "blur(130px)",
    zIndex: 1,
  },
  blobPink: {
    position: "fixed" as const,
    bottom: "-20%",
    right: "-20%",
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "rgba(236,72,153,0.35)",
    filter: "blur(130px)",
    zIndex: 1,
  },
  dots: {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    animation: "dotsMove 60s linear infinite",
    pointerEvents: "none",
    zIndex: 0,
  },
};
