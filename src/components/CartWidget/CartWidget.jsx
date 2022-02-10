import React from 'react'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton } from '@mui/material'
import { useCart } from '../../context/CartContext';

const CartWidget = () => {
    
    const { productosEnCarrito } = useCart();    
    
    return (
        
        <IconButton>
            <Badge badgeContent={ productosEnCarrito() } sx={{ color:'red' }}>
            <ShoppingCartOutlinedIcon sx={{color:'rgba(0,0,0,.7)'}}/>
            </Badge>    
        </IconButton> 

    )
}

export default CartWidget
