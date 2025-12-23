import { FC } from "react";
import { Box } from "@mui/material";

const Footer: FC = () => {
  return (
    <Box sx={styles.footer}>
      © {new Date().getFullYear()} Webart. All rights reserved.
    </Box>
  );
};

export default Footer;

const styles = {
  footer: {
    py: 3,
    textAlign: "center",
    opacity: 0.6,
  },
};
