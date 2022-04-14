import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { VAFAQS } from "../shared/vafaqs.js";
import { Container } from "react-bootstrap";
import { VAFAQh2 } from "../styles/VAQuestions.styles.js";
import {Link} from "react-router-dom"

export default function VAFAQ() {
  const VAAccordion = VAFAQS.map((question) => {
    return (
      <Accordion className="accordion-margins">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={question.id}
          className="m-1"
        >
          <Typography>{question.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{question.text}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  });

  return (
    <div className="m-5">
      <Container style={{ textAlign: "left" }}>
        <VAFAQh2>Frequently Asked Questions</VAFAQh2>
      </Container>
      <Container>{VAAccordion}</Container>
      <Link to ="/MoreFAQs"><button style={{marginTop:"100px"}} className="btn-okb-secondary">Read More FAQs</button></Link>
    </div>
  );
}


