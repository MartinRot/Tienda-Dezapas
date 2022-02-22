import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./styles.css"
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

function ItemCount ( { count, setCount, ...product } ) { 

    const stockDisponible = product.stock;
        
    const sumar = () => {
        if (stockDisponible > 0 && stockDisponible > count){
            /* setCount (count + 1) */
            setCount((prevState) => prevState + 1)
        }        
    }
    
    const restar = () => {        
        if( count == 0 ){
            return count
        }else{
            setCount (count - 1)
        }
    }
    
    return (
        
        <Box sx={{ backgroundColor: '#white' }}>

            <Box> 
                <Typography className='product' component='h6'>
                    Cantidad
                </Typography>
            </Box>
            
            <Card border="dark" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '15rem', borderWidth: '2px' }} >
                            
                <Button onClick={restar}  style={{ backgroundColor: 'white', color: 'black', border: '0' }} className='buttonCounter'> <RemoveIcon /></Button>
                
                <Card.Text style={{ marginTop: '15px', fontWeight: '500'}}>
                    {count}
                </Card.Text>
                
                <Button onClick={sumar} style={{ backgroundColor: 'white', color: 'black', border: '0' }} className='buttonCounter'> <AddIcon /></Button>

            </Card>            

            <Box>
                <Typography className='product' component='h6'>
                    Stock disponible {stockDisponible}                    
                </Typography>
            </Box>

        </Box>
    )
}

export default ItemCount

