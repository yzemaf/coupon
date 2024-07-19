import { Box, ButtonGroup, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import "animate.css";
import "react-notifications-component/dist/theme.css";
import { useEffect } from "react";
// import { useEffect } from "react";

function Resume() {
  // useEffect(() => {
  //   console.log("akaraa");
  //   fetch("https://zave.plutospace.space");
  // }, []);
  useEffect(() => {
    document.title = "My Resume";
  }, []);

  const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    maxWidth: "100%",
    boxShadow: "0px 0px 0px rgba(255,255,255,0.805)",
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
    <div
      style={{
        fontSize: "20px",
        fontWeight: 800,
        letterSpacing: 1,
        width: "100vw",
        fontFamily: "Roboto",
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridAutoFlow: "row",
          gridTemplateColumns: "36vw",
          gridTemplateRows: "90vh",
          textAlign: "center",
          gap: 0,
        }}
      >
        <Grid
          sx={{
            gridColumn: "1",
            gridRow: "1/3",
            printColorAdjust: "exact",
            WebkitPrintColorAdjust: "exact",
            backgroundColor: "#4a126b",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <div style={{ fontSize: "20px", marginTop: 30 }}>
            Toyosi Peter
            <p style={{ opacity: 0.3, marginTop: -2 }}>__</p>
            <p style={{ fontSize: "9px", opacity: 0.8 }}>
              FRONT-END WEBSITE DEVELOPER
            </p>
          </div>
          <div
            style={{
              fontSize: "19px",
              marginLeft: 20,
              marginTop: 40,
              justifyContent: "left",
              textAlign: "left",
              position: "absolute",
            }}
          >
            Details
            <br />
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 1 }}>
              Lagos, Nigeria.
            </p>
            <span style={{ fontSize: "13px", opacity: 0.9 }}>
              +234-811-611-3865
            </span>
            <br />
            <span style={{ fontSize: "13px", opacity: 0.9 }}>
              yzemaf@github.com
            </span>
            <br />
            <span style={{ fontSize: "13px", opacity: 0.9 }}>
              petertoyosi24@gmail.com
            </span>
            <br />
            <br />
            <span style={{ fontSize: "11px", opacity: 0.6 }}>NATIONALITY</span>
            <br />
            <span style={{ fontSize: "13px", opacity: 0.9 }}>Nigerian</span>
            <br />
            <br />
            Skills
            <br />
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              HTML
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              CSS
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              JavaScript
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              ReactJS
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              NodeJS
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              MongoDB
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              Python
            </p>
            <br />
            Qualities
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              Problem solving.
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              Conflict management.
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              Can work well with a team.
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              Good communication skills.
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              Effective time management.{" "}
            </p>
            <p style={{ fontSize: "13px", opacity: 0.9, marginBottom: 0 }}>
              Has proficient computer skills.
            </p>
            <br />
          </div>
        </Grid>
        <Grid sx={{ gridColumn: "2", gridRow: "1/2" }}>
          {" "}
          <Widget sx={{ marginTop: "5px" }}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              style={{ letterSpacing: 0.2 }}
            >
              Experience
            </ButtonGroup>
            <div
              style={{
                textAlign: "left",
                justifyContent: "left",
                marginLeft: 40,
                fontSize: "16px",
                opacity: 0.9,
              }}
            >
              <p>
                Techeverywhere{" "}
                <span style={{ fontSize: "20px", marginTop: 10 }}>—</span>{" "}
                Front-End Website Developer{" "}
              </p>
              <p
                style={{
                  fontSize: "12px",
                  opacity: 0.7,
                }}
              >
                July 2022 - Present
              </p>
              <ul style={{ fontWeight: 400 }}>
                <li>Building of templates with improved user experience.</li>
                <li>Successful completion of an ERP software package.</li>
                <li>
                  Successful completion of an online transportation website.
                </li>
              </ul>
            </div>
            <br />
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              style={{ letterSpacing: 0.2 }}
            >
              Education
            </ButtonGroup>
            <div
              style={{
                textAlign: "left",
                justifyContent: "left",
                marginLeft: 40,
                fontSize: "16px",
                opacity: 0.9,
              }}
            >
              <p>B.Sc Economics, Federal University Oye-Ekiti, Nigeria</p>
              <p
                style={{
                  fontSize: "12px",
                  opacity: 0.7,
                }}
              >
                September 2019 - Till Date
              </p>
            </div>
          </Widget>
        </Grid>
      </Box>
    </div>
  );
}

export default Resume;
