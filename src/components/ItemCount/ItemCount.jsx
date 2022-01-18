import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import "./styles.css"
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import SelectSize from '../ItemListContainer/SelectSize';

function ItemCount () { 
    
    const stockDisponible = 5;
        
    const [count, setCount] = React.useState(0);

    const sumar = () => {
        if (stockDisponible > 0 && stockDisponible > count){
            setCount (count + 1)
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
    
        <Box sx={{flex: '0 0 50%', maxWidth: '40%', textAlign: '-webkit-center', backgroundColor: '#white' }}>

            <Box>
                <Typography className='product' component='h6'>
                    Selecciona tu talle
                </Typography>
                <SelectSize />
            </Box>

            <Box>
                <Typography className='product' component='h6'>
                    Cantidad
                </Typography>
            </Box>

            <Card border="dark" style={{ flexDirection: 'row', justifyContent: 'space-between', width: '16rem', borderWidth: '2px' }} >
                            
                <Button onClick={restar}  style={{ backgroundColor: 'white', color: 'black', border: '0' }} className='buttonCounter'> <RemoveIcon /></Button>
                
                <Card.Text style={{ marginTop: '15px', fontWeight: '500'}}>
                    {count}
                </Card.Text>
                
                <Button onClick={sumar} style={{ backgroundColor: 'white', color: 'black', border: '0' }} className='buttonCounter'> <AddIcon /></Button>

            </Card>

            <Button border='dark' variant='secondary-outlined' style={{margin: '0.5rem 0.5rem 0.5rem 0.5rem', padding: '10px' }}><h6>Anadir al carrito</h6></Button>
            <Button variant='secondary-outlined' style={{margin: '0.5rem 0.5rem 0.5rem 0.5rem', padding: '10px' }}><h6>Comprar ahora</h6></Button>

            <Box>
                <Typography className='product' component='h6'>
                    Stock disponible {stockDisponible}
                </Typography>
            </Box>

        </Box>
    )
}

export default ItemCount

