import React, { useState, useEffect } from "react";
import {
  Alert,
  Backdrop,
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Modal,
  Fab,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  TextField,
  Chip,
} from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import { animateScroll as scroll } from "react-scroll";
import Coupon from "../imgs/coupon.jpg";
import { Store } from "react-notifications-component";
import { ReactNotifications } from "react-notifications-component";
import Success from "../imgs/success.jpg";
import Error from "../imgs/error.jpg";
import Zoom from "@mui/material/Zoom";
import "animate.css";
import "./c.css";
import "react-notifications-component/dist/theme.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { East, West } from "@mui/icons-material";

function Page2() {
  const [userAnswered, setUserAnswered] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem("answered2");
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
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [start, setStart] = useState(false);
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState("");
  const [bonus, setBonus] = useState({ won: "", correct: 0 });
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

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
    scroll.scrollTo(400, {
      duration: 1500,
      delay: !start && 500,
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
  const fabs = [
    {
      color: "primary",
      sx: {
        position: "relative",
        bottom: 10,
        left: "30vw",
        marginBottom: -5,
        display: !matches && "none",
      },
      icon: <East />,
      label: "Add",
    },
    {
      color: "primary",
      sx: {
        position: "relative",
        bottom: 10,
        right: "30vw",
        marginBottom: -5,
        display: !matches && "none",
      },
      icon: <West />,
      label: "Edit",
    },
  ];
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };
  const handleAnswer = () => {
    if (answer2 !== "" && answer1 !== "") {
      setAnswered(true);
      setOpened(true);
      setTimeout(() => {
        setOpened(false);
        if (
          answer1.replace(/[^A-Z0-9]/gi, "").toLocaleLowerCase() === "green" &&
          answer2.replace(/[^A-Z0-9]/gi, "").toLocaleLowerCase() === "green"
        ) {
          setBonus({ won: "50%", correct: 2 });
          handleOpen();
        } else if (
          (answer1.replace(/[^A-Z0-9]/gi, "").toLocaleLowerCase() === "green" &&
            answer2.replace(/[^A-Z0-9]/gi, "").toLocaleLowerCase() !==
              "green") ||
          (answer2.replace(/[^A-Z0-9]/gi, "").toLocaleLowerCase() === "green" &&
            answer1.replace(/[^A-Z0-9]/gi, "").toLocaleLowerCase() !== "green")
        ) {
          setBonus({ won: "25%", correct: 1 });
          handleOpen();
        } else {
          handleOpen2();
        }
      }, 1000);
    } else {
      Store.addNotification({
        title: "Error!",
        message: "You have not attempted both questions",
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
  };
  return (
    <motion.div
      initial={{ width: matches && 0, opacity: !matches && 0 }}
      animate={{ width: matches && "100%", opacity: !matches && 1 }}
    >
      <ReactNotifications />
      <Container maxWidth="lg" id="home">
        <Widget sx={{ marginTop: "1rem" }}>
          <ButtonGroup variant="text" aria-label="text button group">
            <Button></Button>
            <Button>Welcome To The Coupon Page</Button>
            <Button></Button>
          </ButtonGroup>
        </Widget>
        {!userAnswered ? (
          <div>
            <Paper elevation={8} className="box">
              <div
                style={{
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.7)",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "monospace",
                    color: "silver",
                    fontWeight: 800,
                  }}
                >
                  Product ID: 2214371
                </Typography>
              </div>
              <br />
              <img
                src={Coupon}
                style={{
                  width: matches ? "30vw" : "240px",
                  height: matches ? "30vw" : "240px",
                  padding: 10,
                  borderRadius: "20px",
                }}
                alt="coupon"
              />
              <br />
              <Chip
                color="secondary"
                variant="outlined"
                label="$60"
                style={{
                  fontWeight: 700,
                  fontSize: "1.0rem",
                  letterSpacing: 2,
                }}
              />
              <br />
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
                  localStorage.setItem("answered2", true);
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

                <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
                  <AppBar position="static" color="default">
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="primary"
                      textColor="primary"
                      variant="fullWidth"
                      aria-label="action tabs example"
                    >
                      <Tab label="Question 1" {...a11yProps(0)} />
                      <Tab label="Question 2" {...a11yProps(1)} />
                    </Tabs>
                  </AppBar>
                  <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                  >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                      <Typography variant="body2">
                        RGB consists of the 3 primary colors, G in this context
                        stands for what?
                      </Typography>
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
                            value={answer1}
                            size="small"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setValue(1);
                              }
                            }}
                            onChange={(e) => {
                              setAnswer1(e.target.value);
                            }}
                            disabled={times < 0 || answered}
                          />
                        </Stack>
                        <Zoom
                          key={fabs.color}
                          in={value === 0}
                          timeout={transitionDuration}
                          style={{
                            transitionDelay: `${
                              value === 0 ? transitionDuration.exit : 0
                            }ms`,
                          }}
                          unmountOnExit
                        >
                          <Fab
                            onClick={() => setValue(1)}
                            sx={fabs[0].sx}
                            aria-label={fabs[0].label}
                            color={fabs[0].color}
                          >
                            {fabs[0].icon}
                          </Fab>
                        </Zoom>
                      </Box>
                      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Button
                          onClick={() => setValue(1)}
                          disabled={times < 0 || answered}
                          className="shadow"
                        >
                          NEXT
                        </Button>
                      </Box>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                      <Typography variant="body2">
                        RGB consists of the 3 primary colors, G in this context
                        stands for what?
                      </Typography>
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
                            value={answer2}
                            size="small"
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                setValue(0);
                              }
                            }}
                            onChange={(e) => {
                              setAnswer2(e.target.value);
                            }}
                            disabled={times < 0 || answered}
                          />
                        </Stack>
                        <Zoom
                          key={fabs.color}
                          in={value === 1}
                          timeout={transitionDuration}
                          style={{
                            transitionDelay: `${
                              value === 1 ? transitionDuration.exit : 0
                            }ms`,
                          }}
                          unmountOnExit
                        >
                          <Fab
                            onClick={() => setValue(0)}
                            sx={fabs[1].sx}
                            aria-label={fabs[1].label}
                            color={fabs[1].color}
                          >
                            {fabs[1].icon}
                          </Fab>
                        </Zoom>
                      </Box>
                      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                        <Button
                          onClick={handleAnswer}
                          disabled={times < 0 || answered}
                          className="shadow"
                        >
                          SUBMIT
                        </Button>
                      </Box>
                    </TabPanel>
                  </SwipeableViews>
                </Box>

                <br />
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
                height: matches ? 300: 200,
              }}
              alt="success"
            />
            <h5 id="child-modal-description">
              You got {bonus.correct === 2 ? "both" : "one"} answer correctly
              and you have received a {bonus.won} coupon for this product !!!
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
                height: matches ? 300 : 200,
              }}
              alt="success"
            />
            <h5 id="child-modal-description">
              Your answers were wrong and you did not win a coupon for this
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
            sx={{
              ...style,
              width: matches ? 400 : 220,
              textAlign: "center",
              borderRadius: "20px",
            }}
          >
            <Typography style={{ color: "gray", fontSize: "0.8rem" }}>
              Your coupon code is displayed below, you can click on copy below
              to copy this code to your clipboard.
            </Typography>
            <br />
            <Typography
              style={{
                letterSpacing: "0.15em",
                fontFamily: "Comic Sans MS",
                fontWeight: 800,
              }}
            >
              {code}
            </Typography>
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
    </motion.div>
  );
}

export default Page2;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
