import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ product }) => {
    const navigate = useNavigate();

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
                
                <Button onClick={() => navigate(`/zapatillas/${product.id}`)}> Ver más </Button>                    

            </Box>

        </Card>
        
    )
}

export default Item
