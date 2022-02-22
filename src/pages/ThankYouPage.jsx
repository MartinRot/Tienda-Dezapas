import { Box, CircularProgress } from '@mui/material';
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
    .then(( res ) => setOrder({ id: res.id, ...res.data() }))
    .finally(setIsLoading(false))    
    .catch((error)=> console.log("Hubo un error", error));
           
}, [orderID]); 

  return (
    <div>        
          {isLoading ? ( 
                        
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>

          ) : (

            <>
            <div className='order__title'>
              <h1>Felicidades <span style={{color:'red'}}>{order.nombre}!</span></h1> 
              <h5>Su compra se realizo exitosamente</h5>
              <h5>Numero de orden: {orderID}</h5> 
              <h5>Fecha de compra: {(order.fecha?.toDate())?.toLocaleString()}</h5>     
              <h5>Estado: <span style={{color:'red'}}>{order.estado}</span></h5>
              <h5>Detalle de su compra:</h5>
            </div>

            {order.items?.map((p) => (                
                      <ItemOrder
                          key={p.id}
                          id={p.id}
                          cantidad={p.cantidad}
                          name={p.name}
                          price={p.price}
                          totalPrice={p.totalPrice}
                          img={p.img}
                      /> 
                  )
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
