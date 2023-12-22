import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Send from "@mui/icons-material/Send";
import Settings from "@mui/icons-material/Settings";

const StyledBox = styled(Box)({
  margin: 3,
});

const BlueButton = styled(Button)({
  backgroundColor: "lightblue",
  color: "#000",
  margin: 5,
  "&:hover": {
    backgroundColor: "skyblue",
  },
  "&:disabled": {
    backgroundColor: "gray",
  },
});

function App() {
  return (
    <>
      <StyledBox>
        <BlueButton variant="contained" startIcon={<Send />}>
          Send
        </BlueButton>
      </StyledBox>
      <StyledBox>
        <BlueButton
          variant="contained"
          color="secondary"
          startIcon={<Settings />}
        >
          Setting
        </BlueButton>
      </StyledBox>
      <StyledBox>
        <BlueButton variant="contained" startIcon={<Settings />} disabled>
          Disabled
        </BlueButton>
      </StyledBox>
    </>
  );
}

export default App;
