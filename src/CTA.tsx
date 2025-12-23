import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA: FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.cta}>
      <Typography variant="h4" fontWeight={700} mb={3}>
        Let’s build something amazing
      </Typography>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <Button
          sx={styles.btn}
          endIcon={<ArrowRight size={18} />}
          onClick={() => navigate("/start-project")}
        >
          Start a Project
        </Button>
      </motion.div>
    </Box>
  );
};
export default CTA;
const styles = {
  cta: {
    py: 10,
    textAlign: "center",
    background:
      "radial-gradient(circle at top, rgba(168,85,247,0.25), transparent 70%)",
  },
  btn: {
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    color: "white",
  },
};
