import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Item from './Item'
import "./styles.css"
import { getFirestore } from '../../firebase'

const ItemList = () => {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)


  //base de datos con json-server
    useEffect(() => {

      const URL = 'http://localhost:3001/productos/'

      setIsLoading(true)

      fetch(URL)
          .then((res) => res.json())
          .then((data) => setProducts(data))
          .finally(() => setIsLoading(false));
    
  }, []);


//Base de datos con firebase
/*     useEffect(() => {

      const db = getFirestore()
      const productsCollection = db.collection('productos')

      const getDataFromFirestore = async () => {

      const response = await productsCollection.get();

      if(response.empty) { 
          console.log("No hay productos");
      }
          
      setProducts(response.docs.map((doc) => ({...doc.data(), id: doc.id } )));

      };

      getDataFromFirestore()     

      console.log(productsCollection)

     }, []); */



    return (
        
    <>         

          <h1 className='title'> - PRODUCTOS -</h1>

          <div className='productos'>

          {isLoading ? ( 

            <CircularProgress />

          ) : (
            products.map((product) => {
                return <Item key={product.id} product={product} />
              })
          )}

          </div>

    </>       
        
    )
}

export default ItemList
    