import React from "react";
import Box from "@mui/material/Box";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Box position={"fixed"}>Right bar</Box>
    </Box>
  );
};

export default Rightbar;
