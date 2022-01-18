import React, { useEffect, useState } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import Item from './Item'
import { getProductos } from '../../baseDeDatos'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        setIsLoading(true)

        const getData = async () => {

            try {
                //Si se resuelve
                const result = await getProductos();
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
            products.map((product) => {
                return <Item key={product.id} product={product} />
              })
          )}

    </>       
        
    )
}

export default ItemList
    