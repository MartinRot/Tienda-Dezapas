import React from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ItemCount from '../ItemCount/ItemCount';
import Button from 'react-bootstrap/Button';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ products }) => {
    
    /* State del counter */
    const [count, setCount] = React.useState(0);
    
    const { cart , addItem } = useCart();

    const handleClick = () => {        
        addItem(products, count)
    }

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
                
                < ItemCount count={count} setCount={setCount} { ...products } />

                {/* Añadir al carrito */}
                <Button onClick={ handleClick } border='dark' variant='secondary-outlined' style={{margin: '0.5rem 0.5rem 0.5rem 0.5rem', padding: '10px' }} ><h6>Anadir al carrito</h6></Button>

                {/* Comprar ahora */}
                <Button variant='secondary-outlined' style={{margin: '0.5rem 0.5rem 0.5rem 0.5rem', padding: '10px' }}><h6>Comprar ahora</h6></Button>

                <Typography>Estas comprando {count} cantidades de este producto.</Typography>
                
            </Box>

        </Box>
    </Card>
    )
};

export default ItemDetail;
