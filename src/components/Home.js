import { Box, Button, ButtonGroup, Chip, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

function Home() {
  const navigate = useNavigate();
  const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    maxWidth: "100%",
    boxShadow: "0px 0px 50px rgba(255,255,255,0.805)",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.805)",
    backdropFilter: "blur(40px)",
  }));
  return (
    <div>
      <ReactNotifications />
      <Container maxWidth="lg" id="home">
        <Widget sx={{ marginTop: "1rem" }}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button></Button>
            <Button>Coupon Home Page</Button>
            <Button></Button>
          </ButtonGroup>
        </Widget>
        <div>
          <Box
            sx={{
              my: 3,
              mx: 2,
              backgroundColor: "rgba(255, 255, 255, 255)",
              borderRadius: "20px",
              p: 5,
            }}
          >
            <Typography color="text.secondary" variant="body2">
              Nothing to see here for now, you can check out the demo pages
              below 😃.
            </Typography>
            <br />
            <Chip
              label="Promotion Page Demo 1"
              onClick={() => navigate("/promotions/1")}
              sx={{
                margin: "1rem",
                backgroundColor: "#d50000",
                color: "white",
              }}
            />
            <Chip
              label="Promotion Page Demo 2"
              onClick={() => navigate("/promotions/2")}
              sx={{
                margin: "1rem",
                backgroundColor: "#2e7d32",
                color: "white",
              }}
            />
            <Chip
              label="Promotion Page Demo 3"
              onClick={() => navigate("/promotions/3")}
              sx={{
                margin: "1rem",
                backgroundColor: "#2196f3",
                color: "white",
              }}
            />
            <Chip
              label="Promotion Page Demo 4"
              onClick={() => navigate("/promotions/4")}
              sx={{ margin: "1rem", backgroundColor: "purple", color: "white" }}
            />
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default Home;
