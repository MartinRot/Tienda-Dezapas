import React, { useEffect, useState } from 'react';
import { CircularProgress, Typography } from '@mui/material'
import { getItems } from '../../baseDeDatos'
import ItemDetail from './ItemDetail';
import { Box } from '@mui/system';



const ItemDetailContainer = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

      setIsLoading(true)

      const getData = async () => {

          try {
              //Si se resuelve
              const result = await getItems();
              setProducts(result)
          }catch (error) {
              //Si se rechaza
              console.log("Error! ", error)
          }finally{
              setIsLoading(false)
          }
        };
        
        getData();
      }, []);
      
      
      
      return (
        
      <>
      
      {isLoading ? ( 

      <CircularProgress />

      ) : (       
        <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          <ItemDetail {...products} />
        </Box>        
        )
      }

      </>
          
    )
}

export default ItemDetailContainer;


