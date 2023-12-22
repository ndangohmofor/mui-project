import React from "react";
import Box from "@mui/material/Box";

const Rightbar = () => {
  return (
    <Box
      bgcolor={"lightcoral"}
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      Right bar
    </Box>
  );
};

export default Rightbar;
