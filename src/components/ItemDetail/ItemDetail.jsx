import React from 'react';
import { Card, CardMedia, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';
import "./styles.css"
import { Link } from 'react-router-dom';


const ItemDetail = ({ products }) => {
    
    /* State del counter */
    const [count, setCount] = React.useState(1);
    
    const { addItem } = useCart();

    const handleClick = () => {        
        addItem(products, count)
    }

  return (
    <Card className='container' sx={{
        display: '-ms-flexbox',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginRight: '-15px',
        marginLeft: '-15px',
        marginTop: '80px'
        }}>
        
        <Box sx={{display: 'flex', justifyContent: 'space-around' }}>
          
            <Box>
                <CardMedia
                    component="img"
                    height="400"
                    image={products.img}
                    alt={products.name}
                />
            </Box>

            <Box class="info-detail">

                <Box>{/* Header */}                    
                    <Typography class="info-header">{products.name}</Typography> 
                    <Typography class="precio-header">Precio: ${products.price}</Typography> 
                </Box>

                <Box sx={{ marginBottom:'1rem' }}>{/* Info */}
                    <Typography>{products.description}</Typography>
                </Box>
                
                < ItemCount count={count} setCount={setCount} { ...products } />

                <Box sx={{ display:'flex' }}>

                    <Button onClick={ handleClick } variant="outlined" className='bnt-detail' >Añadir al carrito</Button>                               
                    <Button onClick={ handleClick } variant="outlined" className='bnt-detail' ><Link to='/carrito'> Comprar Ahora</Link></Button>                               

                </Box>

                <Typography>Estas comprando {count} cantidades de este producto.</Typography> 
                
            </Box>

        </Box>
    </Card>
    )
};

export default ItemDetail;
