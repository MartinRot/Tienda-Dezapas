import React from 'react'

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge, IconButton } from '@mui/material'

const CartWidget = () => {
    return (
        
        <IconButton>
            <Badge badgeContent={0} sx={{color:'rgba(0,0,0,.7)'}}>
            <ShoppingCartOutlinedIcon sx={{color:'rgba(0,0,0,.7)'}}/>
            </Badge>    
        </IconButton> 

    )
}

export default CartWidget
