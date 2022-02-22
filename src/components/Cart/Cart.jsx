import React, { useContext } from 'react';
import "./styles.css";
import { useCart } from '../../context/CartContext';
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';

const Cart = () => {
    
    /* HOOK CONSUMER*/
    const { cart, clearCart, precioTotal } = useCart();

    const handleClick = () => {
        clearCart()
    }

    let precioTot = precioTotal();
 
    return (
        
        <div className='carritos'>

        <div className='carrito'>
        
            <div className='carrito__center'>

                {cart.length > 0 ? (                

                    cart.map((p) => (                
                            <ItemCart
                                key={p.id}
                                id={p.id}
                                cantidad={p.cantidad}
                                name={p.name}
                                price={p.price}
                                totalPrice={p.totalPrice}
                                img={p.img}
                            />                           
                    ))    
                    
                ):(    
                    <div className='carrito__footer'>
                        <h4>Su carrito esta vacio!</h4>  
                        <Link to='/'>
                        <button className='btn'>Volver a Home</button>
                        </Link>                    
                    </div>
                )}        

                {cart.length > 0 ? (
                    <div className='carrito__footer'>
                        <h3>Total: ${precioTot}</h3>
                        <Link to='/checkout'>
                        <button className='btn'>Comprar</button>
                        </Link>
                        <button onClick={handleClick} className='btn' color='red'>Vaciar carrito</button>
                    </div>
                ):(
                    <></>
                )}  

            </div>

        </div>               
    </div>

  )
};

export default Cart;
