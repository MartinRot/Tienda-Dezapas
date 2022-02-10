import React, { useState } from 'react'
import { useContext } from 'react'
import "./styles.css"
import { Link, useNavigate } from 'react-router-dom'
import IMG from '../../images/img02.jpg'
import { CartContext } from '../../context/CartContext'
import { useCart } from '../../context/CartContext';

const Item = ({ product }) => {
    const navigate = useNavigate();    
    const { addItem } = useCart();  
      
    
    const [ sinStock, setSinStock ] = useState(false);

    const handleClick = () => {    

        addItem(product, 1, setSinStock)  
    
    }
    
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
                        
                        { !sinStock ? (
                            <p className='disponibles'> Stock Disponible {product.stock - product.cantidad} unidades</p>
                        ) : (
                            <p className='disponibles' style={{color:'red'}}> No hay Stock Disponible </p>
                        )}
                        
                    </div>

                    <div className='buttom'>

                        {/* Si no hay stock añadir al carrito cambiaria a ver carrito */}
                        { !sinStock ? ( 
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
