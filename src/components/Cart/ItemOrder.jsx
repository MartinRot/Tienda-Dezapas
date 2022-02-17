import React from 'react';

const ItemOrder = ({ name, img, cantidad }) => {

  return (
  
    <div className='carrito__item'>

                    <img src={img} alt={name}></img>

                    <div>
                        <h4>{name}</h4>     
                    </div>
                    <div>
                        <p className='cantidad'>Cantidad</p>
                    </div>

                    <div>
                        <p className='cantidad'>{cantidad}</p>
                    </div>
               
    </div>  
    
  
  )
};

export default ItemOrder;
