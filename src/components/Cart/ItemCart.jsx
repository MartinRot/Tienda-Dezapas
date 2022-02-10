import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useCart } from '../../context/CartContext';

const ItemCart = ({ id, name, price, img, cantidad }) => {

  const { removeItem } = useCart();
  const { suma } = useCart();
  const { resta } = useCart();
  
  const handleClick = () => {
      removeItem(id, cantidad)
  }

  return (
  
    <div className='carrito__item'>
                    <img src={img} alt></img>

                    <div>
                        <h3>{name}</h3>
                        <p className='price'>${price*cantidad}</p>
                        <p>Precio unidad: ${price}</p>       
                    </div>
                    <div>
                        <AddCircleIcon onClick={() => suma(id, cantidad)} color='primary' className="iconos add" type="solid"></AddCircleIcon>

                        <p className='cantidad'>{cantidad}</p>

                        <RemoveCircleIcon onClick={() => resta(id, cantidad)} color='primary' className="iconos remove" type="solid"></RemoveCircleIcon>
                    </div>
                    <div className="remove__item"> 
                        <DeleteForeverIcon onClick={handleClick} color='error' className="iconos trash">Eliminar del carrito</DeleteForeverIcon>
                    </div>  
    </div>  
    
  
  )
};

export default ItemCart;
