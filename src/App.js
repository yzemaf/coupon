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
  Modal,
  Fab,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { animateScroll as scroll } from "react-scroll";
import Coupon from "./imgs/coupon.jpg";
import { Store } from "react-notifications-component";
import { ReactNotifications } from "react-notifications-component";
import Success from "./imgs/success.jpg";
import Error from "./imgs/error.jpg";
import "animate.css";
import "react-notifications-component/dist/theme.css";

function App() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    borderRadius: "2px",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

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
  const matches = useMediaQuery("(min-width:600px)");
  const [opened, setOpened] = useState(false);
  const [times, setTimes] = useState(100);
  const [answered, setAnswered] = useState(false);
  const [start, setStart] = useState(false);
  const [answers, setAnswers] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  useEffect(() => {
    if (start)
      setInterval(() => {
        setTimes((time) => time - 1);
      }, 1000);
    scroll.scrollTo(250, {
      duration: 1500,
      delay: 0,
      smooth: true,
      offset: 50, // Scrolls to element + 50 pixels down the page
    });
  }, [start]);
  useEffect(() => {
    if (times === 0) clearInterval();
  }, [times]);

  return (
    <div>
      <ReactNotifications />
      <Container maxWidth="lg" id="home">
        <Widget sx={{ marginTop: "1rem" }}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button></Button>
            <Button>Welcome To The Coupon Page</Button>
            <Button></Button>
          </ButtonGroup>
        </Widget>
        <Paper elevation={8} className="box">
          <Typography>Product ID: 47214371</Typography>
          <br />
          <img
            src={Coupon}
            style={{ width: matches ? 300 : 230, minHeight: matches ? "30vh" : "20vh" }}
            alt="coupon"
          />
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
            {!answered && (
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
            )}

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
                    if (
                      answers.one ||
                      answers.two ||
                      answers.three ||
                      answers.four
                    ) {
                      setAnswered(true);
                      setOpened(true);
                      setTimeout(() => {
                        setOpened(false);
                        if (answers.two) {
                          handleOpen();
                        } else {
                          handleOpen2();
                        }
                      }, 1000);
                    } else {
                      Store.addNotification({
                        title: "Error!",
                        message: "You haven't selected any option",
                        type: "danger",
                        insert: "top",
                        container: "top-left",
                        animationIn: ["animate__animated", "animate__fadeIn"],
                        animationOut: ["animate__animated", "animate__fadeOut"],
                        dismiss: {
                          duration: 3000,
                          onScreen: true,
                        },
                      });
                    }
                  }}
                  disabled={times < 0 || answered}
                >
                  SUBMIT
                </Button>
              </Box>
            </Box>
          </div>
        )}
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{ ...style, width: matches ? 400 : 200, textAlign: "center" }}
          >
            <h4 id="child-modal-title">Congratulations 🎉🎉</h4>
            <img
              src={Success}
              style={{
                width: matches ? 300 : 200,
                minHeight: matches ? "30vh" : "20vh",
              }}
              alt="success"
            />
            <h6 id="child-modal-description">
              Your answer was correct and you have received a coupon for this
              product !!!
            </h6>
            <a href="https://www.google.com/search?q=coupon">
              <Button color="info">Accept</Button>
            </a>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
          </Box>
        </Modal>
        <Modal
          hideBackdrop
          open={open2}
          onClose={handleClose2}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{ ...style, width: matches ? 400 : 200, textAlign: "center" }}
          >
            <h4 id="child-modal-title">Sorry 🙁🙁 </h4>
            <img
              src={Error}
              style={{
                width: matches ? 300 : 200,
                minHeight: matches ? "30vh" : "20vh",
              }}
              alt="success"
            />
            <h6 id="child-modal-description">
              Your answer was wrong and you did not win a coupon for this product
            </h6>
            <Button onClick={handleClose2} color="error">
              Cancel
            </Button>
          </Box>
        </Modal>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={opened}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Container>
    </div>
  );
}

export default App;
