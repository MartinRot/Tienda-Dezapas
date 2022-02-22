import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "./styles.css";

const C404 = () => {
  return (

    <Box sx={{
      minHeight:"80vh", 
      background:"url(images/background.jpg)", 
      backgroundSize:"100% 100%",
      backgroundRepeat:"no-repeat", 
      }}>    

      <Box className='c404'>
        <Typography className='text404'>PAGINA NO ENCONTRADA</Typography>
        <Button className='btn404'><Link to='/'>Volver a HOME</Link></Button>
      </Box>

    </Box>
  
  )
}

export default C404
