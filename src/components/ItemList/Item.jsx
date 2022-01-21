import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ product }) => {

    return (

        <Card sx={{ flex: '0 0 50%', maxWidth: '40%', textAlign: '-webkit-center', backgroundColor: '#white', marginBottom: '1rem' }}>
        
            <Box>        

                <CardMedia
                component="img"
                height="140"
                image={product.img}
                alt="green iguana"
                />
                
                <CardContent>

                    <Typography>Nombre: {product.name}</Typography>
                    <Typography>Descripcion: {product.description}</Typography>
                    <Typography sx={{color:'red'}}>Precio: ${product.price}</Typography>

                </CardContent>

                <ItemCount />

            </Box>

        </Card>
        
    )
}

export default Item
