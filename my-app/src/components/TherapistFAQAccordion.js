import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { THERAPYFAQS } from '../shared/mobilefaqs';

export default function TherapyAccordion() {
    const therapyFaqAccordion = THERAPYFAQS.map(question => {
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
            <Typography>
              {question.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    });
  
    return (
      <div className="m-5">
        <h2>FAQ</h2>
        {therapyFaqAccordion}
      </div>
    );
  }