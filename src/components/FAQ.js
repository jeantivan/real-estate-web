import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

export function FAQ({ answer, question, id, ...props }) {
  return (
    <Accordion {...props}>
      <AccordionSummary expandIcon={<ExpandMore />} aria-controls={id} id={id}>
        <Typography variant="h6">{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}
