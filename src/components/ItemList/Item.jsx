import React, { useState } from 'react'
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../context/CartContext';

const Item = ({ product }) => {
    const navigate = useNavigate();    
    const { addItem } = useCart();      
    const [ inCart, setInCart ] = useState(false);
    const IMG = product.img;

    const handleClick = () => {    
        addItem(product, 1);
        setInCart(true);        
    }
    
    return (
        
        <>                      
                <div className='producto'>

                    <a onClick={() => navigate(`/zapatillas/${product.id}`)} style={{cursor:'pointer'}}>
                        <div className='producto__img'>
                            <img src={IMG} alt={product.name} />
                        </div>
                    </a>

                    <div className='producto__footer'>
                        <h1> {product.name} </h1>
                        <p> {product.description} </p>
                        <p className='price'>${product.price}</p>
                        
                        { inCart ? (
                            <p className='disponibles' style={{color:'green'}}> Producto agregado al carrito! </p>                            
                        ) : (<></>)}
                        
                    </div>

                    <div className='buttom'>

                        {/* Si no hay stock añadir al carrito cambiaria a ver carrito */}
                        { !inCart ? ( 
                            <button onClick={ handleClick } className='btn'>
                                Añadir al carrito 
                            </button>
                        ) : (                                                         
                            <button className='btn'>
                                <Link to='/carrito'> Ir al carrito </Link>  
                            </button>
                        )}                                             
                     
                        <div>
                            <a onClick={() => navigate(`/zapatillas/${product.id}`)} className='btn'>
                                Ver más
                            </a>
                        </div>
                        
                    </div>

                </div>
        </>
        
    )
}

export default Item
