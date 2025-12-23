import { FC } from "react";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import AnimatedBackground from "./AnimatedBackground";
import ClickSpark from "./ClickSpark";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import WhoWeWorkWith from "./WhoWeWorkWith";
import OurProcess from "./OurProcess";
import CTA from "./CTA";
import Footer from "./Footer";
import ContactPage from "./ContactPage";
import ServiceDetails from "./ServiceDetails";
import Reveal from "./Reveal";

const App: FC = () => {
  return (
    <Box sx={styles.root}>
      <AnimatedBackground />

      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
      >
        <Box sx={{ position: "relative", zIndex: 2 }}>
          <Navbar />

          <Routes>
            {/* ================= HOME ================= */}
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Reveal>
                      <Hero />
                    </Reveal>
                  </section>

                  <section id="services">
                    <Reveal delay={0.1}>
                      <Services />
                    </Reveal>
                  </section>

                  <section id="work">
                    <Reveal delay={0.15}>
                      <WhoWeWorkWith />
                    </Reveal>
                  </section>

                  <section id="process">
                    <Reveal delay={0.2}>
                      <OurProcess />
                    </Reveal>
                  </section>

                  <section id="contact">
                    <Reveal delay={0.3}>
                      <CTA />
                    </Reveal>
                  </section>
                </>
              }
            />

            {/* ================= PAGES ================= */}
            <Route
              path="/start-project"
              element={
                <ContactPage
                  title="Start a Project"
                  subtitle="Have an idea? Let’s turn it into a digital experience."
                />
              }
            />

            <Route
              path="/services/:serviceId"
              element={<ServiceDetails />}
            />
          </Routes>

          <Footer />
        </Box>
      </ClickSpark>
    </Box>
  );
};

export default App;

/* ================= STYLES ================= */

const styles = {
  root: {
    minHeight: "100vh",
    position: "relative",
    isolation: "isolate",
    background: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
    color: "white",
    overflow: "hidden",
  },
};
