import { FC, useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  MenuItem,
} from "@mui/material";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

const steps = ["Details", "Project", "Message"];

const ContactPage: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    description: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  return (
    <Container sx={styles.container}>
      {/* Header */}
      <Reveal>
        <Box sx={styles.header}>
          <Typography sx={styles.title}>Start a Project</Typography>
          <Typography sx={styles.subtitle}>
            Tell us a little about what you want to build.
          </Typography>
        </Box>
      </Reveal>

      {/* Card */}
      <Reveal delay={0.1}>
        <Box sx={styles.card}>
          {/* Stepper */}
          <Stepper activeStep={activeStep} sx={styles.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {/* Content */}
          <Box sx={{ mt: 3 }}>
            {/* STEP 1 */}
            {activeStep === 0 && (
              <Box sx={styles.verticalGroup}>
                <TextField
                  fullWidth
                  label="Your Name"
                  value={form.name}
                  onChange={handleChange("name")}
                  sx={styles.input}
                />

                <TextField
                  fullWidth
                  label="Email Address"
                  value={form.email}
                  onChange={handleChange("email")}
                  sx={styles.input}
                />
              </Box>
            )}

            {/* STEP 2 */}
            {activeStep === 1 && (
              <TextField
                select
                fullWidth
                label="Project Type"
                value={form.projectType}
                onChange={handleChange("projectType")}
                sx={styles.input}
                SelectProps={{
                  MenuProps: {
                    PaperProps: {
                      sx: styles.dropdownPaper,
                    },
                  },
                }}
              >
                <MenuItem value="Website">Website</MenuItem>
                <MenuItem value="Web App">Web Application</MenuItem>
                <MenuItem value="Poster Design">Poster Design</MenuItem>
                <MenuItem value="Calendar Design">Calendar Design</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
            )}

            {/* STEP 3 */}
            {activeStep === 2 && (
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Tell us about your project"
                value={form.description}
                onChange={handleChange("description")}
                sx={styles.input}
              />
            )}
          </Box>

          {/* Actions */}
          <Box sx={styles.actions}>
            <Button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((s) => s - 1)}
              sx={styles.backBtn}
            >
              Back
            </Button>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={
                  activeStep === steps.length - 1
                    ? () => console.log("SUBMIT", form)
                    : () => setActiveStep((s) => s + 1)
                }
                sx={styles.nextBtn}
                endIcon={<ArrowRight size={14} />}
              >
                {activeStep === steps.length - 1 ? "Submit Project" : "Next"}
              </Button>
            </motion.div>
          </Box>
        </Box>
      </Reveal>
    </Container>
  );
};

export default ContactPage;
const styles = {
  container: {
    minHeight: "100vh",
    pt: { xs: 14, md: 20 },
    pb: { xs: 14, md: 18 },
  },

  header: {
    textAlign: "center",
    maxWidth: 520,
    mx: "auto",
    mb: 5,
  },

  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 800,
    fontFamily: "Sora, sans-serif",
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    mt: 1,
    opacity: 0.7,
    fontSize: "0.95rem",
  },

  card: {
    maxWidth: 720,
    mx: "auto",
    p: { xs: 3, md: 4 },
    borderRadius: { xs: 4, md: 9 },
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(14px)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  stepper: {
    mb: 2,
    "& .MuiStepLabel-label": {
      fontSize: "0.85rem",
      color: "rgba(255,255,255,0.6)",
    },
    "& .Mui-active .MuiStepLabel-label": {
      color: "#ec4899",
      fontWeight: 600,
    },
    "& .Mui-completed .MuiStepLabel-label": {
      color: "#a855f7",
    },
    "& .MuiStepIcon-root": {
      color: "rgba(255,255,255,0.25)",
    },
    "& .MuiStepIcon-root.Mui-active": {
      color: "#ec4899",
    },
    "& .MuiStepIcon-root.Mui-completed": {
      color: "#a855f7",
    },
  },

  /* Vertical spacing ONLY */
  verticalGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6, // ✅ very little vertical space
  },

  input: {
    "& .MuiOutlinedInput-root": {
      color: "white",
      background: "rgba(255,255,255,0.06)", // ✅ brighter
      borderRadius: 6,
      "& fieldset": {
        borderColor: "rgba(255,255,255,0.3)",
      },
      "&:hover fieldset": {
        borderColor: "#a855f7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#ec4899",
      },
    },
    "& label": {
      color: "rgba(255,255,255,0.65)",
    },
    "& label.Mui-focused": {
      color: "#ec4899",
    },
    "& .MuiSelect-icon": {
      color: "rgba(255,255,255,0.9)", // ✅ brighter arrow
    },
  },

  dropdownPaper: {
    background: "#1f1b3a",
    color: "white",
    borderRadius: 8,
    "& .MuiMenuItem-root.Mui-selected": {
      backgroundColor: "rgba(168,85,247,0.25)",
    },
    "& .MuiMenuItem-root:hover": {
      backgroundColor: "rgba(236,72,153,0.2)",
    },
  },

  actions: {
    mt: 4,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  backBtn: {
    fontSize: "0.8rem",
    color: "rgba(255,255,255,0.55)",
  },

  nextBtn: {
    px: 3,
    py: 0.9,
    fontSize: "0.85rem",
    fontWeight: 600,
    borderRadius: 999,
    color: "white",
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    boxShadow: "0 8px 20px rgba(168,85,247,0.3)",
    "&:hover": {
      background: "linear-gradient(90deg,#f472b6,#c084fc)",
    },
  },
};
