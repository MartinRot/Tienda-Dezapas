import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import IMG from '../../images/img02.jpg'
import "./styles.css"
import { Button } from '@mui/material'

const Item = ({ product }) => {
    const navigate = useNavigate();

    return (

        <>                        
            
                <div className='producto'>

                    <a href="#">
                        <div className='producto__img'>
                            {/* <img src={product.img} alt={product.name} /> */}
                            <img src={IMG} alt={product.name} />
                        </div>
                    </a>

                    <div className='producto__footer'>
                        <h1> {product.name} </h1>
                        <p> {product.description} </p>
                        <p className='price'>${product.price}</p>
                    </div>

                    <div className='buttom'>

                        <button className='btn'>
                            Añadir al carrito
                        </button>

                        <div>
                            <a onClick={() => navigate(`/zapatillas/${product.id}`)} className='btn'>
                                Ver más
                            </a>
                        </div>
                        
                    </div>

                </div>
        </>







/* 
        <Card sx={{ flex: '0 0 50%', maxWidth: '40%', textAlign: '-webkit-center', backgroundColor: '#white', marginBottom: '1rem' }}>
        
            <Box>        

                <CardMedia
                component="img"
                height="140"
                image={product.img}
                alt={product.name}
                />
                
                <CardContent>

                    <Typography> {product.name}</Typography>
                    <Typography> {product.description}</Typography>
                    <Typography sx={{color:'red'}}>Precio: ${product.price}</Typography>

                </CardContent>

                <ItemCount { ...product }/>
                
                <Button onClick={() => navigate(`/zapatillas/${product.id}`)}> Ver más </Button>                    

            </Box>

        </Card> */
        
    )
}

export default Item
