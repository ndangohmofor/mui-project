import React from "react";
import Box from "@mui/material/Box";

const Sidebar = () => {
  return (
    <Box
      bgcolor={"pink"}
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      Side bar
    </Box>
  );
};

export default Sidebar;
