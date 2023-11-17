import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ItemList from './itemlist/ItemList';

const Accordian = ({data,defaultExpanded = true}) => {
  // const { title, itemCards } = category.card.card;
  console.log(data)
  return (
    <Accordion className='tokenAccordianBG mb-2'>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>{data?.title} ({data?.itemCards?.length})</Typography>
    </AccordionSummary>
    <AccordionDetails className='bg-white'>
      <Typography>
       {/* <ItemList items={data?.itemCards}/> */}
       <ItemList items={data.itemCards}/>
       vishal
      </Typography>
    </AccordionDetails>
  </Accordion>
  
  )
}

export default Accordian