import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Item from './Item'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const URL = 'http://localhost:3001/productos/'

        setIsLoading(true)

        fetch(URL)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .finally(() => setIsLoading(false));
      
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
    