import { Container, Typography } from '@mui/material'
import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    return (
        
        <Container sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            
            <ItemList />

        </Container>
              
    )
}

export default ItemListContainer
