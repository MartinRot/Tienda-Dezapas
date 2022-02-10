import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material'
import ItemDetail from './ItemDetail';
import { Box } from '@mui/system';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const {id} = useParams();
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {    

    const URL = `http://localhost:3001/productos/${id}`
    setIsLoading(true)

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .finally(() => setIsLoading(false));  
    
    }, [id]);           
      
      return (
        
      <>
      
      {isLoading ? ( 

      <CircularProgress />

      ) : (       
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          
          <ItemDetail products={ products } />
          
        </Box>        
        )
      }

      </>
          
    )
}

export default ItemDetailContainer;


