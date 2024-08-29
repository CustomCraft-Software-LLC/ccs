import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  faqs: FAQ[];
  summarySx?: object;
  detailsSx?: object;
  gap?: number; // Add optional gap prop
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, summarySx, detailsSx, gap = 2 }) => {
  return (
    <Box sx={{ py: 4 }}>
      {faqs.map((faq, index) => (
        <Box key={index} sx={{ mb: gap }}> {/* Add gap between items */}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={summarySx}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={detailsSx}>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      ))}
    </Box>
  );
};

export default FAQSection;