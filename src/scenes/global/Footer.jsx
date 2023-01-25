import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px,30px,40px)"
      >
        <Box width="clamp(20%,30%,40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            STRAPI ECOMMERCE
          </Typography>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            impedit.
          </div>
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Careers</Typography>
          <Typography mb="30px">Terms & Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
        <Box>
          <Typography variant="h4" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Help</Typography>
          <Typography mb="30px">Shipping</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
