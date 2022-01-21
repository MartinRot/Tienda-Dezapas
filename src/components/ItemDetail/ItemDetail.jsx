import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';

const ItemDetail = ({ ...products }) => {
  return (
    <Card sx={{
        display: '-ms-flexbox,',
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: '-15px',
        marginLeft: '-15px'
        }}>
        
        <Box sx={{display: 'flex'}}>
          
            <Box class="col-md-7 col-product-image">
                <CardMedia
                    component="img"
                    height="400"
                    image={products.img}
                    alt={products.name}
                    align
                />
            </Box>

            <Box class="col-md-5 col-product-info" sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center!important', alignContent: 'center!important', padding: '2px'}}>
                <Box>{/* Header */}                    
                    <Typography sx={{fontSize: '1.5rem', fontWeight: '600'}}>{products.name}</Typography> 
                    <Typography sx={{color:'red'}}>Precio: ${products.price}</Typography> 
                </Box>

                <Box>{/* Info */}
                    <Typography>Descripcion: {products.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, deleniti? Animi atque sapiente est at dolore et quaerat maxime minima autem odit molestias veniam esse cum temporibus nam, optio nobis!</Typography>
                </Box>
            </Box>

        </Box>
    </Card>
    )
};

export default ItemDetail;
