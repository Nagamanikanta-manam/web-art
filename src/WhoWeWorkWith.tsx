import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import "./brand-marquee.css";

const brands = [
  { name: "StartupX", logo: "/brands/startupx.svg" },
  { name: "HealthPlus", logo: "/brands/healthplus.svg" },
  { name: "EduCore", logo: "/brands/educore.svg" },
  { name: "LocalMart", logo: "/brands/localmart.svg" },
  { name: "D2C Labs", logo: "/brands/d2clabs.svg" },
  { name: "CreatorHub", logo: "/brands/creatorhub.svg" },
];

const WhoWeWorkWith: FC = () => {
  return (
    <Box sx={styles.section}>
      <Container>
        <Typography variant="h4" align="center">
          Who We Work With
        </Typography>

        <Typography sx={styles.subtitle} align="center">
          Trusted by startups, brands, and professionals
        </Typography>

        <Box sx={styles.marqueeWrapper}>
          <div className="marquee">
            <div className="marquee-track">
              {[...brands, ...brands].map((b, i) => (
                <div className="brand-card" key={i}>
                  <img src={b.logo} alt={b.name} />
                  <span>{b.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default WhoWeWorkWith;

const styles = {
  section: {
    py: 10,
  },

  subtitle: {
    mt: 2,
    mb: 6,
    opacity: 0.75,
    fontSize: "0.95rem",
  },

  marqueeWrapper: {
    overflow: "hidden",
    position: "relative",
  },
};
