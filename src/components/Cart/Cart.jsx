import React, { useContext } from 'react';
import "./styles.css";
import { useCart } from '../../context/CartContext';
import ItemCart from './ItemCart';

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
                <div>
                    <p>Su carrito esta vacio</p>    
                </div>
            )}        
                
                <div className='carrito__footer'>
                    <h3>Total: ${precioTot}</h3>
                    <button className='btn'>Comprar</button>
                    <button onClick={handleClick} className='btn' color='red'>Vaciar carrito</button>
                </div>

            </div>


        </div>               
    </div>

  )
};

export default Cart;
