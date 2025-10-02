import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Button, Link, ThemeProvider } from '@mui/material'
import { faqSectionData } from './faqSectionData'

export default function FaqSection() {
  return (
    <Box sx={{ px: 2, pb: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 8,
        }}
      >
        <Typography variant="h3" sx={{ textTransform: 'unset', mb: 2 }}>
          FAQs
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ textAlign: 'center' }}
        >
          Don't see your question here?
          <br /> Feel free to{' '}
          <Link
            color="success"
            underline="hover"
            href="mailto:meg@theloveclubbridal.com"
          >
            contact us!
          </Link>
        </Typography>
      </Box>
      <Box sx={{ maxWidth: '768px', margin: 'auto' }}>
        {faqSectionData.map((m, index) => (
          <Accordion
            defaultExpanded={index === 0}
            disableGutters
            key={m.title}
            sx={{
              position: 'unset',
              py: 1,
              backgroundColor: '#f7f7f7',
              borderTopLeftRadius: index === 0 ? '8px' : '0px',
              borderTopRightRadius: index === 0 ? '8px' : '0px',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {m.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ maxWidth: '768px' }}>
                {m.description}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}
