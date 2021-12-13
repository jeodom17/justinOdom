import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Contact Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
              <li>
                  <a href='https://github.com/jeodom17'>GitHub</a>
              </li>
              <li>
                  <a href='https://www.linkedin.com/in/justinodom17/'>LinkedIn</a>
              </li>
              <li>
                  <a href='mailto:justin@jeodom.com'>Email</a>
              </li>  
          </ul>
        </AccordionDetails>
      </Accordion>
      
      
    </div>
  );
}