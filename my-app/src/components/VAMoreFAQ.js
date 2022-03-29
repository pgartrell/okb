import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { VAMoreFAQS } from "../shared/vamorefaqs.js";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom"
import { VAFAQh2 } from "../styles/VAQuestions.styles.js";

export default function VAMoreFAQ() {
  const VAAccordion = VAMoreFAQS.map((question) => {
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
        <VAFAQh2 style={{whiteSpace: "nowrap"}}>Volunteer FAQs</VAFAQh2>
      </Container>
      <Container>{VAAccordion}</Container>
      <Link to ="/VolunteerApplicationsPage"><button style={{marginTop:"100px"}} className="btn-okb-secondary">Back to Volunteer</button></Link>
    </div>
  );
}