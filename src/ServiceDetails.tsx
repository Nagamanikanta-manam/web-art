import { Container, Box, Typography, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Reveal from "./Reveal";
import { SERVICES } from "./services.config";
import CountUp from "./CountUp";

const AUTO_SCROLL_SPEED = 0.35;

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = SERVICES[serviceId as keyof typeof SERVICES];

  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isInteracting = useRef(false);

  if (!service) return null;

  /* ---------- Auto scroll ---------- */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!isInteracting.current) {
        el.scrollLeft += AUTO_SCROLL_SPEED;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 2) {
          el.scrollLeft = 0;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, []);

  const scrollByCard = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const width = card?.offsetWidth || 360;
    el.scrollBy({ left: dir * width, behavior: "smooth" });
  };

  return (
    <Container sx={styles.container}>
      {/* HERO */}
      <Reveal>
        <Typography sx={styles.title}>{service.title}</Typography>
        <Typography sx={styles.subtitle}>{service.description}</Typography>
      </Reveal>

      {/* STATS */}
      <Reveal delay={0.1}>
        <Box sx={styles.stats}>
          <Stat label="Projects Delivered" value={service.worksCount} />
          <Stat label="Industries Served" value={service.industriesCount} />
        </Box>
      </Reveal>

      {/* WORK CAROUSEL */}
      <Reveal delay={0.2}>
        <Box sx={styles.section}>
          <Box sx={styles.sectionHeader}>
            <Typography sx={styles.sectionTitle}>Selected Work</Typography>

            <Box sx={styles.controls}>
              <IconButton
                sx={styles.controlBtn}
                onClick={() => scrollByCard(-1)}
              >
                <ChevronLeft size={18} />
              </IconButton>
              <IconButton
                sx={styles.controlBtn}
                onClick={() => scrollByCard(1)}
              >
                <ChevronRight size={18} />
              </IconButton>
            </Box>
          </Box>

          <Box
            ref={trackRef}
            sx={styles.carousel}
            onMouseEnter={() => (isInteracting.current = true)}
            onMouseLeave={() => (isInteracting.current = false)}
            onTouchStart={() => (isInteracting.current = true)}
            onTouchEnd={() => (isInteracting.current = false)}
          >
            {service.works.concat(service.works).map((work, i) => (
              <Box key={i} sx={styles.caseCard} data-card>
                <Box sx={styles.accentBar} />

                <Typography sx={styles.caseTitle}>{work.title}</Typography>
                <Typography sx={styles.caseCategory}>
                  {work.category}
                </Typography>

                <Typography sx={styles.caseResult}>{work.result}</Typography>

                <Box sx={styles.review}>
                  <Typography sx={styles.reviewQuote}>
                    “{work.review.quote}”
                  </Typography>
                  <Typography sx={styles.reviewAuthor}>
                    — {work.review.author}, {work.review.company}
                  </Typography>
                </Box>

                <Button sx={styles.previewBtn}>Preview</Button>
              </Box>
            ))}
          </Box>

          {/* Mobile hint */}
          <Typography sx={styles.swipeHint}>
            Swipe to explore projects →
          </Typography>
        </Box>
      </Reveal>

      {/* CTA */}
      <Reveal delay={0.3}>
        <Box sx={styles.ctaWrapper}>
          <Button sx={styles.ctaBtn} onClick={() => navigate("/start-project")}>
            Start a Project
          </Button>
        </Box>
      </Reveal>
    </Container>
  );
};

export default ServiceDetails;

/* ---------- Stats ---------- */
const Stat = ({ label, value }: { label: string; value: number }) => (
  <Box sx={styles.stat}>
    <Typography sx={styles.statValue}>
      <CountUp from={0} to={value} duration={0.6} />
    </Typography>
    <Typography sx={styles.statLabel}>{label}</Typography>
  </Box>
);

/* ---------- Styles ---------- */
const styles = {
  container: {
    pt: 18,
    pb: 16,
    minHeight: "100vh",
  },

  title: {
    textAlign: "center",
    fontSize: "clamp(2.4rem,5vw,3.2rem)",
    fontWeight: 800,
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    textAlign: "center",
    maxWidth: 640,
    mx: "auto",
    mt: 2,
    opacity: 0.8,
  },

  /* STATS (mobile fixed) */
  stats: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 8,
    gap: { xs: 2.5, md: 6 },
    flexDirection: { xs: "column", sm: "row" },
  },

  stat: {
    textAlign: "center",
  },

  statValue: {
    fontSize: "2.3rem",
    fontWeight: 800,
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  statLabel: {
    fontSize: "0.9rem",
    opacity: 0.7,
  },

  section: {
    mt: 12,
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 4,
  },

  sectionTitle: {
    fontSize: "1.6rem",
    fontWeight: 700,
  },

  controls: {
    display: { xs: "none", md: "flex" },
    gap: 1,
  },

  controlBtn: {
    color: "white",
    border: "1px solid rgba(255,255,255,0.25)",
  },

  carousel: {
    display: "flex",
    gap: { xs: 16, md: 24 },
    overflowX: "auto",
    paddingInline: { xs: 2, md: 0 },
    WebkitOverflowScrolling: "touch",
    "&::-webkit-scrollbar": { display: "none" },
  },

  caseCard: {
    minWidth: { xs: "78%", sm: 340, md: 420 },
    flexShrink: 0,
    p: { xs: 2.5, md: 4 },
    borderRadius: { xs: 3, md: 4 },
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.12)",
    position: "relative",
  },

  accentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 4,
    width: "100%",
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  caseTitle: {
    fontSize: { xs: "1.05rem", md: "1.25rem" },
    fontWeight: 700,
    mt: 1,
  },

  caseCategory: {
    fontSize: { xs: "0.75rem", md: "0.85rem" },
    opacity: 0.65,
  },

  caseResult: {
    mt: 1.5,
    fontSize: { xs: "0.9rem", md: "1rem" },
    fontWeight: 600,
    color: "#a855f7",
  },

  review: {
    mt: { xs: 2, md: 3 },
    pt: { xs: 1.5, md: 2 },
    borderTop: "1px dashed rgba(255,255,255,0.2)",
  },

  reviewQuote: {
    fontSize: { xs: "0.85rem", md: "0.95rem" },
    fontStyle: "italic",
    opacity: 0.85,
    lineHeight: 1.4,
  },

  reviewAuthor: {
    mt: 0.8,
    fontSize: { xs: "0.75rem", md: "0.8rem" },
    opacity: 0.7,
  },

  previewBtn: {
    mt: { xs: 2, md: 2.5 },
    px: { xs: 2.5, md: 3 },
    py: { xs: 0.5, md: 0.6 },
    fontSize: "0.72rem",
    fontWeight: 600,
    borderRadius: 999,
    color: "white",
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    textTransform: "none",
  },

  swipeHint: {
    mt: 1,
    fontSize: "0.7rem",
    opacity: 0.5,
    textAlign: "center",
    display: { xs: "block", md: "none" },
  },

  ctaWrapper: {
    mt: 12,
    display: "flex",
    justifyContent: "center",
  },

  ctaBtn: {
    px: 5,
    py: 1.4,
    borderRadius: 999,
    fontWeight: 600,
    color: "white",
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    boxShadow: "0 12px 30px rgba(168,85,247,0.35)",
  },
};
