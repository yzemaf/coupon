import "./App.css";
import { useState, useEffect } from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  ButtonGroup,
  Chip,
  CircularProgress,
  Divider,
  Fab,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import Coupon from "./imgs/coupon.jpg";

function App() {
  const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    maxWidth: "100%",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
  }));

  const [opened, setOpened] = useState(false);
  const [times, setTimes] = useState(100);
  const [start, setStart] = useState(false);
  const [answers, setAnswers] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  useEffect(() => {
    if (start)
      setInterval(() => {
        setTimes((time) => time - 1);
      }, 1000);
  }, [start]);
  useEffect(() => {
    if (times === 0) clearInterval();
  }, [times]);

  return (
    <Container maxWidth="lg" id="home">
      <Widget sx={{ marginTop: "1rem" }}>
        <ButtonGroup
          variant="text"
          aria-label="text button group"
        >
          <Button></Button>
          <Button>Welcome To The Coupon Page</Button>
          <Button></Button>
        </ButtonGroup>
      </Widget>
      <Paper elevation={8} className="box">
        <Typography>Product ID: 47214371</Typography>
        <br />
        <img src={Coupon} alt="coupon" />
        <br />
        <Typography>
          Price&nbsp;:&nbsp;
          <b style={{ color: "red", fontWeight: 700, fontSize: "1.2rem" }}>
            $50
          </b>
        </Typography>
        <br />
        <Alert severity="warning" style={{ textAlign: "center" }}>
          Hello! You are eligible to get a coupon for the above product if you
          can answer the question below correctly.
        </Alert>
      </Paper>
      <br />
      {!start && (
        <Fab variant="extended" onClick={() => setStart(true)}>
          Your question
        </Fab>
      )}
      {start && (
        <div>
          <div style={{ marginTop: "0.5rem" }}>
            <LinearProgress
              variant="determinate"
              value={times}
              style={{
                height: "1vh",
                borderRadius: "20px",
                display: times < 0 && "none",
              }}
              color="warning"
            />
            {times < 0 && (
              <Alert variant="filled" severity="error">
                Error! You failed to answer the question on time.
              </Alert>
            )}
          </div>

          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    Question
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                This is a random question having the second option as the
                answer?
              </Typography>
            </Box>
            <Divider variant="middle" />
            <Box sx={{ m: 2 }}>
              <Stack
                direction="row"
                spacing={1}
                style={{
                  justifyContent: "center",
                }}
              >
                <Chip
                  onClick={() =>
                    setAnswers({
                      one: !answers.one,
                      two: false,
                      three: false,
                      four: false,
                    })
                  }
                  label="Option 1"
                  color={answers.one ? "warning" : "default"}
                  variant="outlined"
                />
                <Chip
                  onClick={() =>
                    setAnswers({
                      one: false,
                      two: !answers.two,
                      three: false,
                      four: false,
                    })
                  }
                  label="Option 2"
                  color={answers.two ? "warning" : "default"}
                  variant="outlined"
                />
                <Chip
                  onClick={() =>
                    setAnswers({
                      one: false,
                      two: false,
                      three: !answers.three,
                      four: false,
                    })
                  }
                  label="Option 3"
                  color={answers.three ? "warning" : "default"}
                  variant="outlined"
                />
                <Chip
                  onClick={() =>
                    setAnswers({
                      one: false,
                      two: false,
                      three: false,
                      four: !answers.four,
                    })
                  }
                  label="Option 4"
                  color={answers.four ? "warning" : "default"}
                  variant="outlined"
                />
              </Stack>
            </Box>
            <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
              <Button
                onClick={() => {
                  setOpened(true);
                  setTimeout(() => setOpened(false), 1000);
                }}
                disabled={times < 0}
              >
                SUBMIT
              </Button>
            </Box>
          </Box>
        </div>
      )}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={opened}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}

export default App;
