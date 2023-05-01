import { Box, Grid, Container, Typography, Divider } from "@mui/material";
import bg from "./assets/images/bg-pattern-desktop.svg";
import bgMobile from "./assets/images/bg-pattern-mobile.svg";
import womenMobile from "./assets/images/illustration-woman-online-mobile.svg";
import women from "./assets/images/illustration-woman-online-desktop.svg";
import boxillustrator from "./assets/images/illustration-box-desktop.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

function App() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
        className="flex"
        sx={{
          background:
            "linear-gradient(to bottom, #af67e9, #9f67e9, #8d66e9, #7a66e8, #6565e7)",
          height: "100vh",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ height:{md: "75%", xs:'100%'}, borderRadius: "25px" }}
          disableGutters
        >
          <Grid
            container
            sx={{
              height: "100%",
              justifyContent: "center",
              position: "relative"
            }}
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                background: `url(${bg})`,
                borderRadius: "20px 0 0 20px",
                position: "relative",
                display: { xs: "none", md: "block" },
                backgroundColor: "white",
                backgroundPositionX: "80%",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "70%",
                backgroundPositionX: "100%",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box
                component="img"
                src={women}
                alt=".."
                sx={{ position: "absolute", left: "-18%", top: "15%",
                display: { xs: "none", md: "block" } }}
              ></Box>
            </Grid>
            <Box
              component="img"
              src={boxillustrator}
              alt=".."
              sx={{
                position: "absolute",
                zIndex: 99,
                display: { xs: "none", md: "block" },
                left: "5%",
                top: "41%",
              }}
            ></Box>
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                px: { lg: 8, xs: 2 },
                py: { lg: 4, xs: 0 },
                backgroundColor: "white",
                borderRadius: { md: "0 20px 20px 0", xs: "10px" },
                mx: { xs: 2, md: 0 }, 
                my:{md:0, xs:12}, 
                position:'relative', 
                height:{md:'100%', xs:'80%'}
              }}
            >
            <Box
                component="img"
                src={bgMobile}
                alt=".."
                sx={{ position: "absolute", left: {xs:"19%", sm:'35%'}, top: {xs:"-2%", sm:0}, width:200,
                display: { xs: "block", md: "none" } }}
              ></Box>
              <Typography
                mt={7}
                mb={2}
                px={2}
                variant="h4"
                component="h4"
                className="fw-bold"
                sx={{textAlign:{xs:'center', md:'left'}, mt:{md:7, xs:13},
                mb:{md:2, xs:0},
                px:2}}
              >
                FAQ
              </Typography>

              <Box sx={{mb:8}}>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#f47c57" }} />}
                  >
                    <Typography
                      variant="body2"
                      component="p"
                      className={`onhover ${
                        expanded === "panel1" ? "bold" : null
                      }`}
                    >
                      How many team members can I invite?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="caption" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#f47c57" }} />}
                  >
                    <Typography
                      variant="body2"
                      component="p"
                      className={`onhover ${
                        expanded === "panel2" ? "bold" : null
                      }`}
                    >
                      What is the maximum file upload size?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="caption" component="p">
                      No more than 2GB. All files in your account must fit your
                      alloted storag space.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#f47c57" }} />}
                  >
                    <Typography
                      variant="body2"
                      component="p"
                      className={`onhover ${
                        expanded === "panel3" ? "bold" : null
                      }`}
                    >
                      How do I reset my password?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="caption" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#f47c57" }} />}
                  >
                    <Typography
                      variant="body2"
                      component="p"
                      className={`onhover ${
                        expanded === "panel4" ? "bold" : null
                      }`}
                    >
                      Can I cancel my subscription?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="caption" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  disableGutters
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#f47c57" }} />}
                  >
                    <Typography
                      variant="body2"
                      component="p"
                      className={`onhover ${
                        expanded === "panel5" ? "bold" : null
                      }`}
                    >
                      Do you provide additional support?
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="caption" component="p">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            <Box
                component="img"
                src={womenMobile}
                alt=".."
                sx={{ position: "absolute", left: {xs:"22%",sm:'36%'}, top: {xs:"1%",sm:'2%'}, width:200, zIndex:1000,
                display: { xs: "block", md: "none" } }}
              ></Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default App;
