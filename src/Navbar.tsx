import { FC } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
];

const Navbar: FC = () => {
  return (
    <AppBar position="fixed" sx={styles.navbar} elevation={0}>
      <Toolbar sx={styles.toolbar}>
        {/* Brand → ALWAYS goes to home route */}
        <Typography
          component={Link}
          to="/"
          sx={styles.brand}
        >
          Webart
        </Typography>

        {/* Desktop Nav */}
        <Box sx={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.label}
              component="a"
              href={item.href}
              sx={styles.navItem}
            >
              {item.label}
            </Button>
          ))}

          {/* CTA */}
          <Button
            component={Link}
            to="/start-project"
            sx={styles.ctaButton}
          >
            Start Project
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

/* ================= STYLES ================= */

const styles = {
  navbar: {
    background: "rgba(0,0,0,0.45)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },

  toolbar: {
    justifyContent: "space-between",
    minHeight: 72,
  },

  brand: {
    fontWeight: 800,
    fontSize: 20,
    textDecoration: "none",
    color: "white",
    letterSpacing: "0.02em",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.9,
    },
  },

  navLinks: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    gap: 3,
  },

  navItem: {
    color: "white",
    fontSize: "0.9rem",
    fontWeight: 500,
    position: "relative",
    textTransform: "none",
    px: 0,

    "&::after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: -6,
      width: "0%",
      height: "2px",
      background: "linear-gradient(90deg,#ec4899,#a855f7)",
      transition: "width 0.3s ease",
    },

    "&:hover::after": {
      width: "100%",
    },
  },

  /* 🔥 CTA button */
  ctaButton: {
    ml: 1,
    px: 2.5,
    py: 0.75,
    borderRadius: 999,
    fontSize: "0.85rem",
    fontWeight: 600,
    textTransform: "none",
    color: "white",
    background: "linear-gradient(90deg,#ec4899,#a855f7)",
    boxShadow: "0 8px 30px rgba(168,85,247,0.35)",
    transition: "all 0.25s ease",

    "&:hover": {
      transform: "translateY(-1px)",
      boxShadow: "0 12px 40px rgba(168,85,247,0.45)",
      background: "linear-gradient(90deg,#ec4899,#9333ea)",
    },
  },
};
