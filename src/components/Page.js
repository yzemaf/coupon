import { useState, useEffect } from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  ButtonGroup,
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
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { animateScroll as scroll } from "react-scroll";
import Coupon from "../imgs/coupon2.png";
import { Store } from "react-notifications-component";
import { ReactNotifications } from "react-notifications-component";
import Success from "../imgs/success.jpg";
import Error from "../imgs/error.jpg";
import "animate.css";
import "./c.css";
import "react-notifications-component/dist/theme.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Page() {
  const [userAnswered, setUserAnswered] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem("answered1");
    if (auth) setUserAnswered(true);
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
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
    boxShadow: "0px 0px 50px rgba(255,255,255,0.805)",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.805)",
    backdropFilter: "blur(40px)",
  }));
  const matches = useMediaQuery("(min-width:600px)");
  const [opened, setOpened] = useState(false);
  const [times, setTimes] = useState(100);
  const [answered, setAnswered] = useState(false);
  const [start, setStart] = useState(false);
  const [answers, setAnswers] = useState("");
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState("");
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
  const [openChild, setOpenChild] = useState(false);
  const handleOpenChild = () => {
    setOpenChild(true);
  };
  const handleCloseChild = () => {
    setOpenChild(false);
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
      offset: 50,
    });
  }, [start]);
  useEffect(() => {
    if (times === 0) clearInterval();
  }, [times]);
  function genCode() {
    setCode(
      `${Math.random().toString(32).slice(8)}-${Math.random()
        .toString(32)
        .slice(8)}-${Math.random().toString(32).slice(8)}`
    );
  }
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
        {/* <input onChange={(e) => setVal(e.target.value)} />
        <CopyToClipboard
          text={val}
          onCopy={() => {
            setCopied(true);
            console.log(val);
          }}
        >
          <Button>Copy to clipboard with span</Button>
        </CopyToClipboard> */}
        {!userAnswered ? (
          <div>
            <Paper elevation={8} className="box">
              <Typography>Product ID: 47214371</Typography>
              <br />
              <img
                src={Coupon}
                style={{
                  width: matches ? 300 : 230,
                  minHeight: matches ? "30vh" : "20vh",
                }}
                alt="coupon"
              />
              <br />
              <Typography>
                Price&nbsp;:&nbsp;
                <b
                  style={{ color: "red", fontWeight: 700, fontSize: "1.2rem" }}
                >
                  $99.99
                </b>
              </Typography>
              <br />
              <Alert severity="warning" style={{ textAlign: "center" }}>
                Hello! You are eligible to get a coupon for the above product if
                you can answer the question below correctly.
              </Alert>
            </Paper>
            <br />
            {!start && (
              <Fab
                variant="extended"
                onClick={() => {
                  setStart(true);
                  localStorage.setItem("answered1", true);
                }}
              >
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
                        <Typography gutterBottom variant="h4" p={3} component="div">
                          Question
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                      RGB consists of the 3 primary colors, R in this context
                      stands for what?
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
                      <TextField
                        variant="standard"
                        label="your answer"
                        style={{ fontSize: "10px" }}
                        size="small"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            if (answers !== "") {
                              setAnswered(true);
                              setOpened(true);
                              setTimeout(() => {
                                setOpened(false);
                                if (
                                  answers
                                    .replace(/[^A-Z0-9]/gi, "")
                                    .toLocaleLowerCase() === "red"
                                ) {
                                  handleOpen();
                                } else {
                                  handleOpen2();
                                }
                              }, 1000);
                            } else {
                              Store.addNotification({
                                title: "Error!",
                                message: "You have not given an answer",
                                type: "danger",
                                insert: "top",
                                container: "top-left",
                                animationIn: [
                                  "animate__animated",
                                  "animate__fadeIn",
                                ],
                                animationOut: [
                                  "animate__animated",
                                  "animate__fadeOut",
                                ],
                                dismiss: {
                                  duration: 3000,
                                  onScreen: true,
                                },
                              });
                            }
                          }
                        }}
                        onChange={(e) => {
                          setAnswers(e.target.value);
                        }}
                        disabled={times < 0 || answered}
                      />
                    </Stack>
                  </Box>
                  <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button
                      onClick={() => {
                        if (answers !== "") {
                          setAnswered(true);
                          setOpened(true);
                          setTimeout(() => {
                            setOpened(false);
                            if (
                              answers
                                .replace(/[^A-Z0-9]/gi, "")
                                .toLocaleLowerCase() === "red"
                            ) {
                              handleOpen();
                            } else {
                              handleOpen2();
                            }
                          }, 1000);
                        } else {
                          Store.addNotification({
                            title: "Error!",
                            message: "You have not given an answer",
                            type: "danger",
                            insert: "top",
                            container: "top-left",
                            animationIn: [
                              "animate__animated",
                              "animate__fadeIn",
                            ],
                            animationOut: [
                              "animate__animated",
                              "animate__fadeOut",
                            ],
                            dismiss: {
                              duration: 3000,
                              onScreen: true,
                            },
                          });
                        }
                      }}
                      disabled={times < 0 || answered}
                      className="shadow"
                    >
                      SUBMIT
                    </Button>
                  </Box>
                  <br />
                </Box>
              </div>
            )}
          </div>
        ) : (
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
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography gutterBottom variant="h4" component="div">
                    Hello
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                You have already done your coupon bonus question.
              </Typography>
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
            <h5 id="child-modal-description">
              Your answer was correct and you have received a coupon for this
              product !!!
            </h5>
            <Button
              onClick={() => {
                handleOpenChild();
                handleClose();
                genCode();
              }}
            >
              Get Code
            </Button>
            {/* <Paper
              elevation={8}
              style={{
                height: "20px",
                backgroundColor: "purple",
                boxShadow: "0px 0px 50px 5px purple ",
              }}
            >
              cole
            </Paper> */}
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
            <h4 id="child-modal-title">Oh no! 😓😓 </h4>
            <img
              src={Error}
              style={{
                width: matches ? 300 : 200,
                minHeight: matches ? "30vh" : "20vh",
              }}
              alt="success"
            />
            <h5 id="child-modal-description">
              Your answer was wrong and you did not win a coupon for this
              product
            </h5>
            <Button onClick={handleClose2} color="error">
              Cancel
            </Button>
          </Box>
        </Modal>
        <Modal
          //   hideBackdrop
          style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          open={openChild}
          onClose={handleCloseChild}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box
            sx={{ ...style, width: matches ? 400 : 220, textAlign: "center", borderRadius: "20px" }}
          >
            <Typography style={{ color: "gray", fontSize: "0.8rem" }}>
              Your coupon code is displayed below, you can click on copy below
              to copy this code to your clipboard.
            </Typography>
            <br />
            <Typography style={{ letterSpacing: "0.15em" }}>{code}</Typography>
            <br />
            <CopyToClipboard
              text={code}
              onCopy={() => {
                setCopied(true);
              }}
            >
              <Button
                style={{
                  height: "2em",
                  width: "7em",
                  backgroundColor: copied ? "green" : "purple",
                  boxShadow: copied
                    ? "0px 0px 30px 2px green"
                    : "0px 0px 30px 2px purple",
                  color: "white",
                  letterSpacing: "0.1em",
                  padding: "20px",
                }}
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </CopyToClipboard>
            {/* <Button onClick={handleCloseChild}>Close</Button> */}
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

export default Page;
