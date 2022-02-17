import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemOrder from '../components/Cart/ItemOrder';
import { getFirestore } from '../firebase';

const ThankYouPage = () => {

  const { orderID } = useParams();
  const [order, setOrder] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null);

  
useEffect(() => {
  
  setIsLoading(true);

  const db = getFirestore();    
  db.collection('orders')
    .doc(orderID)
    .get()    
    .then((res) => setOrder({ id: res.id, ...res.data() }))
    .finally(setIsLoading(false));
           
}, [orderID]);
 

  return (
    <div>
        
           {isLoading ? ( 
            
            <CircularProgress />

          ) : (

            <> 
            <h1>Felicidades {order.buyer.nombre}</h1> 
            <h5 >Su compra se realizo exitosamente</h5>
            <h5>Detalle de su compra:</h5>
            <h5>Orden: {orderID}</h5> 

            {order.items.length > 0 ? (
                  order.items.map((p) => (                
                      <ItemOrder
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
              )
            } 

            </>

          )}

          <div className='carrito__footer'>
              <h3>Total: ${order.total}</h3>
          </div> 
        
    </div>
  );  
};

export default ThankYouPage
